let simuladoAtual = 1;
let questaoAtual = 0;
let respostas = {}; // { sim: { n: 'A' | 'B' ... } }

const container = document.getElementById('quiz-container');
const grid = document.getElementById('question-grid');

// Carregar respostas salvas do localStorage
function carregarRespostas() {
  try {
    const salvo = localStorage.getItem('devops_respostas');
    if (salvo) respostas = JSON.parse(salvo);
  } catch (e) {
    respostas = {};
  }
}

function salvarRespostas() {
  localStorage.setItem('devops_respostas', JSON.stringify(respostas));
}

function getResposta(sim, n) {
  return respostas[sim]?.[n];
}

function setResposta(sim, n, letra) {
  if (!respostas[sim]) respostas[sim] = {};
  respostas[sim][n] = letra;
  salvarRespostas();
}

function renderQuestao() {
  const sim = simulados[simuladoAtual];
  const q = sim.questoes[questaoAtual];
  if (!q) return;

  const respostaUsuario = getResposta(simuladoAtual, q.n);
  const respondida = respostaUsuario !== undefined;
  const acertou = respondida && respostaUsuario === q.resposta;

  let opcoesHTML = '';
  for (const [letra, texto] of Object.entries(q.opcoes)) {
    let cls = '';
    if (respondida) {
      if (letra === q.resposta) cls = 'correct';
      else if (letra === respostaUsuario) cls = 'wrong';
    }
    opcoesHTML += `<li class="${cls}" data-letra="${letra}">
      <strong>${letra})</strong> ${texto}
    </li>`;
  }

  // Badge só aparece depois de responder
  const badgeHTML = respondida
    ? `<span class="badge ${acertou ? 'correct' : 'wrong'}">
         ${acertou ? '✔ Você acertou' : '✘ Você errou'}
       </span>`
    : '';

  container.innerHTML = `
    <div class="question-header">
      <span class="q-number">Questão ${q.n} de ${sim.questoes.length}</span>
      <span class="ref">Ref: ${q.ref}</span>
      ${badgeHTML}
    </div>
    <div class="question-text">${q.pergunta}</div>
    <ul class="options">${opcoesHTML}</ul>
    ${respondida ? `
      <div class="justificativa">
        <h4>💡 Justificativa</h4>
        <p>${q.justificativa}</p>
        <p><strong>Resposta correta:</strong> ${q.resposta}</p>
      </div>
    ` : ''}
    <div class="actions">
      <button class="btn secondary" id="prev">← Anterior</button>
      <button class="btn secondary" id="next">Próxima →</button>
      ${respondida ? `<button class="btn secondary" id="reset">🔄 Refazer</button>` : ''}
    </div>
  `;

  // Eventos das opções
  container.querySelectorAll('.options li').forEach(li => {
    li.addEventListener('click', () => {
      if (respondida) return;
      const letra = li.dataset.letra;
      setResposta(simuladoAtual, q.n, letra);
      renderQuestao();
      renderGrid();
    });
  });

  document.getElementById('prev').onclick = () => {
    if (questaoAtual > 0) {
      questaoAtual--;
      renderQuestao();
      renderGrid();
    }
  };

  document.getElementById('next').onclick = () => {
    if (questaoAtual < sim.questoes.length - 1) {
      questaoAtual++;
      renderQuestao();
      renderGrid();
    }
  };

  const resetBtn = document.getElementById('reset');
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (respostas[simuladoAtual]) delete respostas[simuladoAtual][q.n];
      salvarRespostas();
      renderQuestao();
      renderGrid();
    };
  }
}

function renderGrid() {
  const sim = simulados[simuladoAtual];
  grid.innerHTML = sim.questoes.map((q, i) => {
    const resp = getResposta(simuladoAtual, q.n);
    let cls = '';
    if (resp !== undefined) {
      cls = resp === q.resposta ? 'correct' : 'wrong';
    }
    if (i === questaoAtual) cls += ' current';
    return `<div class="q-dot ${cls}" data-i="${i}">${q.n}</div>`;
  }).join('');

  grid.querySelectorAll('.q-dot').forEach(dot => {
    dot.onclick = () => {
      questaoAtual = parseInt(dot.dataset.i);
      renderQuestao();
      renderGrid();
    };
  });
}

function renderStats() {
  let html = '<div class="stats"><h2>📊 Estatísticas Gerais</h2>';
  let totalAcertos = 0;
  let totalRespondidas = 0;
  let totalQuestoes = 0;

  for (const simId in simulados) {
    const sim = simulados[simId];
    const respostasSim = respostas[simId] || {};
    let acertos = 0;
    let respondidas = 0;

    sim.questoes.forEach(q => {
      const r = respostasSim[q.n];
      if (r !== undefined) {
        respondidas++;
        if (r === q.resposta) acertos++;
      }
    });

    totalAcertos += acertos;
    totalRespondidas += respondidas;
    totalQuestoes += sim.questoes.length;
    const pct = respondidas ? Math.round((acertos / respondidas) * 100) : 0;

    html += `
      <div class="stat-card">
        <h3>${sim.titulo}</h3>
        <p>Respondidas: ${respondidas}/${sim.questoes.length}</p>
        <p>Acertos: ${acertos} (${pct}%)</p>
        <div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>
        <button class="btn secondary reset-sim" data-sim="${simId}"
                style="margin-top:.6rem;font-size:.85rem">
          🔄 Zerar este simulado
        </button>
      </div>
    `;
  }

  const pctGeral = totalRespondidas ? Math.round((totalAcertos / totalRespondidas) * 100) : 0;
  html += `
    <div class="stat-card" style="border-left: 4px solid #3b82f6">
      <h3>🎯 Total Geral</h3>
      <p>Respondidas: ${totalRespondidas} / ${totalQuestoes}</p>
      <p>Acertos: ${totalAcertos} (${pctGeral}%)</p>
      <div class="bar"><div class="bar-fill" style="width:${pctGeral}%"></div></div>
    </div>

    <div class="stat-card" style="border-left: 4px solid #ef4444">
      <h3>⚠️ Zona de Perigo</h3>
      <p style="font-size:.9rem;color:#6b7280">Apaga todo o progresso salvo no navegador.</p>
      <button class="btn" id="reset-all"
              style="background:#ef4444;margin-top:.5rem">
        🗑️ Zerar TODAS as estatísticas
      </button>
    </div>
  </div>`;

  container.innerHTML = html;
  grid.innerHTML = '';

  // Botão: zerar TODAS
  const btnResetAll = document.getElementById('reset-all');
  if (btnResetAll) {
    btnResetAll.onclick = () => {
      if (confirm('Tem certeza que deseja apagar TODO o seu progresso?\n\nEssa ação não pode ser desfeita.')) {
        respostas = {};
        localStorage.removeItem('devops_respostas');
        renderStats();
        alert('✅ Estatísticas zeradas com sucesso!');
      }
    };
  }

  // Botões: zerar um simulado específico
  document.querySelectorAll('.reset-sim').forEach(btn => {
    btn.onclick = () => {
      const simId = btn.dataset.sim;
      if (confirm(`Zerar o progresso do ${simulados[simId].titulo}?`)) {
        if (respostas[simId]) delete respostas[simId];
        salvarRespostas();
        renderStats();
      }
    };
  });
}

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    if (tab.dataset.view === 'stats') {
      renderStats();
    } else {
      simuladoAtual = parseInt(tab.dataset.sim);
      questaoAtual = 0;
      renderQuestao();
      renderGrid();
    }
  };
});

// Init
carregarRespostas();
renderQuestao();
renderGrid();

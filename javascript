const simulados = {
  1: {
    titulo: "Simulado 1 - DevOps Professional",
    acertos: 10,
    total: 40,
    questoes: [
      {
        n: 1, correta: true, ref: "12737",
        pergunta: "Com o objetivo de avaliar a otimização do Fluxo de Valor, qual indicador deve ser incluído em um bloco de processo no Mapa de Fluxo de Valor?",
        opcoes: {
          A: "Telemetria de aplicativos",
          B: "Percentagem completa e precisa (%C/A)",
          C: "Velocidade da equipe",
          D: "Trabalho em andamento (WiP)"
        },
        resposta: "B",
        justificativa: "Além do lead time e do tempo de processamento, a terceira métrica principal no fluxo de valor é a porcentagem de vezes que a tarefa foi concluída e com precisão – percent complete and accurate – %C/A."
      },
      {
        n: 2, correta: false, ref: "12780",
        pergunta: "O que é um exemplo de um requisito não funcional?",
        opcoes: {
          A: "Ter compatibilidade com versões anteriores e posteriores entre versões",
          B: "Tornar possível relatar cronogramas atrasados",
          C: "Registrar transações financeiras para um sistema de reservas de hotéis"
        },
        resposta: "A",
        justificativa: "Exemplos de requisitos não funcionais incluem: telemetria de produção suficiente, capacidade de acompanhar dependências, serviços resilientes, compatibilidade entre versões, arquivamento de dados, busca em logs, rastreamento de solicitações, configuração centralizada com feature flags."
      },
      {
        n: 3, correta: false, ref: "12782",
        pergunta: "Quais são os dois elementos normalmente armazenados em um único repositório de código-fonte compartilhado? (1. Solicitações de mudança, 2. Ferramentas de pipeline de implantação, 3. Executáveis do programa compilado, 4. Tutoriais e Padrões)",
        opcoes: { A: "1 e 2", B: "1 e 4", C: "2 e 3", D: "2 e 4" },
        resposta: "D",
        justificativa: "Colocamos no repositório compartilhado: padrões de configuração, ferramentas de implantação, padrões de teste e ferramentas, ferramentas de pipeline, ferramentas de monitoramento, tutoriais e padrões."
      },
      {
        n: 4, correta: false, ref: "12787",
        pergunta: "Qual não é um item de repositório de código-fonte compartilhado que suporte padrões de registro e criptografia?",
        opcoes: {
          A: "Bibliotecas de código e suas configurações recomendadas",
          B: "Pacotes de implantação",
          C: "Pacotes do sistema operacional (OS) e compilações",
          D: "Ferramentas de gerenciamento de segurança (secrets)"
        },
        resposta: "B",
        justificativa: "Incluímos bibliotecas pré-aprovadas, ferramentas de gerenciamento de segurança, pacotes de SO. Pacotes de implantação não fazem parte deste contexto específico."
      },
      {
        n: 5, correta: false, ref: "12804",
        pergunta: "Qual requisito de orientação de lançamento não está de acordo com a maneira de trabalhar do DevOps? (Defeitos, Monitoramento, Arquitetura, Alertas)",
        opcoes: {
          A: "Contagem e severidade do defeito",
          B: "Cobertura de monitoramento",
          C: "Arquitetura do sistema: O serviço está fortemente acoplado o suficiente para resolver uma alta taxa de incidentes na produção?",
          D: "Tipo / frequência de alertas do pager"
        },
        resposta: "C",
        justificativa: "A letra C é o oposto. O que se busca é: 'Arquitetura do sistema: O serviço é fracamente acoplado o suficiente para suportar uma alta taxa de alterações e implantações na produção?'"
      },
      {
        n: 6, correta: false, ref: "12811",
        pergunta: "O que mais deve ser incluído em um bom pedido de pull request? (Além de 'por que' e 'quem')",
        opcoes: {
          A: "As unidades de negócio impactadas pela correção",
          B: "Os potenciais riscos e contramedidas da implementação da correção",
          C: "O cronograma de liberação de suporte para implementar a correção"
        },
        resposta: "B",
        justificativa: "Uma boa pull request inclui: por que, quem, e riscos potenciais e contramedidas ao implementar a correção."
      },
      {
        n: 7, correta: false, ref: "12813",
        pergunta: "Qual técnica de revisão resulta diretamente em uma diminuição nos erros de codificação?",
        opcoes: { A: "Sobre o ombro", B: "Programação em pares", C: "Revisão por pares", D: "Revisão assistida por ferramenta" },
        resposta: "B",
        justificativa: "Estudo de 2001 mostrou que programadores em pares são 15% mais lentos, mas o código 'livre de erros' aumentou de 70% para 85%."
      },
      {
        n: 8, correta: false, ref: "12815",
        pergunta: "Qual técnica de revisão é usada quando um engenheiro é o 'driver' e o outro é o 'navegador'?",
        opcoes: { A: "Sobre o ombro", B: "Programação em pares", C: "Telemetria", D: "Revisão assistida por ferramentas" },
        resposta: "B",
        justificativa: "Na programação em pares, um engenheiro é o driver (escreve código) e o outro é o navegador (revisa enquanto é executado)."
      },
      {
        n: 9, correta: false, ref: "12883",
        pergunta: "Por que os funcionários em forma de I são menos adequados para a DevOps?",
        opcoes: {
          A: "Eles são especialistas em poucas áreas",
          B: "Eles são especialistas em apenas uma área",
          C: "Eles possuem habilidades executivas comprovadas em poucas áreas",
          D: "Eles focam apenas na infraestrutura"
        },
        resposta: "B",
        justificativa: "I-SHAPE significa especialista com profunda especialização em uma área, mas poucas habilidades em outras. Criam gargalos rapidamente."
      },
      {
        n: 10, correta: false, ref: "12884",
        pergunta: "Qual o objetivo do Desenvolvimento Orientado por Hipóteses?",
        opcoes: {
          A: "Criar uma cultura de colaboração mais eficiente",
          B: "Desenvolver experimentos de usuários com segurança e facilidade",
          C: "Fornecer critérios para testar recursos em testes de aceitação"
        },
        resposta: "B",
        justificativa: "Técnicas como desenvolvimento orientado por hipóteses e teste A/B permitem experimentos com segurança e facilidade, liberando criatividade e inovação."
      },
      // ... continue com as questões 11-40 do Simulado 1
      {
        n: 11, correta: false, ref: "12886",
        pergunta: "Qual deveria ser o conselho do profissional DevOps para diminuir o número de incidentes?",
        opcoes: {
          A: "Criar um único repositório para todo o sistema",
          B: "Permitir a criação sob demanda de ambientes de desenvolvimento, de testes e de produção",
          C: "Fazer com que as infraestruturas sejam mais fáceis de reconstruir do que reformar",
          D: "Modificar a definição de 'pronto' para incluir a execução em ambientes de produção"
        },
        resposta: "B",
        justificativa: "Ao possibilitar que os desenvolvedores executem ambientes de produção em suas próprias estações de trabalho, criados sob demanda e auto-atendidos, eles podem testar seu código fornecendo feedback inicial."
      },
      {
        n: 12, correta: true, ref: "12887",
        pergunta: "Quais elementos estão faltando no repositório de controle de versões da ABC?",
        opcoes: { A: "Configuração de arquivos cloud", B: "Criação de executáveis", C: "Banco de Dados", D: "Resultados de testes" },
        resposta: "A",
        justificativa: "Devem ser versionados: código, scripts de banco, ferramentas de criação de ambiente, arquivos de containers, testes, scripts de empacotamento, artefatos de projeto, arquivos de configuração da nuvem, scripts de infraestrutura."
      },
      {
        n: 13, correta: true, ref: "12889",
        pergunta: "Quais dessas é uma boa razão para começar com os Dias de Jogo (Game Days)?",
        opcoes: {
          A: "Ela dá uma oportunidade para a equipe simular e ensaiar os acidentes, dando-a uma chance de se preparar.",
          B: "Ela ajuda o dono do produto a identificar os melhores recursos do produto baseando-se em simulações de diversos cenários.",
          C: "Ela auxilia no recrutamento e seleção dos talentos certos ao fazer o candidato responder perguntas baseadas em diversos cenários"
        },
        resposta: "A",
        justificativa: "O objetivo do Game Day é ajudar as equipes a simular falhas para que possam praticar e aprender."
      },
      {
        n: 14, correta: false, ref: "12890",
        pergunta: "Qual abordagem NÃO é recomendada para criar um ambiente para uma equipe DevOps?",
        opcoes: {
          A: "Construir um processo de criação automatizada de ambientes que começa do 'bare metal'",
          B: "Copiar um ambiente virtual",
          C: "Criar e configurar o ambiente manualmente",
          D: "Usar ferramentas automatizadas de configuração do sistema operacional"
        },
        resposta: "C",
        justificativa: "Em vez de criar e configurar manualmente, use automação: copiar ambiente virtualizado, usar IaC, ferramentas automatizadas de configuração de SO, montar a partir de imagens/containers, criar em nuvem."
      },
      {
        n: 15, correta: true, ref: "12891",
        pergunta: "Qual passo de orientação de lançamento faz a pergunta 'o aplicativo realmente funciona conforme projetado?'",
        opcoes: { A: "Contagem e análise de gravidade de defeitos", B: "Monitoramento de cobertura", C: "Higiene de produção", D: "Arquitetura do sistema" },
        resposta: "A",
        justificativa: "Número de defeitos e severidade: O aplicativo realmente funciona conforme projetado?"
      },
      {
        n: 16, correta: false, ref: "12893",
        pergunta: "Qual passo do processo de pull request precisa ser modificado? (1. Criar branch, 2. Enviar branch globalmente, 3. Abrir PR, 4. Receber análises)",
        opcoes: {
          A: "Passo 1. Não é permitido usar branches em um processo de pull request",
          B: "Passo 2. A submissão (commit) deve ser feito localmente primeiro, e não globalmente.",
          C: "Passo 3. Uma requisição de push precisa ser aberta no lugar de uma requisição de pull.",
          D: "Passo 4. Não é necessária uma análise, as outras empresas irão editar o código diretamente."
        },
        resposta: "B",
        justificativa: "O engenheiro comita nesta branch local primeiro, enviando regularmente seu trabalho para a mesma branch nomeada no servidor."
      },
      {
        n: 17, correta: false, ref: "12894",
        pergunta: "Qual dessas frases sobre a telemetria da segurança de informação é correta?",
        opcoes: {
          A: "As ferramentas de telemetria para a segurança de informação precisam ser usadas exclusivamente pela InfoSec por conta da confidencialidade das informações",
          B: "As ferramentas de telemetria para a segurança de informação precisam ser integradas com as ferramentas de telemetria das Operações",
          C: "As ferramentas de telemetria para a segurança de informação precisam ser integradas com as ferramentas de telemetria da Garantia da Qualidade",
          D: "As ferramentas de telemetria para a segurança de informação precisam ser as mesmas ferramentas de telemetria da Garantia de Qualidade, do Desenvolvimento e das Operações"
        },
        resposta: "D",
        justificativa: "Devemos integrar a telemetria de segurança nas mesmas ferramentas que Desenvolvimento, QA e Operações estão usando."
      },
      {
        n: 18, correta: true, ref: "12895",
        pergunta: "O que é a análise estática?",
        opcoes: {
          A: "É um teste que é executado em um ambiente fora do seu tempo de execução...",
          B: "É o teste que executa um programa enquanto ele está operando...",
          C: "É um teste em que todos os desenvolvedores possuem sua própria chave PGP...",
          D: "É quando dois desenvolvedores trabalham juntos no mesmo escritório..."
        },
        resposta: "A",
        justificativa: "É um teste realizado em ambiente de não execução, idealmente no pipeline. Uma ferramenta inspeciona o código em busca de comportamentos em tempo de execução, falhas, backdoors (teste 'dentro para fora')."
      },
      {
        n: 19, correta: false, ref: "12896",
        pergunta: "Em qual parte da pirâmide ideal de testes deve-se investir mais?",
        opcoes: { A: "Testes automatizados de Interface gráfica", B: "Testes automatizados de integração", C: "Testes automatizados unitários", D: "Testes manuais" },
        resposta: "C",
        justificativa: "Martin Fowler descreveu a 'pirâmide de testes ideal', onde capturamos a maioria dos erros com testes de unidade. São mais baratos e rápidos."
      },
      {
        n: 20, correta: false, ref: "12900",
        pergunta: "Qual abordagem o profissional de DevOps deve sugerir para saber quais recursos são melhores?",
        opcoes: { A: "Liberação Blue/green", B: "Liberação canária", C: "Alternância de recursos", D: "Revisão de Prontidão para o Lançamento (LRR) e Revisão de Prontidão de Transferência (HRR)" },
        resposta: "C",
        justificativa: "Feature toggles permitem testes A/B ao controlar quais recursos estão visíveis para segmentos específicos de usuários."
      },
      {
        n: 21, correta: true, ref: "12901",
        pergunta: "Qual abordagem seria melhor para criar resistência em uma nuvem de aplicativos dinâmicos?",
        opcoes: {
          A: "Definir os modos de falhas, inserir falhas na nuvem de sua aplicação e ensaiar para grandes falhas",
          B: "Documentar um plano detalhado de gerenciamento de disponibilidade...",
          C: "Documentar um plano detalhado de continuidade empresarial...",
          D: "Configurar um site de recuperação de desastre em backup espelhado..."
        },
        resposta: "A",
        justificativa: "A resiliência exige que definamos nossos modos de falha e façamos testes para garantir que funcionem. Injetamos falhas em produção e praticamos falhas em grande escala."
      },
      {
        n: 22, correta: false, ref: "12902",
        pergunta: "De que forma um radiador de informações fornece acesso automático para a telemetria?",
        opcoes: {
          A: "Uma exibição privada que permite que as pessoas autorizadas vejam...",
          B: "Uma exibição auto personalizada que mostra medidas diferentes para cada membro...",
          C: "Uma exibição que mostra como os serviços estão sendo desempenhados para todos os membros da equipe e para visitantes",
          D: "Uma exibição que mostre como os membros de uma equipe está trabalhando para todos os funcionários da empresa"
        },
        resposta: "C",
        justificativa: "Colocamos a telemetria em áreas centrais onde Desenvolvimento e Operações funcionam, permitindo que todos os interessados vejam o desempenho dos serviços."
      },
      {
        n: 23, correta: false, ref: "12903",
        pergunta: "Qual dos Monkeys pode encontrar e desligar as instâncias AWS que não estejam funcionando da melhor maneira?",
        opcoes: { A: "Chaos Monkey", B: "Conformity Monkey", C: "Janitor Monkey", D: "Latency Monkey" },
        resposta: "B",
        justificativa: "Conformity Monkey = Localiza e desliga instâncias da AWS que não seguem as práticas recomendadas."
      },
      {
        n: 24, correta: true, ref: "12904",
        pergunta: "Qual a melhor forma de garantir conformidade no processo de gerenciamento de mudanças?",
        opcoes: {
          A: "Categorizar a maioria das mudanças de alto-risco como mudanças de níveis baixos / médios",
          B: "Categorizar a maioria das mudanças de baixo-risco como mudanças de níveis médios",
          C: "A equipe DevOps deve autorizar todas as mudanças",
          D: "A equipe DevOps não deve autorizar nenhuma mudança"
        },
        resposta: "B",
        justificativa: "Devemos obter acordo das Operações e autoridades de mudança de que nossas mudanças demonstraram ser de baixo risco o suficiente para serem definidas como mudanças padrão, pré-aprovadas pelo CAB."
      },
      {
        n: 25, correta: true, ref: "12905",
        pergunta: "Qual técnica ajuda as Operações a automatizar a criação e configuração do ambiente?",
        opcoes: { A: "Infraestrutura como código", B: "Sistema Obeva", C: "Solicitações de mudança padrão", D: "Desenvolvimento guiado por teses" },
        resposta: "A",
        justificativa: "Na infraestrutura como código, o trabalho de Operações é automatizado e tratado como código de aplicativo."
      },
      {
        n: 26, correta: false, ref: "12906",
        pergunta: "O que funcionários de alto desempenho fazem diferente ao diagnosticar e corrigir problemas?",
        opcoes: {
          A: "Eles agrupam as mudanças de produção para que todo o impacto seja realizado em um só dia.",
          B: "Eles agendam resets regulares em seus servidores de produção",
          C: "Eles usam equipes de especialistas dedicados para analisar a raiz dos problemas",
          D: "Eles usam uma abordagem disciplinada e com apoio da telemetria"
        },
        resposta: "D",
        justificativa: "Empresas de alto desempenho usam uma abordagem disciplinada para resolver problemas, usando a telemetria de produção."
      },
      {
        n: 27, correta: false, ref: "12907",
        pergunta: "Quais são dois exemplos de requisitos não funcionais? (1. Compatibilidade entre versões, 2. Pesquisar logs, 3. Aprimoramentos na UI)",
        opcoes: { A: "1 and 2", B: "1 and 3", C: "2 and 3" },
        resposta: "A",
        justificativa: "Requisitos não funcionais incluem: telemetria, dependências, resiliência, compatibilidade, busca em logs, rastreamento, feature flags."
      },
      {
        n: 28, correta: false, ref: "12908",
        pergunta: "Qual é o nome da técnica que tem as vantagens: todo mundo vê tudo, novos engenheiros veem o trabalho diário, pessoas pedem ajuda, aprendizagem organizacional?",
        opcoes: {
          A: "Processo padrão automatizado",
          B: "Criação de um único código-fonte a ser compartilhado no repositório",
          C: "Propagação de conhecimento através de testes automáticos",
          D: "Uso de salas de bate papo e bots de bate papo"
        },
        resposta: "D",
        justificativa: "Tendo trabalhos realizados por automação na sala de chat, há inúmeros benefícios: todos veem o que acontece, novos engenheiros veem o trabalho diário, pessoas pedem ajuda, aprendizado organizacional."
      },
      {
        n: 29, correta: false, ref: "12909",
        pergunta: "Qual passo precisa ser ajustado no plano de melhoria das reuniões pós-morte sem culpa? (4 passos)",
        opcoes: { A: "Passo 1", B: "Passo 2", C: "Passo 3", D: "Passo 4" },
        resposta: "D",
        justificativa: "O correto deveria ser: '4. Aceite que exista sempre um espaço onde humanos podem decidir tomar ação ou não, e que o julgamento dessas decisões se baseia em retrospectiva'."
      },
      {
        n: 30, correta: false, ref: "12910",
        pergunta: "Qual técnica deve ser aplicada para restaurar rapidamente a prestação de serviços com a menor consequência possível?",
        opcoes: {
          A: "Voltar à versão anterior usando a alternância de recursos",
          B: "Começar a usar liberação canária",
          C: "Desligar o recurso falho com a alternância de recursos",
          D: "Usar fix forward através da criação de um código para consertar o defeito"
        },
        resposta: "C",
        justificativa: "Feature toggle nos permite fazer rollback facilmente. Recursos que criam problemas podem ser desativados simplesmente mudando a configuração da feature toggle."
      },
      {
        n: 31, correta: false, ref: "12911",
        pergunta: "Foi tomada uma decisão que diminuiu o tamanho do lote de trabalho em equipe de DevOps. Qual consequência resultou?",
        opcoes: { A: "Atraso no feedback", B: "Testes de desempenho adiados", C: "Aumento na refatoração", D: "Aumento do retrabalho" },
        resposta: "C",
        justificativa: "Quando os lotes de trabalho são menores, tendemos a fazer refatorações mais frequentes, melhorando a qualidade do código continuamente."
      },
      {
        n: 32, correta: false, ref: "12912",
        pergunta: "Para qual problema típico de Operações pode ser usado a história dos usuários?",
        opcoes: {
          A: "Tarefas não repetitivas que são desempenhadas de forma automática",
          B: "Tarefas não repetitivas que só podem ser usadas em um projeto",
          C: "Tarefas repetitivas que são desempenhadas de forma automática",
          D: "Tarefas repetitivas que são desempenhadas manualmente"
        },
        resposta: "D",
        justificativa: "Criamos 'histórias de usuário de Ops' bem definidas que representam atividades de trabalho que podem ser reutilizadas em todos os projetos."
      },
      {
        n: 33, correta: false, ref: "12914",
        pergunta: "O que é um padrão de lançamento baseado na aplicação?",
        opcoes: { A: "Implantação Azul-verde", B: "Liberação canária", C: "Dark launches", D: "Builds verdes" },
        resposta: "C",
        justificativa: "Dark launching é implantar toda a funcionalidade em produção e testá-la com tráfego de produção antes do lançamento real."
      },
      {
        n: 34, correta: false, ref: "12915",
        pergunta: "Qual a melhor técnica de revisão para novos funcionários juniores sem experiência?",
        opcoes: { A: "Troca de emails", B: "Sobre o ombro", C: "Programação em pares", D: "Auxílio de ferramentas" },
        resposta: "C",
        justificativa: "A programação em pares é quando dois engenheiros trabalham juntos na mesma estação de trabalho."
      },
      {
        n: 35, correta: true, ref: "12916",
        pergunta: "Qual aplicação da LRR e HRR será eficiente para conquistar o objetivo de responsabilizar desenvolvedores?",
        opcoes: {
          A: "Permite que os clientes usem o serviço diretamente após a LRR e a equipe de Desenvolvedores presta suporte",
          B: "Permite que os clientes usem o serviço diretamente após a LRR e a equipe de Operações presta suporte",
          C: "Permite que os clientes usem o serviço diretamente após a HRR e a equipe de Desenvolvedores presta suporte",
          D: "Os clientes só podem usar o serviço após a HRR e a equipe de Operações presta suporte"
        },
        resposta: "A",
        justificativa: "O LRR é realizado antes que qualquer novo serviço seja disponibilizado publicamente aos clientes. O HRR é realizado quando o serviço é transferido de um estado gerenciado por Desenvolvimento para um gerenciado por Operações."
      },
      {
        n: 36, correta: false, ref: "12917",
        pergunta: "Qual técnica é mais apropriada para escrever testes automatizados confiáveis diariamente?",
        opcoes: { A: "Extreme programming", B: "Testes funcionais", C: "Desenvolvimento guiado por testes", D: "Teste caixa branca" },
        resposta: "C",
        justificativa: "Uma das maneiras mais eficazes de garantir testes automatizados confiáveis é escrevê-los como parte do trabalho diário, usando TDD."
      },
      {
        n: 37, correta: false, ref: "12920",
        pergunta: "Como os testes de segurança ou revisões do código do aplicativo podem ser realizados?",
        opcoes: {
          A: "Automatizado no pipeline de implementação ao lado de técnicas de programação em pares",
          B: "Automatizado no pipeline de implementação ao lado de outras ferramentas de análise de código estático",
          C: "Executado manualmente no pipeline de implementação ao lado das outras ferramentas de análise de código estático"
        },
        resposta: "B",
        justificativa: "Devemos automatizar o máximo possível de testes de segurança para que executem junto com outros testes automatizados no pipeline."
      },
      {
        n: 38, correta: false, ref: "12921",
        pergunta: "Quais elementos devem ser armazenados no repositório único de código-fonte compartilhado?",
        opcoes: { A: "Relatórios de auditoria", B: "Documentos de arquitetura de data center", C: "Relatórios operacionais", D: "Ferramentas e padrões de teste" },
        resposta: "D",
        justificativa: "Armazenamos código-fonte e artefatos que codificam conhecimento: padrões de configuração, ferramentas de implantação, padrões de teste, ferramentas de pipeline, monitoramento, tutoriais."
      },
      {
        n: 39, correta: false, ref: "12922",
        pergunta: "Quais destes fazem parte do framework de monitoramento?",
        opcoes: { A: "Evento empresarial", B: "Lógica de negócios", C: "Métricas empresariais", D: "Registros empresariais" },
        resposta: "B",
        justificativa: "As camadas do framework de monitoramento são: Lógica de negócio, Aplicação, Sistema Operacional."
      },
      {
        n: 40, correta: false, ref: "12923",
        pergunta: "Por que a observação da experiência dos usuários (UX) pode ser uma técnica importante para incorporar os feedbacks?",
        opcoes: {
          A: "Porque é feita em um ambiente controlado",
          B: "Porque frequentemente possui um grande impacto nos observadores",
          C: "Porque frequentemente possui um grande impacto no usuário",
          D: "Porque substitui os testes de aceitação do usuário"
        },
        resposta: "B",
        justificativa: "A investigação contextual é quando a equipe observa o cliente usar o aplicativo em seu ambiente natural. A reação mais comum é desânimo, impactando os observadores."
      }
    ]
  },
  2: {
    titulo: "Simulado 2 - DevOps Professional",
    acertos: 14,
    total: 40,
    questoes: [
      {
        n: 1, correta: false, ref: "12948",
        pergunta: "Qual é um princípio do Manifesto Ágil?",
        opcoes: {
          A: "Criar uma cultura de aprendizagem continua e dinâmica.",
          B: "Criar feedback (retroalimentação) e feedforward (orientação de desenvolvimento) em nosso sistema de trabalho.",
          C: "Fornecer um software de trabalho com frequência, a cada duas semanas ou até a cada dois meses.",
          D: "Aumentar o fluxo, tornando o trabalho visível, reduzindo os tamanhos dos lotes e os intervalos de trabalho, bem como construindo a qualidade."
        },
        resposta: "C",
        justificativa: "Fornecer software funcionando com frequência, na escala de semanas até meses, com preferência aos períodos mais curtos, é um dos princípios-chave do Manifesto Ágil."
      },
      {
        n: 2, correta: true, ref: "12949",
        pergunta: "A qual das Três Maneiras a ação de 'institucionalizar a melhoria do trabalho do dia-a-dia' pertence?",
        opcoes: { A: "Aprendizagem e experimentação contínuas", B: "Feedback (retroalimentação)", C: "Fluxo" },
        resposta: "A",
        justificativa: "O princípio da Terceira Maneira exige 'institucionalizar da melhoria do trabalho do dia-a-dia', transformando aprendizagens locais em aprendizagens globais."
      },
      {
        n: 3, correta: false, ref: "12950",
        pergunta: "Qual é a diferença entre um Sistema de Engajamento (SoE) e um Sistema de Registro (SoR) em termos de ritmo de mudança?",
        opcoes: {
          A: "Ambos SoE e SoR normalmente têm o mesmo ritmo de mudança.",
          B: "Normalmente, o SoE tem um ritmo muito mais elevado de mudança do que o SoR.",
          C: "Normalmente, o SoE tem um ritmo muito mais baixo de mudança do que o SoR.",
          D: "Esta relação varia segundo o sistema de informações."
        },
        resposta: "B",
        justificativa: "O ritmo de mudança do SoE é maior, pois representa a interface do usuário. O SoR é mais complexo de mudar."
      },
      {
        n: 4, correta: false, ref: "12951",
        pergunta: "Qual é o benefício de Desenvolvimento e Operações usarem a mesma ferramenta?",
        opcoes: {
          A: "Um backlog unificado, no qual todos priorizam projetos de melhoria a partir de uma perspectiva global.",
          B: "Os desenvolvedores obtêm feedback (retroalimentação) sobre o desempenho de seus aplicativos na produção, o que inclui corrigi-los quando sofrem avarias.",
          C: "Permitir que a equipe execute implantações durante o horário comercial normal e realizar correções simples.",
          D: "Transformar o conhecimento de Operações em um código automatizado que possa ser muito mais confiável e amplamente reutilizado."
        },
        resposta: "A",
        justificativa: "Com um backlog unificado, todos priorizam projetos de melhoria a partir de uma perspectiva global, selecionando o trabalho que tem o valor mais elevado para a organização."
      },
      {
        n: 5, correta: false, ref: "12952",
        pergunta: "Qual abordagem faz MELHOR a integração das capacidades de Operações nas equipes de Desenvolvimento?",
        opcoes: {
          A: "Atribuir uma ligação do Desenvolvedor com a equipe de Operações",
          B: "Criar autoatendimentos de infraestrutura",
          C: "Terceirizar a equipe de Operações",
          D: "Treinar Desenvolvedores para fazer o trabalho de Operações"
        },
        resposta: "B",
        justificativa: "Três estratégias para integração: criar capacidades de autoatendimento, incorporar engenheiros de Operações às equipes de serviço, atribuir ligações de Operações."
      },
      {
        n: 6, correta: true, ref: "12953",
        pergunta: "O que é verdade sobre a criação automática de ambientes?",
        opcoes: {
          A: "Ambientes criados automaticamente podem ser utilizados para todos os ambientes.",
          B: "Ambientes criados automaticamente podem ser utilizados para todos os ambientes, exceto o ambiente de produção em função de restrições de segurança.",
          C: "O DevOps exige a revisão de Operações ao criar automaticamente ambientes na produção, em função do princípio de quatro olhos.",
          D: "DevOps exige o acordo manual de Operações ao criar automaticamente ambientes na produção, em função do princípio de quatro olhos."
        },
        resposta: "A",
        justificativa: "A Implantação contínua não exige que ações manuais sejam executadas. Os scripts devem ser automatizados. Isso é válido para todos os ambientes."
      },
      {
        n: 7, correta: false, ref: "12954",
        pergunta: "Qual valor deve ser incluído em um bloco de processo de mapa de valor?",
        opcoes: { A: "Telemetria de aplicativos", B: "Percentual de conclusão e de precisão", C: "Velocidade da equipe", D: "WiP (Trabalho em andamento)" },
        resposta: "B",
        justificativa: "O percentual de conclusão e precisão faz parte dos indicadores-chave para compreender a qualidade fornecida por esse fluxo de valor."
      },
      {
        n: 8, correta: false, ref: "12955",
        pergunta: "Qual é um objetivo principal do controle de versões dentro do DevOps?",
        opcoes: {
          A: "Garantir a capacidade de alertar quando a configuração é alterada com relação ao estado desejado",
          B: "Garantir a capacidade de recriar o estado anterior do ambiente de teste",
          C: "Garantir a capacidade de recriar o ambiente de produção e de desenvolver processos",
          D: "Garantir a capacidade de compartilhar o código-fonte entre diferentes equipes de desenvolvedores"
        },
        resposta: "C",
        justificativa: "O controle de versões dentro do DevOps deve permitir a recriação de ambientes de produção, bem como o desenvolvimento de processos."
      },
      {
        n: 9, correta: false, ref: "12956",
        pergunta: "Qual Definição de Pronto (DoD) é mais adequada para o DevOps?",
        opcoes: {
          A: "O código foi integrado na ramificação principal e passou nos testes da unidade automatizada.",
          B: "O código está sendo executado conforme o esperado no laptop do Desenvolvedor e passou nos testes da unidade.",
          C: "O código está sendo executado em um ambiente similar ao de produção e passou nos testes de aceitação do usuário."
        },
        resposta: "C",
        justificativa: "Isso garante que o código está funcionando conforme o esperado e, possivelmente, pode ser enviado."
      },
      {
        n: 10, correta: false, ref: "12957",
        pergunta: "Qual ferramenta pode ser melhor utilizada para automatizar o desenvolvimento e a configuração de ambientes?",
        opcoes: {
          A: "Um sistema de registro de tickets para o provisionamento de um ambiente",
          B: "Uma ferramenta que copia as configurações do ambiente de produção para os ambientes",
          C: "Arquivos de configuração por ambiente que tenham distribuição e manutenção manuais",
          D: "Ferramentas de gerenciamento de configuração da infraestrutura como código, que permitam que os próprios programadores alterem os ambientes"
        },
        resposta: "D",
        justificativa: "A infraestrutura como código pode ser utilizada pelos desenvolvedores para criar e configurar os próprios ambientes."
      },
      {
        n: 11, correta: true, ref: "12958",
        pergunta: "Qual teste deve ser executado primeiro na pirâmide ideal de automação de testes?",
        opcoes: { A: "Teste de API Automatizado", B: "Teste de Componente Automatizado", C: "Teste de Integração Automatizado", D: "Teste de Unidade Automatizado" },
        resposta: "D",
        justificativa: "O Teste de Unidade Automatizado deve ser realizado primeiro. Este é o 1º teste a ser realizado."
      },
      {
        n: 12, correta: false, ref: "12959",
        pergunta: "Qual ordem de ações está correta no TDD (Test Driven Development)?",
        opcoes: {
          A: "Refatorar → Escrever um caso de teste → Escrever o código funcional",
          B: "Escrever o código funcional → Escrever um caso de teste → Refatorar",
          C: "Escrever um caso de teste → Escrever o código funcional → Refatorar"
        },
        resposta: "C",
        justificativa: "Primeiro, realize o teste e, depois, a codificação. A refatoração continua como terceira etapa."
      },
      {
        n: 13, correta: false, ref: "12960",
        pergunta: "Qual declaração sobre as duas estratégias de branching é verdadeira? (1. Otimizar produtividade individual, 2. Otimizar produtividade da equipe)",
        opcoes: {
          A: "Ambas as estratégias resultam em um valor igual do esforço de mesclagem.",
          B: "A estratégia 1 resulta em um esforço de mesclagem muito maior do que a 2.",
          C: "A estratégia 2 resulta em um esforço de mesclagem muito maior do que a 1."
        },
        resposta: "B",
        justificativa: "Produtividade individual significa uma ramificação por Desenvolvedor, tornando a mesclagem um pesadelo. A estratégia 2 é muito melhor."
      },
      {
        n: 14, correta: true, ref: "12961",
        pergunta: "Qual solução para esta dívida técnica resultará em um fluxo mais rápido? (20% do tempo de sprint gasto em código de portabilidade em branches separados)",
        opcoes: { A: "Adotar o desenvolvimento com base em trunk (tronco)", B: "Reproduzir falhas de teste em estações de trabalho do Desenvolvedor", C: "Começar a fazer Liberações Canário", D: "Usar mais telemetria" },
        resposta: "A",
        justificativa: "O desenvolvimento com base em trunk significa que nenhuma ramificação é permitida e, portanto, a mesclagem é eliminada."
      },
      {
        n: 15, correta: false, ref: "12962",
        pergunta: "Qual é a característica de uma arquitetura que permite produtividade, capacidade de teste e segurança?",
        opcoes: { A: "Interfaces definidas com flexibilidade", B: "Com integração rígida", C: "APIs bem definidas" },
        resposta: "C",
        justificativa: "APIs bem definidas permitem uma arquitetura que fornece produtividade, maior facilidade em testes de serviços e segurança."
      },
      {
        n: 16, correta: true, ref: "12963",
        pergunta: "Qual é a melhor abordagem de telemetria para resolver problemas dentro do DevOps?",
        opcoes: {
          A: "O investimento em ferramentas de telemetria é importante e deve concentrar-se no ambiente de produção, no pipeline de implantação e na pré-produção.",
          B: "O investimento em ferramentas de telemetria é importante e deve concentrar-se apenas no ambiente de produção.",
          C: "O investimento em ferramentas de telemetria não é importante e deve concentrar-se na reinicialização de serviços redundantes.",
          D: "O investimento em ferramentas de telemetria não é importante, o foco deve concentrar-se no usuário do aplicativo."
        },
        resposta: "A",
        justificativa: "Problemas ocorrem não somente no ambiente de produção, mas também no pipeline de implantação e pré-produção."
      },
      {
        n: 17, correta: false, ref: "12964",
        pergunta: "Qual não é uma das três camadas do framework de monitoramento?",
        opcoes: { A: "Aplicativo", B: "Lógica Comercial (negócio)", C: "Métrica Comercial", D: "Sistema Operacional" },
        resposta: "C",
        justificativa: "A Métrica Comercial não é uma das três camadas de coleta de dados. As camadas são: Lógica de Negócio, Aplicação, Sistema Operacional."
      },
      {
        n: 18, correta: false, ref: "12965",
        pergunta: "Para qual público-alvo a telemetria de acesso de autoatendimento agrega valor?",
        opcoes: {
          A: "Somente para desenvolvedores",
          B: "Somente para desenvolvedores e operadores",
          C: "Somente para desenvolvedores, operadores e partes interessadas",
          D: "Para desenvolvedores, operadores, partes interessadas e clientes"
        },
        resposta: "D",
        justificativa: "O acesso de autoatendimento à telemetria agrega valor a todos os visitantes."
      },
      {
        n: 19, correta: false, ref: "12966",
        pergunta: "Em um ambiente com testes automatizados, processos de implantação rápida e telemetria suficiente, qual técnica oferece mais benefícios do DevOps para o negócio?",
        opcoes: { A: "Correção progressiva (fix forward)", B: "Reversão", C: "Retirada de servidores avariados", D: "Desativação de recursos avariados" },
        resposta: "A",
        justificativa: "O valor agregado é que os erros são corrigidos em vez de remover o novo recurso ou retirar servidores avariados."
      },
      {
        n: 20, correta: false, ref: "12967",
        pergunta: "Qual requisito da guia de lançamento não está em conformidade com o modo de trabalho do DevOps? (Defeitos, Monitoramento, Arquitetura, Alertas)",
        opcoes: {
          A: "Contagens de defeitos e gravidade: O aplicativo é realmente executado conforme foi projetado?",
          B: "Cobertura de monitoramento: A cobertura é suficiente para restaurar o serviço quando as coisas não dão certo?",
          C: "Arquitetura do sistema: O serviço tem uma integração suficientemente rígida para resolver uma alta taxa de incidentes na produção?",
          D: "Tipo/frequência de alertas por pager: O aplicativo está gerando um número incompatível de alertas na produção?"
        },
        resposta: "C",
        justificativa: "Dentro do modo de trabalho do DevOps, a arquitetura deve ter uma integração flexível e não rígida."
      },
      {
        n: 21, correta: true, ref: "12968",
        pergunta: "Qual é uma característica exclusiva da Revisão de Prontidão sem Intervenção (HRR) e não da Revisão de Prontidão de Lançamento (LRR)?",
        opcoes: {
          A: "A HRR é muito mais rigorosa e tem padrões de aceitação mais elevados.",
          B: "A HRR é comunicada pelas equipes de produtos.",
          C: "A HRR é aprovada antes da disponibilização pública de qualquer novo serviço.",
          D: "A HRR é aprovada antes que qualquer novo serviço receba tráfego real de produção."
        },
        resposta: "A",
        justificativa: "A HRR é aprovada quando o serviço passa para um estado gerenciado pelas Operações, sendo mais rigorosa."
      },
      {
        n: 22, correta: false, ref: "12969",
        pergunta: "Qual é a melhor descrição de pesquisa contextual?",
        opcoes: {
          A: "A equipe de produtos pede que os usuários respondam a uma demonstração de aplicativo da equipe de produtos.",
          B: "A equipe de produtos entrevista usuários sobre o uso do aplicativo em casa.",
          C: "A equipe de produtos observa os usuários que utilizam o aplicativo em seu ambiente natural.",
          D: "A equipe de produtos estuda os usuários durante o teste de aceitação do usuário em uma sala especial com equipamentos de teste."
        },
        resposta: "C",
        justificativa: "Esta técnica refere-se à observação de como o cliente usa o aplicativo em um ambiente natural."
      },
      {
        n: 23, correta: false, ref: "12970",
        pergunta: "Qual é a melhor abordagem para certificar-se de que os recursos estejam diretamente alinhados com as expectativas do usuário?",
        opcoes: {
          A: "Desenvolver o aplicativo de navegação móvel UX de maneira mais completa...",
          B: "Desenvolver o aplicativo de navegação móvel UX no qual os clientes sejam selecionados aleatoriamente para visualizarem uma das duas versões do UX...",
          C: "Corrigir os recursos do UX atual para o aplicativo de navegação móvel...",
          D: "Lançar um recurso para o aplicativo de navegação móvel com o objetivo de obter feedback do cliente..."
        },
        resposta: "B",
        justificativa: "A técnica A/B envolve um site onde os visitantes são selecionados aleatoriamente para visualizarem uma das duas versões, 'A' ou 'B'."
      },
      {
        n: 24, correta: false, ref: "12971",
        pergunta: "Qual abordagem pode ser utilizada por uma equipe de Desenvolvimento para ajudar a fornecer os resultados comerciais esperados?",
        opcoes: { A: "Execução cuidadosa de numerosos experimentos", B: "Testes de regressão completa", C: "Desenvolvimento orientado a hipóteses", D: "SDLC" },
        resposta: "C",
        justificativa: "O desenvolvimento orientado a hipóteses é a melhor abordagem para ajudar no fornecimento dos resultados comerciais esperados."
      },
      {
        n: 25, correta: false, ref: "12972",
        pergunta: "O que mais deve ser incluído em uma requisição pull adequada? (Além de 'por que' e 'quem')",
        opcoes: {
          A: "As unidades de negócios impactadas pela correção",
          B: "Os potenciais riscos e contramedidas de implantação da correção",
          C: "O cronograma de liberações de suporte de implantação da correção"
        },
        resposta: "B",
        justificativa: "Uma requisição pull eficaz precisa fornecer detalhes sobre por que, quem, e os potenciais riscos e contramedidas de implantação da correção."
      },
      {
        n: 26, correta: true, ref: "12973",
        pergunta: "Qual técnica de revisão é descrita? 'O desenvolvedor repassa o código enquanto um colega dá feedback.'",
        opcoes: { A: "Sobre o ombro", B: "Programação em pares", C: "Revisão em pares", D: "Revisão assistida por ferramenta" },
        resposta: "A",
        justificativa: "Esta técnica é a interação entre o autor e um colega após escrever o código."
      },
      {
        n: 27, correta: false, ref: "12974",
        pergunta: "Qual técnica de revisão resulta diretamente em uma diminuição dos erros de codificação?",
        opcoes: { A: "Revisão sobre o ombro", B: "Programação em pares", C: "Revisão em pares", D: "Revisão assistida por ferramenta" },
        resposta: "B",
        justificativa: "Programação em pares significa o desenvolvimento conjunto de um software. Uma pessoa digita enquanto a outra verifica, resultando em feedback direto e menos erros."
      },
      {
        n: 28, correta: false, ref: "12975",
        pergunta: "Um provedor de serviços na nuvem deseja aumentar a capacidade de seu serviço utilizando um Macaco do Exército Simiano. Qual Macaco é necessário?",
        opcoes: { A: "Doutor Macaco", B: "Macaco de Janitor", C: "Macaco de Latência" },
        resposta: "B",
        justificativa: "O Macaco de Janitor assegura-se de que seu ambiente de nuvem esteja funcionando sem acúmulos nem desperdício; ele procura recursos não utilizados e os descarta."
      },
      {
        n: 29, correta: true, ref: "12976",
        pergunta: "Qual é a primeira tarefa que deve ser realizada durante a reunião post-mortem livre de culpa?",
        opcoes: {
          A: "Construir um cronograma de eventos relevantes conforme tenham ocorrido durante a grave falha de aplicativo",
          B: "Identificar contramedidas para evitar que a grave falha de aplicativo volte a ocorrer no futuro",
          C: "Identificar a causa principal da grave falha de aplicativo...",
          D: "Publicar a post-mortem em um local centralizado..."
        },
        resposta: "A",
        justificativa: "A primeira tarefa na reunião post-mortem livre de culpa é registrar a melhor compreensão possível do cronograma de eventos relevantes conforme tenham ocorrido."
      },
      {
        n: 30, correta: true, ref: "12977",
        pergunta: "O que é necessário ao criar resiliência pela introdução de falhas de produção?",
        opcoes: { A: "Definir o modo de falha", B: "Organizar reuniões post-mortem", C: "Treinar as pessoas", D: "Utilizar um ambiente de teste" },
        resposta: "A",
        justificativa: "A definição do modo de falha é importante para garantir que esses modos operem conforme foram projetados."
      },
      {
        n: 31, correta: false, ref: "12978",
        pergunta: "Qual é a primeira etapa de um plano para a realização de um Dia de Jogo?",
        opcoes: { A: "Definir e executar exercícios", B: "Identificar e resolver problemas, assim como testar", C: "Planejar a interrupção", D: "Preparar e eliminar Pontos únicos de falha (SPOFs)" },
        resposta: "C",
        justificativa: "As etapas: 1. Planejar a interrupção, 2. Preparar a interrupção, 3. Medidas, 4. Executar a interrupção, 5. Seguir o processo definido."
      },
      {
        n: 32, correta: true, ref: "12979",
        pergunta: "Qual é um exemplo de um requisito não funcional (NFR)?",
        opcoes: { A: "Ter compatibilidade com versões anteriores e posteriores", B: "Possibilidade de relatar cronogramas atrasados", C: "Registrar transações financeiras para um sistema de reservas de hotéis" },
        resposta: "A",
        justificativa: "A compatibilidade com versões anteriores e posteriores é um exemplo de requisito não funcional."
      },
      {
        n: 33, correta: false, ref: "12980",
        pergunta: "Qual atividade deve ser realizada para a criação bem-sucedida de histórias reutilizáveis de usuários de Operações?",
        opcoes: {
          A: "Associar histórias de usuário de Operações a aprimoramentos e defeitos de desenvolvimento relevantes",
          B: "Definir atividades dentro do processo sem intervenção e, então, automatizar essas atividades utilizando as ferramentas apropriadas e os fluxos de trabalho de suporte",
          C: "Identificar todas as atividades de trabalho operacionais necessárias e os atores necessários para realizá-las"
        },
        resposta: "B",
        justificativa: "Definir atividades dentro do processo sem intervenção e automatizá-las é a atividade correta para criação de histórias reutilizáveis."
      },
      {
        n: 34, correta: false, ref: "12981",
        pergunta: "Quais são os dois elementos normalmente armazenados em um único repositório de códigos-fonte compartilhados? (1. Solicitações de alteração, 2. Ferramentas de pipeline de implantação, 3. Executáveis do programa compilado, 4. Tutoriais e padrões)",
        opcoes: { A: "1 e 2", B: "1 e 4", C: "2 e 3", D: "2 e 4" },
        resposta: "D",
        justificativa: "Tanto as ferramentas do pipeline de implantação (2) como tutoriais e padrões (4) fazem parte do único repositório de códigos-fonte compartilhados."
      },
      {
        n: 35, correta: true, ref: "12982",
        pergunta: "Qual é o objetivo de transformar descobertas locais em melhorias globais?",
        opcoes: {
          A: "Elevar o estado da prática de não apenas Dev e Ops, mas também toda a organização",
          B: "Facilitar para que todos os serviços novos e existentes aproveitem o conhecimento coletivo",
          C: "Tornar a cultura do trabalho mais colaborativa e tornar os sistemas mais seguros e mais resilientes",
          D: "Reforçar uma cultura na qual todos se sintam confortáveis e responsáveis"
        },
        resposta: "A",
        justificativa: "Este é o objetivo de transformar descobertas locais em melhorias globais."
      },
      {
        n: 36, correta: false, ref: "12983",
        pergunta: "Qual dos itens a seguir não é um item de repositório de código-fonte compartilhado que ofereça suporte a padrões de registro e criptografia?",
        opcoes: {
          A: "Bibliotecas de códigos e suas configurações recomendadas",
          B: "Pacotes de implantação",
          C: "Pacotes e compilações do sistema operacional (SO)",
          D: "Ferramentas de gerenciamento secretas"
        },
        resposta: "B",
        justificativa: "Os pacotes de implantação são produzidos por um engenheiro (Operações) em vez de por um Desenvolvedor."
      },
      {
        n: 37, correta: false, ref: "12984",
        pergunta: "Qual controle não reduz o risco de habilitar acesso não autorizado?",
        opcoes: { A: "Revisões de códigos", B: "Testes de códigos", C: "Correções eficazes", D: "Testes de invasão" },
        resposta: "C",
        justificativa: "Correções eficazes não revelam a introdução do código do desenvolvedor; apenas resolvem erros."
      },
      {
        n: 38, correta: false, ref: "12985",
        pergunta: "Qual é um exemplo de criação da telemetria em um aplicativo?",
        opcoes: { A: "Mudanças do sistema operacional (SO)", B: "Revisão diária dos logs do sistema", C: "Mudanças do grupo de segurança", D: "Redefinições da senha do usuário" },
        resposta: "D",
        justificativa: "Este é o uso da telemetria específico para um aplicativo."
      },
      {
        n: 39, correta: true, ref: "12986",
        pergunta: "Qual processo serve como controle primário para reduzir as Operações e os riscos de segurança bem como oferecer suporte a requisitos de conformidade?",
        opcoes: { A: "Processo de gerenciamento de mudanças", B: "Processo de gerenciamento de configurações", C: "Processo de gerenciamento de liberação e de implantações", D: "Processo de gerenciamento de nível de serviço" },
        resposta: "A",
        justificativa: "Quase qualquer organização de TI terá processos de gerenciamento de mudanças, que são controles primários para reduzir riscos em Operações e de segurança."
      },
      {
        n: 40, correta: true, ref: "12987",
        pergunta: "Qual é o inconveniente de adotar a separação do controle de tarefas?",
        opcoes: {
          A: "A separação do controle de tarefas pode, muitas vezes, dificultar os esforços de desenvolvimento, diminuindo o ritmo e reduzindo o feedback que os engenheiros recebem sobre seu trabalho.",
          B: "A separação do controle de tarefas exige que o Desenvolvedor envie mudanças a um bibliotecário de códigos...",
          C: "A separação do controle de tarefas resulta em trabalho desnecessário..."
        },
        resposta: "A",
        justificativa: "A separação de tarefas pode impedir isso, pela diminuição do ritmo e redução do feedback que os engenheiros recebem sobre seu trabalho."
      }
    ]
  },
  3: {
    titulo: "Simulado 3 - DevOps Professional",
    acertos: 11,
    total: 40,
    questoes: [
      // ... (mesma estrutura para as 40 questões do Simulado 3)
    ]
  },
  4: {
    titulo: "Simulado 4 - DevOps Professional",
    acertos: 17,
    total: 40,
    questoes: [
      // ... (mesma estrutura para as 40 questões do Simulado 4)
    ]
  }
};

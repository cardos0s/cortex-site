export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      services: "Servicos",
      julia: "Júlia Cardoso",
      tech: "Tecnologias",
      contact: "Contato",
    },
    hero: {
      subtitle: "Transformando ideias em soluções digitais inteligentes",
      cta: "Conheça nosso trabalho",
      scroll: "Role para descobrir",
    },
    about: {
      title: "Sobre a CÓRTEX",
      description:
        "Acredito no poder da inovação para transformar negócios e vidas. Combinamos inteligência artificial, acessibilidade digital, desenvolvimento mobile e engenharia de software para criar soluções que fazem a diferença. Apps inteligentes que vivem no software.",
      mission: "Missão",
      missionText:
        "Desenvolver tecnologia acessível e inteligente que capacita pessoas e transforma organizações.",
      vision: "Visão",
      visionText:
        "Ser referência em soluções tecnológicas inovadoras, promovendo inclusão e excelência.",
      stats: {
        projects: "Projetos Entregues",
        clients: "Clientes Satisfeitos",
        years: "Anos de Experiência",
        technologies: "Tecnologias Dominadas",
      },
    },

    services: {
       title: "O que fazemos",
       subtitle: "Quatro pilares de excelência tecnológica",
       viewProject: "Ver projeto em destaque",
    ai: {
       title: "Inteligência Artificial",
       description:
      "Modelos de machine learning, processamento de linguagem natural, visão computacional e automação inteligente para seu negócio.",
    },
  accessibility: {
       title: "Acessibilidade",
       description:
        "Soluções digitais inclusivas que garantem acesso universal. WCAG, leitores de tela, design adaptativo e auditorias completas.",
    },
  mobile: {
    title: "Mobile",
    description:
      "Apps nativos e cross-platform com experiências fluidas. React Native, Flutter e desenvolvimento iOS/Android de alta performance.",
  },
  software: {
    title: "Software",
    description:
      "Sistemas robustos e escaláveis. Arquitetura cloud, APIs, microsserviços e plataformas web modernas sob medida.",
  },
},
    pages: {
  backHome: "Voltar ao início",
  challenge: "O Desafio",
  solution: "A Solução",
  results: "Resultados",
  techStack: "Stack Tecnológica",
  features: "Funcionalidades",
  portfolioTitle: "Outros Projetos",
  cta: "Quer algo parecido?",
  ctaText: "Vamos conversar sobre como a CORTEX pode transformar o seu negócio.",
  ctaButton: "Fale conosco",
  ai: {
    title: "AgroCortex",
    subtitle: "Inteligência Artificial para o Agronegócio",
    heroText: "Revolucionando a agricultura brasileira com visão computacional e análise preditiva de safras.",
    challenge: "O agronegócio brasileiro enfrenta perdas de até 30% da produção por pragas, doenças e manejo inadequado. Fazendas com milhares de hectares não conseguem monitoramento eficiente em tempo real, e decisões são tomadas com base em intuição ao invés de dados.",
    solution: "Desenvolvemos o AgroCortex, uma plataforma de inteligência artificial que integra imagens de satélite e sensores IoT para criar um mapa digital vivo de cada propriedade. Nossos modelos de deep learning detectam pragas, deficiências nutricionais e estresse hídrico até 15 dias antes de serem visíveis a olho nu.",
    results: [
      { value: "40%", label: "Redução no uso de pesticidas" },
      { value: "28%", label: "Aumento na produtividade" },
      { value: "150k", label: "Hectares monitorados" },
      { value: "99.2%", label: "Precisão na detecção de pragas" },
    ],
    features: [
      { title: "Visão por Satélite", desc: "Monitoramento NDVI em tempo real com atualização a cada 3 dias via constelação de satélites." },
      { title: "Predição de Safras", desc: "Modelos de machine learning que preveem produtividade com 95% de acurácia até 60 dias antes da colheita." },
      { title: "Alerta de Pragas", desc: "Sistema de alerta precoce baseado em visão computacional que identifica 47 tipos de pragas e doenças." },
      { title: "Dashboard Integrado", desc: "Painel central com visualização 3D da propriedade, métricas em tempo real e recomendações de IA." },
      { title: "API Aberta", desc: "Integração com ERPs agrícolas, estações meteorológicas e sistemas de irrigação automatizada." },
    ],
    techStack: ["TensorFlow", "Python", "AWS SageMaker", "React", "PostgreSQL", "Docker", "Kubernetes", "OpenCV", "MQTT", "Grafana"],
    portfolio: [
      {
        name: "Modelo Preditivo F1",
        tag: "Machine Learning",
        description: "Sistema de machine learning que analisa telemetria em tempo real, condições climáticas, histórico de corridas e degradação de pneus para prever resultados de GPs com 87% de acurácia. Usado por equipes para definir estratégias de pit stop e gerenciamento de combustível.",
        metrics: ["87% acurácia", "23 GPs analisados", "Telemetria em tempo real", "200+ variáveis"],
      },
      {
        name: "CORTEX Vision",
        tag: "Visão Computacional",
        description: "Pipeline de visão computacional para controle de qualidade industrial. Detecta defeitos em linhas de produção com velocidade de 120 peças/minuto e taxa de falso positivo inferior a 0.3%.",
        metrics: ["120 peças/min", "0.3% falso positivo", "24/7 operação", "6 fábricas"],
      },
      {
        name: "ChatCortex",
        tag: "NLP / LLMs",
        description: "Assistente virtual corporativo construído com RAG (Retrieval Augmented Generation) que indexa documentos internos da empresa e responde perguntas com contexto preciso, reduzindo tickets de suporte em 60%.",
        metrics: ["-60% tickets", "50k docs indexados", "3s resposta média", "98% satisfação"],
      },
    ],
  },

      accessibility: {
  title: "Aurora",
  subtitle: "Plataforma de Acessibilidade Digital",
  heroText: "Tornando a internet acessível para todos. Aurora transforma qualquer aplicação web em uma experiência inclusiva e em conformidade com WCAG 2.2.",
  challenge: "Mais de 45 milhões de brasileiros possuem algum tipo de deficiência, e 97% dos sites brasileiros não atendem aos critérios mínimos de acessibilidade. Empresas enfrentam processos judiciais, perdem clientes e excluem uma parcela significativa da população.",
  solution: "O Aurora é uma suíte completa de acessibilidade digital. Inclui um SDK que se integra a qualquer aplicação web, um motor de adaptação automática que ajusta interfaces em tempo real e um painel de auditoria contínua que monitora a conformidade com WCAG 2.2 AAA 24/7.",
  results: [
    { value: "100%", label: "Conformidade WCAG 2.2 AA" },
    { value: "2.3M", label: "Usuários impactados" },
    { value: "340+", label: "Sites transformados" },
    { value: "89%", label: "Redução em reclamações" },
  ],
  features: [
    { title: "Widget Adaptativo", desc: "Overlay inteligente que permite aos usuários customizar contraste, tamanho de fonte, espaçamento e modo de leitura." },
    { title: "Leitor de Tela IA", desc: "Motor de descrição automática de imagens usando visão computacional, gerando alt-texts contextuais e precisos." },
    { title: "Navegação por Voz", desc: "Controle completo da aplicação por comandos de voz em português, com reconhecimento de sotaques regionais." },
    { title: "Auditoria Contínua", desc: "Monitoramento 24/7 de acessibilidade com relatórios automáticos, score em tempo real e alertas de regressão." },
    { title: "Tradução em Libras", desc: "Avatar 3D que traduz conteúdo de texto para Língua Brasileira de Sinais em tempo real." },
    { title: "SDK Universal", desc: "Integração em menos de 5 minutos com React, Vue, Angular, WordPress e qualquer framework web." },
  ],
  techStack: ["React", "TypeScript", "Node.js", "WebGL", "TensorFlow.js", "Web Speech API", "ARIA", "Playwright", "GraphQL", "Redis"],
  portfolio: [
    {
      name: "Colibri",
      tag: "Parceria Estratégica",
      description: "Participação ativa no projeto Colibri, uma iniciativa open-source de acessibilidade digital para o ecossistema brasileiro. Contribuições em componentes acessíveis, testes automatizados com leitores de tela e documentação de padrões WCAG adaptados para o contexto nacional.",
      metrics: ["Core contributor", "15+ componentes", "Open-source", "Comunidade BR"],
    },
    {
      name: "AccessLint Pro",
      tag: "DevTools",
      description: "Extensão para CI/CD que executa auditorias de acessibilidade automáticas em cada pull request. Integra com GitHub Actions, GitLab CI e Bitbucket Pipelines para bloquear merges que introduzam regressões de acessibilidade.",
      metrics: ["1.2k repos", "GitHub Actions", "WCAG auto-check", "Zero config"],
    },
    {
      name: "VozLivre",
      tag: "Assistive Tech",
      description: "Aplicação de comunicação alternativa e aumentativa (CAA) para pessoas com deficiência motora ou de fala. Interface personalizável com símbolos, predição de frases por IA e síntese de voz natural em português.",
      metrics: ["500+ usuários", "CAA avançado", "IA preditiva", "SUS integrado"],
    },
  ],
},
      
     mobile: {
  title: "PulseConnect",
  subtitle: "Super App para Saúde e Bem-Estar",
  heroText: "O app que conecta pacientes, médicos e academias em uma única plataforma inteligente com monitoramento de saúde em tempo real.",
  challenge: "O sistema de saúde é fragmentado: dados de pacientes estão espalhados entre hospitais, clínicas e laboratórios. Pessoas não conseguem acompanhar sua saúde de forma integrada, e médicos não têm acesso ao histórico completo para tomar decisões informadas.",
  solution: "O PulseConnect unifica toda a jornada de saúde em um super app. Integra wearables, prontuário eletrônico, telemedicina, agendamento e monitoramento fitness. Usa IA para detectar padrões anômalos nos sinais vitais e alertar médicos antes que emergências aconteçam.",
  results: [
    { value: "500K+", label: "Downloads em 6 meses" },
    { value: "4.9", label: "Avaliação na App Store" },
    { value: "12s", label: "Tempo médio de consulta agendada" },
    { value: "73%", label: "Redução em idas desnecessárias ao PS" },
  ],
  features: [
    { title: "Health Dashboard", desc: "Painel unificado com dados de Apple Watch, Fitbit, Garmin e sensores médicos em tempo real." },
    { title: "Telemedicina HD", desc: "Videochamadas com médicos, com compartilhamento de exames, prescrições digitais e receitas integradas." },
    { title: "IA Preditiva", desc: "Algoritmos que analisam padrões de sono, batimentos e atividade física para prever riscos cardiovasculares." },
    { title: "Prontuário Universal", desc: "Histórico médico completo, resultados de exames, vacinas e medicamentos acessíveis em qualquer lugar." },
    { title: "Gamificação Fitness", desc: "Sistema de desafios, rankings e recompensas que incentivam hábitos saudáveis com integração a academias." },
    { title: "Modo Offline", desc: "Funcionalidades críticas disponíveis sem internet, com sincronização automática quando a conexão retorna." },
  ],
  techStack: ["React Native", "Swift", "Kotlin", "Firebase", "Node.js", "MongoDB", "HealthKit", "Google Fit", "WebRTC", "Redux"],
  portfolio: [
    {
      name: "DataGeoPlan",
      tag: "GIS & Dados",
      description: "Plataforma mobile de geoprocessamento e planejamento urbano. Coleta dados em campo via GPS de alta precisão, gera mapas temáticos offline e sincroniza com sistemas GIS corporativos. Usado por prefeituras e construtoras.",
      metrics: ["GPS cm-precision", "Modo offline", "50+ prefeituras", "Mapas 3D"],
    },
    {
      name: "Strava Features",
      tag: "Fitness & Performance",
      description: "Desenvolvimento de features avançadas para plataforma de fitness: algoritmo de detecção automática de atividade, segmentação inteligente de rotas, heatmaps de performance e sistema de desafios sociais com gamificação.",
      metrics: ["Auto-detect atividade", "Heatmaps AI", "Social challenges", "Wearable sync"],
    },
    {
      name: "Maria & João",
      tag: "EdTech Kids",
      description: "App educacional gamificado para crianças de 4-10 anos. Histórias interativas com reconhecimento de voz para prática de leitura, desafios de matemática adaptativos e sistema de recompensas que engaja sem viciar.",
      metrics: ["200k crianças", "4.8 App Store", "Leitura +40%", "0 ads"],
    },
    {
      name: "LinkVoz",
      tag: "Comunicação",
      description: "App de comunicação empresarial com tradução em tempo real para 12 idiomas, transcrição automática de reuniões, canais temáticos com IA que resumem discussões e integração com calendário e gestão de tarefas.",
      metrics: ["12 idiomas real-time", "Transcrição IA", "E2E encrypted", "500+ empresas"],
    },
  ],
},
      software: {
  title: "NexusERP",
  subtitle: "Engenharia de Software Sênior & Tech Leadership",
  heroText: "Arquitetura de sistemas complexos, liderança técnica e engenharia de excelência. Construímos software que escala para milhões de usuários com código limpo, observabilidade total e cultura de engineering excellence.",
  challenge: "Empresas em crescimento enfrentam débito técnico acumulado, sistemas monolíticos que não escalam, falta de liderança técnica e ausência de cultura de engenharia. Deploys são arriscados, incidentes são frequentes e o time não consegue entregar com velocidade e qualidade.",
  solution: "Atuamos como Tech Leads e Staff Engineers embutidos no seu time. Redesenhamos arquiteturas para microsserviços, implementamos CI/CD robusto, estabelecemos padrões de code review, observabilidade com SLOs/SLIs e cultura de postmortem. O NexusERP é nosso showcase: um ERP modular construído do zero com as melhores práticas da indústria.",
  results: [
    { value: "68%", label: "Redução em tempo administrativo" },
    { value: "R$2.1M", label: "Economia média anual por cliente" },
    { value: "850+", label: "Empresas ativas" },
    { value: "99.99%", label: "Uptime garantido" },
  ],
  features: [
    { title: "Arquitetura Evolutiva", desc: "Design de sistemas distribuídos com microsserviços, event sourcing, CQRS e domain-driven design. Migração gradual de monólitos." },
    { title: "Tech Leadership", desc: "Mentoria de devs, definição de tech stack, code reviews rigorosos, arquitetura de decisão (ADRs) e cultura de engineering excellence." },
    { title: "CI/CD & DevOps", desc: "Pipelines automatizados com testes, linting, security scanning e deploy canary. Zero downtime deployments como padrão." },
    { title: "Observabilidade Total", desc: "Métricas, logs e traces distribuídos. SLOs, SLIs, alertas inteligentes e dashboards que previnem incidentes antes de acontecerem." },
    { title: "Escalabilidade", desc: "Arquitetura cloud-native com auto-scaling, caching distribuído, filas de mensagens e banco de dados otimizado para milhões de requests." },
    { title: "Código Limpo", desc: "TDD, pair programming, refactoring contínuo e documentação viva. Código que o time de daqui a 2 anos vai agradecer." },
  ],
  techStack: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes", "Terraform", "Datadog"],
  portfolio: [
    {
      name: "NexusERP",
      tag: "Flagship Product",
      description: "ERP modular e inteligente com PIX e NF-e nativo, IA financeira embutida e marketplace de plugins. Arquitetura multi-tenant SaaS que escala horizontalmente.",
      metrics: ["850+ empresas", "99.99% uptime", "Microsserviços", "R$2.1M economia/ano"],
    },
    {
      name: "Migrações Críticas",
      tag: "Staff Engineering",
      description: "Liderança técnica em migrações de monólito para microsserviços em fintechs e healthtechs. Zero downtime, estratégia strangler fig pattern, com rollback automático em cada etapa.",
      metrics: ["0 downtime", "Strangler pattern", "5 migrações", "100% rollback-safe"],
    },
    {
      name: "Platform Engineering",
      tag: "Developer Experience",
      description: "Construção de Internal Developer Platform (IDP) com templates de serviço, CLI customizado, ambiente de dev em 1 clique e documentação auto-gerada. Redução de onboarding de devs de 2 semanas para 2 dias.",
      metrics: ["Onboarding 2 dias", "CLI interno", "IDP completa", "Self-service infra"],
    },
    {
      name: "Incident Management",
      tag: "SRE & Reliability",
      description: "Implementação de cultura de SRE com error budgets, postmortems blameless, runbooks automatizados e on-call rotation. MTTR reduzido de 4h para 15 minutos.",
      metrics: ["MTTR 15min", "Error budgets", "Postmortem culture", "Auto-remediation"],
    },
  ],
},
    },
   julia: {
  title: "Quem está por trás",
  name: "Julia Cardoso",
  role: "Fundadora & CEO da CORTEX",
  bio: "Sou fundadora da CORTEX e atuo na interseção entre tecnologia, inteligência artificial e acessibilidade. Meu foco é desenvolver soluções que não apenas funcionam, mas que resolvem problemas reais e geram impacto na vida das pessoas. Lidero a criação de produtos digitais robustos, inteligentes e escaláveis.",
  quote:
    '"Para que todos vejam, saibam, considerem e juntamente entendam que a mão do Senhor fez isto, e o Santo de Israel o criou."',
  timeline: {
    t1: { year: "Início", text: "Primeiros passos no mundo da programação" },
    t2: { year: "Evolução", text: "Especialização em IA e acessibilidade" },
    t3: { year: "CORTEX", text: "Fundação da empresa" },
    t4: { year: "Hoje", text: "Liderando inovação e impacto digital" },
  },
},
tech: {
  title: "Tecnologias",
  subtitle: "As ferramentas que usamos para construir o futuro",
},
contact: {
  title: "Vamos conversar?",
  subtitle: "Pronto para transformar sua ideia em realidade?",
  name: "Seu nome",
  email: "Seu e-mail",
  message: "Sua mensagem",
  send: "Enviar mensagem",
  sending: "Enviando...",
},
footer: {
  rights: "Todos os direitos reservados.",
  madeWith: "Feito com",
  by: "por Julia Cardoso",
},
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      julia: "Julia Cardoso",
      tech: "Technologies",
      contact: "Contact",
    },
    hero: {
      subtitle: "Transforming ideas into intelligent digital solutions",
      cta: "Discover our work",
      scroll: "Scroll to discover",
    },
    about: {
      title: "About CORTEX",
      description:
        "We are a technology company that believes in the power of innovation to transform businesses and lives. We combine artificial intelligence, digital accessibility, mobile development, and software engineering to create solutions that make a difference.",
      mission: "Mission",
      missionText:
        "Develop accessible and intelligent technology that empowers people and transforms organizations.",
      vision: "Vision",
      visionText:
        "Be a reference in technological solutions that unite innovation, inclusion, and excellence.",
      stats: {
        projects: "Projects Delivered",
        clients: "Happy Clients",
        years: "Years of Experience",
        technologies: "Technologies Mastered",
      },
    },
    services: {
      title: "What we do",
      subtitle: "Four pillars of technological excellence",
      viewProject: "View featured project",
      ai: {
        title: "Artificial Intelligence",
        description:
          "Machine learning models, natural language processing, computer vision, and intelligent automation for your business.",
      },
      accessibility: {
        title: "Accessibility",
        description:
          "Inclusive digital solutions ensuring universal access. WCAG compliance, screen readers, adaptive design, and complete audits.",
      },
      mobile: {
        title: "Mobile",
        description:
          "Native and cross-platform apps with fluid experiences. React Native, Flutter, and high-performance iOS/Android development.",
      },
      software: {
        title: "Software",
        description:
          "Robust and scalable systems. Cloud architecture, APIs, microservices, and custom modern web platforms.",
      },
    },
    pages: {
      backHome: "Back to home",
      challenge: "The Challenge",
      solution: "The Solution",
      results: "Results",
      techStack: "Tech Stack",
      features: "Features",
      portfolioTitle: "More Projects",
      cta: "Want something like this?",
      ctaText: "Let's talk about how CORTEX can transform your business.",
      ctaButton: "Contact us",
      ai: {
        title: "AgroCortex",
        subtitle: "Artificial Intelligence for Agribusiness",
        heroText: "Revolutionizing Brazilian agriculture with computer vision, autonomous drones, and predictive crop analysis.",
        challenge: "Brazilian agribusiness faces up to 30% production losses due to pests, diseases, and inadequate management. Farms spanning thousands of hectares cannot achieve efficient real-time monitoring, and decisions are made on intuition rather than data.",
        solution: "We developed AgroCortex, an artificial intelligence platform that integrates satellite imagery, IoT sensors, and autonomous drones to create a living digital map of each property. Our deep learning models detect pests, nutritional deficiencies, and water stress up to 15 days before they're visible to the naked eye.",
        results: [
          { value: "40%", label: "Reduction in pesticide use" },
          { value: "28%", label: "Increase in productivity" },
          { value: "150k", label: "Hectares monitored" },
          { value: "99.2%", label: "Pest detection accuracy" },
        ],
        features: [
          { title: "Satellite Vision", desc: "Real-time NDVI monitoring with 3-day update intervals via satellite constellation." },
          { title: "Autonomous Drones", desc: "Drone fleet that autonomously patrols and applies inputs with millimeter precision." },
          { title: "Crop Prediction", desc: "ML models that predict yield with 95% accuracy up to 60 days before harvest." },
          { title: "Pest Alerts", desc: "Early warning system based on computer vision that identifies 47 types of pests and diseases." },
          { title: "Integrated Dashboard", desc: "Central panel with 3D property visualization, real-time metrics, and AI recommendations." },
          { title: "Open API", desc: "Integration with agricultural ERPs, weather stations, and automated irrigation systems." },
        ],
        techStack: ["TensorFlow", "Python", "AWS SageMaker", "React", "PostgreSQL", "Docker", "Kubernetes", "OpenCV", "MQTT", "Grafana"],
        portfolio: [
          {
            name: "F1 Predictive Model",
            tag: "Machine Learning",
            description: "ML system analyzing real-time telemetry, weather conditions, race history, and tire degradation to predict GP results with 87% accuracy. Used by teams for pit stop strategy and fuel management.",
            metrics: ["87% accuracy", "23 GPs analyzed", "Real-time telemetry", "200+ variables"],
          },
          {
            name: "CORTEX Vision",
            tag: "Computer Vision",
            description: "Computer vision pipeline for industrial quality control. Detects defects on production lines at 120 parts/minute with false positive rate below 0.3%.",
            metrics: ["120 parts/min", "0.3% false positive", "24/7 operation", "6 factories"],
          },
          {
            name: "ChatCortex",
            tag: "NLP / LLMs",
            description: "Corporate virtual assistant built with RAG (Retrieval Augmented Generation) that indexes internal company documents and answers questions with precise context, reducing support tickets by 60%.",
            metrics: ["-60% tickets", "50k docs indexed", "3s avg response", "98% satisfaction"],
          },
        ],
      },
      accessibility: {
        title: "Aurora",
        subtitle: "Digital Accessibility Platform",
        heroText: "Making the internet accessible for everyone. Aurora transforms any web application into an inclusive, WCAG 2.2 compliant experience.",
        challenge: "Over 45 million Brazilians have some type of disability, and 97% of Brazilian websites don't meet minimum accessibility criteria. Companies face lawsuits, lose customers, and exclude a significant portion of the population.",
        solution: "Aurora is a complete digital accessibility suite. It includes an SDK that integrates with any web application, an automatic adaptation engine that adjusts interfaces in real-time, and a continuous audit panel that monitors WCAG 2.2 AAA compliance 24/7.",
        results: [
          { value: "100%", label: "WCAG 2.2 AA Compliance" },
          { value: "2.3M", label: "Users impacted" },
          { value: "340+", label: "Sites transformed" },
          { value: "89%", label: "Reduction in complaints" },
        ],
        features: [
          { title: "Adaptive Widget", desc: "Smart overlay that lets users customize contrast, font size, spacing, and reading mode." },
          { title: "AI Screen Reader", desc: "Automatic image description engine using computer vision, generating contextual and precise alt-texts." },
          { title: "Voice Navigation", desc: "Full application control via Portuguese voice commands, with regional accent recognition." },
          { title: "Continuous Audit", desc: "24/7 accessibility monitoring with automatic reports, real-time scoring, and regression alerts." },
          { title: "Sign Language", desc: "3D avatar that translates text content to Brazilian Sign Language in real-time." },
          { title: "Universal SDK", desc: "Integration in less than 5 minutes with React, Vue, Angular, WordPress, and any web framework." },
        ],
        techStack: ["React", "TypeScript", "Node.js", "WebGL", "TensorFlow.js", "Web Speech API", "ARIA", "Playwright", "GraphQL", "Redis"],
        portfolio: [
          {
            name: "Colibri",
            tag: "Strategic Partnership",
            description: "Active participation in the Colibri project, an open-source digital accessibility initiative for the Brazilian ecosystem. Contributions in accessible components, automated screen reader testing, and WCAG standards documentation adapted to the national context.",
            metrics: ["Core contributor", "15+ components", "Open-source", "BR community"],
          },
          {
            name: "AccessLint Pro",
            tag: "DevTools",
            description: "CI/CD extension that runs automatic accessibility audits on every pull request. Integrates with GitHub Actions, GitLab CI, and Bitbucket Pipelines to block merges that introduce accessibility regressions.",
            metrics: ["1.2k repos", "GitHub Actions", "WCAG auto-check", "Zero config"],
          },
          {
            name: "VozLivre",
            tag: "Assistive Tech",
            description: "Augmentative and Alternative Communication (AAC) app for people with motor or speech disabilities. Customizable interface with symbols, AI phrase prediction, and natural Portuguese voice synthesis.",
            metrics: ["500+ users", "Advanced AAC", "Predictive AI", "SUS integrated"],
          },
        ],
      },
      mobile: {
        title: "PulseConnect",
        subtitle: "Health & Wellness Super App",
        heroText: "The app that connects patients, doctors, and gyms in a single intelligent platform with real-time health monitoring.",
        challenge: "The healthcare system is fragmented: patient data is scattered across hospitals, clinics, and labs. People can't track their health in an integrated way, and doctors lack access to complete histories for informed decision-making.",
        solution: "PulseConnect unifies the entire health journey in a super app. It integrates wearables, electronic health records, telemedicine, scheduling, and fitness tracking. Uses AI to detect anomalous patterns in vital signs and alert doctors before emergencies happen.",
        results: [
          { value: "500K+", label: "Downloads in 6 months" },
          { value: "4.9", label: "App Store rating" },
          { value: "12s", label: "Average appointment booking time" },
          { value: "73%", label: "Reduction in unnecessary ER visits" },
        ],
        features: [
          { title: "Health Dashboard", desc: "Unified panel with Apple Watch, Fitbit, Garmin, and medical sensor data in real-time." },
          { title: "HD Telemedicine", desc: "Video calls with doctors with exam sharing, digital prescriptions, and integrated recipes." },
          { title: "Predictive AI", desc: "Algorithms analyzing sleep, heart rate, and activity patterns to predict cardiovascular risks." },
          { title: "Universal Records", desc: "Complete medical history, exam results, vaccines, and medications accessible anywhere." },
          { title: "Fitness Gamification", desc: "Challenge system, rankings, and rewards encouraging healthy habits with gym integration." },
          { title: "Offline Mode", desc: "Critical features available without internet, with automatic sync when connection returns." },
        ],
        techStack: ["React Native", "Swift", "Kotlin", "Firebase", "Node.js", "MongoDB", "HealthKit", "Google Fit", "WebRTC", "Redux"],
        portfolio: [
          {
            name: "DataGeoPlan",
            tag: "GIS & Data",
            description: "Mobile geoprocessing and urban planning platform. Collects field data via high-precision GPS, generates offline thematic maps, and syncs with corporate GIS systems. Used by municipalities and construction companies.",
            metrics: ["cm-precision GPS", "Offline mode", "50+ municipalities", "3D maps"],
          },
          {
            name: "Strava Features",
            tag: "Fitness & Performance",
            description: "Development of advanced features for fitness platform: automatic activity detection algorithm, smart route segmentation, performance heatmaps, and social challenge system with gamification.",
            metrics: ["Auto-detect activity", "AI heatmaps", "Social challenges", "Wearable sync"],
          },
          {
            name: "Maria & Joao",
            tag: "EdTech Kids",
            description: "Gamified educational app for children ages 4-10. Interactive stories with voice recognition for reading practice, adaptive math challenges, and a reward system that engages without addicting.",
            metrics: ["200k children", "4.8 App Store", "Reading +40%", "0 ads"],
          },
          {
            name: "LinkVoz",
            tag: "Communication",
            description: "Enterprise communication app with real-time translation for 12 languages, automatic meeting transcription, thematic channels with AI-summarized discussions, and calendar/task management integration.",
            metrics: ["12 languages real-time", "AI transcription", "E2E encrypted", "500+ companies"],
          },
        ],
      },
      software: {
        title: "NexusERP",
        subtitle: "Senior Software Engineering & Tech Leadership",
        heroText: "Complex systems architecture, technical leadership, and engineering excellence. We build software that scales to millions of users with clean code, full observability, and a culture of engineering excellence.",
        challenge: "Growing companies face accumulated tech debt, monolithic systems that don't scale, lack of technical leadership, and absence of engineering culture. Deploys are risky, incidents are frequent, and the team can't deliver with speed and quality.",
        solution: "We act as embedded Tech Leads and Staff Engineers in your team. We redesign architectures to microservices, implement robust CI/CD, establish code review standards, observability with SLOs/SLIs, and postmortem culture. NexusERP is our showcase: a modular ERP built from scratch with industry best practices.",
        results: [
          { value: "68%", label: "Reduction in admin time" },
          { value: "$450K", label: "Average annual savings per client" },
          { value: "850+", label: "Active companies" },
          { value: "99.99%", label: "Guaranteed uptime" },
        ],
        features: [
          { title: "Evolutionary Architecture", desc: "Distributed systems design with microservices, event sourcing, CQRS, and domain-driven design. Gradual monolith migration." },
          { title: "Tech Leadership", desc: "Dev mentoring, tech stack definition, rigorous code reviews, architectural decision records (ADRs), and engineering excellence culture." },
          { title: "CI/CD & DevOps", desc: "Automated pipelines with tests, linting, security scanning, and canary deploys. Zero downtime deployments as standard." },
          { title: "Full Observability", desc: "Distributed metrics, logs, and traces. SLOs, SLIs, smart alerts, and dashboards that prevent incidents before they happen." },
          { title: "Scalability", desc: "Cloud-native architecture with auto-scaling, distributed caching, message queues, and databases optimized for millions of requests." },
          { title: "Clean Code", desc: "TDD, pair programming, continuous refactoring, and living documentation. Code that the team 2 years from now will thank you for." },
        ],
        techStack: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes", "Terraform", "Datadog"],
        portfolio: [
          {
            name: "NexusERP",
            tag: "Flagship Product",
            description: "Modular and intelligent ERP with native PIX and NF-e, embedded financial AI, and plugin marketplace. Multi-tenant SaaS architecture that scales horizontally.",
            metrics: ["850+ companies", "99.99% uptime", "Microservices", "$450K savings/year"],
          },
          {
            name: "Critical Migrations",
            tag: "Staff Engineering",
            description: "Technical leadership in monolith-to-microservices migrations for fintechs and healthtechs. Zero downtime, strangler fig pattern strategy, with automatic rollback at each stage.",
            metrics: ["0 downtime", "Strangler pattern", "5 migrations", "100% rollback-safe"],
          },
          {
            name: "Platform Engineering",
            tag: "Developer Experience",
            description: "Internal Developer Platform (IDP) with service templates, custom CLI, 1-click dev environment, and auto-generated docs. Dev onboarding reduced from 2 weeks to 2 days.",
            metrics: ["Onboarding 2 days", "Internal CLI", "Full IDP", "Self-service infra"],
          },
          {
            name: "Incident Management",
            tag: "SRE & Reliability",
            description: "SRE culture implementation with error budgets, blameless postmortems, automated runbooks, and on-call rotation. MTTR reduced from 4h to 15 minutes.",
            metrics: ["MTTR 15min", "Error budgets", "Postmortem culture", "Auto-remediation"],
          },
        ],
      },
    },
    julia: {
      title: "The person behind it",
      name: "Julia Cardoso",
      role: "Founder & CEO of CORTEX",
      bio: "Passionate about technology and innovation, Julia Cardoso founded CORTEX with the vision of creating digital solutions that truly make an impact. With expertise in software development, artificial intelligence, and digital accessibility, she leads a team dedicated to turning ambitious ideas into reality.",
      quote:
        '"Technology only makes sense when it transforms lives and makes the world more accessible to everyone."',
      timeline: {
        t1: { year: "Start", text: "First steps in the programming world" },
        t2: { year: "Growth", text: "Specialization in AI and accessibility" },
        t3: { year: "CORTEX", text: "Company founded" },
        t4: { year: "Today", text: "Leading innovation and digital impact" },
      },
    },
    tech: {
      title: "Technologies",
      subtitle: "The tools we use to build the future",
    },
    contact: {
      title: "Let's talk?",
      subtitle: "Ready to turn your idea into reality?",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send message",
      sending: "Sending...",
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with",
      by: "by Julia Cardoso",
    },
  },
} as const;

export type Language = "pt" | "en";
export type Translations = typeof translations;

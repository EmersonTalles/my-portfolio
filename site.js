(()=>{'use strict';
const D={
"Inicio":["Início","Home"],"Perfil y trayectoria":["Perfil e trajetória","Profile & career"],"Proyectos":["Projetos","Projects"],"Contacto":["Contato","Contact"],
"Contactar":["Contatar","Get in touch"],"Hablar con Emerson":["Falar com o Emerson","Talk to Emerson"],"Saltar al contenido":["Ir para o conteúdo","Skip to content"],
"Menú":["Menu","Menu"],"Idioma":["Idioma","Language"],"Navegación principal":["Navegação principal","Main navigation"],
"Data Analyst · Especialista en Automatización y BI":["Data Analyst · Especialista em Automação e BI","Data Analyst · Automation & BI Specialist"],
"Data Analyst & Especialista en Automatización y BI. Transformando datos operativos en valor de negocio medible.":["Data Analyst e Especialista em Automação e BI. Transformando dados operacionais em valor de negócio mensurável.","Data Analyst & Automation & BI Specialist. Turning operational data into measurable business value."],
"Navegación":["Navegação","Navigation"],"Contacto y red":["Contato e redes","Contact & network"],"Perfil de LinkedIn":["Perfil no LinkedIn","LinkedIn profile"],
"Estado: disponible para proyectos y consultoría":["Status: disponível para projetos e consultoria","Status: available for projects and consulting"],
"Todos los derechos reservados.":["Todos os direitos reservados.","All rights reserved."],
"Disponible para proyectos":["Disponível para projetos","Available for projects"],
"DATA ANALYTICS / AUTOMATIZACIÓN & BI":["DATA ANALYTICS / AUTOMAÇÃO & BI","DATA ANALYTICS / AUTOMATION & BI"],
"Transformo datos operativos en indicadores claros y procesos automatizados.":["Transformo dados operacionais em indicadores claros e processos automatizados.","I turn operational data into clear indicators and automated processes."],
"Data Analyst enfocado en transformar datos operativos en indicadores claros y procesos automatizados. Combino ingeniería de producción, ciencia de datos y diseño de interfaces para entregar dashboards y automatizaciones que reducen el trabajo manual y aceleran la toma de decisiones en entornos industriales.":["Data Analyst focado em transformar dados operacionais em indicadores claros e processos automatizados. Combino engenharia de produção, ciência de dados e design de interfaces para entregar dashboards e automações que reduzem o trabalho manual e aceleram a tomada de decisão em ambientes industriais.","Data Analyst focused on turning operational data into clear indicators and automated processes. I combine production engineering, data science and interface design to deliver dashboards and automations that cut manual work and speed up decisions in industrial environments."],
"Ver proyectos":["Ver projetos","View projects"],"+3 años como Data Analyst":["+3 anos como Data Analyst","3+ years as a Data Analyst"],
"+7 años de experiencia con datos":["+7 anos de experiência com dados","7+ years working with data"],"Perfil Profesional":["Perfil profissional","Professional profile"],
"Especialista en Automatización y BI":["Especialista em Automação e BI","Automation & BI Specialist"],"Ingeniería de Producción & Ciencia de Datos":["Engenharia de Produção e Ciência de Dados","Production Engineering & Data Science"],
"Disponible para proyectos y consultoría en dashboards gerenciales, integraciones SAP/APIs, automatizaciones con Power Platform/VBA e ingeniería de datos industriales.":["Disponível para projetos e consultoria em dashboards gerenciais, integrações SAP/APIs, automações com Power Platform/VBA e engenharia de dados industriais.","Available for projects and consulting on management dashboards, SAP/API integrations, Power Platform/VBA automation and industrial data engineering."],
"Sobre mí":["Sobre mim","About me"],"Datos que se convierten en decisiones":["Dados que viram decisões","Data that turns into decisions"],
"Ver perfil y trayectoria en LinkedIn":["Ver perfil e trajetória no LinkedIn","See profile and career on LinkedIn"],
"PROYECTOS DESTACADOS":["PROJETOS EM DESTAQUE","FEATURED PROJECTS"],"Casos entregados":["Casos entregues","Delivered cases"],
"Soluciones reales en producción que redujeron el esfuerzo manual y aportaron visibilidad operativa.":["Soluções reais em produção que reduziram o esforço manual e trouxeram visibilidade operacional.","Real solutions in production that cut manual effort and brought operational visibility."],
"Ver catálogo completo":["Ver catálogo completo","See full catalogue"],"Ver caso":["Ver caso","View case"],
"COMPETENCIAS & STACK":["COMPETÊNCIAS & STACK","SKILLS & STACK"],"Tecnologías y Herramientas Especializadas":["Tecnologias e ferramentas especializadas","Specialised technologies and tools"],
"FORMACIÓN ACADÉMICA":["FORMAÇÃO ACADÊMICA","ACADEMIC BACKGROUND"],"Base Técnica & Científica":["Base técnica e científica","Technical & scientific foundation"],
"¿Hablemos de datos y automatización?":["Vamos falar de dados e automação?","Let’s talk about data and automation?"],"¿Hablemos sobre datos y automatización?":["Vamos falar sobre dados e automação?","Let’s talk about data and automation?"],
"Disponible para proyectos de BI, automatización de procesos y análisis de datos. Listo para aportar valor a su operación.":["Disponível para projetos de BI, automação de processos e análise de dados. Pronto para gerar valor na sua operação.","Available for BI, process automation and data analysis projects. Ready to add value to your operation."],
"Enviar mensaje":["Enviar mensagem","Send message"],
"// PORTAFOLIO DE PROYECTOS & CASOS INDUSTRIALES":["// PORTFÓLIO DE PROJETOS & CASOS INDUSTRIAIS","// PROJECT PORTFOLIO & INDUSTRIAL CASES"],
"Proyectos y Casos Entregados":["Projetos e casos entregues","Projects and delivered cases"],
"Soluciones reales en producción que redujeron el esfuerzo manual, integraron sistemas ERP/APIs y aportaron visibilidad operacional con dashboards y pipelines automatizados.":["Soluções reais em produção que reduziram o esforço manual, integraram sistemas ERP/APIs e trouxeram visibilidade operacional com dashboards e pipelines automatizados.","Real solutions in production that cut manual effort, integrated ERP/API systems and added operational visibility through dashboards and automated pipelines."],
"Total indexado":["Total indexado","Total indexed"],"proyectos entregados":["projetos entregues","projects delivered"],
"Todos":["Todos","All"],"Automatización & Procesos":["Automação e processos","Automation & Processes"],"Dashboards & BI":["Dashboards e BI","Dashboards & BI"],"Python & Scripts":["Python e scripts","Python & Scripts"],"Integración SAP":["Integração SAP","SAP Integration"],
"Buscar proyecto o herramienta…":["Buscar projeto ou ferramenta…","Search project or tool…"],"Buscar proyectos":["Buscar projetos","Search projects"],
"Mostrando":["Exibindo","Showing"],"Ver detalles":["Ver detalhes","View details"],"Solución:":["Solução:","Solution:"],"Métrica / Impacto":["Métrica / Impacto","Metric / Impact"],
"Sin proyectos en esta categoría":["Nenhum projeto nesta categoria","No projects in this category"],"Prueba con otro filtro o borra la búsqueda.":["Tente outro filtro ou limpe a busca.","Try another filter or clear the search."],"Limpiar filtros":["Limpar filtros","Clear filters"],
"Hablar sobre este proyecto":["Falar sobre este projeto","Talk about this project"],"Cerrar":["Fechar","Close"],"Imagen":["Imagem","Image"],
"Automatización de la Base de Clientes":["Automação da base de clientes","Customer Database Automation"],"Dashboard de Producción de Hornos":["Dashboard de produção de fornos","Kiln Production Dashboard"],
"Extractor de Datos de Facturas en PDF":["Extrator de dados de faturas em PDF","PDF Invoice Data Extractor"],"Evaluación para Certificación Operacional (PEOC)":["Avaliação para certificação operacional (PEOC)","Operational Certification Assessment (PEOC)"],
"Reporte de Waste Heat Recovery (WHR)":["Relatório de Waste Heat Recovery (WHR)","Waste Heat Recovery (WHR) Report"],"Automatización de Reportes por Correo":["Automação de relatórios por e-mail","Email Report Automation"],
"Dashboards de Activos Fijos (Fixed Assets)":["Dashboards de ativos fixos (Fixed Assets)","Fixed Assets Dashboards"],
"¿Tienes un desafío en datos o automatización industrial?":["Tem um desafio em dados ou automação industrial?","Have a data or industrial automation challenge?"],
"Disponible para proyectos de automatización, integraciones ERP/APIs y dashboards ejecutivos.":["Disponível para projetos de automação, integrações ERP/APIs e dashboards executivos.","Available for automation projects, ERP/API integrations and executive dashboards."],
"PERFIL Y TRAYECTORIA // 01":["PERFIL E TRAJETÓRIA // 01","PROFILE & CAREER // 01"],
"Una base de ingeniería de producción. Una entrega enfocada en datos e impacto operacional.":["Uma base em engenharia de produção. Uma entrega focada em dados e impacto operacional.","A production engineering foundation. Delivery focused on data and operational impact."],
"Resumen profesional":["Resumo profissional","Professional summary"],"Contactar directamente":["Contatar diretamente","Contact directly"],
"HABILIDADES & STACK":["HABILIDADES & STACK","SKILLS & STACK"],"Herramientas y métodos":["Ferramentas e métodos","Tools and methods"],"Trayectoria profesional":["Trajetória profissional","Career path"],
"Graduación y Posgrados":["Graduação e pós-graduações","Degrees and postgraduate studies"],"Credenciales profesionales":["Credenciais profissionais","Professional credentials"],"PRÓXIMO PASO":["PRÓXIMO PASSO","NEXT STEP"],
"Hablemos de tu proyecto.":["Vamos falar do seu projeto.","Let’s talk about your project."],
"Disponible para consultoría, desarrollo de dashboards en BI, automatización de procesos operativos e integración de datos corporativos.":["Disponível para consultoria, desenvolvimento de dashboards de BI, automação de processos operacionais e integração de dados corporativos.","Available for consulting, BI dashboard development, operational process automation and corporate data integration."],
"VALOR INMEDIATO":["VALOR IMEDIATO","IMMEDIATE VALUE"],"Dónde puedo aportar valor inmediato":["Onde posso gerar valor imediato","Where I can add value right away"],
"CONEXIÓN DIRECTA":["CONEXÃO DIRETA","DIRECT CONNECTION"],"Canales de contacto":["Canais de contato","Contact channels"],"CORREO PRINCIPAL":["E-MAIL PRINCIPAL","MAIN EMAIL"],"Respuesta en hasta 24 horas laborables":["Resposta em até 24 horas úteis","Reply within 24 business hours"],
"PERFIL DE LINKEDIN":["PERFIL NO LINKEDIN","LINKEDIN PROFILE"],"ESTADO: DISPONIBLE":["STATUS: DISPONÍVEL","STATUS: AVAILABLE"],"MODELO: REMOTO / HÍBRIDO / PRESENCIAL":["MODELO: REMOTO / HÍBRIDO / PRESENCIAL","MODE: REMOTE / HYBRID / ON-SITE"],
"Envía un mensaje":["Envie uma mensagem","Send a message"],"Se abre tu correo":["Abre o seu e-mail","Opens your email app"],
"Completa los detalles de tu proyecto o demanda para iniciar nuestro alineamiento técnico.":["Preencha os detalhes do seu projeto para iniciarmos o alinhamento técnico.","Fill in your project details to start our technical alignment."],
"NOMBRE COMPLETO *":["NOME COMPLETO *","FULL NAME *"],"CORREO CORPORATIVO *":["E-MAIL CORPORATIVO *","WORK EMAIL *"],"TIPO DE PROYECTO / DEMANDA *":["TIPO DE PROJETO / DEMANDA *","PROJECT TYPE / REQUEST *"],"MENSAJE / DETALLES *":["MENSAGEM / DETALHES *","MESSAGE / DETAILS *"],
"Ej: Lucas Ferreira":["Ex.: Lucas Ferreira","e.g. Lucas Ferreira"],"Describe brevemente el objetivo, plazo estimado o requisitos técnicos...":["Descreva brevemente o objetivo, prazo estimado ou requisitos técnicos...","Briefly describe the goal, estimated timeline or technical requirements..."],
"Selecciona el alcance del proyecto":["Selecione o escopo do projeto","Select the project scope"],"Dashboards y Modelado BI":["Dashboards e modelagem BI","Dashboards & BI modelling"],"Automatización de Procesos (RPA/VBA)":["Automação de processos (RPA/VBA)","Process automation (RPA/VBA)"],
"Integración ERP SAP / APIs":["Integração ERP SAP / APIs","SAP ERP / API integration"],"Consultoría y Auditoría de Datos":["Consultoria e auditoria de dados","Data consulting & audit"],
"Este campo es obligatorio.":["Este campo é obrigatório.","This field is required."],"Introduce un correo válido.":["Informe um e-mail válido.","Enter a valid email."],"Selecciona una opción.":["Selecione uma opção.","Choose an option."],
"Abriendo tu cliente de correo con el mensaje listo. Si no se abre, escribe a":["Abrindo seu cliente de e-mail com a mensagem pronta. Se não abrir, escreva para","Opening your email app with the message ready. If it doesn’t open, write to"],
"Me interesa el proyecto":["Tenho interesse no projeto","I’m interested in the project"],
"Conoce mis proyectos y trayectoria":["Conheça meus projetos e trajetória","Explore my projects and career"],"Ver trayectoria":["Ver trajetória","View career"],
"Emerson Talles — Data Analyst especializado en Power BI, automatización de procesos e integración SAP.":["Emerson Talles — Data Analyst especializado em Power BI, automação de processos e integração SAP.","Emerson Talles — Data Analyst specialising in Power BI, process automation and SAP integration."],
"Emerson Talles — Perfil y trayectoria":["Emerson Talles — Perfil e trajetória","Emerson Talles — Profile & career"],"Emerson Talles — Proyectos":["Emerson Talles — Projetos","Emerson Talles — Projects"],"Emerson Talles — Contacto":["Emerson Talles — Contato","Emerson Talles — Contact"],"Emerson Talles — Data Analyst":["Emerson Talles — Data Analyst","Emerson Talles — Data Analyst"]
,
"+3 años Analyst / +7 años Datos":["+3 anos Analyst / +7 anos Dados", "3+ yrs Analyst / 7+ yrs Data"],
"Mi enfoque une visión estratégica de ingeniería industrial con implementación técnica en datos. Me enfoco en eliminar fricciones manuales, crear visualizaciones claras de rendimiento y diseñar pipelines confiables para tomadores de decisiones.":["Minha abordagem une visão estratégica de engenharia industrial com implementação técnica em dados. Foco em eliminar atritos manuais, criar visualizações claras de desempenho e projetar pipelines confiáveis para quem toma decisões.", "My approach combines the strategic view of industrial engineering with technical implementation in data. I focus on removing manual friction, building clear performance visualisations and designing reliable pipelines for decision makers."],
"Áreas de Especialidad Operacional & Industrial":["Áreas de especialidade operacional e industrial", "Operational & Industrial Areas of Expertise"],
"Desarrollo herramientas conectadas directamente a los sistemas troncales del negocio (SAP ERP, AVEVA PI, bases relacionales y hojas de cálculo colaborativas), garantizando datos auditables y actualizados:":["Desenvolvo ferramentas conectadas diretamente aos sistemas centrais do negócio (SAP ERP, AVEVA PI, bancos relacionais e planilhas colaborativas), garantindo dados auditáveis e atualizados:", "I build tools connected directly to the core business systems (SAP ERP, AVEVA PI, relational databases and collaborative spreadsheets), ensuring auditable, up-to-date data:"],
"Logística":["Logística", "Logistics"],
"Optimización de rutas e integración de distribución continua.":["Otimização de rotas e integração de distribuição contínua.", "Route optimisation and continuous distribution integration."],
"Fixed Assets":["Ativos fixos (Fixed Assets)", "Fixed Assets"],
"Activos inmovilizados, trazabilidad patrimonial y planificación de materiales.":["Ativos imobilizados, rastreabilidade patrimonial e planejamento de materiais.", "Fixed assets, asset traceability and materials planning."],
"Compras":["Compras", "Procurement"],
"Automatización de flujos de compra, homologación y reporting ejecutivo.":["Automação de fluxos de compra, homologação e reporting executivo.", "Purchasing workflow automation, vendor approval and executive reporting."],
"Rendimiento Industrial":["Desempenho industrial", "Industrial Performance"],
"KPIs de producción en tiempo real, fiabilidad y métricas de MTBF.":["KPIs de produção em tempo real, confiabilidade e métricas de MTBF.", "Real-time production KPIs, reliability and MTBF metrics."],
"Integración Logística":["Integração logística", "Logistics Integration"],
"Automatización de la base de clientes, obtención de coordenadas geográficas vía API, datos estructurados e importación directa al sistema de ruteo RoadNet integrado al ERP SAP.":["Automação da base de clientes, obtenção de coordenadas geográficas via API, dados estruturados e importação direta no sistema de roteirização RoadNet integrado ao ERP SAP.", "Customer database automation, geographic coordinates via API, structured data and direct import into the RoadNet routing system integrated with SAP ERP."],
"100% automatizado · Reducción expresiva de tiempo operativo y rutas optimizadas":["100% automatizado · Redução expressiva de tempo operacional e rotas otimizadas", "100% automated · Major reduction in operating time and optimised routes"],
"Logística & Ruteo":["Logística e roteirização", "Logistics & Routing"],
"Telemetría Industrial":["Telemetria industrial", "Industrial Telemetry"],
"Daily Report industrial con indicadores de productividad, fiabilidad, horas trabajadas, MTBF y tasa de sustitución por combustibles alternativos.":["Daily Report industrial com indicadores de produtividade, confiabilidade, horas trabalhadas, MTBF e taxa de substituição por combustíveis alternativos.", "Industrial daily report with productivity, reliability, running hours, MTBF and alternative-fuel substitution rate indicators."],
"Monitorización continua · KPIs en tiempo real":["Monitoramento contínuo · KPIs em tempo real", "Continuous monitoring · Real-time KPIs"],
"Industria Pesada":["Indústria pesada", "Heavy Industry"],
"Automatización Python":["Automação Python", "Python Automation"],
"Extracción y estructuración automática de datos de facturas de energía en PDF, con dashboard analítico, gestión de parámetros, budget y remuneración mFRR para auditoría.":["Extração e estruturação automática de dados de faturas de energia em PDF, com dashboard analítico, gestão de parâmetros, budget e remuneração mFRR para auditoria.", "Automatic extraction and structuring of energy invoice data from PDFs, with an analytics dashboard, parameter management, budget and mFRR remuneration for auditing."],
"Procesamiento automatizado de facturas por lotes":["Processamento automatizado de faturas em lote", "Automated batch invoice processing"],
"Energía & Finanzas":["Energia e finanças", "Energy & Finance"],
"Conjunto de herramientas aplicadas en análisis avanzado, automatización industrial e interfaces intuitivas.":["Conjunto de ferramentas aplicadas em análise avançada, automação industrial e interfaces intuitivas.", "Tools applied to advanced analytics, industrial automation and intuitive interfaces."],
"Modelado dimensional, DAX avanzado, consultas analíticas y telemetría industrial en tiempo real.":["Modelagem dimensional, DAX avançado, consultas analíticas e telemetria industrial em tempo real.", "Dimensional modelling, advanced DAX, analytical queries and real-time industrial telemetry."],
"Excel Avanzado":["Excel avançado", "Advanced Excel"],
"Automatización & Low-Code":["Automação e Low-Code", "Automation & Low-Code"],
"Creación de flujos automatizados sin fricciones, apps corporativas para planta y scripts dedicados.":["Criação de fluxos automatizados sem atrito, apps corporativos para a planta e scripts dedicados.", "Frictionless automated flows, corporate apps for the plant floor and dedicated scripts."],
"Pipelines de datos":["Pipelines de dados", "Data pipelines"],
"Sistemas de Negocio":["Sistemas de negócio", "Business Systems"],
"Mapeo de tablas ERP, extracción segura de datos transaccionales e integración con CRM corporativos.":["Mapeamento de tabelas ERP, extração segura de dados transacionais e integração com CRMs corporativos.", "ERP table mapping, secure extraction of transactional data and integration with corporate CRMs."],
"Web & UX":["Web e UX", "Web & UX"],
"Interfaces centradas en el usuario, prototipado visual para paneles de control y soporte de IA generativa.":["Interfaces centradas no usuário, prototipagem visual para painéis de controle e apoio de IA generativa.", "User-centred interfaces, visual prototyping for dashboards and generative AI support."],
"La base sólida entre ingeniería, ciencia de datos y usabilidad que respalda cada solución técnica.":["A base sólida entre engenharia, ciência de dados e usabilidade que sustenta cada solução técnica.", "The solid foundation of engineering, data science and usability behind every technical solution."],
"Especialización · Completada":["Especialização · Concluída", "Specialisation · Completed"],
"Posgrado en Ciencia de Datos":["Pós-graduação em Ciência de Dados", "Postgraduate in Data Science"],
"Especialización orientada a estadística aplicada, machine learning, análisis predictivo y manipulación de grandes bases de datos con Python y SQL.":["Especialização voltada a estatística aplicada, machine learning, análise preditiva e manipulação de grandes bases de dados com Python e SQL.", "Specialisation focused on applied statistics, machine learning, predictive analytics and handling large datasets with Python and SQL."],
"Posgrado / Especialización":["Pós-graduação / Especialização", "Postgraduate / Specialisation"],
"Grado · Completado":["Graduação · Concluída", "Degree · Completed"],
"Grado en Ingeniería de Producción":["Graduação em Engenharia de Produção", "Degree in Production Engineering"],
"Sólida formación en optimización de procesos, cadena de suministro, planificación de operaciones, control de calidad y costos industriales.":["Sólida formação em otimização de processos, cadeia de suprimentos, planejamento de operações, controle de qualidade e custos industriais.", "Solid training in process optimisation, supply chain, operations planning, quality control and industrial costs."],
"Enseñanza Superior Completa":["Ensino superior completo", "Completed higher education"],
"EN CURSO · 2026 - ABR/2027":["EM ANDAMENTO · 2026 - ABR/2027", "IN PROGRESS · 2026 - APR/2027"],
"Máster en Desarr. Web & UX/UI":["Mestrado em Desenv. Web e UX/UI", "Master’s in Web Dev. & UX/UI"],
"Profundización en experiencia de usuario, diseño de interfaces, arquitectura front-end y creación de paneles orientados a la facilidad de uso diario.":["Aprofundamento em experiência do usuário, design de interfaces, arquitetura front-end e criação de painéis orientados à facilidade de uso diário.", "In-depth study of user experience, interface design, front-end architecture and dashboards built for everyday ease of use."],
"Máster Profesional":["Mestrado profissional", "Professional Master’s"],
"Data Analyst & Especialista en Automatización y BI":["Data Analyst e Especialista em Automação e BI", "Data Analyst & Automation & BI Specialist"],
"Inicié mi trayectoria en la Ingeniería de Producción, aplicando rigor matemático, optimización de procesos y confiabilidad operacional en la industria. A lo largo de más de 7 años de experiencia con datos (+3 años dedicados como Data Analyst), me especialicé en transformar flujos de trabajo manuales en pipelines automatizados y dashboards analíticos de alta precisión.":["Iniciei minha trajetória na Engenharia de Produção, aplicando rigor matemático, otimização de processos e confiabilidade operacional na indústria. Ao longo de mais de 7 anos de experiência com dados (+3 anos dedicados como Data Analyst), me especializei em transformar fluxos de trabalho manuais em pipelines automatizados e dashboards analíticos de alta precisão.", "I began my career in Production Engineering, applying mathematical rigour, process optimisation and operational reliability in industry. Over more than 7 years working with data (3+ as a Data Analyst), I specialised in turning manual workflows into automated pipelines and high-precision analytical dashboards."],
"Con sólida vivencia en industrias de proceso continuo y logística pesada, integro sistemas ERP (SAP), herramientas de telemetría industrial (AVEVA PI System) y plataformas modernas de Business Intelligence (Power BI, DAX, SQL, Python). El objetivo es acelerar la toma de decisiones gerenciales y eliminar fricciones operativas.":["Com sólida vivência em indústrias de processo contínuo e logística pesada, integro sistemas ERP (SAP), ferramentas de telemetria industrial (AVEVA PI System) e plataformas modernas de Business Intelligence (Power BI, DAX, SQL, Python). O objetivo é acelerar a tomada de decisão gerencial e eliminar atritos operacionais.", "With solid experience in continuous-process industries and heavy logistics, I integrate ERP systems (SAP), industrial telemetry tools (AVEVA PI System) and modern Business Intelligence platforms (Power BI, DAX, SQL, Python). The goal is to speed up management decisions and remove operational friction."],
"Desarrollo puentes sólidos entre la planta operativa y la dirección ejecutiva mediante tecnología: automatizaciones low-code (Power Automate, Apps, VBA), extractores inteligentes y modelado predictivo con gobernanza estricta y métricas claras.":["Construo pontes sólidas entre a planta operacional e a diretoria executiva por meio da tecnologia: automações low-code (Power Automate, Apps, VBA), extratores inteligentes e modelagem preditiva com governança rigorosa e métricas claras.", "I build solid bridges between the plant floor and executive management through technology: low-code automation (Power Automate, Apps, VBA), smart extractors and predictive modelling with strict governance and clear metrics."],
"Ingeniería & Analytics":["Engenharia e Analytics", "Engineering & Analytics"],
"Rigor Técnico · Optimización · Impacto Real":["Rigor técnico · Otimização · Impacto real", "Technical rigour · Optimisation · Real impact"],
"+3 AÑOS DATA ANALYST · +7 AÑOS DATOS":["+3 ANOS DATA ANALYST · +7 ANOS DADOS", "3+ YEARS DATA ANALYST · 7+ YEARS DATA"],
"Alcance de actuación":["Escopo de atuação", "Scope of work"],
"Dashboards gerenciales en Power BI, integraciones SAP/APIs, automatizaciones Power Platform/VBA e ingeniería de datos industriales.":["Dashboards gerenciais em Power BI, integrações SAP/APIs, automações Power Platform/VBA e engenharia de dados industriais.", "Management dashboards in Power BI, SAP/API integrations, Power Platform/VBA automation and industrial data engineering."],
"Modalidad & Colaboración":["Modalidade e colaboração", "Work model & collaboration"],
"Disponible para posiciones full-time, consultorías puntuales y proyectos de transformación digital.":["Disponível para posições full-time, consultorias pontuais e projetos de transformação digital.", "Available for full-time roles, one-off consulting and digital transformation projects."],
"Programación, modelado analítico, automatizaciones low-code, sistemas corporativos e interfaces de decisión.":["Programação, modelagem analítica, automações low-code, sistemas corporativos e interfaces de decisão.", "Programming, analytical modelling, low-code automation, corporate systems and decision interfaces."],
"Modelado relacional estrella/copo de nieve, telemetría industrial en tiempo real y visualizaciones ejecutivas.":["Modelagem relacional estrela/floco de neve, telemetria industrial em tempo real e visualizações executivas.", "Star/snowflake relational modelling, real-time industrial telemetry and executive visualisations."],
"DAX Avanzado":["DAX avançado", "Advanced DAX"],
"Pipelines de Datos":["Pipelines de dados", "Data Pipelines"],
"Scripts Dedicados":["Scripts dedicados", "Dedicated Scripts"],
"ETL Automatizado":["ETL automatizado", "Automated ETL"],
"Eliminación de tareas manuales repetitivas, estandarización de registros y orquestación de notificaciones operativas.":["Eliminação de tarefas manuais repetitivas, padronização de registros e orquestração de notificações operacionais.", "Eliminating repetitive manual tasks, standardising records and orchestrating operational notifications."],
"Sistemas de Negocio & ERP":["Sistemas de negócio e ERP", "Business Systems & ERP"],
"Extracción, conciliación y seguimiento de datos en ecosistemas empresariales de gran escala corporativa.":["Extração, conciliação e acompanhamento de dados em ecossistemas empresariais de grande escala corporativa.", "Data extraction, reconciliation and tracking across large-scale enterprise ecosystems."],
"UX/UI & Web Front-End":["UX/UI e Web Front-End", "UX/UI & Web Front-End"],
"Diseño de layouts analíticos enfocados en usabilidad, jerarquía visual y toma de decisiones ágil.":["Design de layouts analíticos focados em usabilidade, hierarquia visual e tomada de decisão ágil.", "Analytical layout design focused on usability, visual hierarchy and agile decision-making."],
"IA & Ingeniería de Prompts Aplicada":["IA e engenharia de prompts aplicada", "AI & Applied Prompt Engineering"],
"Uso avanzado de modelos de lenguaje para generación y refactorización de código DAX/SQL, documentación técnica y soporte analítico intensivo.":["Uso avançado de modelos de linguagem para geração e refatoração de código DAX/SQL, documentação técnica e suporte analítico intensivo.", "Advanced use of language models to generate and refactor DAX/SQL code, write technical documentation and support intensive analysis."],
"EXPERIENCIA LABORAL":["EXPERIÊNCIA PROFISSIONAL", "WORK EXPERIENCE"],
"ene 2025 – sep 2026":["jan 2025 – set 2026", "Jan 2025 – Sep 2026"],
"may 2024 – ene 2025":["mai 2024 – jan 2025", "May 2024 – Jan 2025"],
"nov 2023 – may 2024":["nov 2023 – mai 2024", "Nov 2023 – May 2024"],
"abr 2022 – sep 2023":["abr 2022 – set 2023", "Apr 2022 – Sep 2023"],
"ene 2022 – abr 2022":["jan 2022 – abr 2022", "Jan 2022 – Apr 2022"],
"ene 2020 – ene 2022":["jan 2020 – jan 2022", "Jan 2020 – Jan 2022"],
"Lisboa, Portugal":["Lisboa, Portugal", "Lisbon, Portugal"],
"Fortaleza, Brasil":["Fortaleza, Brasil", "Fortaleza, Brazil"],
"Itaitinga, Brasil":["Itaitinga, Brasil", "Itaitinga, Brazil"],
"Maracanaú, Brasil":["Maracanaú, Brasil", "Maracanaú, Brazil"],
"Analista de Datos":["Analista de Dados", "Data Analyst"],
"ACTUAL":["ATUAL", "CURRENT"],
"Winning · cliente Secil Portugal | Molins Barcelona":["Winning · cliente Secil Portugal | Molins Barcelona", "Winning · client Secil Portugal | Molins Barcelona"],
"Elaboración y presentación periódica de los principales KPI de rendimiento industrial para la dirección.":["Elaboração e apresentação periódica dos principais KPIs de desempenho industrial para a diretoria.", "Regular preparation and presentation of the main industrial performance KPIs to management."],
"Apoyo a las fábricas del grupo en la gestión y consolidación de los KPI.":["Apoio às fábricas do grupo na gestão e consolidação dos KPIs.", "Support to the group’s plants in managing and consolidating KPIs."],
"Informes interactivos en Power BI y automatización de informes y procesos para mejorar la eficiencia operativa.":["Relatórios interativos em Power BI e automação de relatórios e processos para melhorar a eficiência operacional.", "Interactive Power BI reports and automation of reports and processes to improve operational efficiency."],
"Procesos de extracción, transformación y carga de datos (ETL), garantizando integridad y precisión.":["Processos de extração, transformação e carga de dados (ETL), garantindo integridade e precisão.", "Data extraction, transformation and loading (ETL) processes ensuring integrity and accuracy."],
"Soluciones para optimizar procesos y reducir el trabajo manual.":["Soluções para otimizar processos e reduzir o trabalho manual.", "Solutions to optimise processes and reduce manual work."],
"Castanheira do Ribatejo, Portugal":["Castanheira do Ribatejo, Portugal", "Castanheira do Ribatejo, Portugal"],
"Administrativo de Transportes B2C":["Administrativo de Transportes B2C", "B2C Transport Administrator"],
"Coordinación del transporte de los pedidos a los distribuidores, cumpliendo plazos y niveles de servicio.":["Coordenação do transporte dos pedidos aos distribuidores, cumprindo prazos e níveis de serviço.", "Coordinating order transport to distributors, meeting deadlines and service levels."],
"Seguimiento diario de entregas y resolución proactiva de incidencias, con comunicación directa con los clientes.":["Acompanhamento diário das entregas e resolução proativa de ocorrências, com comunicação direta com os clientes.", "Daily delivery tracking and proactive incident resolution, with direct customer communication."],
"Supervisión de auditorías a las empresas de transporte e implementación de medidas correctivas.":["Supervisão de auditorias às transportadoras e implementação de medidas corretivas.", "Overseeing carrier audits and implementing corrective measures."],
"Gestión de reclamaciones junto a los socios logísticos y colaboración con almacén, tránsito y tiendas.":["Gestão de reclamações junto aos parceiros logísticos e colaboração com armazém, trânsito e lojas.", "Handling claims with logistics partners and working with warehouse, transit and store teams."],
"Gestor de Tráfico":["Gestor de Tráfego", "Traffic Manager"],
"Planificación y optimización de rutas en Lisboa y la Margen Sur.":["Planejamento e otimização de rotas em Lisboa e na Margem Sul.", "Route planning and optimisation in Lisbon and the South Bank."],
"Coordinación y supervisión del equipo de conductores y gestión operativa de la flota.":["Coordenação e supervisão da equipe de motoristas e gestão operacional da frota.", "Coordinating and supervising the driver team and managing the fleet operationally."],
"Gestión de correos y priorización de solicitudes operativas; emisión de albaranes y documentación de transporte.":["Gestão de e-mails e priorização de solicitações operacionais; emissão de guias e documentação de transporte.", "Email handling and prioritisation of operational requests; issuing delivery notes and transport documents."],
"Analista de Datos Sr.":["Analista de Dados Sênior", "Senior Data Analyst"],
"Indra Company · Minsait (cliente Enel Ceará)":["Indra Company · Minsait (cliente Enel Ceará)", "Indra Company · Minsait (client Enel Ceará)"],
"Atención a las demandas del cliente en los procesos de Activos Fijos y Planificación de Materiales.":["Atendimento às demandas do cliente nos processos de Ativos Fixos e Planejamento de Materiais.", "Handling client requests in Fixed Assets and Materials Planning processes."],
"Automatización y mejora continua con VBA, scripts SAP y otras herramientas.":["Automação e melhoria contínua com VBA, scripts SAP e outras ferramentas.", "Automation and continuous improvement with VBA, SAP scripts and other tools."],
"Diseño e implementación de pipelines ETL y paneles interactivos en Power BI.":["Desenho e implementação de pipelines ETL e painéis interativos em Power BI.", "Design and implementation of ETL pipelines and interactive Power BI dashboards."],
"Presentaciones gerenciales con insights, tendencias e indicadores para apoyo estratégico.":["Apresentações gerenciais com insights, tendências e indicadores para apoio estratégico.", "Management presentations with insights, trends and indicators for strategic support."],
"Analista de Desempeño Logística":["Analista de Desempenho Logístico", "Logistics Performance Analyst"],
"BRF · Sadia y Perdigão":["BRF · Sadia e Perdigão", "BRF · Sadia and Perdigão"],
"Extracción y elaboración de indicadores logísticos: On Time, OTIF, tiempo de entrega, devoluciones y carga refrigerada.":["Extração e elaboração de indicadores logísticos: On Time, OTIF, tempo de entrega, devoluções e carga refrigerada.", "Extracting and building logistics indicators: On Time, OTIF, delivery time, returns and refrigerated cargo."],
"Identificación de oportunidades de mejora y estudios para la toma de decisiones.":["Identificação de oportunidades de melhoria e estudos para apoio à decisão.", "Identifying improvement opportunities and producing studies to support decisions."],
"Optimización de la programación de entregas según capacidad de vehículos, pedidos y destinos.":["Otimização da programação de entregas conforme capacidade dos veículos, pedidos e destinos.", "Optimising delivery scheduling by vehicle capacity, orders and destinations."],
"Analista de Planificación Logística":["Analista de Planejamento Logístico", "Logistics Planning Analyst"],
"Análisis de rutas y planificación de enrutamiento de pedidos con Roadnet.":["Análise de rotas e planejamento de roteirização de pedidos com Roadnet.", "Route analysis and order routing planning with Roadnet."],
"Paletización virtual con Real Picking y seguimiento de vehículos con Greenmile.":["Paletização virtual com Real Picking e acompanhamento de veículos com Greenmile.", "Virtual palletisation with Real Picking and vehicle tracking with Greenmile."],
"Responsable de la planificación de rutas de 6 centros de la empresa.":["Responsável pelo planejamento de rotas de 6 centros da empresa.", "Responsible for route planning across 6 company hubs."],
"POSGRADO · LATO SENSU":["PÓS-GRADUAÇÃO · LATO SENSU", "POSTGRADUATE · LATO SENSU"],
"España":["Espanha", "Spain"],
"Brasil":["Brasil", "Brazil"],
"Ciencia de Datos":["Ciência de Dados", "Data Science"],
"Especialización Avanzada":["Especialização avançada", "Advanced specialisation"],
"Enfoque Práctico":["Foco prático", "Practical focus"],
"Machine Learning, inferencia estadística aplicada y pipelines con Python y SQL.":["Machine Learning, inferência estatística aplicada e pipelines com Python e SQL.", "Machine Learning, applied statistical inference and pipelines with Python and SQL."],
"GRADO UNIVERSITARIO":["GRADUAÇÃO", "UNIVERSITY DEGREE"],
"Ingeniería de Producción":["Engenharia de Produção", "Production Engineering"],
"Optimización de procesos, PCP, confiabilidad industrial y modelado matemático.":["Otimização de processos, PCP, confiabilidade industrial e modelagem matemática.", "Process optimisation, production planning (PCP), industrial reliability and mathematical modelling."],
"EN CURSO":["EM ANDAMENTO", "IN PROGRESS"],
"Desarrollo Web & UX/UI":["Desenvolvimento Web e UX/UI", "Web Development & UX/UI"],
"Máster / Especialización":["Mestrado / Especialização", "Master’s / Specialisation"],
"Diseño de interfaces enfocado en toma de decisiones, usabilidad, front-end y dashboards.":["Design de interfaces focado em tomada de decisão, usabilidade, front-end e dashboards.", "Interface design focused on decision-making, usability, front-end and dashboards."],
"CERTIFICACIONES & RECONOCIMIENTOS":["CERTIFICAÇÕES E RECONHECIMENTOS", "CERTIFICATIONS & RECOGNITION"],
"Power BI para Data Science":["Power BI para Data Science", "Power BI for Data Science"],
"Modelado y Visualización":["Modelagem e visualização", "Modelling & Visualisation"],
"ETL & Pipelines Automatizados":["ETL e pipelines automatizados", "ETL & Automated Pipelines"],
"Ingeniería Industrial":["Engenharia industrial", "Industrial Engineering"],
"Procesos & Calidad":["Processos e qualidade", "Processes & Quality"],
"Lean Six Sigma & Optimización":["Lean Six Sigma e otimização", "Lean Six Sigma & Optimisation"],
"Confiabilidad y PCP":["Confiabilidade e PCP", "Reliability & PCP"],
"Disponible para oportunidades profesionales y proyectos de consultoría técnica en inteligencia de datos y optimización operativa.":["Disponível para oportunidades profissionais e projetos de consultoria técnica em inteligência de dados e otimização operacional.", "Available for professional opportunities and technical consulting projects in data intelligence and operational optimisation."],
"Emerson Talles analizando un dashboard en una tableta":["Emerson Talles analisando um dashboard em um tablet", "Emerson Talles reviewing a dashboard on a tablet"],
"#01 · LOGÍSTICA & ERP":["#01 · LOGÍSTICA E ERP", "#01 · LOGISTICS & ERP"],
"Obtención de coordenadas geográficas vía API, layout estructurado e importación directa al sistema de ruteo RoadNet integrado al ERP SAP.":["Obtenção de coordenadas geográficas via API, layout estruturado e importação direta no sistema de roteirização RoadNet integrado ao ERP SAP.", "Geographic coordinates via API, structured layout and direct import into the RoadNet routing system integrated with SAP ERP."],
"100% automatizado · Reducción significativa de tiempo operativo y rutas optimizadas.":["100% automatizado · Redução significativa de tempo operacional e rotas otimizadas.", "100% automated · Significant reduction in operating time and optimised routes."],
"#02 · INDUSTRIA PESADA":["#02 · INDÚSTRIA PESADA", "#02 · HEAVY INDUSTRY"],
"Daily report industrial con seguimiento de KPIs de productividad, confiabilidad, horas trabajadas y tasa de sustitución por combustibles alternativos.":["Daily report industrial com acompanhamento de KPIs de produtividade, confiabilidade, horas trabalhadas e taxa de substituição por combustíveis alternativos.", "Industrial daily report tracking productivity, reliability, running hours and alternative-fuel substitution rate KPIs."],
"Monitorización continua en tiempo real · Indicadores críticos de MTBF.":["Monitoramento contínuo em tempo real · Indicadores críticos de MTBF.", "Continuous real-time monitoring · Critical MTBF indicators."],
"#03 · PYTHON APPS":["#03 · APPS PYTHON", "#03 · PYTHON APPS"],
"Extracción y estructuración automática de datos de facturas de energía en PDF, con dashboard analítico, gestión de parámetros, budget y remuneración mFRR (.exe local y web).":["Extração e estruturação automática de dados de faturas de energia em PDF, com dashboard analítico, gestão de parâmetros, budget e remuneração mFRR (.exe local e web).", "Automatic extraction and structuring of energy invoice data from PDFs, with an analytics dashboard, parameter management, budget and mFRR remuneration (local .exe and web)."],
"Procesamiento automatizado de facturas por lotes · Eliminación de errores manuales.":["Processamento automatizado de faturas em lote · Eliminação de erros manuais.", "Automated batch invoice processing · No more manual errors."],
"#04 · OPERACIONES & RRHH":["#04 · OPERAÇÕES E RH", "#04 · OPERATIONS & HR"],
"Recolección automatizada de respuestas, aplicación de criterios de evaluación con cálculo de puntuación y envío inmediato del informe individual a cada operador de planta.":["Coleta automatizada de respostas, aplicação de critérios de avaliação com cálculo de pontuação e envio imediato do relatório individual a cada operador da planta.", "Automated collection of responses, scoring against assessment criteria and immediate delivery of an individual report to each plant operator."],
"Flujo 100% sin fricción · Feedback instantáneo para la operación de fábrica.":["Fluxo 100% sem atrito · Feedback instantâneo para a operação da fábrica.", "100% frictionless flow · Instant feedback for plant operations."],
"#05 · EFICIENCIA ENERGÉTICA":["#05 · EFICIÊNCIA ENERGÉTICA", "#05 · ENERGY EFFICIENCY"],
"Informe digital y analítico de energía recuperada del proceso industrial, con visión de evolución mensual y acumulado anual consolidado.":["Relatório digital e analítico de energia recuperada do processo industrial, com visão da evolução mensal e acumulado anual consolidado.", "Digital analytical report on energy recovered from the industrial process, with monthly trend and consolidated year-to-date view."],
"Telemetría industrial precisa · Trazabilidad de eficiencia energética.":["Telemetria industrial precisa · Rastreabilidade da eficiência energética.", "Accurate industrial telemetry · Energy efficiency traceability."],
"#06 · RPA & PIPELINES":["#06 · RPA E PIPELINES", "#06 · RPA & PIPELINES"],
"Distribución automatizada de informes diarios de KPIs operacionales directamente a gerentes y equipos de turno con PDF generado y adjuntado dinámicamente.":["Distribuição automatizada de relatórios diários de KPIs operacionais diretamente a gerentes e equipes de turno, com PDF gerado e anexado dinamicamente.", "Automated distribution of daily operational KPI reports straight to managers and shift teams, with a PDF generated and attached dynamically."],
"Cero retrasos en envíos · Información disponible antes del inicio de turno.":["Zero atrasos nos envios · Informação disponível antes do início do turno.", "Zero delivery delays · Information ready before the shift starts."],
"#07 · AUDITORÍA & SAP":["#07 · AUDITORIA E SAP", "#07 · AUDIT & SAP"],
"Paneles gerenciales para control patrimonial de activos fijos y planificación estratégica de materiales en la cadena industrial integrada a SAP.":["Painéis gerenciais para controle patrimonial de ativos fixos e planejamento estratégico de materiais na cadeia industrial integrada ao SAP.", "Management dashboards for fixed-asset control and strategic materials planning across the SAP-integrated industrial chain."],
"Visibilidad patrimonial total · Auditoría y conciliación en minutos.":["Visibilidade patrimonial total · Auditoria e conciliação em minutos.", "Full asset visibility · Audit and reconciliation in minutes."],
"Evaluación para Certificación Operacional PEOC":["Avaliação para certificação operacional PEOC", "Operational Certification Assessment PEOC"],
"Reporte de Waste Heat Recovery WHR":["Relatório de Waste Heat Recovery WHR", "Waste Heat Recovery WHR Report"],
"Dashboards de Activos Fijos Fixed Assets":["Dashboards de ativos fixos Fixed Assets", "Fixed Assets Dashboards"],
"Soluciones prácticas conectando rigor técnico, ingeniería de datos e impacto operacional directo.":["Soluções práticas que conectam rigor técnico, engenharia de dados e impacto operacional direto.", "Practical solutions that connect technical rigour, data engineering and direct operational impact."],
"Logística & Cadena de Suministro":["Logística e cadeia de suprimentos", "Logistics & Supply Chain"],
"Eliminación de cuellos de botella manuales, optimización de rutas e integración estructurada con SAP y APIs operacionales en tiempo real.":["Eliminação de gargalos manuais, otimização de rotas e integração estruturada com SAP e APIs operacionais em tempo real.", "Removing manual bottlenecks, optimising routes and structured integration with SAP and real-time operational APIs."],
"Supply Chain · SAP · Optimización":["Supply Chain · SAP · Otimização", "Supply Chain · SAP · Optimisation"],
"Telemetría & Dashboards Industriales":["Telemetria e dashboards industriais", "Telemetry & Industrial Dashboards"],
"KPIs operativos instantáneos, integración AVEVA PI, monitorización de MTBF/MTTR y visibilidad ejecutiva de alta confiabilidad.":["KPIs operacionais instantâneos, integração AVEVA PI, monitoramento de MTBF/MTTR e visibilidade executiva de alta confiabilidade.", "Instant operational KPIs, AVEVA PI integration, MTBF/MTTR monitoring and highly reliable executive visibility."],
"Power BI · AVEVA PI · DAX Avanzado":["Power BI · AVEVA PI · DAX avançado", "Power BI · AVEVA PI · Advanced DAX"],
"Automatización & Extracción de Datos":["Automação e extração de dados", "Automation & Data Extraction"],
"Pipelines analíticos en Python, OCR para facturas y documentos y flujos operacionales autónomos vía Power Automate.":["Pipelines analíticos em Python, OCR para faturas e documentos e fluxos operacionais autônomos via Power Automate.", "Analytical pipelines in Python, OCR for invoices and documents, and autonomous operational flows via Power Automate."],
"Contacto directo para propuestas, consultorías de BI o integración de datos industriales.":["Contato direto para propostas, consultorias de BI ou integração de dados industriais.", "Get in touch directly for proposals, BI consulting or industrial data integration."],
"Red profesional y publicaciones técnicas":["Rede profissional e publicações técnicas", "Professional network and technical posts"],
"Disponible para proyectos de BI, automatizaciones operacionales y consultoría técnica.":["Disponível para projetos de BI, automações operacionais e consultoria técnica.", "Available for BI projects, operational automation and technical consulting."],
"Revisa demostraciones de dashboards operacionales, rutinas en Python, arquitecturas de datos y certificaciones técnicas.":["Veja demonstrações de dashboards operacionais, rotinas em Python, arquiteturas de dados e certificações técnicas.", "Browse demos of operational dashboards, Python routines, data architectures and technical certifications."],
"tu.nombre@empresa.com":["seu.nome@empresa.com", "your.name@company.com"],
"Logística & Ruteo":["Logística e roteirização", "Logistics & Routing"]
};
const SUP=['es','pt','en'],IX={pt:0,en:1},K={},norm=s=>s.replace(/\s+/g,' ').trim().toLowerCase();
for(const k in D)K[norm(k)]=D[k];
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
let lang='es';
try{const q=new URLSearchParams(location.search).get('lang'),s=localStorage.getItem('lang'),n=(navigator.language||'es').slice(0,2);lang=SUP.includes(q)?q:SUP.includes(s)?s:SUP.includes(n)?n:'es'}catch(e){}
const t=k=>{const e=K[norm(k)];return lang==='es'||!e?k:e[IX[lang]]};
const missing=new Set();
function apply(){
  document.documentElement.lang=lang;
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
  while((n=w.nextNode())){
    if(/^(SCRIPT|STYLE|TEXTAREA)$/.test(n.parentNode.nodeName))continue;
    if(n.parentElement.closest('[data-k],[data-i18n-status]'))continue;
    if(n.__es===undefined){if(!n.nodeValue.trim())continue;n.__es=n.nodeValue}
    const es=n.__es,e=K[norm(es)];
    if(lang==='es'||!e){n.nodeValue=es;if(lang!=='es'&&es.trim().length>25)missing.add(es.trim());continue}
    let o=e[IX[lang]];const L=es.replace(/[^A-Za-zÀ-ÿ]/g,'');
    if(L.length>2&&L===L.toUpperCase())o=o.toUpperCase();
    n.nodeValue=es.match(/^\s*/)[0]+o+es.match(/\s*$/)[0];
  }
  for(const a of['placeholder','alt','title','aria-label'])$$('['+a+']').forEach(el=>{
    const d='data-es-'+a.replace('-','');if(!el.hasAttribute(d))el.setAttribute(d,el.getAttribute(a));
    const es=el.getAttribute(d);el.setAttribute(a,t(es))});
  if(document.__esTitle===undefined)document.__esTitle=document.title;
  document.title=t(document.__esTitle);
  $$('meta[name="description"]').forEach(el=>{
    if(!el.hasAttribute('data-es-content'))el.setAttribute('data-es-content',el.content);
    el.content=t(el.getAttribute('data-es-content'));
  });
  $$('[data-k]').forEach(el=>{el.textContent=t(el.dataset.k)});
  $$('[data-i18n-status]').forEach(el=>{
    el.textContent=`${t(el.dataset.i18nStatus)} ${el.dataset.i18nEmail}`;
  });
  $$('.sx-lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===lang));
  $$('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
  filters&&filters.render();
}
window.__i18nMissing=()=>[...missing];
function setLang(l){lang=l;try{localStorage.setItem('lang',l)}catch(e){}$('#case-dialog')?.close();apply()}
$$('.sx-lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));

/* Menú móvil */
const mb=$('#menu-btn'),mn=$('#mobile-nav');
if(mb&&mn){
  const close=()=>{mn.hidden=true;mb.setAttribute('aria-expanded','false')};
  mb.addEventListener('click',()=>{const o=mn.hidden;mn.hidden=!o;mb.setAttribute('aria-expanded',o)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mn.hidden){close();mb.focus()}});
  mn.addEventListener('click',e=>{if(e.target.closest('a'))close()});
  matchMedia('(min-width:768px)').addEventListener('change',close);
}

/* Filtros + búsqueda de proyectos */
const projectImages=[
  ['img/projects/client-base-flow.png'],
  ['img/projects/kiln-daily-report.png'],
  ['img/projects/invoice-desktop-1.png','img/projects/invoice-desktop-2.png','img/projects/invoice-web-1.png','img/projects/invoice-web-2.png'],
  ['img/projects/peoc-flow.png','img/projects/peoc-screenshots.png'],
  ['img/projects/whr-report.png'],
  ['img/projects/email-report.png'],
  ['img/projects/fixed-assets-dashboard.png','img/projects/fixed-assets-sap.png']
];
function openProjectDialog({title,category,tech,description,metricLabel,metric,images}){
  $('#case-dialog')?.remove();
  const d=document.createElement('dialog');d.id='case-dialog';d.className='sx-dialog';d.setAttribute('aria-labelledby','case-title');
  const mk=(tag,cls,txt)=>{const x=document.createElement(tag);if(cls)x.className=cls;x.textContent=txt;return x};
  const gallery=document.createElement('div');gallery.className='sx-dialog-gallery';
  images.forEach((src,index)=>{const image=document.createElement('img');image.src=src;image.alt=`${title} — ${t('Imagen')} ${index+1}`;image.loading=index?'lazy':'eager';gallery.append(image)});
  const body=document.createElement('div');body.className='sx-dlg-body';
  body.append(mk('span','sx-mono',category),mk('h2','',title),mk('span','sx-mono',tech),mk('p','',description));
  body.querySelector('h2').id='case-title';
  const metricCard=document.createElement('div');metricCard.className='sx-metric';metricCard.append(mk('span','sx-mono',metricLabel),mk('p','',metric));body.append(metricCard);
  const row=document.createElement('div');row.style.cssText='display:flex;justify-content:flex-end';
  const close=mk('button','sx-btn',t('Cerrar'));close.type='button';close.onclick=()=>d.close();row.append(close);body.append(row);
  d.append(gallery,body);
  d.addEventListener('click',ev=>{if(ev.target===d)d.close()});d.addEventListener('close',()=>d.remove());
  document.body.append(d);d.showModal();
}
let filters=null;
const grid=$('#projects-grid');
if(grid){
  const cards=$$('.project-card',grid),btns=$$('.filter-btn'),inp=$('#project-search'),empty=$('#no-projects-view');
  cards.forEach((card,index)=>{const image=$('img',card);if(image&&projectImages[index]?.[0])image.src=projectImages[index][0]});
  const st={f:'all',q:''};
  try{const f=new URLSearchParams(location.search).get('f');if(btns.some(b=>b.dataset.filter===f))st.f=f}catch(e){}
  const inCat=(c,f)=>f==='all'||c.dataset.cat.split(' ').includes(f);
  const render=()=>{
    const q=st.q.trim().toLowerCase();let n=0;
    cards.forEach(c=>{const ok=inCat(c,st.f)&&(!q||c.textContent.toLowerCase().includes(q));c.style.display=ok?'':'none';n+=ok});
    btns.forEach(b=>{b.setAttribute('aria-pressed',b.dataset.filter===st.f);$('[data-count]',b).textContent=cards.filter(c=>inCat(c,b.dataset.filter)).length});
    const pc=$('#project-count');if(pc)pc.textContent=n;
    const s=$('#filter-status-text');if(s)s.textContent=`${t('Mostrando')} ${n}/${cards.length} ${t('Proyectos').toLowerCase()}`+(q?` · “${st.q.trim()}”`:'');
    if(empty){empty.classList.toggle('hidden',n>0);empty.classList.toggle('flex',n===0)}
  };
  filters={render};
  btns.forEach(b=>b.addEventListener('click',()=>{st.f=b.dataset.filter;try{const u=new URL(location);st.f==='all'?u.searchParams.delete('f'):u.searchParams.set('f',st.f);history.replaceState(null,'',u)}catch(e){}render()}));
  inp?.addEventListener('input',()=>{st.q=inp.value;render()});
  $('#clear-filters')?.addEventListener('click',()=>{st.f='all';st.q='';if(inp)inp.value='';render();(inp||btns[0]).focus()});

  /* Detalle de proyecto */
  grid.addEventListener('click',e=>{
    const b=e.target.closest('[data-open-case]');if(!b)return;
    const c=b.closest('.project-card'),title=$('h2',c).textContent.trim(),metricText=$('.bg-surface-container-lowest p',c);
    openProjectDialog({title,category:$('.absolute.top-space-sm',c).textContent.trim(),tech:$('.p-space-lg span',c).textContent.trim(),description:$('p.text-text-secondary',c).textContent.trim(),metricLabel:$('span',metricText.parentElement).textContent.trim(),metric:metricText.textContent.trim(),images:projectImages[cards.indexOf(c)]||[]});
  });
}
const featuredProjects=$('#proyectos-seccion');
featuredProjects?.addEventListener('click',e=>{
  const button=e.target.closest('[data-open-featured-case]');if(!button)return;
  const card=button.closest('article'),title=$('h3',card).textContent.trim(),metric=$('.font-mono-badge.text-on-surface',card);
  openProjectDialog({title,category:$('.font-mono-kicker.text-text-muted',card).textContent.trim(),tech:$('p.text-primary',card).textContent.trim(),description:$('p.text-text-muted',card).textContent.trim(),metricLabel:t('Métrica / Impacto'),metric:metric.textContent.trim(),images:projectImages[Number(button.dataset.openFeaturedCase)]||[]});
});

/* Formulario de contacto */
const form=$('#contact-form');
if(form){
  const f={n:$('#nome'),e:$('#email'),t:$('#tipo_projeto'),m:$('#mensaje')||$('#mensagem')},status=$('#form-status'),btn=$('button[type=submit]',form);
  const err=(el,msg)=>{let p=$('#'+el.id+'-err');
    if(!msg){el.removeAttribute('aria-invalid');el.removeAttribute('aria-describedby');p?.remove();return}
    if(!p){p=document.createElement('p');p.className='sx-err';p.id=el.id+'-err';el.after(p)}
    p.textContent=t(msg);p.dataset.k=msg;el.setAttribute('aria-invalid','true');el.setAttribute('aria-describedby',p.id)};
  const check=el=>{const v=el.value.trim();
    if(!v)return err(el,el.tagName==='SELECT'?'Selecciona una opción.':'Este campo es obligatorio.'),false;
    if(el.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))return err(el,'Introduce un correo válido.'),false;
    return err(el,''),true};
  Object.values(f).forEach(el=>{el.addEventListener('blur',()=>el.value&&check(el));el.addEventListener('input',()=>el.hasAttribute('aria-invalid')&&check(el))});
  const pj=new URLSearchParams(location.search).get('project');
  if(pj){f.m.value=`${t('Me interesa el proyecto')}: ${pj}.\n`;f.t.value=f.t.value||'consultoria'}
  form.addEventListener('submit',ev=>{
    ev.preventDefault();status.removeAttribute('data-i18n-status');status.removeAttribute('data-i18n-email');
    const bad=Object.values(f).filter(el=>!check(el));
    if(bad.length){bad[0].focus();status.textContent='';return}
    btn.disabled=true;
    const to='emersontalles2@gmail.com',sub=`[Portfolio] ${f.t.selectedOptions[0].textContent.trim()} — ${f.n.value.trim()}`,
      body=`${f.m.value.trim()}\n\n— ${f.n.value.trim()} <${f.e.value.trim()}>`;
    location.href=`mailto:${to}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
    status.dataset.i18nStatus='Abriendo tu cliente de correo con el mensaje listo. Si no se abre, escribe a';
    status.dataset.i18nEmail=to;
    status.textContent=`${t(status.dataset.i18nStatus)} ${to}`;
    setTimeout(()=>{btn.disabled=false},1500);
  });
}
apply();
})();

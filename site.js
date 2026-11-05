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
"Mostrando":["Exibindo","Showing"],"proyectos":["projetos","projects"],"Ver detalles":["Ver detalhes","View details"],"Solución:":["Solução:","Solution:"],"Métrica / Impacto":["Métrica / Impacto","Metric / Impact"],
"Sin proyectos en esta categoría":["Nenhum projeto nesta categoria","No projects in this category"],"Prueba con otro filtro o borra la búsqueda.":["Tente outro filtro ou limpe a busca.","Try another filter or clear the search."],"Limpiar filtros":["Limpar filtros","Clear filters"],
"Hablar sobre este proyecto":["Falar sobre este projeto","Talk about this project"],"Cerrar":["Fechar","Close"],
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
"PERFIL DE LINKEDIN":["PERFIL NO LINKEDIN","LINKEDIN PROFILE"],"ESTADO: DISPONIBLE":["STATUS: DISPONÍVEL","STATUS: AVAILABLE"],"MODELO: REMOTO / HÍBRIDO":["MODELO: REMOTO / HÍBRIDO","MODE: REMOTE / HYBRID"],
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
"Emerson Almeida — Perfil y trayectoria":["Emerson Almeida — Perfil e trajetória","Emerson Almeida — Profile & career"],"Emerson Almeida — Proyectos":["Emerson Almeida — Projetos","Emerson Almeida — Projects"],"Emerson Almeida — Contacto":["Emerson Almeida — Contato","Emerson Almeida — Contact"],"Emerson Almeida — Data Analyst":["Emerson Almeida — Data Analyst","Emerson Almeida — Data Analyst"]
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
let filters=null;
const grid=$('#projects-grid');
if(grid){
  const cards=$$('.project-card',grid),btns=$$('.filter-btn'),inp=$('#project-search'),empty=$('#no-projects-view');
  const st={f:'all',q:''};
  try{const f=new URLSearchParams(location.search).get('f');if(btns.some(b=>b.dataset.filter===f))st.f=f}catch(e){}
  const inCat=(c,f)=>f==='all'||c.dataset.cat.split(' ').includes(f);
  const render=()=>{
    const q=st.q.trim().toLowerCase();let n=0;
    cards.forEach(c=>{const ok=inCat(c,st.f)&&(!q||c.textContent.toLowerCase().includes(q));c.style.display=ok?'':'none';n+=ok});
    btns.forEach(b=>{b.setAttribute('aria-pressed',b.dataset.filter===st.f);$('[data-count]',b).textContent=cards.filter(c=>inCat(c,b.dataset.filter)).length});
    const pc=$('#project-count');if(pc)pc.textContent=n;
    const s=$('#filter-status-text');if(s)s.textContent=`${t('Mostrando')} ${n}/${cards.length} ${t('proyectos').toLowerCase()}`+(q?` · “${st.q.trim()}”`:'');
    if(empty){empty.classList.toggle('hidden',n>0);empty.classList.toggle('flex',n===0)}
  };
  filters={render};
  btns.forEach(b=>b.addEventListener('click',()=>{st.f=b.dataset.filter;try{const u=new URL(location);st.f==='all'?u.searchParams.delete('f'):u.searchParams.set('f',st.f);history.replaceState(null,'',u)}catch(e){}render()}));
  inp?.addEventListener('input',()=>{st.q=inp.value;render()});
  $('#clear-filters')?.addEventListener('click',()=>{st.f='all';st.q='';if(inp)inp.value='';render();(inp||btns[0]).focus()});

  /* Detalle de proyecto */
  grid.addEventListener('click',e=>{
    const b=e.target.closest('[data-open-case]');if(!b)return;
    const c=b.closest('.project-card'),title=$('h2',c).textContent.trim();
    let d=$('#case-dialog');d?.remove();
    d=document.createElement('dialog');d.id='case-dialog';d.className='sx-dialog';d.setAttribute('aria-labelledby','case-title');
    const img=$('img',c),mk=(tag,cls,txt)=>{const x=document.createElement(tag);if(cls)x.className=cls;x.textContent=txt;return x};
    const body=document.createElement('div');body.className='sx-dlg-body';
    const sol=$('p.text-text-secondary',c),met=$('.bg-surface-container-lowest',c);
    body.append(mk('span','sx-mono',$('.absolute.top-space-sm',c).textContent.trim()),mk('h2','',title),mk('span','sx-mono',$('.p-space-lg span',c).textContent.trim()),mk('p','',sol.textContent.trim()));
    body.firstChild.nextSibling.id='case-title';
    const m=document.createElement('div');m.className='sx-metric';m.append(mk('span','sx-mono',$('span',met).textContent.trim()),mk('p','',$('p',met).textContent.trim()));body.append(m);
    const row=document.createElement('div');row.style.cssText='display:flex;gap:.75rem;flex-wrap:wrap';
    const a=mk('a','sx-btn p',t('Hablar sobre este proyecto'));a.href='contacto.html?project='+encodeURIComponent(title)+(lang!=='es'?'&lang='+lang:'');
    const x=mk('button','sx-btn',t('Cerrar'));x.type='button';x.onclick=()=>d.close();row.append(a,x);body.append(row);
    const im=img.cloneNode();im.removeAttribute('class');im.alt='';d.append(im,body);
    d.addEventListener('click',ev=>{if(ev.target===d)d.close()});d.addEventListener('close',()=>d.remove());
    document.body.append(d);d.showModal();
  });
}

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
    ev.preventDefault();const bad=Object.values(f).filter(el=>!check(el));
    if(bad.length){bad[0].focus();status.textContent='';return}
    btn.disabled=true;
    const to='emersontalles2@gmail.com',sub=`[Portfolio] ${f.t.selectedOptions[0].textContent.trim()} — ${f.n.value.trim()}`,
      body=`${f.m.value.trim()}\n\n— ${f.n.value.trim()} <${f.e.value.trim()}>`;
    location.href=`mailto:${to}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
    status.textContent=`${t('Abriendo tu cliente de correo con el mensaje listo. Si no se abre, escribe a')} ${to}`;
    setTimeout(()=>{btn.disabled=false},1500);
  });
}
apply();
})();

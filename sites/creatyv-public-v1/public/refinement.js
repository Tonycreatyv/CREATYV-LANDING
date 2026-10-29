(()=>{'use strict';
const $=s=>document.querySelector(s),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-connection-icon]').forEach(el=>el.innerHTML=window.CREATYVIcon(el.dataset.connectionIcon));
// El adaptador futuro recibe únicamente tipos públicos verificados, sin nombres
// ni detalles privados. Los valores por defecto describen esta visita y esta página.
const messages={
 exploring:['EN VIVO','Alguien está explorando CREATYV'],
 watching:['DEMO ACTIVA','Alguien está viendo una demostración'],
 demo_viewed:['DEMO ACTIVA','Alguien está viendo una demostración'],
 profile_started:['EN VIVO','Alguien está creando su perfil'],
 implementation_started:['CREATYV','Nueva implementación iniciada'],
 system:['CREATYV','Sistema disponible'],
 proposal_started:['EN VIVO','Una propuesta acaba de comenzar'],
 proposal_submitted:['CREATYV','Nueva propuesta solicitada'],
 account_registered:['CREATYV','Nuevo negocio registrado'],
 implementation_activated:['CREATYV','Nueva implementación iniciada'],
 account_activated:['CREATYV','Nueva cuenta activada']
};
let watching=false,inOperation=false,n=1,timer,animation,source=null,generation=0,current='exploring';
const pending=[],text=$('#public-activity-text'),bar=$('.public-activity'),dialog=$('#proposal-dialog');
function render(type){const [label,message]=messages[type];const prefix=document.createElement('b');prefix.className='public-ticker-label';prefix.textContent=label;const body=document.createElement('span');body.textContent=message;text.replaceChildren(prefix,document.createTextNode(' · '),body);bar.dataset.activity=type;bar.dataset.illustrative=String(!source);const tag=$('.public-activity-tag');if(tag)tag.hidden=!!source;current=type}
new IntersectionObserver(es=>{watching=es[0].isIntersecting},{threshold:.12}).observe($('#demostraciones'));
new IntersectionObserver(es=>{inOperation=es[0].isIntersecting},{threshold:.08}).observe($('#operacion'));
let wasOpen=false;new MutationObserver(()=>{if(dialog.open&&!wasOpen){pending.push('proposal_started');if(reduced)update()}wasOpen=dialog.open}).observe(dialog,{attributes:true,attributeFilter:['open']});
function arm(){clearTimeout(timer);if(!reduced&&!document.hidden)timer=setTimeout(update,3600)}
async function update(){clearTimeout(timer);if(document.hidden)return;const ticket=++generation;let type;try{type=source?await source():null}catch{type=null}if(ticket!==generation)return;type=typeof type==='object'&&type?type.type:type;if(!Object.hasOwn(messages,type)){const sequence=['exploring','watching','profile_started','proposal_started'];type=pending.shift()||sequence[n++%sequence.length]}if(type===current){arm();return}if(reduced){render(type);return}try{animation=text.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-12px)'}],{duration:350,easing:'cubic-bezier(.4,0,.6,1)',fill:'forwards'});await animation.finished;if(ticket!==generation)return;render(type);animation.cancel();animation=text.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:350,easing:'cubic-bezier(.16,1,.3,1)'});await animation.finished}catch{}if(ticket===generation)arm()}
document.addEventListener('visibilitychange',()=>{generation++;clearTimeout(timer);animation?.cancel();if(!document.hidden)arm()});
window.CREATYVActivity={setSource(adapter){source=typeof adapter==='function'?adapter:null;generation++;animation?.cancel();update()}};
const nav=$('.nav');function alignNav(){nav.style.setProperty('--ticker-offset',Math.max(0,bar.offsetHeight-scrollY)+'px')}addEventListener('scroll',alignNav,{passive:true});addEventListener('resize',alignNav);alignNav();render('exploring');arm();document.documentElement.dataset.creatyvRefined='true';
})();

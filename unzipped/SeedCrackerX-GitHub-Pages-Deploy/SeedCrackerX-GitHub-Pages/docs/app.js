const $=id=>document.getElementById(id);
const KEY='scxbe-observations-v1';
let records=[];
try{records=JSON.parse(localStorage.getItem(KEY)||'[]')}catch{records=[]}
function persist(){localStorage.setItem(KEY,JSON.stringify(records));render()}
function render(){
 $('empty').style.display=records.length?'none':'block';
 $('entries').innerHTML='';
 [...records].reverse().forEach((r,idx)=>{
  const el=document.createElement('article');el.className='entry';
  const title=document.createElement('strong');title.textContent=`${r.kind} · ${r.dimension}`;
  const meta=document.createElement('small');meta.textContent=`  X ${r.x||'—'} · Y ${r.y||'—'} · Z ${r.z||'—'} · ${new Date(r.time).toLocaleString()}`;
  const detail=document.createElement('p');detail.textContent=r.details||'No extra details';
  el.append(title,document.createElement('br'),meta,detail);$('entries').append(el);
 });
}
$('add').addEventListener('click',()=>{
 const x=$('x').value,z=$('z').value;
 if(x===''||z===''){alert('Please enter at least X and Z coordinates.');return}
 records.push({world:$('world').value,dimension:$('dimension').value,kind:$('kind').value,x:Number(x),y:$('y').value===''?null:Number($('y').value),z:Number(z),details:$('details').value,time:new Date().toISOString()});
 persist();$('details').value='';$('x').value='';$('y').value='';$('z').value='';
});
$('export').addEventListener('click',()=>{
 const blob=new Blob([JSON.stringify({format:'seedcrackerx-be-observations',version:1,records},null,2)],{type:'application/json'});
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='seedcrackerx-observations.json';a.click();URL.revokeObjectURL(a.href);
});
$('clear').addEventListener('click',()=>{if(confirm('Delete all observations in this browser workspace?')){records=[];persist()}});
$('convert').addEventListener('click',()=>{
 const x=Number($('owx').value),z=Number($('owz').value);
 if($('owx').value===''||$('owz').value===''){$('converted').textContent='Enter both X and Z coordinates.';return}
 $('converted').textContent=`Nether: X ${Math.floor(x/8)} · Z ${Math.floor(z/8)} (approximate block coordinates)`;
});
if('serviceWorker' in navigator && location.protocol!=='file:'){navigator.serviceWorker.register('./sw.js').catch(()=>{})}
render();
const screens=[...document.querySelectorAll('.screen')];
const show=id=>{screens.forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}
document.getElementById('start').onclick=()=>{
show('game');
spawn();
}
let score=0;
function spawn(){
const area=document.getElementById('playArea');
for(let i=0;i<10;i++){
let h=document.createElement('div');
h.className='heart';
h.innerHTML='❤️';
h.style.left=Math.random()*(window.innerWidth-50)+'px';
h.style.top=Math.random()*(window.innerHeight-150)+'px';
h.onclick=()=>{
h.remove();
score++;
document.getElementById('score').textContent=score;
if(score===10)show('gallery');
};
area.appendChild(h);
}
}
document.getElementById('letterBtn').onclick=()=>show('letter');
function showFinal(){show('final');}

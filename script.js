document.getElementById('year').textContent=new Date().getFullYear();
function openModal(){document.getElementById('contactModal').classList.add('open')}
function closeModal(){document.getElementById('contactModal').classList.remove('open')}
document.getElementById('contactModal').addEventListener('click',e=>{if(e.target.id==='contactModal')closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.getElementById('demoForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('formNote').textContent='Preview only: the form is not connected yet. Connect the approved company contact channel before publishing.'});

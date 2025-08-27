// Scene cycling
(function(){
  const order = ["scene1","scene2","scene3","scene4"];
  const radios = order.map(id => document.getElementById(id));
  function currentIndex(){ return order.findIndex(id => document.getElementById(id).checked); }
  function gotoIndex(i){
    const idx = (i + order.length) % order.length;
    radios[idx].checked = true;
    window.dispatchEvent(new Event('scenechange'));
  }
  document.getElementById('nextBtn').addEventListener('click', ()=> gotoIndex(currentIndex()+1));
  document.getElementById('prevBtn').addEventListener('click', ()=> gotoIndex(currentIndex()-1));
  document.getElementById('nextBtn2').addEventListener('click', ()=> gotoIndex(currentIndex()+1));
  document.addEventListener('DOMContentLoaded', ()=> window.dispatchEvent(new Event('scenechange')));
})();
(function(){
  const canvas = document.getElementById("sparkles-scene3");
  const ctx = canvas.getContext("2d");
  function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize(); window.addEventListener("resize", resize);
  let sparkles = []; let animatingSparkles = false;
  function createSparkle(){ const x=Math.random()*canvas.width, y=Math.random()*canvas.height, size=Math.random()*3+1, speed=Math.random()*0.5+0.2, hue=Math.floor(Math.random()*360); sparkles.push({x,y,size,speed,hue}); }
  function animateSparkles(){
    if(!animatingSparkles) return;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<sparkles.length;i++){
      const s=sparkles[i]; ctx.beginPath(); ctx.arc(s.x,s.y,s.size,0,Math.PI*2); ctx.fillStyle=`hsl(${s.hue},100%,70%)`; ctx.fill();
      s.y -= s.speed; s.x += Math.sin(s.y*0.05)*0.5;
      if(s.y < -s.size){ sparkles.splice(i,1); i--; }
    }
    while(sparkles.length < 200) createSparkle();
    requestAnimationFrame(animateSparkles);
  }
  function setActive(run){ animatingSparkles = run; if(run){ animateSparkles(); } }
  function updateActive(){
    const active = document.getElementById('scene3').checked;
    if(active){ setActive(true); }
    else{ setActive(false); }
  }
  window.addEventListener('scenechange', updateActive);
  // Buttons
  function bindButtons(){
    const intentionBtn = document.querySelector("#scene3-container .intention-btn");
    if(intentionBtn){ intentionBtn.onclick = (e)=>{ e.preventDefault(); document.getElementById('scene4').checked = true; window.dispatchEvent(new Event('scenechange')); }; }
    const prev = document.getElementById('prevFrom3');
    if(prev){ prev.onclick = (e)=>{ e.preventDefault(); document.getElementById('scene2').checked = true; window.dispatchEvent(new Event('scenechange')); }; }
  }
  bindButtons();
})();
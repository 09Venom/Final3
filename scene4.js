(function(){
  const messages = ["Dear Apsara 💅","You're my home👺","I love your voice 😉"];
  const ulEl = document.querySelector("#scene4-container .page4-ul");
  let daynumber = 0; let activeIndex = 0;
  function build(){
    if(!ulEl) return;
    ulEl.innerHTML = "";
    messages.forEach((msg, idx)=>{
      const li = document.createElement('li');
      li.style.setProperty('--day_idx', idx);
      li.innerHTML = `<time>${idx+1}</time><span>${msg}</span>`;
      ulEl.appendChild(li);
    });
    ulEl.style.setProperty('--rotateDegrees', -360/messages.length);
    adjust(0);
  }
  function adjust(n){
    if(!ulEl) return;
    daynumber += n;
    ulEl.style.setProperty('--currentDay', daynumber);
    const prev = ulEl.querySelector('li.active'); if(prev) prev.classList.remove('active');
    activeIndex = (activeIndex + n + messages.length) % messages.length;
    const now = ulEl.querySelector(`li:nth-child(${activeIndex+1})`); if(now) now.classList.add('active');
  }
  function updateActive(){
    const active = document.getElementById('scene4').checked;
    if(active){ build(); bind(); }
  }
  function bind(){
    const prevBtn = document.querySelector('#scene4-container .page4-controls button[aria-label="Previous message"]');
    const nextBtn = document.querySelector('#scene4-container .page4-controls button[aria-label="Next message"]');
    if(prevBtn) prevBtn.onclick = ()=> adjust(-1);
    if(nextBtn) nextBtn.onclick = ()=> adjust(1);
    const back = document.querySelector('#scene4-container .back-btn');
    if(back) back.onclick = ()=>{ document.getElementById('scene3').checked = true; window.dispatchEvent(new Event('scenechange')); };
  }
  window.addEventListener('scenechange', updateActive);
})();
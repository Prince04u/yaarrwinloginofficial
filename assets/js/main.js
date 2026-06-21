// Lightweight UX enhancements
(function(){
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if(btn && nav){ btn.addEventListener('click', function(){ nav.classList.toggle('open'); }); }
  // mark current nav link
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function(a){
    var href = a.getAttribute('href');
    if(href === here) a.style.color = 'var(--red)';
  });
})();

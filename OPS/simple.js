function menu() {
    document.querySelector(".menu-full").classList.toggle('menu-active');
    document.body.classList.toggle('stop-sroll');
  }
  window.addEventListener("scroll", function() {
    var distance = window.scrollY;
  if(distance>0){
    document.querySelector(".navbar").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)";
  }
  else{
    document.querySelector(".navbar").style.boxShadow = "none";
  }});
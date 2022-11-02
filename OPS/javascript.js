const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });
  function menu() {
    document.querySelector(".menu-full").classList.toggle('menu-active');
    document.body.classList.toggle('stop-sroll');
  }
  function youtube() {
    document.querySelector(".youtube").classList.toggle('youtube-active');
    document.body.classList.toggle('stop-sroll');
  }


  var offsetselector1 = document.querySelector(".galerija");
  var distancefromtop1 =window.pageYOffset + offsetselector1.getBoundingClientRect().top;
  var height1=offsetselector1.offsetHeight;
  var offsetselector2 = document.querySelector(".background-img");
  var distancefromtop2 =window.pageYOffset + offsetselector2.getBoundingClientRect().top;
  var height2=offsetselector2.offsetHeight;
  window.addEventListener("resize", function() {
    offsetselector1 = document.querySelector(".galerija");
    distancefromtop1 =window.pageYOffset + offsetselector1.getBoundingClientRect().top;
    height1=offsetselector1.offsetHeight;
    offsetselector2 = document.querySelector(".background-img");
    distancefromtop2 =window.pageYOffset + offsetselector2.getBoundingClientRect().top;
    height2=offsetselector2.offsetHeight;
});
  window.addEventListener("scroll", function() {
    var distance = window.scrollY;
  if(distance>0){
    document.querySelector(".navbar").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)";
  }
  else{
    document.querySelector(".navbar").style.boxShadow = "none";
  }

  
  if(distancefromtop1+height1<distance){
    if(distancefromtop2-90<distance){
      document.querySelector(".navbar").style.height="0";
    }
    else{
      document.querySelector(".navbar").style.height="90px";
    }
  }
  else if(distancefromtop1-90<distance){
    document.querySelector(".navbar").style.height="0";
  }
  else{
    document.querySelector(".navbar").style.height="90px";
  }



  });
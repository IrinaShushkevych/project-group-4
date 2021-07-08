function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "&nbspRead less"; 
      moreText.style.display = "inline";
    }
  }
//slider//
new Swiper('.reviews__swiper-slider',{
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev'
  },

  pagination:{
    el:'.swiper-pagination',
    clickable:true,
dynamicBullets:true,
renderBullet:function(index,className){
  return '<span class="' + className+'">'+(index+1)+'</span>';
},
  },
});
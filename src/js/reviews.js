(() => {
  const btn = document.querySelectorAll('#myBtn');

  function myFunction() {
    var dots = document.querySelectorAll('#dots');
    var moreText = document.querySelectorAll('#more');
    var btnText = document.querySelectorAll('#myBtn');

    for (let i = 0; i < dots.length; i++) {
      if (dots[i].style.display === 'none') {
        dots[i].style.display = 'inline';
        btnText[i].innerHTML = 'Read more';
        moreText[i].style.display = 'none';
      } else {
        dots[i].style.display = 'none';
        btnText[i].innerHTML = '&nbspRead less';
        moreText[i].style.display = 'inline';
      }
    }
  }

  btn.forEach(el => {
    el.addEventListener('click', myFunction);
  });
})();

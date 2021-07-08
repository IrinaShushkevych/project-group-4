(() => {
  const anchors = document.querySelectorAll('[href^="#"]');
  console.log(anchors);

  for (let anchor of anchors) {
    console.log(anchor);
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      console.log(blockID);
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
      document.querySelector('.button-back').style.display = 'flex';
    } else {
      document.querySelector('.button-back').style.display = 'none';
    }
  };
})();

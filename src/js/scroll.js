(() => {
  const anchors = document.querySelectorAll('[href^="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');

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

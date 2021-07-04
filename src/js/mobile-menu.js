(() => {
  const menuBtnRef = document.querySelectorAll('[data-menu-button]');
  const mobileMenuRef = document.querySelectorAll('[data-menu]');

  const functionButton = () => {
    mobileMenuRef.forEach(elem => {
      elem.classList.toggle('is-open');
    });
  };

  menuBtnRef.forEach(btn => {
    btn.addEventListener('click', functionButton);
  });
})();

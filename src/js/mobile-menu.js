// (() => {
//   const menuBtnRef = document.querySelectorAll('[data-menu-button]');
//   const mobileMenuRef = document.querySelectorAll('[data-menu]');

//   const functionButton = () => {
//     mobileMenuRef.forEach(elem => {
//       elem.classList.toggle('is-open');
//     });
//   };

//   menuBtnRef.forEach(btn => {
//     btn.addEventListener('click', functionButton);
//   });
// })();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnRefClose = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  const functionButton = () => {
    mobileMenuRef.classList.toggle('is-open');
  };

  menuBtnRef.addEventListener('click', functionButton);
  menuBtnRefClose.addEventListener('click', functionButton);
})();
(() => {
  const menuBtnRef = document.querySelectorAll('[data-certificate-button]');
  const BtnRef = document.querySelectorAll('[data-order-button]');
  const mobileMenuRef = document.querySelectorAll('[data-modal]');
  const mobileCert = document.querySelectorAll('[data-certificate]');
  const mobileOrder = document.querySelectorAll('[data-order]');


  const functionButtonCert = () => {
    mobileMenuRef.forEach(elem => {
      elem.classList.toggle('is-hidden');
    });

    mobileCert.forEach(elem => {
      elem.classList.toggle('is-open');
    });

  };

  const functionButtonOrder = () => {
    mobileMenuRef.forEach(elem => {
      elem.classList.toggle('is-hidden');
    });

    mobileOrder.forEach(elem => {
      elem.classList.toggle('is-open');
    });

  };

  menuBtnRef.forEach(btn => {
    btn.addEventListener('click', functionButtonCert);
  });

  BtnRef.forEach(btn => {
    btn.addEventListener('click', functionButtonOrder);
  });

})();

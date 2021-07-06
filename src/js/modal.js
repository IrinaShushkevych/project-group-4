(() => {
  const menuBtnRef = document.querySelectorAll('[data-certificate-button]');
  const BtnRef = document.querySelectorAll('[data-order-button]');
  const btnContact = document.querySelectorAll('[data-contact-button]');
  const mobileMenuRef = document.querySelectorAll('[data-modal]');
  const modalCert = document.querySelectorAll('[data-certificate]');
  const modalOrder = document.querySelectorAll('[data-order]');
  const modalContact = document.querySelectorAll('[data-contact]');

  const functionButtonCert = () => {
    mobileMenuRef.forEach(elem => {
      elem.classList.toggle('is-hidden');
    });

    modalCert.forEach(elem => {
      elem.classList.toggle('is-open');
    });
  };

  const functionButtonOrder = () => {
    mobileMenuRef.forEach(elem => {
      elem.classList.toggle('is-hidden');
    });

    modalOrder.forEach(elem => {
      elem.classList.toggle('is-open');
    });
  };

  const functionButtonContact = () => {
    mobileMenuRef.forEach(elem => {
      elem.classList.toggle('is-hidden');
    });

    modalContact.forEach(elem => {
      elem.classList.toggle('is-open');
    });
  };

  menuBtnRef.forEach(btn => {
    btn.addEventListener('click', functionButtonCert);
  });

  BtnRef.forEach(btn => {
    btn.addEventListener('click', functionButtonOrder);
  });

  btnContact.forEach(btn => {
    btn.addEventListener('click', functionButtonContact);
  });
})();

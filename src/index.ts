
(() => {
  const openBtn = document.querySelector('.openBtn') as HTMLButtonElement;
  const closesBtn = document.querySelectorAll('.js-btn-close') as NodeList ;
  const modalWrapper = document.querySelector('.modal-section') as HTMLElement;
  const modalContent = document.querySelector('.modal-content') as HTMLElement;
  const initState = false;

  interface Update {
    modalWrapper?: HTMLElement
    modal?: HTMLElement
    validClass?: string
    fadeInClass?: string
    state: boolean
  }
  
  const props = {
    modalWrapper: modalWrapper,
    validClass: "js-isInValid",
    modal: modalContent,
    fadeInClass: "js-fadeIn",
    state: initState
  };

  const updateToggleClass = (params:Update) => {
    params.modalWrapper.classList.toggle(params.validClass, params.state);
    params.modal.classList.toggle(params.fadeInClass, params.state);
  }

  modalContent.addEventListener('click', (event:MouseEvent):void => event.stopPropagation());

  openBtn.addEventListener('click', () => {
    props.state = true;
    updateToggleClass(props);
  });

  closesBtn.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      props.state = false;
      updateToggleClass(props);
    });
  });
})()


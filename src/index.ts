
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
    modal: modalContent,
    validClass: "js-isInValid",
    fadeInClass: "js-fadeIn"
  };

  const updateState = (params:Update) => {
    console.log(params.modal);
    params.modalWrapper.classList.toggle(params.validClass, params.state);
    params.modal.classList.toggle(params.fadeInClass, params.state);
  }

  modalContent.addEventListener('click', (event:MouseEvent):void => event.stopPropagation());

  openBtn.addEventListener('click', () => updateState({
    modalWrapper: props.modalWrapper,
    validClass: props.validClass,
    modal: props.modal,
    fadeInClass: props.fadeInClass,
    state: !initState,
  }));

  closesBtn.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => updateState({
    modalWrapper: props.modalWrapper,
    validClass: props.validClass,
    modal: props.modal,
    fadeInClass: props.fadeInClass,
    state: initState,
    }));
  });
})()


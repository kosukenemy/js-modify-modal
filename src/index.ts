(() => {
  const openBtn = document.querySelector('.openBtn') as HTMLButtonElement;
  const closersBtn = document.querySelectorAll('.js-btn-close') as NodeList ;
  const modalWrapper = document.querySelector('.modal-section') as HTMLElement;
  const modalContent = document.querySelector('.modal-content') as HTMLElement;

  const ValidClass = {
    isInValid : "js-isInValid",
  }
  const init = false;


  interface Update {
    element: HTMLElement,
    validClass: string,
    state: boolean
  }

  const UpdateState = (params:Update) => {
    params.element.classList.toggle(params.validClass, params.state);
  }

  const showModalProps = {   
    element:modalWrapper,
    validClass:ValidClass.isInValid,
    state: init
  }

  const closeModalProps = {   
    element:modalWrapper,
    validClass:ValidClass.isInValid,
    state: !init
  }

  modalContent.onclick = (event:MouseEvent):void => {
    event.stopPropagation();
  };

  openBtn.addEventListener('click', () => {
    UpdateState(showModalProps);
  });

  closersBtn.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      UpdateState(closeModalProps);
    })
  });



})()


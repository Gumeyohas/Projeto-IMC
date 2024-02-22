export const Modal = {
    wrapper:  document.querySelector('.modal-wrapper'),
    result: document.querySelector('#result'),
    closeButton: document.querySelector('.close'),
    open() {
        Modal.wrapper.classList.add("open");
    },
    close() {
        Modal.wrapper.classList.remove("open");
    }
}

Modal.closeButton.onclick = () => Modal.close();

window.addEventListener('keydown', e => {
    if(e.key === 'Escape') {
        Modal.close();
    }
})
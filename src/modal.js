class Modal {
    openModal = async (dish) => {
        const closeBtn = await document.querySelector('.close--button');
        const commentBtn = await dish.querySelector('.load-comment');
        const modalWindow = document.querySelector('.modalholder');
        commentBtn.addEventListener('click', () => {
            modalWindow.style.display = 'flex';
        })
        closeBtn.addEventListener('click', () => {
            modalWindow.style.display = 'none';
        })
    }
}

const modal = new Modal()
export { modal as default }
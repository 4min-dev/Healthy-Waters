document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close__about__delivery__message__button')
    const deliveryMessageContainer = document.querySelector('.about__delivery__header__container')

    if (closeButton && deliveryMessageContainer) {
        closeButton.addEventListener('click', function () {
            deliveryMessageContainer.remove()
        })
    }
})
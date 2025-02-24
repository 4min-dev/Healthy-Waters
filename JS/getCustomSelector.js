document.addEventListener('DOMContentLoaded', () => {
    const getSelectorButtons = document.querySelectorAll('.get__selector__button')

    function handleGetSelector(event) {
        const getSelectorButton = event.currentTarget
        const getSelectorButtonIdentity = getSelectorButton.getAttribute('data-for')
        const selectorWrapper = document.querySelector(getSelectorButtonIdentity)

        const inputContainer = getSelectorButton.closest('.feedback__form__input__content')

        const relatedInput = inputContainer.querySelector('input.feedback__form__input')

        if (selectorWrapper) {
            selectorWrapper.classList.toggle('visible')

            if (selectorWrapper.classList.contains('visible')) {
                relatedInput.classList.add('active')
            } else {
                relatedInput.classList.remove('active')
            }
        }
    }

    getSelectorButtons.forEach((getSelectorButton) =>
        getSelectorButton.addEventListener('click', handleGetSelector)
    )
})
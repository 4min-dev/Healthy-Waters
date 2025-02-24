document.addEventListener('DOMContentLoaded', () => { 
    const citySelectors = document.querySelectorAll('.city__selector')

    function handleCitySelectorValue(event) {
        const citySelectorValue = event.currentTarget
        const citySelectorIdentity = citySelectorValue.getAttribute('data-for')
        const cityInput = document.querySelector(citySelectorIdentity)
        const citySelectorValueTarget = citySelectorValue.getAttribute('data-value')
        
        const parentWrapper = citySelectorValue.closest('.city__selector__wrapper')
        if (parentWrapper) {
            parentWrapper.classList.remove('visible')
            cityInput.classList.remove('active')
        }

        if (cityInput && citySelectorValueTarget) {
            cityInput.value = citySelectorValueTarget
        }
    }

    citySelectors.forEach((citySelector) => {
        citySelector.querySelectorAll('.city__selector__value').forEach((citySelectorValue) => citySelectorValue.addEventListener('click', handleCitySelectorValue))
    })
})
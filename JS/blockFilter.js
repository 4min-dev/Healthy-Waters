document.addEventListener('DOMContentLoaded', () => {
    initializeFilter()

    document.querySelectorAll('.filter__wrapper').forEach(wrapper => {
        wrapper.querySelectorAll('.filter__button').forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault()

                wrapper.querySelectorAll('.filter__button').forEach(btn => {
                    btn.classList.remove('active')
                })

                button.classList.add('active')

                const filterValue = button.getAttribute('data-filter')

                applyFilter(filterValue)
            })
        })
    })
})

function initializeFilter() {
    const firstWrapper = document.querySelector('.filter__wrapper')
    if (!firstWrapper) return

    const firstButton = firstWrapper.querySelector('.filter__button')
    if (!firstButton) return

    firstButton.classList.add('active')

    const defaultFilterValue = firstButton.getAttribute('data-filter')
    applyFilter(defaultFilterValue)
}

function applyFilter(filterValue) {
    document.querySelectorAll('.filter__block[data-filter]').forEach(block => {
        const blockFilterValue = block.getAttribute('data-filter')

        if (filterValue === 'all' || blockFilterValue === filterValue) {
            block.style.display = 'block'
        } else {
            block.style.display = 'none'
        }
    })
}
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".floating__navbar")
    let scrollTimeout

    function getTopValue() {
        if (window.innerWidth >= 1024) {
            return 408
        } else if (window.innerWidth >= 600 && window.innerWidth < 1024) {
            return 192
        }
    }
    
    function getRightValue() {
        if (window.innerWidth >= 1024) {
            return 51
        } else if (window.innerWidth >= 600 && window.innerWidth < 1024) {
            return 19
        }
    }

    function updateNavbarPosition() {
        const scrollTop = window.scrollY

        const topValue = getTopValue()
        const rightValue = getRightValue()

        const newTop = Math.max(topValue, scrollTop + topValue)
        const newRight = rightValue

        navbar.style.top = `${newTop}px`
        navbar.style.right = `${newRight}px`
    }

    window.addEventListener("scroll", () => {
        clearTimeout(scrollTimeout)

        scrollTimeout = setTimeout(() => {
            updateNavbarPosition()
        }, 100)
    })
})
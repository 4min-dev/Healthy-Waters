document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".floating__navbar")
    let scrollTimeout

    function updateNavbarPosition() {
        const scrollTop = window.scrollY

        const newTop = Math.max(408, scrollTop + 408)
        const newRight = 51

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
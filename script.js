// ========================================
// NAVIGASI WEBSITE DENGAN SCROLL
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });

    });

});


// ========================================
// TOMBOL MULAI BELAJAR
// ========================================

function mulaiBelajar() {

    const sejarah = document.querySelector("#sejarah");

    if (sejarah) {
        sejarah.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

}


// ========================================
// KEMBALI KE BERANDA
// ========================================

function backToHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================
// TOMBOL HOME PADA KEYBOARD
// ========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Home") {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

});
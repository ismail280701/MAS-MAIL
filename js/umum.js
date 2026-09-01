"use strict";

/*
 * MAS MAIL
 * JavaScript Umum
 *
 * Fungsi:
 * 1. Transisi antarhalaman
 * 2. Navigasi mobile
 * 3. Menutup menu saat link dipilih
 * 4. Menangani tombol Back browser
 * 5. Reveal animation menggunakan IntersectionObserver
 * 6. Menjaga pengalaman navigasi tetap ringan
 */


/* =========================================
   PAGE TRANSITION
========================================= */

const pageTransition = document.querySelector(".page-transition");


function showPageTransition() {
    if (!pageTransition) return;

    pageTransition.classList.add("is-active");
}


function hidePageTransition() {
    if (!pageTransition) return;

    pageTransition.classList.remove("is-active");
}


/*
 * Saat halaman selesai dimuat,
 * sembunyikan layer transisi.
 */
window.addEventListener("load", () => {
    requestAnimationFrame(() => {
        hidePageTransition();
    });
});


/*
 * Saat pengguna membuka halaman melalui link,
 * tampilkan transisi sebelum berpindah halaman.
 */
document.addEventListener("click", (event) => {

    const link = event.target.closest("a");

    if (!link) return;

    const href = link.getAttribute("href");

    if (!href) return;

    /*
     * Jangan mengganggu:
     * - link anchor (#)
     * - link eksternal
     * - link yang membuka tab baru
     * - download
     */
    if (
        href.startsWith("#") ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        link.target === "_blank" ||
        link.hasAttribute("download")
    ) {
        return;
    }


    /*
     * Hanya jalankan transisi
     * untuk perpindahan halaman internal.
     */
    const currentHost = window.location.host;

    try {

        const targetUrl = new URL(
            href,
            window.location.href
        );

        if (targetUrl.host !== currentHost) {
            return;
        }

    } catch (error) {
        return;
    }


    event.preventDefault();

    showPageTransition();


    /*
     * Beri waktu sedikit agar animasi
     * terlihat sebelum halaman berpindah.
     */
    setTimeout(() => {

        window.location.href = href;

    }, 220);

});


/* =========================================
   MOBILE NAVIGATION
========================================= */

function setupMobileNavigation() {

    const menuToggle = document.querySelector(
        ".menu-toggle, .digital-menu-toggle, .barokah-menu-toggle"
    );

    const mobileNavigation = document.querySelector(
        ".mobile-navigation, .digital-mobile-navigation, .barokah-mobile-navigation"
    );

    if (!menuToggle || !mobileNavigation) return;


    const mobileLinks = mobileNavigation.querySelectorAll("a");


    function openMenu() {

        menuToggle.classList.add("is-active");
        mobileNavigation.classList.add("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Tutup menu navigasi"
        );

        document.body.classList.add("menu-open");
    }


    function closeMenu() {

        menuToggle.classList.remove("is-active");
        mobileNavigation.classList.remove("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Buka menu navigasi"
        );

        document.body.classList.remove("menu-open");
    }


    function toggleMenu() {

        const isOpen =
            mobileNavigation.classList.contains("is-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }


    menuToggle.addEventListener(
        "click",
        toggleMenu
    );


    /*
     * Tutup menu setelah pengguna
     * memilih salah satu navigasi.
     */
    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {
            closeMenu();
        });

    });


    /*
     * Tutup menu ketika klik di luar area menu.
     */
    document.addEventListener("click", (event) => {

        const clickedInsideMenu =
            mobileNavigation.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            mobileNavigation.classList.contains("is-open")
        ) {
            closeMenu();
        }

    });


    /*
     * Tutup menu dengan tombol Escape.
     */
    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") return;

        if (
            mobileNavigation.classList.contains("is-open")
        ) {
            closeMenu();
            menuToggle.focus();
        }

    });


    /*
     * Jika layar berubah ke desktop,
     * pastikan menu mobile kembali tertutup.
     */
    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {
            closeMenu();
        }

    });

}


setupMobileNavigation();


/* =========================================
   SMOOTH SCROLL
========================================= */

function setupSmoothScroll() {

    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );


    anchorLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);

            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}


setupSmoothScroll();


/* =========================================
   REVEAL ANIMATION
========================================= */

function setupRevealAnimation() {

    /*
     * Elemen yang memiliki class ini
     * akan dianimasikan oleh CSS.
     */
    const revealElements =
        document.querySelectorAll(".reveal");


    if (!revealElements.length) return;


    /*
     * Fallback jika browser tidak mendukung
     * IntersectionObserver.
     */
    if (!("IntersectionObserver" in window)) {

        revealElements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }


    const observer =
        new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "is-visible"
                    );


                    /*
                     * Animasi cukup dilakukan sekali.
                     */
                    observerInstance.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealElements.forEach((element) => {
        observer.observe(element);
    });

}


setupRevealAnimation();


/* =========================================
   REDUCED MOTION
========================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


function handleReducedMotion() {

    if (!prefersReducedMotion.matches) {
        return;
    }


    document.documentElement.classList.add(
        "reduce-motion"
    );

}


handleReducedMotion();


if (
    typeof prefersReducedMotion.addEventListener ===
    "function"
) {

    prefersReducedMotion.addEventListener(
        "change",
        handleReducedMotion
    );

}


/* =========================================
   PAGE VISIBILITY
========================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        /*
         * Tidak menjalankan animasi tambahan
         * ketika tab tidak sedang aktif.
         *
         * Ini membantu menjaga penggunaan
         * resource tetap ringan.
         */
        if (document.hidden) {
            return;
        }

    }
);

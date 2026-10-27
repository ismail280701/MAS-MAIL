"use strict";

/* =========================================
   MAS MAIL
   JAVASCRIPT UMUM
========================================= */

/* =========================================
   1. MOBILE NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /*
     * Kita mendukung dua kemungkinan class
     * agar Home dan Digital tetap aman
     *
     * .nav-toggle  → sistem utama
     * .menu-toggle → kompatibilitas dengan HTML lama
     */

    const navToggle =
        document.querySelector(
            "#navToggle, .nav-toggle, .menu-toggle"
        );

    const navMenu =
        document.querySelector(".nav-menu");

    if (!navToggle || !navMenu) {
        return;
    }

    /* =====================================
       OPEN / CLOSE MENU
    ===================================== */

    function openMenu() {

        navToggle.classList.add("active");

        navMenu.classList.add("active");

        navToggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }

    function closeMenu() {

        navToggle.classList.remove("active");

        navMenu.classList.remove("active");

        navToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

    function toggleMenu() {

        const isOpen =
            navMenu.classList.contains("active");

        if (isOpen) {

            closeMenu();

        } else {

            openMenu();

        }

    }

    /* =====================================
       HAMBURGER CLICK
    ===================================== */

    navToggle.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            toggleMenu();

        }
    );

    /* =====================================
       CLICK MENU
    ===================================== */

    navMenu
        .querySelectorAll(".nav-link")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    closeMenu();

                }
            );

        });

    /* =====================================
       CLICK DI LUAR MENU
    ===================================== */

    document.addEventListener(
        "click",
        (event) => {

            const clickedInsideMenu =
                navMenu.contains(event.target);

            const clickedToggle =
                navToggle.contains(event.target);

            if (
                !clickedInsideMenu &&
                !clickedToggle
            ) {

                closeMenu();

            }

        }
    );

    /* =====================================
       ESCAPE KEY
    ===================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );

});

/* =========================================
   2. HEADER SAAT SCROLL
========================================= */

const header =
    document.querySelector(".site-header");

function updateHeader() {

    if (!header) {
        return;
    }

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);

updateHeader();

/* =========================================
   3. SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "revealed"
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

}
/* =========================================
   4. PAGE TRANSITION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const pageTransition =
            document.getElementById(
                "pageTransition"
            );

        const transitionTitle =
            document.getElementById(
                "transitionTitle"
            );

        const transitionSubtitle =
            document.getElementById(
                "transitionSubtitle"
            );

        if (
            !pageTransition ||
            !transitionTitle ||
            !transitionSubtitle
        ) {
            return;
        }

        /* =====================================
           PAGE INFORMATION
        ===================================== */

        const pageInfo = {

            "index.html": {
                title: "Mas Mail",
                subtitle:
                    "Satu Identitas, Dua Perjalanan."
            },

            "digital.html": {
                title: "Mas Mail Digital",
                subtitle:
                    "Digital Creative & Solusi Digital"
            },

            "barokah.html": {
                title: "Mas Mail Barokah",
                subtitle:
                    "Mitra Alfamart & Toko Online"
            }

        };

        /* =====================================
           CURRENT PAGE
        ===================================== */

        const currentPage =
            window.location.pathname
                .split("/")
                .pop() || "index.html";

        const currentInfo =
            pageInfo[currentPage] ||
            pageInfo["index.html"];

        /* =====================================
           SHOW TRANSITION
        ===================================== */

        function showTransition(
            info,
            duration = 1400
        ) {

            transitionTitle.textContent =
                info.title;

            transitionSubtitle.textContent =
                info.subtitle;

            pageTransition.classList.add(
                "active"
            );

            setTimeout(
                () => {

                    pageTransition.classList.remove(
                        "active"
                    );

                },
                duration
            );

        }

        /* =====================================
           OPENING TRANSITION
        ===================================== */

        const openingPlayed =
            sessionStorage.getItem(
                "masMailOpeningPlayed"
            );

        if (!openingPlayed) {

            showTransition(
                currentInfo,
                1400
            );

            sessionStorage.setItem(
                "masMailOpeningPlayed",
                "true"
            );

        }

        /* =====================================
           PAGE NAVIGATION
        ===================================== */

        document
            .querySelectorAll(
                'a[href$=".html"]'
            )
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    (event) => {

                        const href =
                            link.getAttribute(
                                "href"
                            );

                        if (
                            !href ||
                            href.startsWith("#") ||
                            link.target === "_blank"
                        ) {
                            return;
                        }

                        const targetPage =
                            href
                                .split("/")
                                .pop();

                        const info =
                            pageInfo[targetPage];

                        if (!info) {
                            return;
                        }

                        event.preventDefault();

                        showTransition(
                            info,
                            650
                        );

                        setTimeout(
                            () => {

                                window.location.href =
                                    href;

                            },
                            650
                        );

                    }
                );

            });

        /* =====================================
           BROWSER BACK / FORWARD
        ===================================== */

        window.addEventListener(
            "pageshow",
            (event) => {

                /*
                 * Jika halaman dikembalikan
                 * melalui browser history / BFCache,
                 * tampilkan transition kembali.
                 */

                const navigationEntries =
                    performance.getEntriesByType(
                        "navigation"
                    );

                const navigationEntry =
                    navigationEntries.length > 0
                        ? navigationEntries[0]
                        : null;

                const isHistoryNavigation =
                    navigationEntry &&
                    navigationEntry.type ===
                        "back_forward";

                const isBFCacheRestore =
                    event.persisted === true;

                if (
                    isHistoryNavigation ||
                    isBFCacheRestore
                ) {

                    showTransition(
                        currentInfo,
                        1400
                    );

                }

            }
        );

    }
);
/* =========================================
   GLOBAL FLOATING PREMIUM
   MAS MAIL — ALL PAGES
========================================= */

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.mm-floating')) return;

    const WHATSAPP_NUMBER = '6282253652317';
    const SCROLL_THRESHOLD = 180;

    const floating = document.createElement('div');
    floating.className = 'mm-floating';
    floating.setAttribute('aria-label', 'Navigasi cepat');

    // WHATSAPP BUTTON
    const whatsapp = document.createElement('a');
    whatsapp.className = 'mm-floating-wa';
    whatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Mas Mail, saya ingin konsultasi mengenai layanan atau produk Mas Mail.')}`;
    whatsapp.target = '_blank';
    whatsapp.rel = 'noopener noreferrer';
    whatsapp.setAttribute('aria-label', 'Konsultasi melalui WhatsApp');
    whatsapp.title = 'Konsultasi WhatsApp';

    whatsapp.innerHTML = `
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 .8A15.1 15.1 0 0 0 3 23.5L.8 31.2l7.9-2.1A15.2 15.2 0 1 0 16 .8zm0 27.5a12.2 12.2 0 0 1-6.2-1.7l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.3 12.3 0 1 1 16 28.3zm6.7-9.2c-.4-.2-2.2-1.1-2.5-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3 0-.5-.1-.7l-1.1-2.7c-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.3s1.5 3.8 1.7 4c.2.3 2.9 4.4 7 6.2 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z"/>
        </svg>
    `;

    // REUSE EXISTING BACK-TO-HERO BUTTON
    let backToTop = document.getElementById('backToHero');

    if (!backToTop) {
        backToTop = document.createElement('button');
        backToTop.id = 'backToHero';
        backToTop.type = 'button';
    }

    backToTop.classList.add('mm-floating-top');
    backToTop.setAttribute('aria-label', 'Kembali ke atas');
    backToTop.title = 'Kembali ke atas';

    backToTop.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 19V5"/>
            <path d="m5 12 7-7 7 7"/>
        </svg>
    `;

    floating.appendChild(backToTop);
    floating.appendChild(whatsapp);
    document.body.appendChild(floating);

    // SCROLL TO TOP
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                ? 'instant'
                : 'smooth'
        });
    });

    // SCROLL VISIBILITY
    let ticking = false;

    function updateFloating() {
        floating.classList.toggle(
            'is-scrolled',
            window.scrollY > SCROLL_THRESHOLD
        );
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateFloating);
            ticking = true;
        }
    }, { passive: true });

    updateFloating();
});

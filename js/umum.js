/* =========================================================
   MAS MAIL
   UMUM JS — GLOBAL WEBSITE CONTROLLER
   File: js/umum.js

   FUNGSI:
   1. Page transition
   2. Back to top
   3. Mobile menu body lock
   4. External link protection
   5. Button interaction
   6. Global utility
   ========================================================= */


document.addEventListener(
    'DOMContentLoaded',
    function () {


        /* =================================================
           01. GLOBAL STATE
        ================================================= */

        const body =
            document.body;

        const html =
            document.documentElement;


        let pageIsChanging = false;


        /* =================================================
           02. PAGE TRANSITION
        ================================================= */

        const pageTransition =
            document.getElementById(
                'pageTransition'
            );


        /*
         * Membuka halaman dengan animasi.
         */

        function startPageTransition() {

            if (!pageTransition) {

                return;

            }


            pageTransition.classList.add(
                'is-active'
            );

        }


        /*
         * Menutup animasi ketika halaman
         * sudah selesai dimuat.
         */

        function finishPageTransition() {

            if (!pageTransition) {

                return;

            }


            window.setTimeout(
                function () {

                    pageTransition.classList.remove(
                        'is-active'
                    );

                },
                120
            );

        }


        finishPageTransition();


        /* =================================================
           03. LINK INTERNAL
        ================================================= */

        const internalLinks =
            document.querySelectorAll(
                'a.page-link'
            );


        internalLinks.forEach(
            function (link) {

                link.addEventListener(
                    'click',
                    function (event) {

                        const href =
                            link.getAttribute(
                                'href'
                            );


                        /*
                         * Tidak melakukan apa pun
                         * jika link kosong.
                         */

                        if (
                            !href ||
                            href === '#'
                        ) {

                            return;

                        }


                        /*
                         * Link eksternal tidak
                         * menggunakan page transition.
                         */

                        if (
                            href.startsWith(
                                'http://'
                            ) ||
                            href.startsWith(
                                'https://'
                            )
                        ) {

                            return;

                        }


                        /*
                         * Jika sedang berpindah,
                         * cegah klik berulang.
                         */

                        if (pageIsChanging) {

                            event.preventDefault();

                            return;

                        }


                        pageIsChanging =
                            true;


                        event.preventDefault();


                        startPageTransition();


                        window.setTimeout(
                            function () {

                                window.location.href =
                                    href;

                            },
                            350
                        );

                    }
                );

            }
        );


        /* =================================================
           04. BACK TO TOP
        ================================================= */

        const backToTopButtons =
            document.querySelectorAll(
                '.back-to-top'
            );


        /*
         * Fungsi scroll ke bagian paling atas.
         *
         * Bisa digunakan pada halaman
         * yang memiliki scrolling normal.
         */

        function scrollToTop(
            scrollContainer
        ) {


            if (scrollContainer) {

                scrollContainer.scrollTo(
                    {
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    }
                );

                return;

            }


            window.scrollTo(
                {
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                }
            );

        }


        /*
         * Tombol back-to-top.
         */

        backToTopButtons.forEach(
            function (button) {

                button.addEventListener(
                    'click',
                    function (event) {

                        event.preventDefault();


                        /*
                         * Jika tombol berada
                         * di dalam container
                         * yang dapat di-scroll,
                         * cari container tersebut.
                         */

                        const customContainer =
                            button.closest(
                                '[data-scroll-container]'
                            );


                        scrollToTop(
                            customContainer
                        );

                    }
                );

            }
        );


        /* =================================================
           05. AUTO SHOW BACK TO TOP
        ================================================= */

        /*
         * Elemen dengan class:
         *
         * .back-to-top
         *
         * akan muncul ketika user
         * sudah melakukan scrolling.
         */

        function setupBackToTop(
            button,
            container
        ) {


            if (!button) {

                return;

            }


            const scrollTarget =
                container || window;


            function updateButton() {


                let scrollPosition;


                if (
                    scrollTarget === window
                ) {

                    scrollPosition =
                        window.scrollY;

                } else {

                    scrollPosition =
                        scrollTarget.scrollTop;

                }


                if (
                    scrollPosition >
                    280
                ) {

                    button.classList.add(
                        'is-visible'
                    );

                } else {

                    button.classList.remove(
                        'is-visible'
                    );

                }

            }


            scrollTarget.addEventListener(
                'scroll',
                updateButton,
                {
                    passive: true
                }
            );


            updateButton();

        }


        /*
         * Back-to-top halaman normal.
         */

        document
            .querySelectorAll(
                '.back-to-top'
            )
            .forEach(
                function (button) {

                    const container =
                        button.closest(
                            '[data-scroll-container]'
                        );


                    setupBackToTop(
                        button,
                        container
                    );

                }
            );


        /* =================================================
           06. MOBILE MENU BODY LOCK
        ================================================= */

        /*
         * Fungsi ini sengaja dibuat global
         * agar navbar Digital dan Barokah
         * bisa menggunakannya.
         */

        window.masMailLockBody =
            function () {

                html.classList.add(
                    'menu-open'
                );

                body.classList.add(
                    'menu-open'
                );

            };


        window.masMailUnlockBody =
            function () {

                html.classList.remove(
                    'menu-open'
                );

                body.classList.remove(
                    'menu-open'
                );

            };


        /* =================================================
           07. CLOSE MENU WHEN CLICKING OUTSIDE
        ================================================= */

        document.addEventListener(
            'click',
            function (event) {


                /*
                 * Cari navbar yang sedang terbuka.
                 */

                const activeNavigation =
                    document.querySelector(
                        '[data-navigation].is-open'
                    );


                if (!activeNavigation) {

                    return;

                }


                /*
                 * Jika klik terjadi
                 * di dalam navbar,
                 * jangan tutup.
                 */

                if (
                    activeNavigation.contains(
                        event.target
                    )
                ) {

                    return;

                }


                /*
                 * Cari tombol menu.
                 */

                const menuButton =
                    document.querySelector(
                        '[data-menu-toggle].is-active'
                    );


                /*
                 * Tutup navbar melalui
                 * click event agar semua
                 * animasi tetap konsisten.
                 */

                if (menuButton) {

                    menuButton.click();

                }

            }
        );


        /* =================================================
           08. ESCAPE KEY
        ================================================= */

        document.addEventListener(
            'keydown',
            function (event) {


                if (
                    event.key !== 'Escape'
                ) {

                    return;

                }


                const activeMenuButton =
                    document.querySelector(
                        '[data-menu-toggle].is-active'
                    );


                if (activeMenuButton) {

                    activeMenuButton.click();

                }

            }
        );


        /* =================================================
           09. EXTERNAL LINKS
        ================================================= */

        const externalLinks =
            document.querySelectorAll(
                'a[target="_blank"]'
            );


        externalLinks.forEach(
            function (link) {

                const rel =
                    link.getAttribute(
                        'rel'
                    );


                /*
                 * Pastikan link eksternal
                 * memiliki perlindungan
                 * noopener noreferrer.
                 */

                if (
                    !rel ||
                    !rel.includes(
                        'noopener'
                    )
                ) {

                    link.setAttribute(
                        'rel',
                        'noopener noreferrer'
                    );

                }

            }
        );


        /* =================================================
           10. BUTTON PRESS EFFECT
        ================================================= */

        const interactiveElements =
            document.querySelectorAll(
                'button, .main-button, .card-button, .contact-item'
            );


        interactiveElements.forEach(
            function (element) {

                element.addEventListener(
                    'pointerdown',
                    function () {

                        element.classList.add(
                            'is-pressed'
                        );

                    }
                );


                element.addEventListener(
                    'pointerup',
                    function () {

                        element.classList.remove(
                            'is-pressed'
                        );

                    }
                );


                element.addEventListener(
                    'pointercancel',
                    function () {

                        element.classList.remove(
                            'is-pressed'
                        );

                    }
                );


                element.addEventListener(
                    'pointerleave',
                    function () {

                        element.classList.remove(
                            'is-pressed'
                        );

                    }
                );

            }
        );


        /* =================================================
           11. PREVENT DOUBLE TAP ZOOM
           ================================================= */

        let lastTouchEnd =
            0;


        document.addEventListener(
            'touchend',
            function (event) {

                const now =
                    Date.now();


                if (
                    now -
                    lastTouchEnd
                    <=
                    280
                ) {

                    event.preventDefault();

                }


                lastTouchEnd =
                    now;

            },
            {
                passive: false
            }
        );


        /* =================================================
           12. IMAGE LOAD FALLBACK
        ================================================= */

        /*
         * Jika gambar gagal dimuat,
         * kita tambahkan class error.
         *
         * Nanti CSS masing-masing halaman
         * dapat memberikan tampilan fallback.
         */

        const images =
            document.querySelectorAll(
                'img'
            );


        images.forEach(
            function (image) {

                image.addEventListener(
                    'error',
                    function () {

                        image.classList.add(
                            'image-error'
                        );

                    }
                );

            }
        );


        /* =================================================
           13. PAGE VISIBILITY
        ================================================= */

        /*
         * Ketika user kembali ke tab,
         * halaman tetap berada pada kondisi
         * normal tanpa memicu animasi aneh.
         */

        document.addEventListener(
            'visibilitychange',
            function () {

                if (
                    document.visibilityState ===
                    'visible'
                ) {

                    pageIsChanging =
                        false;

                }

            }
        );


        /* =================================================
           14. GLOBAL API
        ================================================= */

        /*
         * Fungsi ini dapat dipakai oleh
         * home.js, digital.js,
         * dan barokah.js.
         */

        window.masMail =
            {

                startPageTransition:
                    startPageTransition,

                finishPageTransition:
                    finishPageTransition,

                scrollToTop:
                    scrollToTop,

                lockBody:
                    window.masMailLockBody,

                unlockBody:
                    window.masMailUnlockBody

            };


        /* =================================================
           15. READY
        ================================================= */

        document.documentElement.classList.add(
            'mas-mail-ready'
        );


    }
);


/* =========================================================
   END — UMUM.JS
   ========================================================= */

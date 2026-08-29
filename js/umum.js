// =========================================================
// MAS MAIL — GLOBAL JAVASCRIPT
// File: umum.js
// =========================================================


document.addEventListener('DOMContentLoaded', function () {


    // =====================================================
    // 01. PAGE TRANSITION
    // =====================================================

    const pageTransition =
        document.getElementById('pageTransition');


    /*
     * Saat halaman selesai dibuka,
     * sembunyikan layer transition.
     */

    if (pageTransition) {

        window.setTimeout(function () {

            pageTransition.classList.remove('is-active');

        }, 150);

    }


    /*
     * Saat tombol/link menuju halaman lain diklik,
     * tampilkan animasi transition terlebih dahulu.
     */

    const pageLinks =
        document.querySelectorAll('.page-link');


    pageLinks.forEach(function (link) {

        link.addEventListener('click', function (event) {

            const destination =
                link.getAttribute('href');


            /*
             * Jangan melakukan transition
             * untuk link kosong.
             */

            if (
                !destination ||
                destination === '#' ||
                destination.startsWith('#')
            ) {

                return;

            }


            /*
             * Link eksternal tetap dibuka normal.
             */

            if (
                link.target === '_blank' ||
                destination.startsWith('http')
            ) {

                return;

            }


            event.preventDefault();


            if (pageTransition) {

                pageTransition.classList.add('is-active');

            }


            window.setTimeout(function () {

                window.location.href =
                    destination;

            }, 450);

        });

    });


    // =====================================================
    // 02. BACK BUTTON BROWSER
    // =====================================================

    window.addEventListener('pageshow', function () {

        if (pageTransition) {

            pageTransition.classList.remove(
                'is-active'
            );

        }

    });


    // =====================================================
    // 03. GENERAL INTERACTION
    // =====================================================

    const interactiveElements =
        document.querySelectorAll(
            'a, button'
        );


    interactiveElements.forEach(function (element) {

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
            'pointerleave',
            function () {

                element.classList.remove(
                    'is-pressed'
                );

            }
        );

    });


});

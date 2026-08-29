// =========================================================
// MAS MAIL — HOME APP CONTROLLER
// File: home.js
// =========================================================


document.addEventListener('DOMContentLoaded', function () {


    // =====================================================
    // 01. SECTION SYSTEM
    // =====================================================

    const homePage =
        document.querySelector('.home-page');


    const sections =
        Array.from(
            document.querySelectorAll('.home-section')
        );


    if (!homePage || sections.length === 0) {

        return;

    }


    let currentSection = 0;

    let isChanging = false;


    // =====================================================
    // 02. SET INITIAL SECTION
    // =====================================================

    sections.forEach(function (section, index) {

        section.classList.remove(
            'is-active',
            'is-entering',
            'is-leaving'
        );


        if (index === 0) {

            section.classList.add(
                'is-active'
            );

        } else {

            section.classList.add(
                'is-entering'
            );

        }

    });


    // =====================================================
    // 03. CHANGE SECTION
    // =====================================================

    function changeSection(
        targetIndex,
        direction
    ) {


        if (isChanging) {

            return;

        }


        if (
            targetIndex < 0 ||
            targetIndex >= sections.length
        ) {

            return;

        }


        if (
            targetIndex === currentSection
        ) {

            return;

        }


        isChanging = true;


        const current =
            sections[currentSection];


        const next =
            sections[targetIndex];


        /*
         * Tentukan arah masuk.
         */

        if (direction === 'next') {

            next.style.transform =
                'translateY(35px) scale(1.035)';

        } else {

            next.style.transform =
                'translateY(-35px) scale(1.035)';

        }


        next.classList.remove(
            'is-entering'
        );


        next.classList.add(
            'is-active'
        );


        current.classList.remove(
            'is-active'
        );


        current.classList.add(
            'is-leaving'
        );


        /*
         * Paksa browser membaca perubahan
         * sebelum menjalankan transisi.
         */

        void next.offsetWidth;


        next.style.transform =
            'translateY(0) scale(1)';


        currentSection =
            targetIndex;


        /*
         * Bersihkan section lama.
         */

        window.setTimeout(
            function () {

                current.classList.remove(
                    'is-leaving'
                );


                current.style.transform = '';


                next.style.transform = '';


                isChanging = false;

            },

            800
        );

    }


    // =====================================================
    // 04. BUTTON NAVIGATION
    // =====================================================

    const sectionButtons =
        document.querySelectorAll(
            '[data-scroll-target]'
        );


    sectionButtons.forEach(function (button) {

        button.addEventListener(
            'click',
            function () {

                const targetId =
                    button.getAttribute(
                        'data-scroll-target'
                    );


                const target =
                    document.getElementById(
                        targetId
                    );


                if (!target) {

                    return;

                }


                const targetIndex =
                    sections.indexOf(target);


                if (targetIndex === -1) {

                    return;

                }


                const direction =
                    targetIndex >
                    currentSection
                        ? 'next'
                        : 'previous';


                changeSection(
                    targetIndex,
                    direction
                );

            }
        );

    });


    // =====================================================
    // 05. KEYBOARD NAVIGATION
    // =====================================================

    document.addEventListener(
        'keydown',
        function (event) {


            /*
             * Tombol keyboard yang bisa digunakan:
             *
             * ArrowDown
             * ArrowRight
             * ArrowUp
             * ArrowLeft
             */

            if (
                event.key === 'ArrowDown' ||
                event.key === 'ArrowRight'
            ) {

                event.preventDefault();


                changeSection(
                    currentSection + 1,
                    'next'
                );

            }


            if (
                event.key === 'ArrowUp' ||
                event.key === 'ArrowLeft'
            ) {

                event.preventDefault();


                changeSection(
                    currentSection - 1,
                    'previous'
                );

            }

        }
    );


    // =====================================================
    // 06. MOUSE WHEEL
    // =====================================================

    /*
     * Mouse wheel TIDAK melakukan scroll.
     *
     * Satu gerakan wheel dianggap sebagai
     * satu perpindahan section.
     *
     * Jadi website tetap terasa seperti aplikasi.
     */

    let wheelLocked = false;


    homePage.addEventListener(
        'wheel',
        function (event) {

            event.preventDefault();


            if (
                wheelLocked ||
                isChanging
            ) {

                return;

            }


            wheelLocked = true;


            if (event.deltaY > 0) {

                changeSection(
                    currentSection + 1,
                    'next'
                );

            } else if (
                event.deltaY < 0
            ) {

                changeSection(
                    currentSection - 1,
                    'previous'
                );

            }


            window.setTimeout(
                function () {

                    wheelLocked = false;

                },

                850
            );

        },
        {
            passive: false
        }
    );


    // =====================================================
    // 07. TOUCH SWIPE
    // =====================================================

    let touchStartY = 0;

    let touchEndY = 0;


    homePage.addEventListener(
        'touchstart',
        function (event) {

            touchStartY =
                event.changedTouches[0].screenY;

        },
        {
            passive: true
        }
    );


    homePage.addEventListener(
        'touchend',
        function (event) {

            touchEndY =
                event.changedTouches[0].screenY;


            const difference =
                touchStartY -
                touchEndY;


            /*
             * Swipe minimal 50px.
             */

            if (
                Math.abs(difference) < 50
            ) {

                return;

            }


            if (difference > 0) {

                changeSection(
                    currentSection + 1,
                    'next'
                );

            } else {

                changeSection(
                    currentSection - 1,
                    'previous'
                );

            }

        },
        {
            passive: true
        }
    );


    // =====================================================
    // 08. REVEAL ANIMATION
    // =====================================================

    function animateSection(
        section
    ) {

        const items =
            section.querySelectorAll(
                '.reveal-item'
            );


        items.forEach(
            function (item, index) {

                item.classList.remove(
                    'is-visible'
                );


                window.setTimeout(
                    function () {

                        item.classList.add(
                            'is-visible'
                        );

                    },

                    100 +
                    (index * 100)
                );

            }
        );

    }


    /*
     * Jalankan animasi Home pertama.
     */

    window.setTimeout(
        function () {

            animateSection(
                sections[0]
            );

        },

        150
    );


    // =====================================================
    // 09. ANIMATE EVERY NEW SECTION
    // =====================================================

    sections.forEach(
        function (section) {

            section.addEventListener(
                'transitionstart',
                function () {

                    if (
                        section.classList.contains(
                            'is-active'
                        )
                    ) {

                        animateSection(
                            section
                        );

                    }

                }
            );

        }
    );


    // =====================================================
    // 10. PREVENT NORMAL PAGE SCROLL
    // =====================================================

    document.addEventListener(
        'touchmove',
        function (event) {

            if (
                homePage.contains(
                    event.target
                )
            ) {

                event.preventDefault();

            }

        },
        {
            passive: false
        }
    );


});

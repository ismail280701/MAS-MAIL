// =========================================================
// MAS MAIL — HOME JAVASCRIPT
// File: home.js
// =========================================================


document.addEventListener('DOMContentLoaded', function () {


    // =====================================================
    // 01. SECTION NAVIGATION
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


                target.scrollIntoView({

                    behavior: 'smooth',

                    block: 'start'

                });

            }
        );

    });


    // =====================================================
    // 02. REVEAL ANIMATION
    // =====================================================

    const revealItems =
        document.querySelectorAll(
            '.reveal-item'
        );


    /*
     * Intersection Observer membuat elemen
     * muncul ketika section mulai terlihat.
     */

    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            'is-visible'
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealItems.forEach(function (item) {

        revealObserver.observe(item);

    });


    // =====================================================
    // 03. STAGGER ANIMATION
    // =====================================================

    const brandCards =
        document.querySelectorAll(
            '.brand-card'
        );


    brandCards.forEach(function (card, index) {

        card.style.transitionDelay =
            (index * 100) + 'ms';

    });


    const contactItems =
        document.querySelectorAll(
            '.contact-item'
        );


    contactItems.forEach(function (item, index) {

        item.style.transitionDelay =
            (index * 80) + 'ms';

    });


    // =====================================================
    // 04. KEYBOARD NAVIGATION
    // =====================================================

    const homeSections =
        document.querySelectorAll(
            '.home-section'
        );


    let currentSection = 0;


    function getCurrentSection() {

        const scrollPosition =
            window.scrollY +
            (window.innerHeight * 0.45);


        homeSections.forEach(
            function (section, index) {

                const sectionTop =
                    section.offsetTop;

                const sectionBottom =
                    sectionTop +
                    section.offsetHeight;


                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                ) {

                    currentSection = index;

                }

            }
        );

    }


    window.addEventListener(
        'scroll',
        getCurrentSection,
        {
            passive: true
        }
    );


    /*
     * Panah keyboard:
     *
     * ArrowDown → section berikutnya
     * ArrowUp   → section sebelumnya
     *
     * Tidak aktif ketika user sedang mengetik.
     */

    document.addEventListener(
        'keydown',
        function (event) {

            const activeElement =
                document.activeElement;


            const isTyping =
                activeElement &&
                (
                    activeElement.tagName ===
                    'INPUT' ||

                    activeElement.tagName ===
                    'TEXTAREA' ||

                    activeElement.isContentEditable
                );


            if (isTyping) {

                return;

            }


            if (
                event.key ===
                'ArrowDown'
            ) {

                event.preventDefault();


                if (
                    currentSection <
                    homeSections.length - 1
                ) {

                    currentSection++;

                    homeSections[
                        currentSection
                    ].scrollIntoView({

                        behavior: 'smooth'

                    });

                }

            }


            if (
                event.key ===
                'ArrowUp'
            ) {

                event.preventDefault();


                if (
                    currentSection >
                    0
                ) {

                    currentSection--;

                    homeSections[
                        currentSection
                    ].scrollIntoView({

                        behavior: 'smooth'

                    });

                }

            }

        }
    );


    // =====================================================
    // 05. INITIAL REVEAL
    // =====================================================

    window.setTimeout(function () {

        const firstItems =
            document.querySelectorAll(
                '#homeHero .reveal-item'
            );


        firstItems.forEach(
            function (item, index) {

                window.setTimeout(
                    function () {

                        item.classList.add(
                            'is-visible'
                        );

                    },

                    index * 120
                );

            }
        );

    }, 250);


});

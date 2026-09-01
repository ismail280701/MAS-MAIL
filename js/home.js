/* =========================================================
   MAS MAIL — HOME CONTROLLER
   HOME NAVIGATION SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const homePage = document.querySelector(".home-page");

    if (!homePage) {
        return;
    }


    /* =====================================================
       01. SECTION
       ===================================================== */

    const sections = Array.from(
        homePage.querySelectorAll(".home-section")
    );

    if (sections.length === 0) {
        return;
    }


    /* =====================================================
       02. STATE
       ===================================================== */

    let currentIndex = 0;
    let isTransitioning = false;


    /* =====================================================
       03. RESET SECTION
       ===================================================== */

    function resetSection(section) {

        if (!section) {
            return;
        }

        section.scrollTop = 0;
        section.scrollLeft = 0;

    }


    /* =====================================================
       04. SET SECTION
       ===================================================== */

    function setInitialState() {

        sections.forEach(function (section, index) {

            resetSection(section);

            section.classList.remove(
                "is-active",
                "is-leaving",
                "is-entering"
            );

            if (index === 0) {

                section.classList.add(
                    "is-active"
                );

            } else {

                section.classList.add(
                    "is-entering"
                );

            }

        });

        currentIndex = 0;

    }


    setInitialState();


    /* =====================================================
       05. ANIMASI ISI
       ===================================================== */

    function animateSection(section) {

        if (!section) {
            return;
        }

        const items =
            section.querySelectorAll(
                ".reveal-item"
            );

        items.forEach(function (item) {

            item.classList.remove(
                "is-visible"
            );

        });


        items.forEach(function (item, index) {

            window.setTimeout(
                function () {

                    item.classList.add(
                        "is-visible"
                    );

                },
                100 + (index * 80)
            );

        });

    }


    /* =====================================================
       06. HISTORY
       ===================================================== */

    const initialState = {
        masMailHome: true,
        section: 0
    };


    history.replaceState(
        initialState,
        "",
        window.location.href
    );


    function createHistory(index) {

        history.pushState(
            {
                masMailHome: true,
                section: index
            },
            "",
            window.location.href
        );

    }


    /* =====================================================
       07. PINDAH SECTION
       ===================================================== */

    function goToSection(
        targetIndex,
        useHistory
    ) {

        if (targetIndex < 0) {
            return;
        }

        if (targetIndex >= sections.length) {
            return;
        }

        if (targetIndex === currentIndex) {
            return;
        }

        if (isTransitioning) {
            return;
        }


        const current =
            sections[currentIndex];

        const next =
            sections[targetIndex];


        if (!current || !next) {
            return;
        }


        isTransitioning = true;


        /* -----------------------------------------------
           RESET SCROLL SECTION TUJUAN
        ------------------------------------------------ */

        resetSection(next);


        /* -----------------------------------------------
           AKTIFKAN SECTION BARU
        ------------------------------------------------ */

        next.classList.remove(
            "is-entering",
            "is-leaving"
        );

        next.classList.add(
            "is-active"
        );


        /* -----------------------------------------------
           KELUARKAN SECTION LAMA
        ------------------------------------------------ */

        current.classList.remove(
            "is-active"
        );

        current.classList.add(
            "is-leaving"
        );


        /* -----------------------------------------------
           UPDATE INDEX
        ------------------------------------------------ */

        currentIndex =
            targetIndex;


        /* -----------------------------------------------
           HISTORY
        ------------------------------------------------ */

        if (useHistory) {

            createHistory(
                targetIndex
            );

        }


        /* -----------------------------------------------
           ANIMASI
        ------------------------------------------------ */

        animateSection(
            next
        );


        /* -----------------------------------------------
           SELESAIKAN
        ------------------------------------------------ */

        window.setTimeout(
            function () {

                current.classList.remove(
                    "is-leaving"
                );

                isTransitioning = false;

            },
            550
        );

    }


    /* =====================================================
       08. TOMBOL SECTION
       ===================================================== */

    const sectionButtons =
        homePage.querySelectorAll(
            "[data-section-target]"
        );


    sectionButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();


                    const targetId =
                        button.getAttribute(
                            "data-section-target"
                        );


                    if (!targetId) {
                        return;
                    }


                    const target =
                        document.getElementById(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    const targetIndex =
                        sections.indexOf(
                            target
                        );


                    if (targetIndex === -1) {
                        return;
                    }


                    goToSection(
                        targetIndex,
                        true
                    );

                }
            );

        }
    );


    /* =====================================================
       09. BACK ANDROID / BROWSER
       ===================================================== */

    window.addEventListener(
        "popstate",
        function (event) {

            const state =
                event.state;


            if (
                !state ||
                state.masMailHome !== true
            ) {

                return;

            }


            const targetIndex =
                Number(
                    state.section
                );


            if (
                Number.isNaN(
                    targetIndex
                )
            ) {

                return;

            }


            if (
                targetIndex === currentIndex
            ) {

                return;

            }


            /*
             * Saat Back ditekan,
             * jangan membuat history baru.
             */

            goToSection(
                targetIndex,
                false
            );

        }
    );


    /* =====================================================
       10. TOMBOL AWAL
       ===================================================== */

    const homeButtons =
        homePage.querySelectorAll(
            "[data-home-target]"
        );


    homeButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();


                    goToSection(
                        0,
                        true
                    );

                }
            );

        }
    );


    /* =====================================================
       11. ANIMASI AWAL
       ===================================================== */

    window.setTimeout(
        function () {

            animateSection(
                sections[0]
            );

        },
        150
    );


    /* =====================================================
       12. PUBLIC API
       ===================================================== */

    window.masMailHome = {

        goToSection: function (index) {

            goToSection(
                index,
                true
            );

        },

        getCurrentSection: function () {

            return currentIndex;

        }

    };

});

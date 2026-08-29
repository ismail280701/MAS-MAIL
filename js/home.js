// =========================================================
// MAS MAIL — HOME CONTROLLER
// FINAL NAVIGATION VERSION
//
// Scroll = membaca isi section
// Tombol = pindah section
// Android Back = kembali ke section sebelumnya
// =========================================================


document.addEventListener(
    'DOMContentLoaded',
    function () {


        // =================================================
        // 01. ELEMENT
        // =================================================

        const homePage =
            document.querySelector(
                '.home-page'
            );


        const sections =
            Array.from(
                document.querySelectorAll(
                    '.home-section'
                )
            );


        if (
            !homePage ||
            sections.length === 0
        ) {

            return;

        }


        let currentSection = 0;

        let isChanging = false;


        // =================================================
        // 02. INITIAL STATE
        // =================================================

        sections.forEach(
            function (
                section,
                index
            ) {

                section.classList.remove(
                    'is-active',
                    'is-leaving',
                    'is-entering'
                );


                if (
                    index === 0
                ) {

                    section.classList.add(
                        'is-active'
                    );

                } else {

                    section.classList.add(
                        'is-entering'
                    );

                }

            }
        );


        // =================================================
        // 03. HISTORY SYSTEM
        // =================================================
        //
        // Setiap perpindahan section membuat history browser.
        //
        // Contoh:
        //
        // Home
        //   ↓
        // Section 2
        //   ↓
        // Section 3
        //
        // Tekan Back Android:
        //
        // Section 3
        //   ↓
        // Section 2
        //
        // =================================================


        history.replaceState(
            {
                homeSection: 0
            },
            '',
            window.location.href
        );


        function pushSectionHistory(
            sectionIndex
        ) {

            history.pushState(
                {
                    homeSection:
                        sectionIndex
                },
                '',
                window.location.href
            );

        }


        // =================================================
        // 04. CHANGE SECTION
        // =================================================

        function changeSection(
            targetIndex,
            direction,
            addHistory
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
                sections[
                    currentSection
                ];


            const next =
                sections[
                    targetIndex
                ];


            // ---------------------------------------------
            // SET KE ATAS
            // ---------------------------------------------

            next.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
});


            // ---------------------------------------------
            // ARAH ANIMASI
            // ---------------------------------------------

            if (
                direction === 'next'
            )
            // ---------------------------------------------
            // TAMPILKAN SECTION BARU
            // ---------------------------------------------

            next.classList.remove(
                'is-entering'
            );


            next.classList.add(
                'is-active'
            );


            // ---------------------------------------------
            // SECTION LAMA KELUAR
            // ---------------------------------------------

            current.classList.remove(
                'is-active'
            );


            current.classList.add(
                'is-leaving'
            );


            // ---------------------------------------------
            // TRIGGER TRANSITION
            // ---------------------------------------------

            void next.offsetWidth;

            currentSection =
                targetIndex;


            // ---------------------------------------------
            // SIMPAN HISTORY
            // ---------------------------------------------

            if (addHistory) {

                pushSectionHistory(
                    targetIndex
                );

            }


            // ---------------------------------------------
            // BERSIHKAN
            // ---------------------------------------------

            window.setTimeout(
                function () {

                    current.classList.remove(
                        'is-leaving'
                    );

                    isChanging = false;

                },
                700
            );

        }


        // =================================================
        // 05. BUTTON NAVIGATION
        // =================================================

        const sectionButtons =
            document.querySelectorAll(
                '[data-scroll-target]'
            );


        sectionButtons.forEach(
            function (button) {

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
                            sections.indexOf(
                                target
                            );


                        if (
                            targetIndex === -1
                        ) {

                            return;

                        }


                        const direction =
                            targetIndex >
                            currentSection
                                ? 'next'
                                : 'previous';


                        changeSection(
                            targetIndex,
                            direction,
                            true
                        );

                    }
                );

            }
        );


        // =================================================
        // 06. ANDROID / BROWSER BACK BUTTON
        // =================================================

        window.addEventListener(
            'popstate',
            function (event) {


                const state =
                    event.state;


                if (
                    state &&
                    typeof state.homeSection ===
                    'number'
                ) {


                    const targetIndex =
                        state.homeSection;


                    const direction =
                        targetIndex >
                        currentSection
                            ? 'next'
                            : 'previous';


                    changeSection(
                        targetIndex,
                        direction,
                        false
                    );


                }

            }
        );


        // =================================================
        // 07. REVEAL ANIMATION
        // =================================================

        function animateSection(
            section
        ) {


            const items =
                section.querySelectorAll(
                    '.reveal-item'
                );


            items.forEach(
                function (
                    item,
                    index
                ) {


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
                        (
                            index * 100
                        )

                    );

                }
            );

        }


        // =================================================
        // 08. ANIMASI SECTION PERTAMA
        // =================================================

        window.setTimeout(
            function () {

                animateSection(
                    sections[0]
                );

            },

            150
        );


        // =================================================
        // 09. ANIMASI SECTION BARU
        // =================================================

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


    }
);

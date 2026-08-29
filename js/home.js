// =========================================================
// MAS MAIL — HOME CONTROLLER
// FINAL APP-STYLE NAVIGATION
//
// Scroll  = membaca isi section
// Tombol  = berpindah section
// Back HP = kembali ke section sebelumnya
// Setiap section baru selalu mulai dari paling atas
// =========================================================


document.addEventListener('DOMContentLoaded', function () {


    // =====================================================
    // 01. ELEMENT
    // =====================================================

    const homePage = document.querySelector('.home-page');

    const sections = Array.from(
        document.querySelectorAll('.home-section')
    );


    if (!homePage || sections.length === 0) {
        return;
    }


    // =====================================================
    // 02. STATE
    // =====================================================

    let currentSection = 0;

    let isChanging = false;

    const TRANSITION_TIME = 700;


    // =====================================================
    // 03. INITIAL STATE
    // =====================================================

    sections.forEach(function (section, index) {

        section.classList.remove(
            'is-active',
            'is-leaving',
            'is-entering'
        );


        if (index === 0) {

            section.classList.add('is-active');

            section.scrollTop = 0;

        } else {

            section.classList.add('is-entering');

            section.scrollTop = 0;

        }

    });


    // =====================================================
    // 04. HISTORY
    // =====================================================

    history.replaceState(
        {
            homeSection: 0
        },
        '',
        window.location.href
    );


    function pushSectionHistory(sectionIndex) {

        history.pushState(
            {
                homeSection: sectionIndex
            },
            '',
            window.location.href
        );

    }


    // =====================================================
    // 05. RESET SCROLL SECTION
    // =====================================================

    function resetSectionScroll(section) {

        if (!section) {
            return;
        }


        /*
         * Langsung ke paling atas.
         * Tidak memakai smooth agar section baru
         * tidak muncul dari tengah.
         */

        section.scrollTop = 0;

        section.scrollLeft = 0;


        /*
         * Cadangan untuk browser modern.
         */

        try {

            section.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });

        } catch (error) {

            section.scrollTo(0, 0);

        }

    }


    // =====================================================
    // 06. ANIMASI ISI SECTION
    // =====================================================

    function animateSection(section) {

        if (!section) {
            return;
        }


        const items = section.querySelectorAll(
            '.reveal-item'
        );


        items.forEach(function (item, index) {

            item.classList.remove('is-visible');


            window.setTimeout(function () {

                item.classList.add('is-visible');

            }, 80 + (index * 90));

        });

    }


    // =====================================================
    // 07. CHANGE SECTION
    // =====================================================

    function changeSection(
        targetIndex,
        direction,
        addHistory
    ) {


        // -----------------------------------------------
        // CEGAH DOUBLE CLICK / DOUBLE TRANSITION
        // -----------------------------------------------

        if (isChanging) {
            return;
        }


        // -----------------------------------------------
        // CEK INDEX
        // -----------------------------------------------

        if (
            targetIndex < 0 ||
            targetIndex >= sections.length
        ) {

            return;

        }


        // -----------------------------------------------
        // JIKA SECTION SAMA
        // -----------------------------------------------

        if (targetIndex === currentSection) {

            resetSectionScroll(
                sections[targetIndex]
            );

            return;

        }


        isChanging = true;


        const current =
            sections[currentSection];


        const next =
            sections[targetIndex];


        // =================================================
        // RESET SECTION BARU SEBELUM DITAMPILKAN
        // =================================================

        resetSectionScroll(next);


        // =================================================
        // SIAPKAN SECTION BARU
        // =================================================

        next.classList.remove(
            'is-leaving'
        );

        next.classList.add(
            'is-active'
        );


        // =================================================
        // SECTION LAMA KELUAR
        // =================================================

        current.classList.remove(
            'is-active'
        );

        current.classList.add(
            'is-leaving'
        );


        // =================================================
        // UPDATE CURRENT SECTION
        // =================================================

        currentSection = targetIndex;


        // =================================================
        // HISTORY
        // =================================================

        if (addHistory) {

            pushSectionHistory(
                targetIndex
            );

        }


        // =================================================
        // ANIMASI ISI
        // =================================================

        window.setTimeout(function () {

            resetSectionScroll(next);

            animateSection(next);

        }, 50);


        // =================================================
        // SELESAIKAN TRANSISI
        // =================================================

        window.setTimeout(function () {

            current.classList.remove(
                'is-leaving'
            );


            /*
             * Pastikan section baru benar-benar
             * dimulai dari paling atas.
             */

            resetSectionScroll(next);


            isChanging = false;


        }, TRANSITION_TIME);

    }


    // =====================================================
    // 08. BUTTON NAVIGATION
    // =====================================================

    const sectionButtons =
        document.querySelectorAll(
            '[data-scroll-target]'
        );


    sectionButtons.forEach(function (button) {

        button.addEventListener(
            'click',
            function (event) {

                event.preventDefault();


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
                    targetIndex > currentSection
                        ? 'next'
                        : 'previous';


                changeSection(
                    targetIndex,
                    direction,
                    true
                );

            }
        );

    });


    // =====================================================
    // 09. ANDROID / BROWSER BACK
    // =====================================================

    window.addEventListener(
        'popstate',
        function (event) {

            const state =
                event.state;


            /*
             * Jika history mempunyai posisi section,
             * kembali ke section tersebut.
             */

            if (
                state &&
                typeof state.homeSection === 'number'
            ) {

                const targetIndex =
                    state.homeSection;


                const direction =
                    targetIndex > currentSection
                        ? 'next'
                        : 'previous';


                changeSection(
                    targetIndex,
                    direction,
                    false
                );


                return;

            }


            /*
             * Jika tidak ada state,
             * kembalikan ke Home.
             */

            changeSection(
                0,
                'previous',
                false
            );

        }
    );


    // =====================================================
    // 10. ANIMASI SECTION PERTAMA
    // =====================================================

    window.setTimeout(function () {

        resetSectionScroll(
            sections[0]
        );

        animateSection(
            sections[0]
        );

    }, 150);


    // =====================================================
    // 11. MENCEGAH SECTION PINDAH KARENA SCROLL
    // =====================================================
    //
    // Scroll tetap diperbolehkan di dalam section.
    //
    // Tidak ada wheel / touch yang digunakan untuk
    // mengganti section.
    //
    // Pindah section hanya melalui tombol.
    // =====================================================


    sections.forEach(function (section) {

        section.addEventListener(
            'wheel',
            function () {

                /*
                 * Sengaja kosong.
                 *
                 * Browser tetap mengizinkan section
                 * melakukan scroll normal.
                 */

            },
            {
                passive: true
            }
        );

    });


    // =====================================================
    // 12. TOUCH SAFETY
    // =====================================================

    sections.forEach(function (section) {

        section.addEventListener(
            'touchmove',
            function () {

                /*
                 * Jangan preventDefault.
                 *
                 * Supaya user tetap bisa scroll
                 * isi section secara normal.
                 */

            },
            {
                passive: true
            }
        );

    });


});

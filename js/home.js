// =========================================================
// MAS MAIL — HOME CONTROLLER
// FINAL APP STYLE NAVIGATION
//
// SECTION = halaman di dalam Home
// SCROLL  = membaca isi section
// BUTTON  = berpindah section
// BACK HP = kembali ke section sebelumnya
// =========================================================


document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // 01. ELEMENT
    // =====================================================

    const homePage = document.querySelector(".home-page");

    const sections = Array.from(
        document.querySelectorAll(".home-section")
    );

    const nextButtons = Array.from(
        document.querySelectorAll(".section-next-button")
    );


    if (!homePage || sections.length === 0) {
        return;
    }


    // =====================================================
    // 02. VARIABLE
    // =====================================================

    let currentIndex = 0;

    let isTransitioning = false;

    const TRANSITION_DURATION = 650;


    // =====================================================
    // 03. BROWSER SCROLL RESTORATION
    // =====================================================

    if ("scrollRestoration" in history) {

        history.scrollRestoration = "manual";

    }


    // =====================================================
    // 04. RESET SEMUA SECTION
    // =====================================================

    sections.forEach((section, index) => {

        section.classList.remove(
            "is-active",
            "is-leaving",
            "is-entering"
        );


        section.scrollTop = 0;


        if (index === 0) {

            section.classList.add("is-active");

        } else {

            section.classList.add("is-entering");

        }

    });


    // =====================================================
    // 05. RESET SCROLL SECTION
    // =====================================================

    function resetScroll(section) {

        if (!section) {
            return;
        }


        /*
         * Reset langsung.
         */

        section.scrollTop = 0;

        section.scrollLeft = 0;


        /*
         * Reset menggunakan method browser
         * sebagai pengaman tambahan.
         */

        try {

            section.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto"
            });

        } catch (error) {

            section.scrollTop = 0;
            section.scrollLeft = 0;

        }

    }


    // =====================================================
    // 06. TOMBOL YANG AKTIF
    // =====================================================

    function updateNextButton() {

        nextButtons.forEach((button) => {

            const parentSection =
                button.closest(".home-section");


            if (!parentSection) {
                return;
            }


            const sectionIndex =
                sections.indexOf(parentSection);


            if (sectionIndex === currentIndex) {

                button.classList.add(
                    "is-current-button"
                );

            } else {

                button.classList.remove(
                    "is-current-button"
                );

            }

        });

    }


    // =====================================================
    // 07. ANIMASI ISI
    // =====================================================

    function revealSection(section) {

        if (!section) {
            return;
        }


        const items =
            section.querySelectorAll(
                ".reveal-item"
            );


        items.forEach((item, index) => {

            item.classList.remove(
                "is-visible"
            );


            setTimeout(() => {

                item.classList.add(
                    "is-visible"
                );

            }, 100 + (index * 80));

        });

    }


    // =====================================================
    // 08. HISTORY
    // =====================================================

    history.replaceState(
        {
            masMailHome: true,
            section: 0
        },
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


    // =====================================================
    // 09. PINDAH SECTION
    // =====================================================

    function goToSection(
        targetIndex,
        createHistoryEntry = true
    ) {

        if (isTransitioning) {
            return;
        }


        if (
            targetIndex < 0 ||
            targetIndex >= sections.length
        ) {
            return;
        }


        if (targetIndex === currentIndex) {

            resetScroll(
                sections[targetIndex]
            );

            return;

        }


        const currentSection =
            sections[currentIndex];

        const nextSection =
            sections[targetIndex];


        isTransitioning = true;


        // =================================================
        // RESET SECTION BARU SEBELUM DITAMPILKAN
        // =================================================

        resetScroll(nextSection);


        // =================================================
        // SIAPKAN SECTION BARU
        // =================================================

        nextSection.classList.remove(
            "is-entering",
            "is-leaving"
        );


        nextSection.classList.add(
            "is-active"
        );


        // =================================================
        // SECTION LAMA
        // =================================================

        currentSection.classList.remove(
            "is-active"
        );


        currentSection.classList.add(
            "is-leaving"
        );


        // =================================================
        // UPDATE INDEX
        // =================================================

        currentIndex = targetIndex;


        // =================================================
        // UPDATE TOMBOL
        // =================================================

        updateNextButton();


        // =================================================
        // HISTORY
        // =================================================

        if (createHistoryEntry) {

            createHistory(
                targetIndex
            );

        }


        // =================================================
        // RESET LAGI SETELAH SECTION AKTIF
        // =================================================

        requestAnimationFrame(() => {

            resetScroll(
                nextSection
            );

        });


        // =================================================
        // ANIMASI
        // =================================================

        setTimeout(() => {

            revealSection(
                nextSection
            );

        }, 80);


        // =================================================
        // SELESAI TRANSISI
        // =================================================

        setTimeout(() => {

            currentSection.classList.remove(
                "is-leaving"
            );


            nextSection.classList.remove(
                "is-entering"
            );


            /*
             * Reset terakhir.
             *
             * Ini penting agar section baru
             * benar-benar dimulai dari atas.
             */

            resetScroll(
                nextSection
            );


            isTransitioning = false;


        }, TRANSITION_DURATION);

    }


    // =====================================================
    // 10. SEMUA TOMBOL SECTION
    // =====================================================

    nextButtons.forEach((button) => {

        button.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();


                const targetId =
                    button.getAttribute(
                        "data-scroll-target"
                    );


                if (!targetId) {
                    return;
                }


                const targetSection =
                    document.getElementById(
                        targetId
                    );


                if (!targetSection) {
                    return;
                }


                const targetIndex =
                    sections.indexOf(
                        targetSection
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

    });


    // =====================================================
    // 11. BACK BUTTON ANDROID
    // =====================================================

    window.addEventListener(
        "popstate",
        (event) => {

            const state =
                event.state;


            if (
                state &&
                state.masMailHome === true &&
                typeof state.section === "number"
            ) {

                goToSection(
                    state.section,
                    false
                );

                return;

            }


            /*
             * Kalau tidak ada state,
             * kembali ke Home.
             */

            goToSection(
                0,
                false
            );

        }
    );


    // =====================================================
    // 12. TOUCH / SCROLL
    // =====================================================
    //
    // TIDAK ADA LOGIKA PINDAH SECTION DI SINI.
    //
    // Jadi:
    //
    // Scroll atas  = membaca
    // Scroll bawah = membaca
    //
    // Scroll TIDAK PERNAH memanggil goToSection().
    // =====================================================


    sections.forEach((section) => {

        section.addEventListener(
            "wheel",
            () => {

                // Sengaja kosong.

            },
            {
                passive: true
            }
        );


        section.addEventListener(
            "touchmove",
            () => {

                // Sengaja kosong.
                // Scroll tetap normal.

            },
            {
                passive: true
            }
        );

    });


    // =====================================================
    // 13. INITIAL BUTTON
    // =====================================================

    updateNextButton();


    // =====================================================
    // 14. INITIAL REVEAL
    // =====================================================

    setTimeout(() => {

        resetScroll(
            sections[0]
        );


        revealSection(
            sections[0]
        );

    }, 100);


});

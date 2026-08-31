// =========================================================
// MAS MAIL — HOME CONTROLLER
// VERSION 2
//
// Fungsi:
// 1. Section berpindah dengan tombol
// 2. Setiap section bisa di-scroll
// 3. Section baru selalu dimulai dari paling atas
// 4. Tombol Back Android/browser kembali ke section sebelumnya
// 5. Refresh selalu kembali ke Home
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const homePage = document.querySelector(".home-page");

    const sections = Array.from(
        document.querySelectorAll(".home-section")
    );

    if (!homePage || sections.length === 0) {
        return;
    }


    // =====================================================
    // STATE
    // =====================================================

    let currentSection = 0;
    let isChanging = false;


    // =====================================================
    // FUNGSI RESET SECTION
    // =====================================================

    function resetSection(section) {

        section.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });

    }


    // =====================================================
    // INITIAL STATE
    // =====================================================

    sections.forEach(function (section, index) {

        section.classList.remove(
            "is-active",
            "is-leaving",
            "is-entering"
        );

        resetSection(section);

        if (index === 0) {

            section.classList.add("is-active");

        } else {

            section.classList.add("is-entering");

        }

    });


    // =====================================================
    // HISTORY
    // =====================================================

    history.replaceState(
        {
            homeSection: 0
        },
        "",
        window.location.href
    );


    function pushSectionHistory(index) {

        history.pushState(
            {
                homeSection: index
            },
            "",
            window.location.href
        );

    }


    // =====================================================
    // ANIMASI ISI SECTION
    // =====================================================

    function animateSection(section) {

        const items = section.querySelectorAll(
            ".reveal-item"
        );

        items.forEach(function (item, index) {

            item.classList.remove("is-visible");

            setTimeout(function () {

                item.classList.add("is-visible");

            }, 100 + (index * 100));

        });

    }


    // =====================================================
    // PINDAH SECTION
    // =====================================================

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

        if (targetIndex === currentSection) {
            return;
        }


        isChanging = true;


        const current =
            sections[currentSection];

        const next =
            sections[targetIndex];


        // -------------------------------------------------
        // RESET SCROLL SECTION BARU
        // -------------------------------------------------

        resetSection(next);


        // -------------------------------------------------
        // SIAPKAN SECTION BARU
        // -------------------------------------------------

        next.classList.remove(
            "is-entering",
            "is-leaving"
        );

        next.classList.add(
            "is-active"
        );


        // -------------------------------------------------
        // SECTION LAMA
        // -------------------------------------------------

        current.classList.remove(
            "is-active"
        );

        current.classList.add(
            "is-leaving"
        );


        // -------------------------------------------------
        // UPDATE CURRENT
        // -------------------------------------------------

        currentSection = targetIndex;


        // -------------------------------------------------
        // HISTORY
        // -------------------------------------------------

        if (addHistory) {

            pushSectionHistory(
                targetIndex
            );

        }


        // -------------------------------------------------
        // ANIMASI
        // -------------------------------------------------

        animateSection(next);


        // -------------------------------------------------
        // SELESAIKAN TRANSISI
        // -------------------------------------------------

        setTimeout(function () {

            current.classList.remove(
                "is-leaving"
            );

            isChanging = false;

        }, 600);

    }


    // =====================================================
    // TOMBOL NEXT
    // =====================================================

    const sectionButtons =
        document.querySelectorAll(
            "[data-section-target]"
        );


    sectionButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const targetId =
                    button.getAttribute(
                        "data-section-target"
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
                        ? "next"
                        : "previous";


                changeSection(
                    targetIndex,
                    direction,
                    true
                );

            }
        );

    });


    // =====================================================
    // BACK ANDROID / BROWSER
    // =====================================================

    window.addEventListener(
        "popstate",
        function (event) {

            const state = event.state;


            if (
                state &&
                typeof state.homeSection === "number"
            ) {

                const targetIndex =
                    state.homeSection;


                const direction =
                    targetIndex > currentSection
                        ? "next"
                        : "previous";


                changeSection(
                    targetIndex,
                    direction,
                    false
                );

            }

        }
    );


    // =====================================================
    // ANIMASI HOME PERTAMA
    // =====================================================

    setTimeout(function () {

        animateSection(
            sections[0]
        );

    }, 150);


    // =====================================================
    // FIX REFRESH
    // =====================================================
    //
    // Saat browser melakukan refresh:
    //
    // Section pertama dipaksa aktif
    // dan scroll dikembalikan ke paling atas.
    //
    // =====================================================

    window.addEventListener(
        "pageshow",
        function () {

            currentSection = 0;

            sections.forEach(
                function (section, index) {

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

                }
            );


            animateSection(
                sections[0]
            );

        }
    );


});

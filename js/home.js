// =========================================================
// MAS MAIL — HOME CONTROLLER
// FINAL VERSION
//
// Scroll = membaca isi section
// Tombol = pindah section
// =========================================================


document.addEventListener(
    'DOMContentLoaded',
    function () {


        // =================================================
        // 01. AMBIL SECTION
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
        // 02. SECTION PERTAMA
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
        // 03. PINDAH SECTION
        // =================================================

        function changeSection(
            targetIndex,
            direction
        ) {


            if (
                isChanging
            ) {

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
            // PENTING:
            // Setiap kali section dibuka,
            // selalu kembali ke PALING ATAS.
            // ---------------------------------------------

            next.scrollTop = 0;


            // ---------------------------------------------
            // Tentukan arah animasi
            // ---------------------------------------------

            if (
                direction === 'next'
            ) {

                next.style.transform =
                    'translateY(25px) scale(1.025)';

            } else {

                next.style.transform =
                    'translateY(-25px) scale(1.025)';

            }


            // ---------------------------------------------
            // Tampilkan section baru
            // ---------------------------------------------

            next.classList.remove(
                'is-entering'
            );


            next.classList.add(
                'is-active'
            );


            // ---------------------------------------------
            // Sembunyikan section lama
            // ---------------------------------------------

            current.classList.remove(
                'is-active'
            );


            current.classList.add(
                'is-leaving'
            );


            // ---------------------------------------------
            // Trigger browser
            // ---------------------------------------------

            void next.offsetWidth;


            next.style.transform =
                'translateY(0) scale(1)';


            currentSection =
                targetIndex;


            // ---------------------------------------------
            // Bersihkan
            // ---------------------------------------------

            window.setTimeout(
                function () {

                    current.classList.remove(
                        'is-leaving'
                    );


                    current.style.transform =
                        '';


                    next.style.transform =
                        '';


                    isChanging = false;

                },
                700
            );

        }


        // =================================================
        // 04. SEMUA PERPINDAHAN SECTION
        //     HANYA DENGAN TOMBOL
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
                            direction
                        );

                    }
                );

            }
        );


        // =================================================
        // 05. TIDAK ADA WHEEL NAVIGATION
        // =================================================
        //
        // PENTING:
        //
        // Scroll mouse hanya digunakan untuk
        // membaca isi section.
        //
        // TIDAK akan pindah section.
        //
        // =================================================


        // Tidak ada event wheel di sini.


        // =================================================
        // 06. TIDAK ADA SWIPE NAVIGATION
        // =================================================
        //
        // Swipe pada HP = scroll normal.
        //
        // Jadi user bisa membaca section panjang.
        //
        // =================================================


        // Tidak ada event touchend di sini.


        // =================================================
        // 07. KEYBOARD
        // =================================================
        //
        // Keyboard tidak digunakan untuk pindah section.
        //
        // Tombol website adalah navigasi utama.
        //
        // =================================================


        // Tidak ada keyboard navigation.


        // =================================================
        // 08. ANIMASI REVEAL
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
        // 09. ANIMASI HOME PERTAMA
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
        // 10. ANIMASI SECTION BARU
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

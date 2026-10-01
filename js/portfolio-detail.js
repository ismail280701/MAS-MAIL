"use strict";

/*
 * =========================================
 * MAS MAIL DIGITAL
 * PORTFOLIO DETAIL
 * =========================================
 */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       ELEMENT
    ===================================== */

    const overlay =
        document.getElementById(
            "portfolioDetail"
        );

    const backdrop =
        overlay?.querySelector(
            ".portfolio-detail-backdrop"
        );

    const sheet =
        overlay?.querySelector(
            ".portfolio-detail-sheet"
        );

    const closeButton =
        document.getElementById(
            "portfolioDetailClose"
        );

    const backButton =
        document.getElementById(
            "portfolioDetailBack"
        );

    const image =
        document.getElementById(
            "portfolioDetailImage"
        );

    const category =
        document.getElementById(
            "portfolioDetailCategory"
        );

    const title =
        document.getElementById(
            "portfolioDetailTitle"
        );

    const description =
        document.getElementById(
            "portfolioDetailDescription"
        );

    const meta =
        document.getElementById(
            "portfolioDetailMeta"
        );

    const about =
        document.getElementById(
            "portfolioDetailAbout"
        );

    const highlightsSection =
        document.getElementById(
            "portfolioDetailHighlightsSection"
        );

    const highlights =
        document.getElementById(
            "portfolioDetailHighlights"
        );

    const action =
        document.getElementById(
            "portfolioDetailAction"
        );

    const actionText =
        document.getElementById(
            "portfolioDetailActionText"
        );


    /* =====================================
       VALIDASI
    ===================================== */

    if (
        !overlay ||
        !sheet ||
        !image ||
        !category ||
        !title ||
        !description ||
        !meta ||
        !about ||
        !highlights ||
        !action
    ) {
        return;
    }


    /* =====================================
       DATA PORTFOLIO
    ===================================== */

    const portfolioData = {

        /* =================================
           WEBSITE AL IHSAN
        ================================= */

        "website-alihsan": {

            category:
                "WEBSITE",

            title:
                "Website Profil PonPes Al Ihsan",

            image:
                "Portofolio/website/websiteponpesalihsan.webp",

            alt:
                "Website Profil Pondok Pesantren Al Ihsan Islamic Center",

            description:
                "Website profil Pondok Pesantren Al Ihsan Islamic Center dengan tampilan modern, responsif, dan informasi yang terstruktur untuk memperkenalkan profil, program, kegiatan, serta layanan pesantren.",

            meta: [
                {
                    label: "Kategori",
                    value: "Website"
                },
                {
                    label: "Platform",
                    value: "Website"
                },
                {
                    label: "Responsive",
                    value: "Mobile & Desktop"
                },
                {
                    label: "Jenis",
                    value: "Company / Profile"
                }
            ],

            about:
                "Website ini dirancang sebagai media digital resmi untuk memperkenalkan Pondok Pesantren Al Ihsan Islamic Center kepada masyarakat. Struktur halaman dibuat agar informasi penting lebih mudah ditemukan sekaligus tetap memberikan pengalaman visual yang modern.",

            highlights: [
                "Perancangan tampilan website",
                "Responsive untuk perangkat mobile dan desktop",
                "Struktur informasi yang terorganisir",
                "Navigasi dan interaksi yang mudah digunakan",
                "Tampilan visual yang disesuaikan dengan identitas pesantren"
            ],

            actionText:
                "Kunjungi Website",

            actionUrl:
                "https://ponpesalihsanicu.my.id"

        },


        /* =================================
           POSTER TAHSIN / TAHFIDZ
        ================================= */

        "poster-tahfidz": {

            category:
                "CANVA TEMPLATE",

            title:
                "Poster Apresiasi Tahfidz Al-Qur'an",

            image:
                "Portofolio/Canva/Templet ucapan selamat Tasmi' hafalan al qur'an_20260928_130011_0000.webp",

            alt:
                "Poster Apresiasi Tahfidz Al-Qur'an",

            description:
                "Desain poster bernuansa Islami untuk memberikan ucapan selamat dan apresiasi atas pencapaian hafalan Al-Qur'an dengan tampilan elegan dan penuh nuansa Islami.",

            meta: [
                {
                    label: "Kategori",
                    value: "Canva Template"
                },
                {
                    label: "Ukuran",
                    value: "A4"
                },
                {
                    label: "Tools",
                    value: "Canva"
                },
                {
                    label: "Format",
                    value: "Template Digital"
                }
            ],

            about:
                "Template ini dibuat untuk membantu pesantren, sekolah, lembaga pendidikan, maupun personal dalam memberikan apresiasi kepada santri yang telah menyelesaikan pencapaian hafalan Al-Qur'an. Elemen desain dapat disesuaikan dengan kebutuhan.",

            highlights: [
                "Nuansa Islami dan elegan",
                "Ukuran A4",
                "Dapat diedit melalui Canva",
                "Cocok untuk apresiasi santri",
                "Nama dan informasi dapat disesuaikan",
                "Siap digunakan untuk kebutuhan cetak maupun digital"
            ],

            actionText:
                "Gunakan Template",

            actionUrl:
                "https://lynk.id/ismail280701"

        },


        /* =================================
           TEMPLATE PPT
        ================================= */

        "template-ppt": {

            category:
                "POWERPOINT",

            title:
                "Template Presentasi",

            image:
                "assets/portfolio/ppt-01.jpg",

            alt:
                "Template Presentasi PowerPoint",

            description:
                "Template PowerPoint dengan struktur visual yang rapi dan mudah digunakan untuk kebutuhan presentasi.",

            meta: [
                {
                    label: "Kategori",
                    value: "PowerPoint"
                },
                {
                    label: "Format",
                    value: "PPT"
                },
                {
                    label: "Jenis",
                    value: "Template"
                },
                {
                    label: "Kegunaan",
                    value: "Presentasi"
                }
            ],

            about:
                "Template presentasi dirancang untuk membantu pengguna menyusun materi dengan tampilan yang lebih terstruktur, rapi, dan mudah dipahami.",

            highlights: [
                "Struktur slide yang rapi",
                "Mudah disesuaikan",
                "Cocok untuk berbagai kebutuhan presentasi",
                "Visual yang bersih dan profesional"
            ],

            actionText:
                "Pesan Template",

            actionUrl:
                "https://lynk.id/ismail280701"

        },


        /* =================================
           SERTIFIKAT
        ================================= */

        "sertifikat-piagam": {

            category:
                "SERTIFIKAT",

            title:
                "Sertifikat & Piagam",

            image:
                "assets/portfolio/sertifikat-01.jpg",

            alt:
                "Desain Sertifikat dan Piagam",

            description:
                "Desain sertifikat dan piagam untuk kebutuhan kegiatan, penghargaan, pendidikan, maupun dokumentasi.",

            meta: [
                {
                    label: "Kategori",
                    value: "Sertifikat"
                },
                {
                    label: "Format",
                    value: "Digital / Cetak"
                },
                {
                    label: "Jenis",
                    value: "Desain"
                },
                {
                    label: "Kebutuhan",
                    value: "Penghargaan"
                }
            ],

            about:
                "Desain dapat disesuaikan dengan identitas lembaga, kegiatan, nama penerima, pencapaian, serta informasi lainnya.",

            highlights: [
                "Desain dapat disesuaikan",
                "Cocok untuk kegiatan lembaga",
                "Cocok untuk penghargaan",
                "Dapat dipersiapkan untuk kebutuhan cetak"
            ],

            actionText:
                "Konsultasikan Desain",

            actionUrl:
                "https://lynk.id/ismail280701"

        },


        /* =================================
           TEMPLATE CANVA
        ================================= */

        "template-canva": {

            category:
                "CANVA TEMPLATE",

            title:
                "Template Canva",

            image:
                "assets/portfolio/canva-02.jpg",

            alt:
                "Template Canva",

            description:
                "Template siap edit untuk membantu kebutuhan desain dengan lebih cepat dan praktis.",

            meta: [
                {
                    label: "Kategori",
                    value: "Canva"
                },
                {
                    label: "Tools",
                    value: "Canva"
                },
                {
                    label: "Format",
                    value: "Template"
                },
                {
                    label: "Jenis",
                    value: "Digital"
                }
            ],

            about:
                "Template Canva dibuat agar pengguna dapat menyesuaikan teks, gambar, warna, dan elemen desain sesuai kebutuhan tanpa harus membuat desain dari awal.",

            highlights: [
                "Mudah diedit",
                "Menghemat waktu desain",
                "Cocok untuk kebutuhan konten",
                "Elemen dapat disesuaikan",
                "Dapat digunakan kembali sesuai kebutuhan"
            ],

            actionText:
                "Lihat Template",

            actionUrl:
                "https://lynk.id/ismail280701"

        },


        /* =================================
           PROYEK APLIKASI
        ================================= */

        "proyek-aplikasi": {

            category:
                "APLIKASI",

            title:
                "Proyek Aplikasi",

            image:
                "assets/portfolio/aplikasi-01.jpg",

            alt:
                "Proyek Aplikasi Digital",

            description:
                "Eksplorasi pengembangan aplikasi sederhana untuk membantu kebutuhan tertentu dengan alur yang lebih praktis.",

            meta: [
                {
                    label: "Kategori",
                    value: "Aplikasi"
                },
                {
                    label: "Jenis",
                    value: "Digital"
                },
                {
                    label: "Pengembangan",
                    value: "Prototype"
                },
                {
                    label: "Fokus",
                    value: "Kebutuhan Khusus"
                }
            ],

            about:
                "Proyek aplikasi merupakan bagian dari eksplorasi pengembangan solusi digital sederhana yang disesuaikan dengan kebutuhan pengguna.",

            highlights: [
                "Eksplorasi solusi digital",
                "Alur penggunaan sederhana",
                "Dapat dikembangkan sesuai kebutuhan",
                "Fokus pada kemudahan penggunaan"
            ],

            actionText:
                "Konsultasikan Proyek",

            actionUrl:
                "https://lynk.id/ismail280701"

        }

    };


    /* =====================================
       URL STATE
    ===================================== */

    let currentPortfolio = null;

    let isClosing = false;


    /* =====================================
       GET PORTFOLIO FROM URL
    ===================================== */

    function getPortfolioFromURL() {

        const params =
            new URLSearchParams(
                window.location.search
            );

        return params.get(
            "karya"
        );

    }


    /* =====================================
       UPDATE URL
    ===================================== */

    function updateURL(id) {

        const url =
            new URL(
                window.location.href
            );

        if (id) {

            url.searchParams.set(
                "karya",
                id
            );

        } else {

            url.searchParams.delete(
                "karya"
            );

        }

        window.history.pushState(
            {
                portfolio: id
            },
            "",
            url
        );

    }


    /* =====================================
       RENDER META
    ===================================== */

    function renderMeta(items) {

        meta.innerHTML = "";

        if (!items || !items.length) {
            return;
        }


        items.forEach((item) => {

            const wrapper =
                document.createElement(
                    "div"
                );

            wrapper.className =
                "portfolio-detail-meta-item";


            const label =
                document.createElement(
                    "span"
                );

            label.className =
                "portfolio-detail-meta-label";

            label.textContent =
                item.label;


            const value =
                document.createElement(
                    "span"
                );

            value.className =
                "portfolio-detail-meta-value";

            value.textContent =
                item.value;


            wrapper.appendChild(label);

            wrapper.appendChild(value);

            meta.appendChild(wrapper);

        });

    }


    /* =====================================
       RENDER HIGHLIGHTS
    ===================================== */

    function renderHighlights(items) {

        highlights.innerHTML = "";

        if (!items || !items.length) {

            if (highlightsSection) {

                highlightsSection.style.display =
                    "none";

            }

            return;

        }


        if (highlightsSection) {

            highlightsSection.style.display =
                "";

        }


        items.forEach((item) => {

            const li =
                document.createElement(
                    "li"
                );

            li.textContent =
                item;

            highlights.appendChild(
                li
            );

        });

    }


    /* =====================================
       RENDER PORTFOLIO
    ===================================== */

    function renderPortfolio(id) {

        const data =
            portfolioData[id];

        if (!data) {
            return false;
        }


        currentPortfolio = id;


        image.src =
            data.image;

        image.alt =
            data.alt ||
            data.title;


        category.textContent =
            data.category;


        title.textContent =
            data.title;


        description.textContent =
            data.description;


        about.textContent =
            data.about;


        renderMeta(
            data.meta
        );


        renderHighlights(
            data.highlights
        );


        action.href =
            data.actionUrl;


        actionText.textContent =
            data.actionText;


        return true;

    }


    /* =====================================
       OPEN DETAIL
    ===================================== */

    function openPortfolio(
        id,
        updateHistory = true
    ) {

        if (
            !portfolioData[id] ||
            isClosing
        ) {
            return;
        }


        if (
            !renderPortfolio(id)
        ) {
            return;
        }


        if (
            updateHistory &&
            currentPortfolio !== id
        ) {

            updateURL(id);

        }


        overlay.classList.add(
            "is-open"
        );


        overlay.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "portfolio-detail-open"
        );


        /* RESET SCROLL DETAIL */

        sheet.scrollTop = 0;


        /* FOCUS CLOSE */

        window.setTimeout(() => {

            if (
                overlay.classList.contains(
                    "is-open"
                )
            ) {

                closeButton?.focus();

            }

        }, 350);

    }


    /* =====================================
       CLOSE DETAIL
    ===================================== */

    function closePortfolio(
        updateHistory = true
    ) {

        if (
            !overlay.classList.contains(
                "is-open"
            )
        ) {
            return;
        }


        isClosing = true;


        overlay.classList.remove(
            "is-open"
        );


        overlay.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "portfolio-detail-open"
        );


        if (updateHistory) {

            updateURL(
                null
            );

        }


        window.setTimeout(() => {

            isClosing = false;

        }, 550);

    }


    /* =====================================
       PORTFOLIO BUTTONS
    ===================================== */

    const triggers =
        document.querySelectorAll(
            ".portfolio-detail-trigger"
        );


    triggers.forEach((trigger) => {

        trigger.addEventListener(
            "click",
            (event) => {

                event.preventDefault();


                const id =
                    trigger.dataset.portfolio;


                if (!id) {
                    return;
                }


                openPortfolio(
                    id,
                    true
                );

            }
        );

    });


    /* =====================================
       CLOSE EVENTS
    ===================================== */

    closeButton?.addEventListener(
        "click",
        () => {

            closePortfolio(
                true
            );

        }
    );


    backButton?.addEventListener(
        "click",
        () => {

            closePortfolio(
                true
            );

        }
    );


    backdrop?.addEventListener(
        "click",
        () => {

            closePortfolio(
                true
            );

        }
    );


    /* =====================================
       ESCAPE
    ===================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                overlay.classList.contains(
                    "is-open"
                )
            ) {

                closePortfolio(
                    true
                );

            }

        }
    );


    /* =====================================
       BROWSER / ANDROID BACK
    ===================================== */

    window.addEventListener(
        "popstate",
        () => {

            const id =
                getPortfolioFromURL();


            if (id) {

                openPortfolio(
                    id,
                    false
                );

            } else {

                closePortfolio(
                    false
                );

            }

        }
    );


    /* =====================================
       OPEN FROM DIRECT URL
    ===================================== */

    const initialPortfolio =
        getPortfolioFromURL();


    if (
        initialPortfolio &&
        portfolioData[initialPortfolio]
    ) {

        window.setTimeout(() => {

            openPortfolio(
                initialPortfolio,
                false
            );

        }, 120);

    }


});

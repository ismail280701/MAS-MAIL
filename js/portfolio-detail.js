/* =========================================================
   PORTFOLIO DETAIL
   Mas Mail Digital
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       KONFIGURASI
    ===================================================== */

    const WHATSAPP_NUMBER = "6282253652317";
    const DEFAULT_PURCHASE_URL = "https://lynk.id/ismail280701";
    const AUTO_SLIDE_DELAY = 4800;

    /* =====================================================
       DATA PORTFOLIO
       Semua link kartu + detail mengambil data dari sini.
    ===================================================== */

    const portfolioData = {

        /* =================================================
           WEBSITE
        ================================================= */

        "website-alihsan": {
            type: "website",
            category: "WEBSITE",

            title: "Website Profil PonPes Al Ihsan",

            description:
                "Website profil pesantren dengan tampilan modern, responsif, dan dirancang agar informasi lembaga lebih mudah diakses.",

            about:
                "Website ini dibuat sebagai media informasi dan profil digital PonPes Al Ihsan. Struktur halaman dirancang agar pengunjung dapat mengenal pesantren, program, kegiatan, dan informasi penting lainnya dengan lebih nyaman.",

            highlights: [
                "Desain modern dan responsif",
                "Tampilan mobile-friendly",
                "Struktur halaman informatif",
                "Navigasi yang mudah digunakan",
                "Dapat diakses melalui internet"
            ],

            image:
                "Portofolio/website/websiteponpesalihsan.webp",

            websiteUrl:
                "https://ponpesalihsanicu.my.id",

            whatsappMessage:
                "Halo Mas Mail, saya tertarik dengan jasa pembuatan website seperti Website Profil PonPes Al Ihsan."
        },


        /* =================================================
           CANVA TEMPLATE
        ================================================= */

        "poster-tahfidz": {
            type: "template",
            category: "CANVA TEMPLATE",

            title:
                "Template Ucapan Selamat Tasmi' Hafalan Al-Qur'an",

            description:
                "Template Canva untuk kebutuhan ucapan dan publikasi Tasmi' hafalan Al-Qur'an dengan desain yang siap digunakan.",

            about:
                "Template ini dibuat untuk membantu pesantren, sekolah, maupun individu membuat desain ucapan Tasmi' hafalan Al-Qur'an dengan lebih cepat. Teks dan beberapa bagian desain dapat disesuaikan melalui Canva.",

            highlights: [
                "Ukuran siap digunakan",
                "Dapat diedit melalui Canva",
                "Cocok untuk publikasi pesantren",
                "Mudah disesuaikan",
                "Siap digunakan untuk media sosial"
            ],

            image:
                "Portofolio/Canva/Templet ucapan selamat Tasmi' hafalan al qur'an_20260928_130011_0000.webp",

            purchaseUrl:
                "https://lynk.id/ismail280701/972dn525z7w9",

            whatsappMessage:
                "Halo Mas Mail, saya tertarik menggunakan Template Ucapan Selamat Tasmi' Hafalan Al-Qur'an."
        },


        /* =================================================
           POWERPOINT
        ================================================= */

        "template-ppt": {
            type: "template",
            category: "POWERPOINT",

            title:
                "Template PowerPoint",

            description:
                "Template presentasi PowerPoint dengan desain modern yang dapat digunakan untuk kebutuhan presentasi.",

            about:
                "Template PowerPoint ini dirancang untuk membantu membuat presentasi terlihat lebih rapi dan profesional. Media tambahan seperti gambar atau video dapat ditampilkan di bagian detail karya.",

            highlights: [
                "Desain presentasi modern",
                "Cocok untuk berbagai kebutuhan",
                "Mudah disesuaikan",
                "Struktur slide siap digunakan",
                "Dapat digunakan untuk presentasi"
            ],

            image:
                "assets/portfolio/ppt-01.jpg",

            purchaseUrl:
                DEFAULT_PURCHASE_URL,

            whatsappMessage:
                "Halo Mas Mail, saya tertarik dengan Template PowerPoint."
            
            /*
            Jika nanti ingin menambahkan gambar:

            media: [
                {
                    type: "image",
                    src: "assets/portfolio/ppt-01.jpg",
                    alt: "Preview Template PowerPoint"
                },
                {
                    type: "image",
                    src: "assets/portfolio/ppt-02.jpg",
                    alt: "Preview halaman Template PowerPoint"
                }
            ]

            Atau YouTube:

            media: [
                {
                    type: "image",
                    src: "assets/portfolio/ppt-01.jpg",
                    alt: "Preview Template PowerPoint"
                },
                {
                    type: "youtube",
                    id: "ID_VIDEO_YOUTUBE",
                    title: "Video Preview Template PowerPoint"
                }
            ]
            */
        },


        /* =================================================
           SERTIFIKAT
        ================================================= */

        "sertifikat-piagam": {
            type: "service",
            category: "SERTIFIKAT",

            title:
                "Desain Sertifikat & Piagam",

            description:
                "Jasa pembuatan desain sertifikat dan piagam untuk sekolah, pesantren, organisasi, maupun kebutuhan pribadi.",

            about:
                "Desain dibuat berdasarkan kebutuhan dan identitas yang diinginkan. Konsep, teks, ukuran, serta elemen visual dapat disesuaikan dengan kebutuhan pemesan.",

            highlights: [
                "Desain sesuai kebutuhan",
                "Cocok untuk sekolah dan pesantren",
                "Bisa menyesuaikan identitas lembaga",
                "Ukuran dapat disesuaikan",
                "Konsultasi sebelum pengerjaan"
            ],

            image:
                "assets/portfolio/sertifikat-01.jpg",

            whatsappMessage:
                "Halo Mas Mail, saya ingin konsultasi mengenai desain sertifikat atau piagam."
        },


        /* =================================================
           CANVA TEMPLATE
        ================================================= */

        "template-canva": {
            type: "template",
            category: "CANVA TEMPLATE",

            title:
                "Template Canva",

            description:
                "Template desain Canva yang dapat digunakan dan disesuaikan untuk berbagai kebutuhan.",

            about:
                "Template Canva dibuat agar pengguna dapat melakukan penyesuaian sendiri dengan lebih mudah. Teks, gambar, warna, maupun elemen desain dapat disesuaikan melalui Canva.",

            highlights: [
                "Dapat diedit melalui Canva",
                "Mudah disesuaikan",
                "Desain siap digunakan",
                "Cocok untuk kebutuhan digital",
                "Praktis untuk digunakan kembali"
            ],

            image:
                "assets/portfolio/canva-02.jpg",

            purchaseUrl:
                DEFAULT_PURCHASE_URL,

            whatsappMessage:
                "Halo Mas Mail, saya tertarik dengan Template Canva."
        },


        /* =================================================
           APLIKASI
        ================================================= */

        "proyek-aplikasi": {
            type: "service",
            category: "APLIKASI",

            title:
                "Proyek Aplikasi",

            description:
                "Pengembangan aplikasi sederhana untuk membantu kebutuhan administrasi dan pengelolaan data.",

            about:
                "Proyek aplikasi dapat disesuaikan dengan kebutuhan pengguna, mulai dari struktur data, tampilan, hingga alur penggunaan.",

            highlights: [
                "Disesuaikan dengan kebutuhan",
                "Membantu pengelolaan data",
                "Tampilan mudah digunakan",
                "Dapat dikembangkan sesuai kebutuhan",
                "Konsultasi sebelum pengerjaan"
            ],

            image:
                "assets/portfolio/aplikasi-01.jpg",

            whatsappMessage:
                "Halo Mas Mail, saya ingin konsultasi mengenai pembuatan aplikasi."
        }
    };


    /* =====================================================
       ELEMENT HTML
    ===================================================== */

    const overlay =
        document.getElementById("portfolioDetail");

    const backdrop =
        document.getElementById("portfolioDetailBackdrop");

    const sheet =
        overlay?.querySelector(".portfolio-detail-sheet");

    const backButton =
        document.getElementById("portfolioDetailBack");

    const closeButton =
        document.getElementById("portfolioDetailClose");


    /* =====================================================
       MEDIA
    ===================================================== */

    const mediaViewport =
        document.getElementById("portfolioDetailMediaViewport");

    const mediaTrack =
        document.getElementById("portfolioDetailMediaTrack");

    const mediaPrev =
        document.getElementById("portfolioDetailMediaPrev");

    const mediaNext =
        document.getElementById("portfolioDetailMediaNext");

    const mediaIndicators =
        document.getElementById("portfolioDetailMediaIndicators");

    const mediaCounter =
        document.getElementById("portfolioDetailMediaCounter");


    /* =====================================================
       INFORMATION
    ===================================================== */

    const categoryElement =
        document.getElementById("portfolioDetailCategory");

    const titleElement =
        document.getElementById("portfolioDetailTitle");

    const descriptionElement =
        document.getElementById("portfolioDetailDescription");

    const metaElement =
        document.getElementById("portfolioDetailMeta");

    const aboutElement =
        document.getElementById("portfolioDetailAbout");

    const highlightsSection =
        document.getElementById("portfolioDetailHighlightsSection");

    const highlightsElement =
        document.getElementById("portfolioDetailHighlights");


    /* =====================================================
       CTA
    ===================================================== */

    const cta =
        document.getElementById("portfolioDetailCta");

    const primaryAction =
        document.getElementById("portfolioDetailAction");

    const primaryActionText =
        document.getElementById("portfolioDetailActionText");

    const consultationAction =
        document.getElementById("portfolioDetailConsultation");

    const consultationActionText =
        document.getElementById("portfolioDetailConsultationText");


    /* =====================================================
       STATE
    ===================================================== */

    let currentPortfolioId = null;
    let currentPortfolio = null;

    let currentMediaIndex = 0;
    let currentMedia = [];

    let autoSlideTimer = null;

    let historyEntryCreated = false;

    let previousBodyOverflow = "";

    let pointerStartX = 0;
    let pointerStartY = 0;
    let pointerDragging = false;


    /* =====================================================
       CEK ELEMENT
    ===================================================== */

    if (
        !overlay ||
        !mediaViewport ||
        !mediaTrack
    ) {
        console.warn(
            "Portfolio Detail: element HTML tidak ditemukan."
        );

        return;
    }


    /* =====================================================
       WHATSAPP
    ===================================================== */

    function createWhatsAppUrl(message) {

        const text =
            encodeURIComponent(message || "");

        return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    }


    /* =====================================================
       YOUTUBE ID
    ===================================================== */

    function extractYouTubeId(value) {

        if (!value) {
            return "";
        }

        const input =
            String(value).trim();

        /*
         * Jika langsung ID YouTube
         */
        if (
            /^[a-zA-Z0-9_-]{11}$/.test(input)
        ) {
            return input;
        }

        /*
         * youtube.com/watch?v=
         */
        const watchMatch =
            input.match(
                /[?&]v=([a-zA-Z0-9_-]{11})/
            );

        if (watchMatch) {
            return watchMatch[1];
        }

        /*
         * youtu.be/ID
         */
        const shortMatch =
            input.match(
                /youtu\.be\/([a-zA-Z0-9_-]{11})/
            );

        if (shortMatch) {
            return shortMatch[1];
        }

        /*
         * youtube.com/embed/ID
         */
        const embedMatch =
            input.match(
                /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/
            );

        if (embedMatch) {
            return embedMatch[1];
        }

        return "";
    }


    /* =====================================================
       MEDIA NORMALIZER
    ===================================================== */

    function getPortfolioMedia(data) {

        /*
         * Jika nanti data menggunakan media[],
         * media[] akan diprioritaskan.
         */

        if (
            Array.isArray(data.media) &&
            data.media.length
        ) {

            return data.media;
        }


        /*
         * Untuk data lama yang hanya punya image.
         */

        if (data.image) {

            return [
                {
                    type: "image",
                    src: data.image,
                    alt: data.title || "Portfolio Mas Mail Digital"
                }
            ];
        }


        return [];
    }


    /* =====================================================
       RENDER MEDIA
    ===================================================== */

    function renderMedia(data) {

        currentMedia =
            getPortfolioMedia(data);

        currentMediaIndex = 0;

        mediaTrack.innerHTML = "";

        mediaIndicators.innerHTML = "";


        if (!currentMedia.length) {

            mediaTrack.innerHTML = `
                <div class="portfolio-detail-media-slide">
                    <div style="
                        min-height:260px;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        padding:30px;
                        text-align:center;
                    ">
                        Media portfolio belum tersedia.
                    </div>
                </div>
            `;

            mediaPrev.hidden = true;
            mediaNext.hidden = true;
            mediaIndicators.hidden = true;
            mediaCounter.hidden = true;

            return;
        }


        currentMedia.forEach(
            (item, index) => {

                const slide =
                    document.createElement("div");

                slide.className =
                    "portfolio-detail-media-slide";

                slide.dataset.index =
                    index;


                /* =========================================
                   IMAGE
                ========================================= */

                if (
                    item.type === "image" ||
                    !item.type
                ) {

                    const image =
                        document.createElement("img");

                    image.src =
                        item.src;

                    image.alt =
                        item.alt ||
                        data.title ||
                        "Portfolio Mas Mail Digital";

                    image.loading =
                        index === 0
                            ? "eager"
                            : "lazy";

                    slide.appendChild(image);
                }


                /* =========================================
                   YOUTUBE
                ========================================= */

                else if (
                    item.type === "youtube"
                ) {

                    const youtubeId =
                        extractYouTubeId(
                            item.id || item.url
                        );


                    if (!youtubeId) {

                        slide.innerHTML = `
                            <div style="
                                min-height:260px;
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                text-align:center;
                                padding:30px;
                            ">
                                Video YouTube belum tersedia.
                            </div>
                        `;

                    } else {

                        const youtubeBox =
                            document.createElement("div");

                        youtubeBox.className =
                            "portfolio-detail-youtube";


                        /*
                         * Thumbnail YouTube
                         */

                        const thumbnail =
                            document.createElement("img");

                        thumbnail.src =
                            item.thumbnail ||
                            `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

                        thumbnail.alt =
                            item.title ||
                            "Video YouTube";


                        /*
                         * Tombol play
                         */

                        const playButton =
                            document.createElement("button");

                        playButton.type =
                            "button";

                        playButton.className =
                            "portfolio-detail-youtube-play";

                        playButton.setAttribute(
                            "aria-label",
                            "Putar video"
                        );

                        playButton.innerHTML =
                            "▶";


                        /*
                         * Klik video
                         * → baru iframe dibuat.
                         * Jadi YouTube tidak autoplay
                         * ketika carousel dibuka.
                         */

                        playButton.addEventListener(
                            "click",
                            () => {

                                youtubeBox.innerHTML = "";

                                const iframe =
                                    document.createElement("iframe");

                                iframe.src =
                                    `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`;

                                iframe.title =
                                    item.title ||
                                    "Video YouTube";

                                iframe.loading =
                                    "lazy";

                                iframe.allow =
                                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

                                iframe.allowFullscreen =
                                    true;

                                youtubeBox.appendChild(
                                    iframe
                                );

                                stopAutoSlide();
                            }
                        );


                        youtubeBox.appendChild(
                            thumbnail
                        );

                        youtubeBox.appendChild(
                            playButton
                        );

                        slide.appendChild(
                            youtubeBox
                        );
                    }
                }


                mediaTrack.appendChild(
                    slide
                );


                /* =========================================
                   INDICATOR
                ========================================= */

                if (currentMedia.length > 1) {

                    const dot =
                        document.createElement("button");

                    dot.type =
                        "button";

                    dot.className =
                        "portfolio-detail-media-dot";

                    dot.setAttribute(
                        "aria-label",
                        `Buka media ${index + 1}`
                    );

                    dot.dataset.index =
                        index;

                    dot.addEventListener(
                        "click",
                        () => {

                            goToMedia(
                                index,
                                true
                            );
                        }
                    );

                    mediaIndicators.appendChild(
                        dot
                    );
                }
            }
        );


        /*
         * Carousel controls
         */

        const hasMultiple =
            currentMedia.length > 1;

        mediaPrev.hidden =
            !hasMultiple;

        mediaNext.hidden =
            !hasMultiple;

        mediaIndicators.hidden =
            !hasMultiple;

        mediaCounter.hidden =
            !hasMultiple;


        updateMediaPosition(false);


        if (hasMultiple) {

            startAutoSlide();
        }
    }


    /* =====================================================
       UPDATE MEDIA POSITION
    ===================================================== */

    function updateMediaPosition(animate = true) {

        const offset =
            currentMediaIndex * -100;

        if (!animate) {

            mediaTrack.style.transition =
                "none";
        }

        mediaTrack.style.transform =
            `translate3d(${offset}%, 0, 0)`;


        if (!animate) {

            requestAnimationFrame(() => {

                mediaTrack.style.transition =
                    "";
            });
        }


        /*
         * Counter
         */

        if (
            currentMedia.length > 1
        ) {

            mediaCounter.textContent =
                `${currentMediaIndex + 1} / ${currentMedia.length}`;
        }


        /*
         * Indicator
         */

        const dots =
            mediaIndicators.querySelectorAll(
                ".portfolio-detail-media-dot"
            );

        dots.forEach(
            (dot, index) => {

                const active =
                    index === currentMediaIndex;

                dot.classList.toggle(
                    "is-active",
                    active
                );

                dot.setAttribute(
                    "aria-current",
                    active
                        ? "true"
                        : "false"
                );
            }
        );
    }


    /* =====================================================
       GO TO MEDIA
    ===================================================== */

    function goToMedia(
        index,
        userInteraction = false
    ) {

        if (!currentMedia.length) {
            return;
        }


        const total =
            currentMedia.length;


        /*
         * Carousel looping
         */

        if (index < 0) {

            index =
                total - 1;
        }

        if (index >= total) {

            index = 0;
        }


        currentMediaIndex =
            index;


        updateMediaPosition(true);


        /*
         * Reset autoplay
         */

        stopAutoSlide();


        /*
         * Jika media sekarang adalah YouTube,
         * jangan jalankan autoplay carousel.
         */

        const currentItem =
            currentMedia[currentMediaIndex];

        if (
            currentItem?.type !== "youtube"
        ) {

            startAutoSlide();
        }


        /*
         * Interaksi user tidak perlu
         * melakukan hal tambahan.
         */

        if (userInteraction) {

            /*
             * Hentikan iframe YouTube pada
             * slide yang ditinggalkan.
             */

            stopInactiveYouTubeVideos();
        }
    }


    /* =====================================================
       STOP INACTIVE YOUTUBE
    ===================================================== */

    function stopInactiveYouTubeVideos() {

        const slides =
            mediaTrack.querySelectorAll(
                ".portfolio-detail-media-slide"
            );

        slides.forEach(
            (slide, index) => {

                if (
                    index !== currentMediaIndex
                ) {

                    const iframe =
                        slide.querySelector(
                            "iframe"
                        );

                    if (iframe) {

                        const youtubeBox =
                            slide.querySelector(
                                ".portfolio-detail-youtube"
                            );

                        const item =
                            currentMedia[index];

                        const youtubeId =
                            extractYouTubeId(
                                item?.id ||
                                item?.url
                            );

                        if (
                            youtubeBox &&
                            youtubeId
                        ) {

                            youtubeBox.innerHTML = "";

                            const thumbnail =
                                document.createElement("img");

                            thumbnail.src =
                                item.thumbnail ||
                                `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

                            thumbnail.alt =
                                item.title ||
                                "Video YouTube";

                            const playButton =
                                document.createElement("button");

                            playButton.type =
                                "button";

                            playButton.className =
                                "portfolio-detail-youtube-play";

                            playButton.setAttribute(
                                "aria-label",
                                "Putar video"
                            );

                            playButton.innerHTML =
                                "▶";


                            playButton.addEventListener(
                                "click",
                                () => {

                                    youtubeBox.innerHTML = "";

                                    const newIframe =
                                        document.createElement("iframe");

                                    newIframe.src =
                                        `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`;

                                    newIframe.title =
                                        item.title ||
                                        "Video YouTube";

                                    newIframe.loading =
                                        "lazy";

                                    newIframe.allow =
                                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

                                    newIframe.allowFullscreen =
                                        true;

                                    youtubeBox.appendChild(
                                        newIframe
                                    );

                                    stopAutoSlide();
                                }
                            );

                            youtubeBox.appendChild(
                                thumbnail
                            );

                            youtubeBox.appendChild(
                                playButton
                            );
                        }
                    }
                }
            }
        );
    }


    /* =====================================================
       AUTO SLIDE
    ===================================================== */

    function startAutoSlide() {

        stopAutoSlide();


        if (
            currentMedia.length <= 1
        ) {
            return;
        }


        /*
         * Respect reduced motion
         */

        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            return;
        }


        const currentItem =
            currentMedia[currentMediaIndex];


        /*
         * YouTube tidak menjalankan
         * auto carousel saat sedang aktif.
         */

        if (
            currentItem?.type === "youtube"
        ) {
            return;
        }


        autoSlideTimer =
            setInterval(
                () => {

                    const nextIndex =
                        currentMediaIndex + 1 >=
                        currentMedia.length
                            ? 0
                            : currentMediaIndex + 1;


                    goToMedia(
                        nextIndex,
                        false
                    );

                },
                AUTO_SLIDE_DELAY
            );
    }


    /* =====================================================
       STOP AUTO SLIDE
    ===================================================== */

    function stopAutoSlide() {

        if (autoSlideTimer) {

            clearInterval(
                autoSlideTimer
            );

            autoSlideTimer =
                null;
        }
    }


    /* =====================================================
       RENDER INFORMATION
    ===================================================== */

    function renderPortfolio(data) {

        categoryElement.textContent =
            data.category || "";


        titleElement.textContent =
            data.title || "";


        descriptionElement.textContent =
            data.description || "";


        aboutElement.textContent =
            data.about || "";


        /*
         * META
         */

        metaElement.innerHTML = "";

        const metaItems = [];


        if (data.type === "website") {

            metaItems.push(
                "Website"
            );
        }

        else if (data.type === "template") {

            metaItems.push(
                "Produk Digital"
            );
        }

        else if (data.type === "service") {

            metaItems.push(
                "Jasa Digital"
            );
        }


        metaItems.forEach(
            (item) => {

                const span =
                    document.createElement("span");

                span.textContent =
                    item;

                metaElement.appendChild(
                    span
                );
            }
        );


        /*
         * HIGHLIGHTS
         */

        highlightsElement.innerHTML = "";


        if (
            Array.isArray(data.highlights) &&
            data.highlights.length
        ) {

            highlightsSection.hidden =
                false;

            data.highlights.forEach(
                (item) => {

                    const li =
                        document.createElement("li");

                    li.textContent =
                        item;

                    highlightsElement.appendChild(
                        li
                    );
                }
            );

        } else {

            highlightsSection.hidden =
                true;
        }


        /*
         * MEDIA
         */

        renderMedia(data);


        /*
         * CTA
         */

        renderActions(data);
    }


    /* =====================================================
       RENDER ACTIONS
    ===================================================== */

    function renderActions(data) {

        /*
         * Reset
         */

        primaryAction.classList.remove(
            "is-hidden"
        );

        consultationAction.classList.remove(
            "is-hidden"
        );

        primaryAction.hidden =
            false;

        consultationAction.hidden =
            false;


        /*
         * WEBSITE
         */

        if (
            data.type === "website"
        ) {

            primaryAction.href =
                data.websiteUrl || "#";

            primaryActionText.textContent =
                "Kunjungi Website";


            consultationAction.href =
                createWhatsAppUrl(
                    data.whatsappMessage
                );

            consultationActionText.textContent =
                "Konsultasi";

            return;
        }


        /*
         * TEMPLATE
         */

        if (
            data.type === "template"
        ) {

            primaryAction.href =
                data.purchaseUrl ||
                DEFAULT_PURCHASE_URL;

            primaryActionText.textContent =
                "Gunakan Template";


            consultationAction.href =
                createWhatsAppUrl(
                    data.whatsappMessage
                );

            consultationActionText.textContent =
                "Konsultasi";

            return;
        }


        /*
         * SERVICE
         *
         * Karena service tidak memiliki
         * link produk, cukup tampilkan
         * satu tombol konsultasi.
         */

        primaryAction.href =
            createWhatsAppUrl(
                data.whatsappMessage
            );

        primaryActionText.textContent =
            "Konsultasi";


        consultationAction.classList.add(
            "is-hidden"
        );

        consultationAction.hidden =
            true;
    }


    /* =====================================================
       URL
    ===================================================== */

    function getPortfolioIdFromURL() {

        const params =
            new URLSearchParams(
                window.location.search
            );

        return params.get(
            "karya"
        );
    }


    function createPortfolioURL(id) {

        const url =
            new URL(
                window.location.href
            );

        url.searchParams.set(
            "karya",
            id
        );

        return url.href;
    }


    function createCleanURL() {

        const url =
            new URL(
                window.location.href
            );

        url.searchParams.delete(
            "karya"
        );

        return url.href;
    }


    /* =====================================================
       OPEN DETAIL
    ===================================================== */

    function openPortfolio(
        id,
        updateHistory = true
    ) {

        const data =
            portfolioData[id];


        if (!data) {

            console.warn(
                `Portfolio "${id}" tidak ditemukan.`
            );

            return;
        }


        currentPortfolioId =
            id;

        currentPortfolio =
            data;


        renderPortfolio(
            data
        );


        /*
         * History
         */

        if (
            updateHistory &&
            getPortfolioIdFromURL() !== id
        ) {

            window.history.pushState(
                {
                    portfolio:
                        id,

                    portfolioOverlay:
                        true
                },
                "",
                createPortfolioURL(id)
            );

            historyEntryCreated =
                true;
        }


        /*
         * Tampilkan overlay
         */

        overlay.classList.add(
            "is-open"
        );

        overlay.setAttribute(
            "aria-hidden",
            "false"
        );


        /*
         * Lock body
         */

        previousBodyOverflow =
            document.body.style.overflow;

        document.body.style.overflow =
            "hidden";


        /*
         * Fokus tombol close
         */

        requestAnimationFrame(
            () => {

                closeButton?.focus();
            }
        );
    }


    /* =====================================================
       CLOSE UI SAJA
       Dipakai ketika popstate.
    ===================================================== */

    function closePortfolioUI() {

        stopAutoSlide();


        overlay.classList.remove(
            "is-open"
        );

        overlay.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            previousBodyOverflow;


        currentPortfolioId =
            null;

        currentPortfolio =
            null;

        currentMedia =
            [];

        currentMediaIndex =
            0;


        mediaTrack.innerHTML =
            "";

        mediaIndicators.innerHTML =
            "";
    }


    /* =====================================================
       CLOSE DETAIL
    ===================================================== */

    function closePortfolio() {

        /*
         * Jika kita sendiri yang membuat
         * history entry, gunakan back().
         *
         * Popstate nantinya akan menutup overlay.
         */

        if (
            historyEntryCreated &&
            getPortfolioIdFromURL()
        ) {

            window.history.back();

            return;
        }


        /*
         * Jika halaman dibuka langsung dengan
         * ?karya=id, hapus query tanpa
         * meninggalkan halaman.
         */

        if (
            getPortfolioIdFromURL()
        ) {

            window.history.replaceState(
                {},
                "",
                createCleanURL()
            );
        }


        historyEntryCreated =
            false;

        closePortfolioUI();
    }


    /* =====================================================
       CARD PORTFOLIO
    ===================================================== */

    function setupPortfolioCards() {

        const cards =
            document.querySelectorAll(
                ".digital-portfolio-card"
            );


        cards.forEach(
            (card) => {

                const id =
                    card.dataset.portfolio ||
                    card.dataset.portfolioId;


                if (
                    !id ||
                    !portfolioData[id]
                ) {
                    return;
                }


                const data =
                    portfolioData[id];


                /*
                 * Tombol / link "Lihat Detail"
                 */

                const detailLinks =
                    card.querySelectorAll(
                        ".digital-portfolio-link, .portfolio-detail-trigger, [data-detail]"
                    );


                detailLinks.forEach(
                    (link) => {

                        link.dataset.portfolio =
                            id;

                        link.href =
                            createPortfolioURL(id);

                        link.addEventListener(
                            "click",
                            (event) => {

                                /*
                                 * Jika Ctrl/Cmd/klik tengah,
                                 * biarkan browser membuka
                                 * tab seperti biasa.
                                 */

                                if (
                                    event.ctrlKey ||
                                    event.metaKey ||
                                    event.shiftKey ||
                                    event.button === 1
                                ) {
                                    return;
                                }


                                event.preventDefault();


                                openPortfolio(
                                    id,
                                    true
                                );
                            }
                        );
                    }
                );


                /*
                 * Tombol order / gunakan template
                 */

                const orderLinks =
                    card.querySelectorAll(
                        ".digital-portfolio-order"
                    );


                orderLinks.forEach(
                    (link) => {

                        if (
                            data.type === "template"
                        ) {

                            /*
                             * SAMA PERSIS dengan
                             * link detail.
                             */

                            link.href =
                                data.purchaseUrl ||
                                DEFAULT_PURCHASE_URL;

                        }

                        else if (
                            data.type === "website"
                        ) {

                            link.href =
                                data.websiteUrl ||
                                "#";

                        }

                        else {

                            link.href =
                                createWhatsAppUrl(
                                    data.whatsappMessage
                                );
                        }
                    }
                );
            }
        );
    }


    /* =====================================================
       SUPPORT UNTUK TOMBOL DENGAN DATA-PORTFOLIO
       Jika struktur card berbeda.
    ===================================================== */

    function setupGenericPortfolioTriggers() {

        const triggers =
            document.querySelectorAll(
                "[data-portfolio]"
            );


        triggers.forEach(
            (trigger) => {

                const id =
                    trigger.dataset.portfolio;


                if (
                    !portfolioData[id]
                ) {
                    return;
                }


                /*
                 * Jangan pasang listener dua kali
                 */

                if (
                    trigger.dataset.detailReady === "true"
                ) {
                    return;
                }


                /*
                 * Hanya trigger yang memang
                 * dimaksudkan untuk membuka detail.
                 */

                const isDetailTrigger =
                    trigger.matches(
                        ".portfolio-detail-trigger, [data-detail]"
                    );


                if (!isDetailTrigger) {
                    return;
                }


                trigger.dataset.detailReady =
                    "true";


                trigger.addEventListener(
                    "click",
                    (event) => {

                        if (
                            event.ctrlKey ||
                            event.metaKey ||
                            event.shiftKey ||
                            event.button === 1
                        ) {
                            return;
                        }


                        event.preventDefault();


                        openPortfolio(
                            id,
                            true
                        );
                    }
                );
            }
        );
    }


    /* =====================================================
       BUTTON EVENTS
    ===================================================== */

    closeButton?.addEventListener(
        "click",
        () => {

            closePortfolio();
        }
    );


    backButton?.addEventListener(
        "click",
        () => {

            closePortfolio();
        }
    );


    backdrop?.addEventListener(
        "click",
        () => {

            closePortfolio();
        }
    );


    /* =====================================================
       MEDIA PREV / NEXT
    ===================================================== */

    mediaPrev?.addEventListener(
        "click",
        () => {

            goToMedia(
                currentMediaIndex - 1,
                true
            );
        }
    );


    mediaNext?.addEventListener(
        "click",
        () => {

            goToMedia(
                currentMediaIndex + 1,
                true
            );
        }
    );


    /* =====================================================
       KEYBOARD
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !overlay.classList.contains(
                    "is-open"
                )
            ) {
                return;
            }


            /*
             * ESC
             */

            if (
                event.key === "Escape"
            ) {

                event.preventDefault();

                closePortfolio();

                return;
            }


            /*
             * Arrow Left
             */

            if (
                event.key === "ArrowLeft"
            ) {

                event.preventDefault();

                goToMedia(
                    currentMediaIndex - 1,
                    true
                );

                return;
            }


            /*
             * Arrow Right
             */

            if (
                event.key === "ArrowRight"
            ) {

                event.preventDefault();

                goToMedia(
                    currentMediaIndex + 1,
                    true
                );
            }
        }
    );


    /* =====================================================
       TOUCH / MOUSE SWIPE
    ===================================================== */

    mediaViewport.addEventListener(
        "pointerdown",
        (event) => {

            /*
             * Jangan mengambil pointer dari
             * tombol carousel / YouTube.
             */

            if (
                event.target.closest(
                    "button, iframe"
                )
            ) {
                return;
            }


            pointerStartX =
                event.clientX;

            pointerStartY =
                event.clientY;

            pointerDragging =
                true;

            mediaViewport.setPointerCapture?.(
                event.pointerId
            );

            stopAutoSlide();
        }
    );


    mediaViewport.addEventListener(
        "pointermove",
        (event) => {

            if (!pointerDragging) {
                return;
            }


            const dx =
                event.clientX -
                pointerStartX;

            const dy =
                event.clientY -
                pointerStartY;


            /*
             * Hanya proses jika gerakan
             * dominan horizontal.
             */

            if (
                Math.abs(dx) >
                Math.abs(dy)
            ) {

                if (
                    Math.abs(dx) > 10
                ) {

                    event.preventDefault();
                }
            }
        }
    );


    function finishPointerGesture(event) {

        if (!pointerDragging) {
            return;
        }


        pointerDragging =
            false;


        const dx =
            event.clientX -
            pointerStartX;

        const dy =
            event.clientY -
            pointerStartY;


        /*
         * Minimal swipe 45px
         */

        if (
            Math.abs(dx) >= 45 &&
            Math.abs(dx) > Math.abs(dy)
        ) {

            if (dx < 0) {

                goToMedia(
                    currentMediaIndex + 1,
                    true
                );

            } else {

                goToMedia(
                    currentMediaIndex - 1,
                    true
                );
            }

        } else {

            startAutoSlide();
        }
    }


    mediaViewport.addEventListener(
        "pointerup",
        finishPointerGesture
    );


    mediaViewport.addEventListener(
        "pointercancel",
        finishPointerGesture
    );


    /* =====================================================
       MOUSE HOVER
    ===================================================== */

    mediaViewport.addEventListener(
        "mouseenter",
        () => {

            stopAutoSlide();
        }
    );


    mediaViewport.addEventListener(
        "mouseleave",
        () => {

            startAutoSlide();
        }
    );


    /* =====================================================
       FOCUS
    ===================================================== */

    mediaViewport.addEventListener(
        "focusin",
        () => {

            stopAutoSlide();
        }
    );


    mediaViewport.addEventListener(
        "focusout",
        () => {

            startAutoSlide();
        }
    );


    /* =====================================================
       VISIBILITY TAB
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                stopAutoSlide();

            } else if (
                overlay.classList.contains(
                    "is-open"
                )
            ) {

                startAutoSlide();
            }
        }
    );


    /* =====================================================
       BROWSER BACK / FORWARD
    ===================================================== */

    window.addEventListener(
        "popstate",
        () => {

            const id =
                getPortfolioIdFromURL();


            if (
                id &&
                portfolioData[id]
            ) {

                /*
                 * Browser forward / back
                 * menuju karya tertentu.
                 */

                historyEntryCreated =
                    false;

                openPortfolio(
                    id,
                    false
                );

            } else {

                /*
                 * Browser back keluar dari
                 * detail portfolio.
                 */

                historyEntryCreated =
                    false;

                closePortfolioUI();
            }
        }
    );


    /* =====================================================
       OPEN DARI URL
       Contoh:
       digital.html?karya=poster-tahfidz
    ===================================================== */

    function openFromURL() {

        const id =
            getPortfolioIdFromURL();


        if (
            id &&
            portfolioData[id]
        ) {

            historyEntryCreated =
                false;

            openPortfolio(
                id,
                false
            );
        }
    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    setupPortfolioCards();

    setupGenericPortfolioTriggers();

    openFromURL();


    /* =====================================================
       PUBLIC API
       Bisa digunakan script lain jika diperlukan.
    ===================================================== */

    window.MasMailPortfolio = {

        open: (
            id
        ) => {

            if (
                portfolioData[id]
            ) {

                openPortfolio(
                    id,
                    true
                );
            }
        },

        close: () => {

            closePortfolio();
        },

        data:
            portfolioData
    };

});

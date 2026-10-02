
"use strict";

/*
 * =========================================
 * MAS MAIL DIGITAL
 * PORTFOLIO DETAIL
 * =========================================
 *
 * Fitur:
 * - Detail portfolio dalam overlay
 * - Data produk terpusat
 * - Card dan detail memakai URL yang sama
 * - Galeri foto dan video YouTube
 * - Auto-slide untuk gambar
 * - Video tidak autoplay
 * - Swipe di HP dan drag di desktop
 * - Tombol utama dan konsultasi
 * - URL state, browser back, dan tombol ESC
 */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       ELEMENT
    ===================================== */

    const overlay = document.getElementById("portfolioDetail");

    if (!overlay) return;

    const backdrop = overlay.querySelector(".portfolio-detail-backdrop");
    const sheet = overlay.querySelector(".portfolio-detail-sheet");

    const closeButton = document.getElementById("portfolioDetailClose");
    const backButton = document.getElementById("portfolioDetailBack");

    const image = document.getElementById("portfolioDetailImage");
    const category = document.getElementById("portfolioDetailCategory");
    const title = document.getElementById("portfolioDetailTitle");
    const description = document.getElementById("portfolioDetailDescription");
    const meta = document.getElementById("portfolioDetailMeta");
    const about = document.getElementById("portfolioDetailAbout");
    const highlightsSection = document.getElementById("portfolioDetailHighlightsSection");
    const highlights = document.getElementById("portfolioDetailHighlights");

    const primaryAction = document.getElementById("portfolioDetailAction");
    const primaryActionText = document.getElementById("portfolioDetailActionText");

    /*
     * Elemen-elemen ini akan tersedia setelah HTML
     * portfolio detail diperbarui pada langkah berikutnya.
     */
    const gallery = document.getElementById("portfolioDetailGallery");
    const galleryTrack = document.getElementById("portfolioDetailGalleryTrack");
    const galleryPrev = document.getElementById("portfolioDetailGalleryPrev");
    const galleryNext = document.getElementById("portfolioDetailGalleryNext");
    const galleryDots = document.getElementById("portfolioDetailGalleryDots");
    const galleryCounter = document.getElementById("portfolioDetailGalleryCounter");

    const secondaryAction = document.getElementById("portfolioDetailSecondaryAction");
    const secondaryActionText = document.getElementById("portfolioDetailSecondaryActionText");

    const brandLogo = document.getElementById("portfolioDetailLogo");

    if (!sheet || !title || !primaryAction) return;


    /* =====================================
       CONFIG
    ===================================== */

    const WHATSAPP_NUMBER = "6282253652317";
    const DEFAULT_PURCHASE_URL = "https://lynk.id/ismail280701";
    const AUTO_SLIDE_DELAY = 4800;
    const CLOSE_ANIMATION_DELAY = 560;

    const whatsappLink = (message) =>
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    /* =====================================
       DATA PORTFOLIO
       Tambahkan portfolio baru di bagian ini.
    ===================================== */

    const portfolioData = {

        "website-alihsan": {
            type: "website",
            category: "WEBSITE",
            title: "Website Profil PonPes Al Ihsan",
            image: "Portofolio/website/websiteponpesalihsan.webp",
            alt: "Website Profil Pondok Pesantren Al Ihsan Islamic Center",

            description:
                "Website profil Pondok Pesantren Al Ihsan Islamic Center dengan tampilan modern, responsif, dan informasi yang terstruktur.",

            meta: [
                { label: "Kategori", value: "Website" },
                { label: "Platform", value: "Website" },
                { label: "Tampilan", value: "Mobile & Desktop" },
                { label: "Jenis", value: "Website Profil" }
            ],

            about:
                "Website ini dirancang untuk memperkenalkan profil, program, kegiatan, dan informasi Pondok Pesantren Al Ihsan Islamic Center kepada masyarakat melalui media digital.",

            highlights: [
                "Tampilan responsif untuk HP dan desktop",
                "Struktur informasi yang terorganisir",
                "Navigasi yang mudah digunakan",
                "Tampilan disesuaikan dengan identitas pesantren"
            ],

            media: [
                {
                    type: "image",
                    src: "Portofolio/website/websiteponpesalihsan.webp",
                    alt: "Tampilan website Pondok Pesantren Al Ihsan"
                }
            ],

            websiteUrl: "https://ponpesalihsanicu.my.id",

            whatsappMessage:
                "Assalamu'alaikum, saya tertarik dengan Website Profil PonPes Al Ihsan di portfolio Mas Mail Digital. Saya ingin berkonsultasi mengenai pembuatan website untuk kebutuhan saya. Mohon informasi lebih lanjut. Terima kasih."
        },


        "poster-tahfidz": {
            type: "template",
            category: "CANVA TEMPLATE",
            title: "Poster Apresiasi Tahfidz Al-Qur'an",
            image: "Portofolio/Canva/Templet ucapan selamat Tasmi' hafalan al qur'an_20260928_130011_0000.webp",
            alt: "Poster Apresiasi Tahfidz Al-Qur'an",

            description:
                "Desain poster bernuansa Islami untuk memberikan ucapan selamat dan apresiasi atas pencapaian hafalan Al-Qur'an.",

            meta: [
                { label: "Kategori", value: "Canva Template" },
                { label: "Ukuran", value: "A4" },
                { label: "Tools", value: "Canva" },
                { label: "Format", value: "Template Digital" }
            ],

            about:
                "Template ini dibuat untuk membantu pesantren, sekolah, lembaga pendidikan, maupun personal memberikan apresiasi kepada santri atas pencapaian hafalan Al-Qur'an.",

            highlights: [
                "Nuansa Islami dan elegan",
                "Ukuran A4",
                "Dapat diedit melalui Canva",
                "Cocok untuk apresiasi santri",
                "Nama dan informasi dapat disesuaikan",
                "Dapat disiapkan untuk cetak maupun publikasi digital"
            ],

            media: [
                {
                    type: "image",
                    src: "Portofolio/Canva/Templet ucapan selamat Tasmi' hafalan al qur'an_20260928_130011_0000.webp",
                    alt: "Poster Apresiasi Tahfidz Al-Qur'an"
                }
            ],

            purchaseUrl: "https://lynk.id/ismail280701/972dn525z7w9",

            whatsappMessage:
                "Assalamu'alaikum, saya tertarik dengan Template Poster Apresiasi Tahfidz Al-Qur'an dari Mas Mail Digital. Saya ingin berkonsultasi mengenai template tersebut. Terima kasih."
        },


        "template-ppt": {
            type: "template",
            category: "POWERPOINT",
            title: "Template Presentasi",
            image: "assets/portfolio/ppt-01.jpg",
            alt: "Template Presentasi PowerPoint",

            description:
                "Template PowerPoint dengan struktur visual yang rapi untuk membantu menyampaikan materi presentasi dengan lebih teratur.",

            meta: [
                { label: "Kategori", value: "PowerPoint" },
                { label: "Format", value: "PPT" },
                { label: "Jenis", value: "Template Digital" },
                { label: "Kegunaan", value: "Presentasi" }
            ],

            about:
                "Preview dapat berisi beberapa gambar slide dan video demonstrasi agar calon pembeli dapat melihat tampilan presentasi sebelum memesan.",

            highlights: [
                "Struktur slide yang rapi",
                "Visual yang mudah dipahami",
                "Dapat disesuaikan sesuai fitur produk",
                "Detail produk dapat ditinjau melalui preview"
            ],

            media: [
                {
                    type: "image",
                    src: "assets/portfolio/ppt-01.jpg",
                    alt: "Cover template presentasi"
                }

                /*
                 * Tambahkan media berikut jika sudah tersedia:
                 *
                 * {
                 *     type: "image",
                 *     src: "Portofolio/PPT/slide-02.webp",
                 *     alt: "Contoh slide presentasi"
                 * },
                 *
                 * {
                 *     type: "youtube",
                 *     id: "ID_VIDEO_YOUTUBE",
                 *     title: "Preview animasi presentasi"
                 * }
                 */
            ],

            purchaseUrl: DEFAULT_PURCHASE_URL,

            whatsappMessage:
                "Assalamu'alaikum, saya tertarik dengan Template PowerPoint di portfolio Mas Mail Digital. Saya ingin berkonsultasi mengenai isi dan cara pemesanannya. Terima kasih."
        },


        "sertifikat-piagam": {
            type: "service",
            category: "SERTIFIKAT",
            title: "Sertifikat & Piagam",
            image: "assets/portfolio/sertifikat-01.jpg",
            alt: "Desain Sertifikat dan Piagam",

            description:
                "Desain sertifikat dan piagam untuk kebutuhan kegiatan, penghargaan, pendidikan, maupun dokumentasi.",

            meta: [
                { label: "Kategori", value: "Sertifikat" },
                { label: "Format", value: "Digital / Cetak" },
                { label: "Jenis", value: "Desain" },
                { label: "Kebutuhan", value: "Penghargaan" }
            ],

            about:
                "Desain dapat disesuaikan dengan identitas lembaga, kegiatan, nama penerima, pencapaian, dan informasi lainnya.",

            highlights: [
                "Desain dapat disesuaikan",
                "Cocok untuk kegiatan lembaga",
                "Cocok untuk penghargaan",
                "Dapat dipersiapkan untuk kebutuhan cetak"
            ],

            media: [
                {
                    type: "image",
                    src: "assets/portfolio/sertifikat-01.jpg",
                    alt: "Contoh desain sertifikat dan piagam"
                }
            ],

            whatsappMessage:
                "Assalamu'alaikum, saya tertarik dengan layanan desain Sertifikat & Piagam dari Mas Mail Digital. Saya ingin berkonsultasi mengenai desain yang saya butuhkan. Terima kasih."
        },


        "template-canva": {
            type: "template",
            category: "CANVA TEMPLATE",
            title: "Template Canva",
            image: "assets/portfolio/canva-02.jpg",
            alt: "Template Canva",

            description:
                "Template siap edit untuk membantu kebutuhan desain dengan lebih cepat dan praktis.",

            meta: [
                { label: "Kategori", value: "Canva" },
                { label: "Tools", value: "Canva" },
                { label: "Format", value: "Template Digital" },
                { label: "Jenis", value: "Desain" }
            ],

            about:
                "Template Canva membantu pengguna menyesuaikan teks, gambar, warna, dan elemen desain tanpa harus memulai dari awal.",

            highlights: [
                "Mudah diedit",
                "Menghemat waktu desain",
                "Cocok untuk kebutuhan konten",
                "Elemen desain dapat disesuaikan"
            ],

            media: [
                {
                    type: "image",
                    src: "assets/portfolio/canva-02.jpg",
                    alt: "Preview template Canva"
                }
            ],

            purchaseUrl: DEFAULT_PURCHASE_URL,

            whatsappMessage:
                "Assalamu'alaikum, saya tertarik dengan Template Canva dari Mas Mail Digital. Saya ingin berkonsultasi mengenai template tersebut. Terima kasih."
        },


        "proyek-aplikasi": {
            type: "service",
            category: "APLIKASI",
            title: "Proyek Aplikasi",
            image: "assets/portfolio/aplikasi-01.jpg",
            alt: "Proyek Aplikasi Digital",

            description:
                "Eksplorasi pengembangan aplikasi sederhana untuk membantu kebutuhan tertentu dengan alur yang lebih praktis.",

            meta: [
                { label: "Kategori", value: "Aplikasi" },
                { label: "Jenis", value: "Digital" },
                { label: "Pengembangan", value: "Prototype" },
                { label: "Fokus", value: "Kebutuhan Khusus" }
            ],

            about:
                "Proyek aplikasi merupakan bagian dari eksplorasi solusi digital yang dapat disesuaikan dengan kebutuhan pengguna.",

            highlights: [
                "Eksplorasi solusi digital",
                "Alur penggunaan sederhana",
                "Dapat dibahas sesuai kebutuhan",
                "Fokus pada kemudahan penggunaan"
            ],

            media: [
                {
                    type: "image",
                    src: "assets/portfolio/aplikasi-01.jpg",
                    alt: "Preview proyek aplikasi"
                }
            ],

            whatsappMessage:
                "Assalamu'alaikum, saya tertarik dengan proyek aplikasi di portfolio Mas Mail Digital. Saya ingin berkonsultasi mengenai kebutuhan aplikasi saya. Terima kasih."
        }

    };


    /* =====================================
       STATE
    ===================================== */

    let currentPortfolio = null;
    let isClosing = false;
    let closeTimer = null;

    let currentMediaIndex = 0;
    let autoSlideTimer = null;
    let scrollTimer = null;
    let isPointerDown = false;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let pointerStartScroll = 0;
    let suppressClick = false;
    let previousBodyOverflow = "";

    const originalImageContainer = image?.parentElement;
    let mediaViewport = null;
    let mediaTrack = null;
    let mediaDotsElement = null;
    let mediaCounterElement = null;
    let mediaPrevButton = null;
    let mediaNextButton = null;


    /* =====================================
       HELPERS
    ===================================== */

    function getPortfolioFromURL() {
        return new URLSearchParams(window.location.search).get("karya");
    }

    function updateURL(id, replace = false) {
        const url = new URL(window.location.href);

        if (id) {
            url.searchParams.set("karya", id);
        } else {
            url.searchParams.delete("karya");
        }

        const state = { portfolio: id };

        if (replace) {
            window.history.replaceState(state, "", url);
        } else {
            window.history.pushState(state, "", url);
        }
    }

    function safeExternalLink(url) {
        return typeof url === "string" && /^https?:\/\//i.test(url)
            ? url
            : "";
    }

    function createYouTubeEmbedUrl(id) {
        return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
    }

    function stopAutoSlide() {
        if (autoSlideTimer) {
            window.clearInterval(autoSlideTimer);
            autoSlideTimer = null;
        }
    }

    function clearMediaTimers() {
        stopAutoSlide();

        if (scrollTimer) {
            window.clearTimeout(scrollTimer);
            scrollTimer = null;
        }
    }

    function getCurrentData() {
        return currentPortfolio ? portfolioData[currentPortfolio] : null;
    }


    /* =====================================
       RENDER META
    ===================================== */

    function renderMeta(items) {
        if (!meta) return;

        meta.replaceChildren();

        (items || []).forEach((item) => {
            const wrapper = document.createElement("div");
            wrapper.className = "portfolio-detail-meta-item";

            const label = document.createElement("span");
            label.className = "portfolio-detail-meta-label";
            label.textContent = item.label;

            const value = document.createElement("span");
            value.className = "portfolio-detail-meta-value";
            value.textContent = item.value;

            wrapper.append(label, value);
            meta.appendChild(wrapper);
        });
    }


    /* =====================================
       RENDER HIGHLIGHTS
    ===================================== */

    function renderHighlights(items) {
        if (!highlights) return;

        highlights.replaceChildren();

        if (highlightsSection) {
            highlightsSection.hidden = !items || items.length === 0;
        }

        (items || []).forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            highlights.appendChild(li);
        });
    }


    /* =====================================
       CARD CTA
       Card perlu memakai:
       article data-portfolio="poster-tahfidz"
       .digital-portfolio-link = Lihat Detail
       .digital-portfolio-order = CTA kedua
    ===================================== */

    function renderCardActions() {
        document.querySelectorAll(
            ".digital-portfolio-card[data-portfolio], " +
            ".digital-portfolio-card[data-portfolio-id]"
        ).forEach((card) => {
            const id = card.dataset.portfolio || card.dataset.portfolioId;
            const data = portfolioData[id];

            if (!data) return;

            const detailLink = card.querySelector(".digital-portfolio-link");
            const secondLink = card.querySelector(".digital-portfolio-order");

            if (detailLink) {
                detailLink.href = `?karya=${encodeURIComponent(id)}`;
                detailLink.removeAttribute("target");
                detailLink.removeAttribute("rel");
                detailLink.classList.add("portfolio-detail-trigger");
                detailLink.dataset.portfolio = id;
                detailLink.innerHTML = 'Lihat Detail <span aria-hidden="true">↗</span>';
            }

            if (!secondLink) return;

            const isTemplate = data.type === "template";
            const url = isTemplate
                ? safeExternalLink(data.purchaseUrl)
                : data.type === "website"
                    ? safeExternalLink(data.websiteUrl)
                    : "";

            if (url) {
                secondLink.href = url;
                secondLink.target = "_blank";
                secondLink.rel = "noopener noreferrer";
                secondLink.textContent = isTemplate
                    ? "Gunakan Template"
                    : "Kunjungi Website";
            } else {
                secondLink.href = whatsappLink(data.whatsappMessage || "");
                secondLink.target = "_blank";
                secondLink.rel = "noopener noreferrer";
                secondLink.textContent = "Konsultasi";
            }
        });
    }


    /* =====================================
       GALLERY ELEMENTS
       Dibuat dinamis agar galeri mudah
       ditambah media tanpa membuat HTML baru.
    ===================================== */

    function ensureGallery() {
        if (galleryTrack && gallery) {
            mediaViewport = gallery;
            mediaTrack = galleryTrack;
            mediaDotsElement = galleryDots;
            mediaCounterElement = galleryCounter;
            mediaPrevButton = galleryPrev;
            mediaNextButton = galleryNext;
            return;
        }

        if (!originalImageContainer || !image) return;

        originalImageContainer.replaceChildren();

        originalImageContainer.id = "portfolioDetailGallery";
        originalImageContainer.classList.add("portfolio-detail-gallery");

        const viewport = document.createElement("div");
        viewport.className = "portfolio-detail-gallery-viewport";
        viewport.id = "portfolioDetailGalleryViewport";

        const track = document.createElement("div");
        track.className = "portfolio-detail-gallery-track";
        track.id = "portfolioDetailGalleryTrack";

        const prev = document.createElement("button");
        prev.type = "button";
        prev.className = "portfolio-detail-gallery-nav portfolio-detail-gallery-prev";
        prev.id = "portfolioDetailGalleryPrev";
        prev.setAttribute("aria-label", "Media sebelumnya");
        prev.innerHTML = '<span aria-hidden="true">‹</span>';

        const next = document.createElement("button");
        next.type = "button";
        next.className = "portfolio-detail-gallery-nav portfolio-detail-gallery-next";
        next.id = "portfolioDetailGalleryNext";
        next.setAttribute("aria-label", "Media berikutnya");
        next.innerHTML = '<span aria-hidden="true">›</span>';

        viewport.append(track, prev, next);

        const controls = document.createElement("div");
        controls.className = "portfolio-detail-gallery-controls";

        const dots = document.createElement("div");
        dots.className = "portfolio-detail-gallery-dots";
        dots.id = "portfolioDetailGalleryDots";

        const counter = document.createElement("span");
        counter.className = "portfolio-detail-gallery-counter";
        counter.id = "portfolioDetailGalleryCounter";

        controls.append(dots, counter);
        originalImageContainer.append(viewport, controls);

        mediaViewport = originalImageContainer;
        mediaTrack = track;
        mediaDotsElement = dots;
        mediaCounterElement = counter;
        mediaPrevButton = prev;
        mediaNextButton = next;
    }


    /* =====================================
       GALLERY RENDER
    ===================================== */

    function renderGallery(data) {
        ensureGallery();

        if (!mediaTrack) return;

        mediaTrack.replaceChildren();

        const items = data.media && data.media.length
            ? data.media
            : [{
                type: "image",
                src: data.image,
                alt: data.alt || data.title
            }];

        items.forEach((item, index) => {
            const slide = document.createElement("div");
            slide.className = "portfolio-detail-gallery-slide";
            slide.dataset.index = String(index);
            slide.setAttribute("aria-label", `Media ${index + 1} dari ${items.length}`);

            if (item.type === "youtube") {
                const videoButton = document.createElement("button");
                videoButton.type = "button";
                videoButton.className = "portfolio-detail-video-preview";
                videoButton.setAttribute("aria-label", `Putar video: ${item.title || data.title}`);

                if (item.thumbnail) {
                    videoButton.style.backgroundImage = `url("${item.thumbnail.replace(/["\\]/g, "")}")`;
                }

                const play = document.createElement("span");
                play.className = "portfolio-detail-video-play";
                play.setAttribute("aria-hidden", "true");
                play.textContent = "▶";

                const caption = document.createElement("span");
                caption.className = "portfolio-detail-video-caption";
                caption.textContent = item.title || "Tonton preview";

                videoButton.append(play, caption);

                videoButton.addEventListener("click", () => {
                    const videoId = item.id;

                    if (!videoId || videoId === "ID_VIDEO_YOUTUBE") return;

                    const frame = document.createElement("iframe");
                    frame.src = createYouTubeEmbedUrl(videoId);
                    frame.title = item.title || `Video preview ${data.title}`;
                    frame.allow =
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                    frame.allowFullscreen = true;
                    frame.loading = "lazy";
                    frame.referrerPolicy = "strict-origin-when-cross-origin";

                    const wrapper = document.createElement("div");
                    wrapper.className = "portfolio-detail-video-frame";
                    wrapper.appendChild(frame);

                    slide.replaceChildren(wrapper);
                    stopAutoSlide();
                });

                slide.appendChild(videoButton);
            } else {
                const img = document.createElement("img");
                img.src = item.src || data.image;
                img.alt = item.alt || data.alt || data.title;
                img.loading = index === 0 ? "eager" : "lazy";
                img.draggable = false;
                slide.appendChild(img);
            }

            mediaTrack.appendChild(slide);
        });

        renderGalleryControls(items);
        currentMediaIndex = 0;
        updateGalleryPosition(false);
        startAutoSlide();
    }


    /* =====================================
       GALLERY CONTROLS
    ===================================== */

    function renderGalleryControls(items) {
        if (!mediaDotsElement || !mediaTrack) return;

        mediaDotsElement.replaceChildren();

        items.forEach((item, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "portfolio-detail-gallery-dot";
            dot.setAttribute("aria-label", `Tampilkan media ${index + 1}`);

            dot.addEventListener("click", () => {
                goToMedia(index, true);
            });

            mediaDotsElement.appendChild(dot);
        });

        const multiple = items.length > 1;

        if (mediaPrevButton) mediaPrevButton.hidden = !multiple;
        if (mediaNextButton) mediaNextButton.hidden = !multiple;
        if (mediaDotsElement) mediaDotsElement.hidden = !multiple;
        if (mediaCounterElement) mediaCounterElement.hidden = !multiple;

        if (mediaPrevButton && !mediaPrevButton.dataset.bound) {
            mediaPrevButton.dataset.bound = "true";
            mediaPrevButton.addEventListener("click", () => goToMedia(currentMediaIndex - 1, true));
        }

        if (mediaNextButton && !mediaNextButton.dataset.bound) {
            mediaNextButton.dataset.bound = "true";
            mediaNextButton.addEventListener("click", () => goToMedia(currentMediaIndex + 1, true));
        }
    }


    function updateGalleryPosition(animate = true) {
        if (!mediaTrack) return;

        mediaTrack.style.transition = animate ? "" : "none";
        mediaTrack.style.transform = `translate3d(-${currentMediaIndex * 100}%, 0, 0)`;

        const data = getCurrentData();
        const items = data?.media?.length
            ? data.media
            : data ? [{ type: "image", src: data.image }] : [];

        if (mediaDotsElement) {
            Array.from(mediaDotsElement.children).forEach((dot, index) => {
                const active = index === currentMediaIndex;
                dot.classList.toggle("active", active);
                dot.setAttribute("aria-current", active ? "true" : "false");
            });
        }

        if (mediaCounterElement) {
            mediaCounterElement.textContent = `${currentMediaIndex + 1} / ${items.length}`;
        }

        if (mediaPrevButton) {
            mediaPrevButton.disabled = currentMediaIndex === 0;
        }

        if (mediaNextButton) {
            mediaNextButton.disabled = currentMediaIndex === items.length - 1;
        }
    }


    function goToMedia(index, userInitiated = false) {
        const data = getCurrentData();
        if (!data) return;

        const items = data.media && data.media.length
            ? data.media
            : [{ type: "image", src: data.image }];

        if (!items.length) return;

        currentMediaIndex = Math.max(0, Math.min(index, items.length - 1));
        updateGalleryPosition(true);

        if (userInitiated) {
            stopAutoSlide();

            const current = items[currentMediaIndex];

            if (current?.type === "image") {
                startAutoSlide();
            }
        } else {
            startAutoSlide();
        }
    }


    function startAutoSlide() {
        stopAutoSlide();

        const data = getCurrentData();
        if (!data || !mediaTrack) return;

        const items = data.media && data.media.length
            ? data.media
            : [{ type: "image", src: data.image }];

        if (items.length < 2) return;

        if (items[currentMediaIndex]?.type !== "image") return;

        autoSlideTimer = window.setInterval(() => {
            const latestData = getCurrentData();
            if (!latestData) return;

            const latestItems = latestData.media && latestData.media.length
                ? latestData.media
                : [{ type: "image", src: latestData.image }];

            if (latestItems[currentMediaIndex]?.type !== "image") {
                stopAutoSlide();
                return;
            }

            const nextIndex = (currentMediaIndex + 1) % latestItems.length;
            currentMediaIndex = nextIndex;
            updateGalleryPosition(true);

            if (latestItems[currentMediaIndex]?.type === "youtube") {
                stopAutoSlide();
            }
        }, AUTO_SLIDE_DELAY);
    }


    /* =====================================
       SWIPE / DRAG
    ===================================== */

    function bindGalleryGestures() {
        if (!mediaTrack || mediaTrack.dataset.gesturesBound) return;

        mediaTrack.dataset.gesturesBound = "true";

        mediaTrack.addEventListener("pointerdown", (event) => {
            if (event.target.closest("button, iframe")) return;

            isPointerDown = true;
            suppressClick = false;
            pointerStartX = event.clientX;
            pointerStartY = event.clientY;
            pointerStartScroll = currentMediaIndex;

            stopAutoSlide();

            if (event.pointerType === "mouse") {
                mediaTrack.classList.add("is-dragging");
            }
        });

        mediaTrack.addEventListener("pointermove", (event) => {
            if (!isPointerDown) return;

            const dx = event.clientX - pointerStartX;
            const dy = event.clientY - pointerStartY;

            if (Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy)) {
                suppressClick = true;
            }
        });

        function finishGesture(event) {
            if (!isPointerDown) return;

            isPointerDown = false;
            mediaTrack.classList.remove("is-dragging");

            const dx = event.clientX - pointerStartX;
            const dy = event.clientY - pointerStartY;

            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
                goToMedia(pointerStartScroll + (dx < 0 ? 1 : -1), true);
            } else {
                startAutoSlide();
            }
        }

        mediaTrack.addEventListener("pointerup", finishGesture);
        mediaTrack.addEventListener("pointercancel", finishGesture);
        mediaTrack.addEventListener("lostpointercapture", finishGesture);

        mediaTrack.addEventListener("click", (event) => {
            if (!suppressClick) return;

            event.preventDefault();
            event.stopPropagation();
            suppressClick = false;
        }, true);

        mediaTrack.addEventListener("mouseenter", stopAutoSlide);
        mediaTrack.addEventListener("mouseleave", startAutoSlide);
    }


    /* =====================================
       ACTION BUTTONS
    ===================================== */

    function setActionLink(element, labelElement, url, text) {
        if (!element) return;

        if (!url) {
            element.hidden = true;
            element.removeAttribute("href");
            return;
        }

        element.hidden = false;
        element.href = url;
        element.target = "_blank";
        element.rel = "noopener noreferrer";

        if (labelElement) {
            labelElement.textContent = text;
        } else {
            element.textContent = text;
        }
    }


    function renderActions(data) {
        const isWebsite = data.type === "website";
        const isTemplate = data.type === "template";

        if (isWebsite) {
            setActionLink(
                primaryAction,
                primaryActionText,
                safeExternalLink(data.websiteUrl),
                "Kunjungi Website"
            );
        } else if (isTemplate) {
            setActionLink(
                primaryAction,
                primaryActionText,
                safeExternalLink(data.purchaseUrl),
                "Gunakan Template"
            );
        } else {
            setActionLink(
                primaryAction,
                primaryActionText,
                whatsappLink(data.whatsappMessage || ""),
                "Konsultasi"
            );
        }

        if (secondaryAction) {
            setActionLink(
                secondaryAction,
                secondaryActionText,
                whatsappLink(data.whatsappMessage || ""),
                "Konsultasi"
            );

            secondaryAction.hidden = false;
        }
    }


    /* =====================================
       RENDER PORTFOLIO
    ===================================== */

    function renderPortfolio(id) {
        const data = portfolioData[id];
        if (!data) return false;

        currentPortfolio = id;

        if (image) {
            image.src = data.image;
            image.alt = data.alt || data.title;
        }

        if (category) category.textContent = data.category;
        title.textContent = data.title;

        if (description) description.textContent = data.description || "";
        if (about) about.textContent = data.about || "";

        renderMeta(data.meta);
        renderHighlights(data.highlights);
        renderGallery(data);
        renderActions(data);

        if (brandLogo) {
            brandLogo.src = "assets/logo-mas-mail-digital.png";
            brandLogo.alt = "Mas Mail Digital";
        }

        return true;
    }


    /* =====================================
       OPEN DETAIL
    ===================================== */

    function openPortfolio(id, updateHistory = true) {
        if (!portfolioData[id] || isClosing) return;
        if (!renderPortfolio(id)) return;

        if (updateHistory && getPortfolioFromURL() !== id) {
            updateURL(id);
        }

        overlay.classList.add("is-open");
        overlay.setAttribute("aria-hidden", "false");

        previousBodyOverflow = document.body.style.overflow;
        document.body.classList.add("portfolio-detail-open");

        if (sheet) sheet.scrollTop = 0;

        bindGalleryGestures();

        window.setTimeout(() => {
            if (overlay.classList.contains("is-open")) {
                closeButton?.focus();
            }
        }, 350);
    }


    /* =====================================
       CLOSE DETAIL
    ===================================== */

    function closePortfolio(updateHistory = true) {
        if (!overlay.classList.contains("is-open")) return;

        isClosing = true;
        clearMediaTimers();

        overlay.classList.remove("is-open");
        overlay.setAttribute("aria-hidden", "true");
        document.body.classList.remove("portfolio-detail-open");
        document.body.style.overflow = previousBodyOverflow;

        if (updateHistory && getPortfolioFromURL()) {
            updateURL(null);
        }

        window.setTimeout(() => {
            isClosing = false;
        }, CLOSE_ANIMATION_DELAY);
    }


    /* =====================================
       CARD DETAIL TRIGGERS
    ===================================== */

    document.addEventListener("click", (event) => {
        const trigger = event.target.closest(".portfolio-detail-trigger");
        if (!trigger) return;

        const id = trigger.dataset.portfolio;
        if (!id || !portfolioData[id]) return;

        event.preventDefault();
        openPortfolio(id, true);
    });


    /* =====================================
       CLOSE EVENTS
    ===================================== */

    closeButton?.addEventListener("click", () => closePortfolio(true));
    backButton?.addEventListener("click", () => closePortfolio(true));
    backdrop?.addEventListener("click", () => closePortfolio(true));


    /* =====================================
       ESCAPE
    ===================================== */

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            overlay.classList.contains("is-open")
        ) {
            closePortfolio(true);
        }
    });


    /* =====================================
       BROWSER / ANDROID BACK
    ===================================== */

    window.addEventListener("popstate", () => {
        const id = getPortfolioFromURL();

        if (id && portfolioData[id]) {
            openPortfolio(id, false);
        } else {
            closePortfolio(false);
        }
    });


    /* =====================================
       INITIALIZE
    ===================================== */

    renderCardActions();

    const initialPortfolio = getPortfolioFromURL();

    if (initialPortfolio && portfolioData[initialPortfolio]) {
        window.setTimeout(() => {
            openPortfolio(initialPortfolio, false);
        }, 120);
    }

});

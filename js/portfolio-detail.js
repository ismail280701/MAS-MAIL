"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const portfolioSource = window.MasMailPortfolioData;

    if (!portfolioSource || !portfolioSource.data) {
        console.error("Mas Mail Portfolio: portfolio-data.js tidak ditemukan.");
        return;
    }

    const portfolioData = portfolioSource.data;
    const createWhatsAppUrl = portfolioSource.createWhatsAppUrl;
    const defaultPurchaseUrl = portfolioSource.defaultPurchaseUrl;

    const overlay = document.getElementById("portfolioDetail");
    const backdrop = document.getElementById("portfolioDetailBackdrop");
    const backButton = document.getElementById("portfolioDetailBack");
    const closeButton = document.getElementById("portfolioDetailClose");

    const mediaViewport = document.getElementById("portfolioDetailMediaViewport");
    const mediaTrack = document.getElementById("portfolioDetailMediaTrack");
    const mediaPrev = document.getElementById("portfolioDetailMediaPrev");
    const mediaNext = document.getElementById("portfolioDetailMediaNext");
    const mediaCounter = document.getElementById("portfolioDetailMediaCounter");
    const mediaIndicators = document.getElementById("portfolioDetailMediaIndicators");

    const categoryElement = document.getElementById("portfolioDetailCategory");
    const titleElement = document.getElementById("portfolioDetailTitle");
    const descriptionElement = document.getElementById("portfolioDetailDescription");
    const metaElement = document.getElementById("portfolioDetailMeta");
    const aboutElement = document.getElementById("portfolioDetailAbout");
    const highlightsSection = document.getElementById("portfolioDetailHighlightsSection");
    const highlightsElement = document.getElementById("portfolioDetailHighlights");

    const ctaElement = document.getElementById("portfolioDetailCta");
    const actionElement = document.getElementById("portfolioDetailAction");
    const actionTextElement = document.getElementById("portfolioDetailActionText");
    const consultationElement = document.getElementById("portfolioDetailConsultation");
    const consultationTextElement = document.getElementById("portfolioDetailConsultationText");

    if (!overlay) {
        console.error("Mas Mail Portfolio: elemen #portfolioDetail tidak ditemukan.");
        return;
    }

    const AUTO_SLIDE_DELAY = 4800;

    let currentPortfolioId = null;
    let currentMedia = [];
    let currentMediaIndex = 0;
    let autoSlideTimer = null;
    let touchStartX = 0;
    let touchStartY = 0;

    function escapeHtml(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function getPortfolioMedia(item) {
        if (Array.isArray(item.media) && item.media.length) {
            return item.media;
        }

        if (item.image) {
            return [
                {
                    type: "image",
                    src: item.image,
                    alt: item.title || "Portfolio"
                }
            ];
        }

        return [];
    }

    function stopAutoSlide() {
        if (autoSlideTimer) {
            clearInterval(autoSlideTimer);
            autoSlideTimer = null;
        }
    }

    function startAutoSlide() {
        stopAutoSlide();

        if (currentMedia.length <= 1) {
            return;
        }

        autoSlideTimer = setInterval(() => {
            showMedia(currentMediaIndex + 1);
        }, AUTO_SLIDE_DELAY);
    }

    function renderMedia() {
        if (!mediaTrack) {
            return;
        }

        mediaTrack.innerHTML = "";
        mediaIndicators.innerHTML = "";

        currentMedia.forEach((media, index) => {
            const slide = document.createElement("div");
            slide.className = "portfolio-detail-media-slide";

            if (media.type === "youtube") {
                const videoWrapper = document.createElement("div");
                videoWrapper.className = "portfolio-detail-youtube";

                const thumbnail = document.createElement("div");
                thumbnail.className = "portfolio-detail-youtube-thumb";

                if (media.thumbnail) {
                    thumbnail.style.backgroundImage = `url("${media.thumbnail}")`;
                }

                const playButton = document.createElement("button");
                playButton.type = "button";
                playButton.className = "portfolio-detail-youtube-play";
                playButton.setAttribute("aria-label", "Putar video");

                playButton.innerHTML = "▶";

                playButton.addEventListener("click", () => {
                    const iframe = document.createElement("iframe");

                    iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(media.id)}?rel=0`;
                    iframe.title = media.title || "Video portfolio";
                    iframe.loading = "lazy";
                    iframe.allow =
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                    iframe.allowFullscreen = true;

                    videoWrapper.innerHTML = "";
                    videoWrapper.appendChild(iframe);
                });

                videoWrapper.appendChild(thumbnail);
                videoWrapper.appendChild(playButton);
                slide.appendChild(videoWrapper);
            } else {
                const image = document.createElement("img");

                image.src = media.src || "";
                image.alt = media.alt || "Portfolio";
                image.loading = index === 0 ? "eager" : "lazy";

                slide.appendChild(image);
            }

            mediaTrack.appendChild(slide);

            const indicator = document.createElement("button");

            indicator.type = "button";
            indicator.className = "portfolio-detail-media-indicator";
            indicator.setAttribute("aria-label", `Tampilkan media ${index + 1}`);

            indicator.addEventListener("click", () => {
                showMedia(index);
                startAutoSlide();
            });

            mediaIndicators.appendChild(indicator);
        });

        updateMediaUI();
    }

    function updateMediaUI() {
        if (!mediaTrack) {
            return;
        }

        mediaTrack.style.transform = `translateX(-${currentMediaIndex * 100}%)`;

        if (mediaCounter) {
            mediaCounter.textContent =
                `${currentMedia.length ? currentMediaIndex + 1 : 0} / ${currentMedia.length}`;
        }

        const indicators = mediaIndicators
            ? mediaIndicators.querySelectorAll(".portfolio-detail-media-indicator")
            : [];

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle(
                "is-active",
                index === currentMediaIndex
            );
        });

        if (mediaPrev) {
            mediaPrev.disabled = currentMedia.length <= 1;
        }

        if (mediaNext) {
            mediaNext.disabled = currentMedia.length <= 1;
        }
    }

    function showMedia(index) {
        if (!currentMedia.length) {
            currentMediaIndex = 0;
            updateMediaUI();
            return;
        }

        if (index < 0) {
            currentMediaIndex = currentMedia.length - 1;
        } else if (index >= currentMedia.length) {
            currentMediaIndex = 0;
        } else {
            currentMediaIndex = index;
        }

        updateMediaUI();
    }

    function renderMeta(item) {
        if (!metaElement) {
            return;
        }

        metaElement.innerHTML = "";

        const metaItems = [];

        if (item.meta) {
            if (Array.isArray(item.meta)) {
                metaItems.push(...item.meta);
            } else {
                metaItems.push(item.meta);
            }
        }

        if (item.type === "website") {
            metaItems.push("Responsive Mobile & Desktop");
        }

        if (!metaItems.length) {
            metaElement.style.display = "none";
            return;
        }

        metaElement.style.display = "";

        metaItems.forEach((meta) => {
            const span = document.createElement("span");
            span.textContent = meta;
            metaElement.appendChild(span);
        });
    }

    function renderHighlights(item) {
        if (!highlightsSection || !highlightsElement) {
            return;
        }

        highlightsElement.innerHTML = "";

        if (!Array.isArray(item.highlights) || !item.highlights.length) {
            highlightsSection.style.display = "none";
            return;
        }

        highlightsSection.style.display = "";

        item.highlights.forEach((highlight) => {
            const li = document.createElement("li");
            li.textContent = highlight;
            highlightsElement.appendChild(li);
        });
    }

    function renderCTA(item) {
        if (!ctaElement || !actionElement || !consultationElement) {
            return;
        }

        actionElement.style.display = "";
        consultationElement.style.display = "";

        if (item.type === "website") {
            actionElement.href = item.websiteUrl || "#";
            actionTextElement.textContent = "Kunjungi Website";

            consultationElement.href =
                createWhatsAppUrl(item.whatsappMessage);
            consultationTextElement.textContent = "Konsultasi";
            return;
        }

        if (item.type === "template") {
            actionElement.href =
                item.purchaseUrl || defaultPurchaseUrl;
            actionTextElement.textContent = "Gunakan Template";

            consultationElement.href =
                createWhatsAppUrl(item.whatsappMessage);
            consultationTextElement.textContent = "Konsultasi";
            return;
        }

        if (item.type === "service") {
            actionElement.href =
                createWhatsAppUrl(item.whatsappMessage);
            actionTextElement.textContent = "Konsultasi";

            consultationElement.style.display = "none";
            return;
        }

        actionElement.href =
            createWhatsAppUrl(item.whatsappMessage);

        actionTextElement.textContent = "Konsultasi";
        consultationElement.style.display = "none";
    }

    function renderDetail(item) {
        categoryElement.textContent =
            item.categoryLabel || item.category || "";

        titleElement.textContent =
            item.title || "";

        descriptionElement.textContent =
            item.description || item.cardDescription || "";

        aboutElement.textContent =
            item.about || "";

        renderMeta(item);
        renderHighlights(item);
        renderCTA(item);

        currentMedia = getPortfolioMedia(item);
        currentMediaIndex = 0;

        renderMedia();
    }

    function openDetail(id, updateUrl = true) {
        const item = portfolioData[id];

        if (!item) {
            console.warn(`Mas Mail Portfolio: karya "${id}" tidak ditemukan.`);
            return;
        }

        currentPortfolioId = id;

        renderDetail(item);

        overlay.classList.add("is-open");
        overlay.setAttribute("aria-hidden", "false");

        document.body.classList.add("portfolio-detail-open");

        if (updateUrl) {
            const url = new URL(window.location.href);
            url.searchParams.set("karya", id);
            history.pushState({ portfolio: id }, "", url);
        }

        startAutoSlide();
    }

    function closeDetail(updateUrl = true) {
        stopAutoSlide();

        overlay.classList.remove("is-open");
        overlay.setAttribute("aria-hidden", "true");

        document.body.classList.remove("portfolio-detail-open");

        currentPortfolioId = null;

        if (updateUrl) {
            const url = new URL(window.location.href);
            url.searchParams.delete("karya");

            history.pushState({}, "", url.pathname + url.search + url.hash);
        }
    }

    function setupPortfolioCards() {
        const cards = document.querySelectorAll(
            ".digital-portfolio-card"
        );

        cards.forEach((card) => {
            const trigger = card.querySelector(
                ".portfolio-detail-trigger"
            );

            if (!trigger) {
                return;
            }

            if (trigger.dataset.detailReady === "true") {
                return;
            }

            trigger.dataset.detailReady = "true";

            trigger.addEventListener("click", (event) => {
                event.preventDefault();

                const id =
                    trigger.dataset.portfolioId ||
                    card.dataset.portfolioId;

                if (id) {
                    openDetail(id);
                }
            });
        });
    }

    function openFromURL() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("karya");

        if (id && portfolioData[id]) {
            openDetail(id, false);
        }
    }

    mediaPrev?.addEventListener("click", () => {
        showMedia(currentMediaIndex - 1);
        startAutoSlide();
    });

    mediaNext?.addEventListener("click", () => {
        showMedia(currentMediaIndex + 1);
        startAutoSlide();
    });

    backButton?.addEventListener("click", () => {
        closeDetail();
    });

    closeButton?.addEventListener("click", () => {
        closeDetail();
    });

    backdrop?.addEventListener("click", () => {
        closeDetail();
    });

    mediaViewport?.addEventListener(
        "touchstart",
        (event) => {
            const touch = event.changedTouches[0];

            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
        },
        { passive: true }
    );

    mediaViewport?.addEventListener(
        "touchend",
        (event) => {
            const touch = event.changedTouches[0];

            const deltaX = touch.clientX - touchStartX;
            const deltaY = touch.clientY - touchStartY;

            if (Math.abs(deltaX) < 50) {
                return;
            }

            if (Math.abs(deltaX) <= Math.abs(deltaY)) {
                return;
            }

            if (deltaX < 0) {
                showMedia(currentMediaIndex + 1);
            } else {
                showMedia(currentMediaIndex - 1);
            }

            startAutoSlide();
        },
        { passive: true }
    );

    document.addEventListener("keydown", (event) => {
        if (!overlay.classList.contains("is-open")) {
            return;
        }

        if (event.key === "Escape") {
            closeDetail();
        }

        if (event.key === "ArrowLeft") {
            showMedia(currentMediaIndex - 1);
            startAutoSlide();
        }

        if (event.key === "ArrowRight") {
            showMedia(currentMediaIndex + 1);
            startAutoSlide();
        }
    });

    window.addEventListener("popstate", () => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("karya");

        if (id && portfolioData[id]) {
            openDetail(id, false);
        } else {
            closeDetail(false);
        }
    });

    setupPortfolioCards();
    openFromURL();

    window.MasMailPortfolio = {
        open: openDetail,
        close: closeDetail,
        data: portfolioData
    };
});

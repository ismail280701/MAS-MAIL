"use strict";

/*
 * =========================================
 * MAS MAIL DIGITAL
 * DIGITAL.JS
 * =========================================
 */


/* =========================================
   DIGITAL — PORTFOLIO
   DATA DIBACA DARI portfolio-data.js
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const portfolioGrid =
        document.querySelector(
            ".digital-portfolio-grid"
        );

    const emptyState =
        document.querySelector(
            ".digital-portfolio-empty"
        );

    const portfolioSystem =
        window.MasMailPortfolioData;

    if (!portfolioGrid) {
        return;
    }

    if (!portfolioSystem) {
        console.warn(
            "Portfolio Data belum tersedia."
        );

        return;
    }


    const portfolioData =
        portfolioSystem.data;


    /* =====================================
       CREATE CARD
    ===================================== */

    function createPortfolioCard(
        id,
        data
    ) {

        const article =
            document.createElement("article");

        article.className =
            "digital-portfolio-card";

        article.dataset.category =
            data.category;

        article.dataset.portfolioId =
            id;


        /* =================================
           MEDIA
        ================================= */

        const media =
            Array.isArray(data.media) &&
            data.media.length
                ? data.media[0]
                : null;


        const imageSource =
            media?.type === "image"
                ? media.src
                : data.image || "";


        const imageAlt =
            media?.alt ||
            data.title ||
            "Portfolio Mas Mail Digital";


        /* =================================
           TYPE LABEL
        ================================= */

        let typeLabel =
            data.categoryLabel ||
            data.category ||
            "";


        /* =================================
           CARD
        ================================= */

        article.innerHTML = `
            <div class="digital-portfolio-image">

                ${
                    imageSource
                        ? `
                            <img
                                src="${imageSource}"
                                alt="${imageAlt}"
                                loading="lazy"
                            >
                          `
                        : `
                            <div class="digital-portfolio-image-empty">
                                Preview belum tersedia
                            </div>
                          `
                }

            </div>

            <div class="digital-portfolio-content">

                <span class="digital-portfolio-category">
                    ${typeLabel}
                </span>

                <h3 class="digital-portfolio-title">
                    ${data.title || ""}
                </h3>

                <p class="digital-portfolio-description">
                    ${
                        data.cardDescription ||
                        data.description ||
                        ""
                    }
                </p>

                <div class="digital-portfolio-actions">

                    <a
                        href="?karya=${encodeURIComponent(id)}"
                        class="digital-portfolio-link portfolio-detail-trigger"
                        data-portfolio-id="${id}"
                    >
                        Lihat Karya
                    </a>

                    <a
                        href="#"
                        class="digital-portfolio-order"
                        data-portfolio-order="${id}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ${
                            data.type === "template"
                                ? "Gunakan Template"
                                : data.type === "website"
                                    ? "Kunjungi Website"
                                    : "Konsultasi"
                        }
                    </a>

                </div>

            </div>
        `;


        return article;
    }


    /* =====================================
       RENDER SEMUA PORTFOLIO
    ===================================== */

    function renderPortfolioCards() {

        /*
         * Hapus kartu lama yang masih ada
         * di HTML.
         *
         * Empty state tetap dipertahankan.
         */

        portfolioGrid
            .querySelectorAll(
                ".digital-portfolio-card"
            )
            .forEach((card) => {
                card.remove();
            });


        /*
         * Buat kartu dari portfolioData.
         */

        Object.entries(
            portfolioData
        ).forEach(
            ([id, data]) => {

                const card =
                    createPortfolioCard(
                        id,
                        data
                    );

                portfolioGrid.appendChild(
                    card
                );

            }
        );


        /*
         * Pasang link order.
         */

        setupPortfolioOrderLinks();

    }


    /* =====================================
       ORDER LINKS
    ===================================== */

    function setupPortfolioOrderLinks() {

        const orderLinks =
            portfolioGrid.querySelectorAll(
                ".digital-portfolio-order"
            );


        orderLinks.forEach(
            (link) => {

                const id =
                    link.dataset.portfolioOrder;

                const data =
                    portfolioData[id];


                if (!data) {
                    return;
                }


                /*
                 * TEMPLATE
                 */

                if (
                    data.type === "template"
                ) {

                    link.href =
                        data.purchaseUrl ||
                        portfolioSystem.defaultPurchaseUrl;

                    return;
                }


                /*
                 * WEBSITE
                 */

                if (
                    data.type === "website"
                ) {

                    link.href =
                        data.websiteUrl ||
                        "#";

                    return;
                }


                /*
                 * SERVICE
                 */

                link.href =
                    portfolioSystem.createWhatsAppUrl(
                        data.whatsappMessage
                    );

            }
        );

    }


    /* =====================================
       PORTFOLIO FILTER
    ===================================== */

    function filterPortfolio(
        category
    ) {

        const cards =
            portfolioGrid.querySelectorAll(
                ".digital-portfolio-card"
            );


        let visibleCount = 0;


        cards.forEach(
            (card) => {

                const cardCategory =
                    card.dataset.category;


                const shouldShow =
                    category === "all" ||
                    cardCategory === category;


                if (shouldShow) {

                    card.classList.remove(
                        "is-hidden"
                    );

                    visibleCount++;

                } else {

                    card.classList.add(
                        "is-hidden"
                    );

                }

            }
        );


        if (emptyState) {

            emptyState.classList.toggle(
                "is-visible",
                visibleCount === 0
            );

        }

    }


/* =====================================
   CREATE PORTFOLIO FILTERS
===================================== */

function createPortfolioFilters() {

    const filterContainer =
        document.querySelector(
            ".digital-portfolio-filter"
        );

    if (!filterContainer) {
        return;
    }


    /*
     * Ambil kategori langsung
     * dari portfolioData.
     */

    const categories = [
        ...new Set(
            Object.values(portfolioData)
                .map((item) => item.category)
                .filter(Boolean)
        )
    ];


    /*
     * Kosongkan filter lama.
     */

    filterContainer.innerHTML = "";


    /*
     * Nama kategori yang ditampilkan.
     */

    const categoryLabels = {
        website: "Website",
        canva: "Canva",
        ppt: "PPT",
        sertifikat: "Sertifikat",
        aplikasi: "Aplikasi"
    };


    /*
     * Buat tombol SEMUA.
     */

    const allButton =
        document.createElement("button");

    allButton.type = "button";

    allButton.className =
        "portfolio-filter active";

    allButton.dataset.filter =
        "all";

    allButton.setAttribute(
        "role",
        "tab"
    );

    allButton.setAttribute(
        "aria-selected",
        "true"
    );

    allButton.textContent =
        "Semua";


    filterContainer.appendChild(
        allButton
    );


    /*
     * Tombol SEMUA.
     */

    allButton.addEventListener(
        "click",
        () => {

            setActiveFilter(
                allButton
            );

            filterPortfolio(
                "all"
            );

        }
    );


    /*
     * Buat tombol kategori
     * secara otomatis.
     */

    categories.forEach(
        (category) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "portfolio-filter";

            button.dataset.filter =
                category;

            button.setAttribute(
                "role",
                "tab"
            );

            button.setAttribute(
                "aria-selected",
                "false"
            );

            button.textContent =
                categoryLabels[category] ||
                category
                    .charAt(0)
                    .toUpperCase() +
                category.slice(1);


            button.addEventListener(
                "click",
                () => {

                    setActiveFilter(
                        button
                    );

                    filterPortfolio(
                        category
                    );

                }
            );


            filterContainer.appendChild(
                button
            );

        }
    );

}

/* =====================================
   SET ACTIVE FILTER
===================================== */

function setActiveFilter(
    activeButton
) {

    const filterButtons =
        document.querySelectorAll(
            ".portfolio-filter"
        );


    filterButtons.forEach(
        (button) => {

            const isActive =
                button === activeButton;


            button.classList.toggle(
                "active",
                isActive
            );


            button.setAttribute(
                "aria-selected",
                isActive
                    ? "true"
                    : "false"
            );

        }
    );

}


/* =====================================
   INITIALIZE PORTFOLIO
===================================== */

renderPortfolioCards();

createPortfolioFilters();

filterPortfolio("all");


/* =========================================
   DIGITAL — FEATURED PRODUCTS CAROUSEL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const track =
        document.getElementById("featuredTrack");

    const prevButton =
        document.getElementById("featuredPrev");

    const nextButton =
        document.getElementById("featuredNext");

    const dotsContainer =
        document.getElementById("featuredDots");


    if (
        !track ||
        !prevButton ||
        !nextButton ||
        !dotsContainer
    ) {
        return;
    }


    const cards =
        Array.from(
            track.querySelectorAll(
                ".digital-featured-card"
            )
        );


    if (cards.length === 0) {
        return;
    }


    let currentIndex = 0;

    let autoSlide;

    let isDragging = false;

    let startX = 0;

    let startScrollLeft = 0;


    function getCardStep() {

        if (cards.length < 2) {
            return cards[0].offsetWidth;
        }

        return (
            cards[1].offsetLeft -
            cards[0].offsetLeft
        );

    }


    cards.forEach((card, index) => {

        const dot =
            document.createElement("button");

        dot.type = "button";

        dot.className =
            "digital-featured-dot";

        dot.setAttribute(
            "aria-label",
            `Tampilkan produk ${index + 1}`
        );


        dot.addEventListener(
            "click",
            () => {

                goToSlide(index);

                restartAutoSlide();

            }
        );


        dotsContainer.appendChild(dot);

    });


    const dots =
        Array.from(
            dotsContainer.querySelectorAll(
                ".digital-featured-dot"
            )
        );


    function updateControls() {

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        });


        prevButton.disabled =
            currentIndex === 0;

        nextButton.disabled =
            currentIndex === cards.length - 1;

    }


    function goToSlide(index) {

        currentIndex =
            Math.max(
                0,
                Math.min(
                    index,
                    cards.length - 1
                )
            );


        track.scrollTo({
            left:
                cards[currentIndex].offsetLeft,
            behavior: "smooth"
        });


        updateControls();

    }


    function nextSlide() {

        if (
            currentIndex >=
            cards.length - 1
        ) {

            currentIndex = 0;

        } else {

            currentIndex++;

        }


        track.scrollTo({
            left:
                cards[currentIndex].offsetLeft,
            behavior: "smooth"
        });


        updateControls();

    }


    function previousSlide() {

        if (currentIndex <= 0) {

            currentIndex =
                cards.length - 1;

        } else {

            currentIndex--;

        }


        track.scrollTo({
            left:
                cards[currentIndex].offsetLeft,
            behavior: "smooth"
        });


        updateControls();

    }


    nextButton.addEventListener(
        "click",
        () => {

            nextSlide();

            restartAutoSlide();

        }
    );


    prevButton.addEventListener(
        "click",
        () => {

            previousSlide();

            restartAutoSlide();

        }
    );


    function startAutoSlide() {

        stopAutoSlide();


        autoSlide =
            setInterval(
                () => {

                    nextSlide();

                },
                4500
            );

    }


    function stopAutoSlide() {

        if (autoSlide) {

            clearInterval(autoSlide);

            autoSlide = null;

        }

    }


    function restartAutoSlide() {

        stopAutoSlide();

        startAutoSlide();

    }


    track.addEventListener(
        "mouseenter",
        stopAutoSlide
    );

    track.addEventListener(
        "mouseleave",
        startAutoSlide
    );


    track.addEventListener(
        "pointerdown",
        (event) => {

            isDragging = true;

            startX =
                event.clientX;

            startScrollLeft =
                track.scrollLeft;

            track.classList.add(
                "is-dragging"
            );

            stopAutoSlide();

        }
    );


    track.addEventListener(
        "pointermove",
        (event) => {

            if (!isDragging) {
                return;
            }


            const distance =
                event.clientX - startX;


            track.scrollLeft =
                startScrollLeft - distance;

        }
    );


    function stopDragging() {

        if (!isDragging) {
            return;
        }


        isDragging = false;

        track.classList.remove(
            "is-dragging"
        );


        restartAutoSlide();

    }


    track.addEventListener(
        "pointerup",
        stopDragging
    );

    track.addEventListener(
        "pointercancel",
        stopDragging
    );

    track.addEventListener(
        "pointerleave",
        stopDragging
    );


    let scrollTimer;


    track.addEventListener(
        "scroll",
        () => {

            clearTimeout(scrollTimer);


            scrollTimer =
                setTimeout(
                    () => {

                        let closestIndex = 0;

                        let closestDistance =
                            Infinity;


                        cards.forEach(
                            (card, index) => {

                                const distance =
                                    Math.abs(
                                        track.scrollLeft -
                                        card.offsetLeft
                                    );


                                if (
                                    distance <
                                    closestDistance
                                ) {

                                    closestDistance =
                                        distance;

                                    closestIndex =
                                        index;

                                }

                            }
                        );


                        currentIndex =
                            closestIndex;

                        updateControls();

                    },
                    100
                );

        },
        {
            passive: true
        }
    );


    updateControls();

    startAutoSlide();

});


/* =========================================
   DIGITAL — INTRO SHOWCASE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const introTabs =
        document.querySelectorAll(
            ".digital-intro-tab"
        );

    const introSlides =
        document.querySelectorAll(
            ".digital-intro-slide"
        );

    const introDots =
        document.querySelectorAll(
            ".digital-intro-dots button"
        );

    const introProgress =
        document.querySelector(
            ".digital-intro-progress span"
        );


    if (
        !introTabs.length ||
        !introSlides.length
    ) {
        return;
    }


    let currentIntro = 0;

    let introTimer = null;

    const introDuration = 4500;


    function changeIntro(index) {

        currentIntro = index;


        introTabs.forEach((tab, i) => {

            const active =
                i === currentIntro;

            tab.classList.toggle(
                "active",
                active
            );

            tab.setAttribute(
                "aria-selected",
                active ? "true" : "false"
            );

        });


        introSlides.forEach((slide, i) => {

            slide.classList.toggle(
                "active",
                i === currentIntro
            );

        });


        introDots.forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === currentIntro
            );

        });


        if (introProgress) {

            introProgress.style.animation = "none";

            void introProgress.offsetWidth;

            introProgress.style.animation =
                `digitalIntroProgress ${introDuration}ms linear`;

        }

    }


    function startIntroAutoPlay() {

        clearInterval(introTimer);


        introTimer =
            setInterval(
                () => {

                    const next =
                        (currentIntro + 1) %
                        introSlides.length;


                    changeIntro(next);

                },
                introDuration
            );

    }


    introTabs.forEach((tab) => {

        tab.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        tab.dataset.intro
                    );


                changeIntro(index);

                startIntroAutoPlay();

            }
        );

    });


    introDots.forEach((dot) => {

        dot.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        dot.dataset.introDot
                    );


                changeIntro(index);

                startIntroAutoPlay();

            }
        );

    });


    changeIntro(0);

    startIntroAutoPlay();

});


/* =========================================
   DIGITAL — SERVICES ACCORDION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const serviceCards =
        document.querySelectorAll(
            ".digital-service-card"
        );


    if (!serviceCards.length) {
        return;
    }


    serviceCards.forEach((card) => {

        const toggle =
            card.querySelector(
                ".digital-service-toggle"
            );


        if (!toggle) {
            return;
        }


        toggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    card.classList.contains(
                        "is-open"
                    );


                serviceCards.forEach(
                    (otherCard) => {

                        if (
                            otherCard === card
                        ) {
                            return;
                        }


                        otherCard.classList.remove(
                            "is-open"
                        );


                        const otherToggle =
                            otherCard.querySelector(
                                ".digital-service-toggle"
                            );


                        if (otherToggle) {

                            otherToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    }
                );


                if (isOpen) {

                    card.classList.remove(
                        "is-open"
                    );

                    toggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                } else {

                    card.classList.add(
                        "is-open"
                    );

                    toggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    });

});

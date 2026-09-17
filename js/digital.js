"use strict";

/*
 * =========================================
 * MAS MAIL DIGITAL
 * DIGITAL.JS
 * =========================================
 */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "Mas Mail Digital — halaman aktif."
        );

    }
);
/* =========================================
   DIGITAL — PORTFOLIO FILTER
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons =
        document.querySelectorAll(".portfolio-filter");

    const portfolioCards =
        document.querySelectorAll(
            ".digital-portfolio-card"
        );

    const emptyState =
        document.querySelector(
            ".digital-portfolio-empty"
        );


    if (
        filterButtons.length === 0 ||
        portfolioCards.length === 0
    ) {
        return;
    }


    function filterPortfolio(category) {

        let visibleCount = 0;


        portfolioCards.forEach((card) => {

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

        });


        if (emptyState) {

            emptyState.classList.toggle(
                "is-visible",
                visibleCount === 0
            );

        }

    }


    filterButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.filter;


                filterButtons.forEach(
                    (item) => {

                        const isActive =
                            item === button;


                        item.classList.toggle(
                            "active",
                            isActive
                        );


                        item.setAttribute(
                            "aria-selected",
                            isActive
                                ? "true"
                                : "false"
                        );

                    }
                );


                filterPortfolio(category);

            }
        );

    });


    filterPortfolio("all");

});
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


    /* =====================================
       GET CARD POSITION
    ===================================== */

    function getCardStep() {

        if (cards.length < 2) {
            return cards[0].offsetWidth;
        }


        return (
            cards[1].offsetLeft -
            cards[0].offsetLeft
        );

    }


    /* =====================================
       CREATE DOTS
    ===================================== */

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


    /* =====================================
       UPDATE CONTROLS
    ===================================== */

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


    /* =====================================
       GO TO SLIDE
    ===================================== */

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


    /* =====================================
       NEXT / PREVIOUS
    ===================================== */

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


    /* =====================================
       AUTO SLIDE
    ===================================== */

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


    /* =====================================
       PAUSE WHEN HOVER
    ===================================== */

    track.addEventListener(
        "mouseenter",
        stopAutoSlide
    );

    track.addEventListener(
        "mouseleave",
        startAutoSlide
    );


    /* =====================================
       TOUCH / MOUSE DRAG
    ===================================== */

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


    /* =====================================
       UPDATE SLIDE AFTER MANUAL SWIPE
    ===================================== */

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


    /* =====================================
       INITIALIZE
    ===================================== */

    updateControls();

    startAutoSlide();

});
/* =========================================
   DIGITAL — INTRO SHOWCASE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const introTabs =
        document.querySelectorAll(".digital-intro-tab");

    const introSlides =
        document.querySelectorAll(".digital-intro-slide");

    const introDots =
        document.querySelectorAll(".digital-intro-dots button");

    const introProgress =
        document.querySelector(".digital-intro-progress span");


    if (
        !introTabs.length ||
        !introSlides.length
    ) {
        return;
    }


    let currentIntro = 0;

    let introTimer = null;

    const introDuration = 4500;


    /* =====================================
       CHANGE SLIDE
    ===================================== */

    function changeIntro(index) {

        currentIntro = index;


        /* TABS */

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


        /* SLIDES */

        introSlides.forEach((slide, i) => {

            slide.classList.toggle(
                "active",
                i === currentIntro
            );

        });


        /* DOTS */

        introDots.forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === currentIntro
            );

        });


        /* RESET PROGRESS */

        if (introProgress) {

            introProgress.style.animation = "none";

            void introProgress.offsetWidth;

            introProgress.style.animation =
                `digitalIntroProgress ${introDuration}ms linear`;

        }

    }


    /* =====================================
       AUTO PLAY
    ===================================== */

    function startIntroAutoPlay() {

        clearInterval(introTimer);


        introTimer = setInterval(() => {

            const next =
                (currentIntro + 1) %
                introSlides.length;


            changeIntro(next);

        }, introDuration);

    }


    /* =====================================
       TAB CLICK
    ===================================== */

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


    /* =====================================
       DOT CLICK
    ===================================== */

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


    /* =====================================
       START
    ===================================== */

    changeIntro(0);

    startIntroAutoPlay();

});

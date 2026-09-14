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

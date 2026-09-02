/* =========================================
   MAS ISMAIL
   JAVASCRIPT KHUSUS HOME
========================================= */


/* =========================================
   1. HOME REVEAL
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const elements =
            document.querySelectorAll(
                ".hero-content, .about-content, .brands-grid"
            );

        if (!elements.length) return;


        elements.forEach((element) => {

            element.classList.add("reveal");

        });


        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        elements.forEach((element) => {

            observer.observe(element);

        });

    }
);

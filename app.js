    document.addEventListener("DOMContentLoaded", function () {
        const counters = document.querySelectorAll(".counter");
        const speed = 100; // Speed of the animation

        counters.forEach((counter) => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;

                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    });


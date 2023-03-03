const caroussel = document.getElementById("imageTrack");

caroussel.addEventListener('mousedown', (e) => {
        caroussel.dataset.mouseDownAt = e.clientX;
});

caroussel.addEventListener('mousemove', (e) => {
        if (caroussel.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(caroussel.dataset.mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth / 2;

        const percentage = ((mouseDelta / maxDelta) * -100);
        const nextPercentageUnconstrained = parseFloat(caroussel.dataset.prevPercentage) + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -120);
        caroussel.dataset.percentage = nextPercentage;
        console.log(nextPercentage)

        caroussel.animate({
                transform: `translateX(${nextPercentage}%)`
        }, {duration: 1500, fill: "forwards"});

        for(const image of caroussel.getElementsByClassName("image")) {
                image.animate({
                        objectPosition: `${100 + nextPercentage}% center`
                }, {duration: 1200, fill: "forwards"});
        }

});

window.addEventListener('mouseup', () => {
        caroussel.dataset.mouseDownAt = "0";
        caroussel.dataset.prevPercentage = caroussel.dataset.percentage;
});


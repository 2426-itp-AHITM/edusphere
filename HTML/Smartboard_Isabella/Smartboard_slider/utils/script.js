var slideDuration = 5000; // wechseln alle 5 Sekunden

var splide = new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    interval: slideDuration,
    perPage: 1,
    perMove: 1,
    heightRatio: 0.9,
    arrows: false,
    pagination: false,
    resetProgress: false,
    pauseOnHover: false,
});

splide.mount();

function resetProgressBar() {
    var progressBar = document.querySelector('.my-slider-progress-bar');
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    setTimeout(function () {
        progressBar.style.transition = 'width ' + slideDuration + 'ms linear';
        progressBar.style.width = '100%';
    }, 50);

}

splide.on('move', function () {
    resetProgressBar();
});

resetProgressBar();
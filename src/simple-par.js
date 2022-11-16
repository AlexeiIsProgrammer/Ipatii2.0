import simpleParallax from 'simple-parallax-js';

let images = document.querySelectorAll('.photo-parallax__item');

for (let i = 0; i < Math.ceil(images.length / 2); i++) {
    
    if(i === Math.ceil(images.length / 2) - 1) {
        new simpleParallax(images[i], {
            scale: ((i/2)+1),
            overflow: true,
        });
        continue
    }
    new simpleParallax(images[i], {
        scale: ((i/2)+1),
        overflow: true,
    });

    new simpleParallax(images[images.length - i - 1], {
        scale: ((i/2)+1),
        overflow: true,
    });
}

// const landingImg = document.querySelector('.landing__image')

// new simpleParallax(landingImg, {
//     scale: 3,
// });

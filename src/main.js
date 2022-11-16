//header-slider
let text = [" психолог", " психотерапевт", " гештальт-терапевт", " супервизор", " человек"]
let counterLandingPhotos = 0

const textChanger = document.querySelector('.landing__spec')
const photoChanger = document.querySelector('.landing__img')

// const landingImg = document.querySelector('.landing__image')
// const landingArticle = document.querySelector('.landing__article')

const parallaxImages = document.querySelectorAll('.photo-parallax__item img');

const header = document.querySelector('.header');

let showText = true;
let showParallax = true;
let checkScroll = true;
let loadImg = true;

window.addEventListener('DOMContentLoaded', (event) => {

    /*landing slider*/

    setInterval(function () {
        let rnd = Math.floor(Math.random() * 54)

        if(loadImg) {
            loadImg = false
            if(showText) {
                textChanger.innerHTML = text[counterLandingPhotos]
                counterLandingPhotos++
                if(counterLandingPhotos > 4)
                counterLandingPhotos = 0
    
                photoChanger.classList.add('active')
                textChanger.classList.add('active')
    
                showText = false
                loadImg = true
            }
            else {
                photoChanger.src = `./img/landing-slider/${rnd+1}.jpg`;
    
                photoChanger.onload = function() {
                    photoChanger.classList.remove('active')
                    textChanger.classList.remove('active')
                    
                    loadImg = true
                    showText = true
                };
            }
        }
        
    }, 3000)    

    /*photo slider*/

    // setInterval(function () {
    //     parallaxImages.forEach((el) => {
    //         if(showParallax) {
    //             el.classList.add('active')
    //             showParallax = false;

    //             setTimeout(() => {
    //                 el.src = `./img/landing-slider/${Math.floor(Math.random() * 53)+1}.jpg` 
    //             }, 1500);
    //         }
    //         else {
    //             el.classList.remove('active')
    //             showParallax = true;
    //         }      
    //     })    
    // }, 3000)    

    window.addEventListener('scroll', function() {

        if(window.scrollY < header.getBoundingClientRect().top + window.pageYOffset && checkScroll) {
            header.classList.add('active');
            checkScroll = false;
        }
        if(window.scrollY > header.getBoundingClientRect().top + window.pageYOffset) {
            header.classList.remove('active');
            checkScroll = true;
        }
    });

    /* scrolling to block */

    document.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let href = this.getAttribute("href").substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = document.querySelector(".menu__container").offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
    
            window.scrollBy({
                top: offsetPosition,
                behavior: "smooth",
                speed: 2000,
            });
        });
    });

});




const burgerBtn = document.querySelector('.burger')
const burgerBody = document.querySelector('.menu__items')

burgerBtn.addEventListener('click', function () {
    if(burgerBtn.classList.contains('active')) {
        burgerBody.classList.remove('active')
        burgerBtn.classList.remove('active')
    }
    else {
        burgerBody.classList.add('active')
        burgerBtn.classList.add('active')
    }
})
const hamburger = document.querySelector('.hamburger-menu');
const hamburgerLine = document.querySelectorAll('.hamburger-line');
const overlayMenu = document.querySelector('.overlay-menu');

const desktopMedia = window.matchMedia('(min-width: 992px)');

window.addEventListener('resize', () => {
        if (desktopMedia.matches){
            hamburgerLine.forEach(line => {
                line.classList.remove('open');
            });
            overlayMenu.classList.remove('open'); 
        }
});


hamburger.addEventListener('click', () => {
    hamburgerLine.forEach(line => {
        line.classList.toggle('open');
    });

    overlayMenu.classList.toggle('open');
});

const bonsaiTax = document.getElementById('bonsai-tax');
const bonsaiTaxContent = document.querySelector('.product-secondary-link-right-container');

bonsaiTax.addEventListener('mouseleave', () => {
    bonsaiTaxContent.classList.remove('entered')
})

bonsaiTax.addEventListener('mouseenter', () => {
    bonsaiTaxContent.classList.add('entered')
})

bonsaiTaxContent.addEventListener('mouseenter', () => {
    bonsaiTaxContent.classList.add('entered')
})

bonsaiTaxContent.addEventListener('mouseleave', () => {
    bonsaiTaxContent.classList.remove('entered')
})

const templateCard = document.querySelectorAll('.template-secondary-right-list');
const templateLink = document.querySelectorAll('.template-secondary-left-card');

templateLink.forEach((el,idx) => {
    el.addEventListener('mouseenter', () => {
        templateCard.forEach( card => card.classList.remove('active'));
        templateCard[idx].classList.add('active');
    })
})





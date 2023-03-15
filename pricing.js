const toggleContainer = document.querySelector('.toggle-container');
const toggleBall = document.querySelector('.toggle-ball');
const span = document.querySelectorAll('.toggle-section span');
const cardTitle = document.querySelectorAll('.card-header-title');
const cardTitlePrice = document.querySelectorAll('.card-header-pricing .price');
const billedYearly = document.querySelectorAll('.card-header-pricing-yearly');

const yearPrice = [17, 32, 52];
const monthPrice = [24, 39, 79];

    toggleContainer.addEventListener('click', () => {
        toggleBall.classList.toggle('active');
        span[0].classList.toggle('active');
        span[1].classList.toggle('active');
        
        if (toggleBall.classList.contains('active')){

            cardTitlePrice.forEach( (el,idx) => {
            el.innerHTML = `<span class="dollar-sign">$</span> ${yearPrice[idx]}`;
            })
            
            billedYearly.forEach( el => {
                el.classList.add('active');
            })
        }else{

            cardTitlePrice.forEach( (el,idx) => {
                el.innerHTML = `<span class="dollar-sign">$</span> ${monthPrice[idx]}`;
            })

            billedYearly.forEach( el => {
                el.classList.remove('active');
            })
        }
        

    })


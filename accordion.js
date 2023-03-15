const titles = document.querySelectorAll('.accordion-click');
const paragraphs = document.querySelectorAll('.accordion-paragraph');

console.log(titles,paragraphs)
titles.forEach( (el,idx) => {
    el.addEventListener('click', () => {
        const currStyle = paragraphs[idx].style.display == 'none' ? 'block' : 'none';

        paragraphs[idx].classList.toggle('open')
    })
})
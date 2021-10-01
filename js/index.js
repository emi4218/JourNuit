window.addEventListener('load', () => {

    let ld = document.querySelector('.lightDark');
    let body = document.body;
    let rond = document.querySelector('.rondBouton');

    ld.addEventListener('click', event => {
        if (body.classList.contains('light')) {
            body.classList.remove('light');
            body.classList.add('dark');
            rond.style.marginLeft = '25px';
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
            rond.style.marginLeft = '1px'
        }
    })


});
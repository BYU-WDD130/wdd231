const menuBtn = document.querySelector('#menu-btn');
const navLinks = document.querySelector('#nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.style.display =
        navLinks.style.display === 'flex' ? 'none' : 'flex';
});


    const images = [
        {
            src: 'images/corales.webp',
            alt: 'Snorkeling in Cayos Cochinos'
        },
        {
            src: 'images/servicios.webp',
            alt: 'Snorkeling in Cayos Cochinos'
        },


                {
            src: 'images/food.webp',
            alt: 'Snorkeling in Cayos Cochinos'
        }

    ];

   
    const featuredContainer = document.querySelector('.featured-images');

 
    images.forEach(imgData => {
        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.loading = 'lazy'; // ojo este tipo de carga mejora el rendimiento de las imagenes. 
        featuredContainer.appendChild(img);
    });
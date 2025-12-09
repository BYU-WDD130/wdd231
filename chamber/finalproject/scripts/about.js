const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navBar.classList.toggle('show');  
});


    const images = [
        {
            src: 'images/coraless.webp',
            alt: 'Snorkeling in Cayos Cochinos'
        },
        {
            src: 'images/serviciosss.webp',
            alt: 'Snorkeling in Cayos Cochinos'
        },

       {
            src: 'images/foodes.webp',
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
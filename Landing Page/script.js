const slides = document.querySelector('.slides');
        const dots = document.querySelectorAll('.dot');

        let currentIndex = 0;

        const updateGallery = (index) => {
            slides.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        };

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.getAttribute('data-index'));
                updateGallery(currentIndex);
            });
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % dots.length;
            updateGallery(currentIndex);
        }, 5000);
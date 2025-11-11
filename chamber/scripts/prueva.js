 document.getElementById('timestamp').value = new Date().toISOString();

        // Modal functionality
        const cards = document.querySelectorAll('.card');
        const modals = document.querySelectorAll('.modal');
        const closeButtons = document.querySelectorAll('.close');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const modal = document.getElementById(card.dataset.modal);
                modal.style.display = 'block';
            });
        });

        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.modal').style.display = 'none';
            });
        });

        window.addEventListener('click', e => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
document.querySelectorAll('.reveal-box .btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.parentElement;
        const revealText = parent.querySelector('.reveal-text');
        if (revealText) {
            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
                revealText.style.maxHeight = null; // Collapse the text
            } else {
                parent.classList.add('active');
                revealText.style.maxHeight = revealText.scrollHeight + 'px'; // Expand the text
            }
        }
    });
});

document.querySelectorAll('.reveal-header').forEach(header => {
    header.addEventListener('click', () => {
        const parent = header.parentElement;
        const revealText = parent.querySelector('.reveal-text');
        if (revealText) {
            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
                revealText.style.maxHeight = '0'; // Collapse the text
                revealText.style.opacity = '0'; // Hide the text
            } else {
                parent.classList.add('active');
                revealText.style.maxHeight = revealText.scrollHeight + 'px'; // Expand the text
                revealText.style.opacity = '1'; // Show the text
            }
        }
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const parent = header.parentElement;
        const body = parent.querySelector('.accordion-body');
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            body.style.maxHeight = null; // Collapse the body
        } else {
            document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
                activeItem.classList.remove('active');
                activeItem.querySelector('.accordion-body').style.maxHeight = null;
            });
            parent.classList.add('active');
            body.style.maxHeight = body.scrollHeight + 'px'; // Expand the body
        }
    });
});

document.querySelectorAll('.toggle-card-header').forEach(header => {
    header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('active');
    });
});

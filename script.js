document.querySelectorAll('.reveal-box .btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.parentElement;
        const revealText = parent.querySelector('.reveal-text');
        if (revealText) {
            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
                revealText.style.maxHeight = null; 
            } else {
                parent.classList.add('active');
                revealText.style.maxHeight = revealText.scrollHeight + 'px'; 
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
                revealText.style.maxHeight = '0'; 
                revealText.style.opacity = '0'; 
            } else {
                parent.classList.add('active');
                revealText.style.maxHeight = revealText.scrollHeight + 'px'; 
                revealText.style.opacity = '1'; 
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
            body.style.maxHeight = null; 
        } else {
            document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
                activeItem.classList.remove('active');
                activeItem.querySelector('.accordion-body').style.maxHeight = null;
            });
            parent.classList.add('active');
            body.style.maxHeight = body.scrollHeight + 'px'; 
        }
    });
});

document.querySelectorAll('.toggle-card-header').forEach(header => {
    header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('search-bar');
  const projectCards = document.querySelectorAll('.project-card');

  searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    projectCards.forEach((card) => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });

  projectCards.forEach((card) => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  });

  projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      card.style.transform = 'scale(1.05) rotate(1deg)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1) rotate(0)';
      card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
  });

  document.querySelectorAll('.skill-item, .interest-item').forEach(item => {
    item.addEventListener('click', () => {
        const description = item.querySelector('p');
        if (description) {
            const isVisible = description.style.display === 'block';
            description.style.display = isVisible ? 'none' : 'block';
        }
    });
  });
});



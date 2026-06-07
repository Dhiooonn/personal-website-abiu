// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Simple Scroll Reveal (Optional enhancement)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section, .bento-card, .coin-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});


// Reviews Slider Logic
const reviewsSlider = document.getElementById('reviewsSlider');
const prevBtn = document.getElementById('prevReviewBtn');
const nextBtn = document.getElementById('nextReviewBtn');

if (reviewsSlider && prevBtn && nextBtn) {
  const scrollAmount = () => {
    // Scroll by the width of one card + gap (24px)
    const card = reviewsSlider.querySelector('.review-card');
    return card ? card.offsetWidth + 24 : 300;
  };

  prevBtn.addEventListener('click', () => {
    reviewsSlider.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    reviewsSlider.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
}

// Gallery Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const filterItems = document.querySelectorAll('.filter-item');

if (filterBtns.length > 0 && filterItems.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.style.background = 'transparent';
        b.style.color = 'inherit';
        b.style.border = '1px solid rgba(255,255,255,0.1)';
      });
      
      // Add active class to clicked button
      btn.classList.add('active');
      btn.style.background = 'var(--primary)';
      btn.style.color = '#fff';
      btn.style.border = '1px solid var(--primary)';
      
      const filterValue = btn.getAttribute('data-filter');
      
      filterItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'flex'; // bento cards use flex layout
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300); // Wait for transition
        }
      });
    });
  });
}

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

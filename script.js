// Tabbed Interface
document.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
  
      // Update active tab
      document.querySelectorAll('.tab-button').forEach((btn) => btn.classList.remove('active-tab'));
      button.classList.add('active-tab');
  
      // Show corresponding content
      document.querySelectorAll('.tab-panel').forEach((panel) => {
        panel.classList.toggle('hidden', panel.id !== target);
        panel.classList.toggle('block', panel.id === target);
      });
    });
  });
  
  // Carousel Functionality
  let currentIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('hidden', i !== index);
      slide.classList.toggle('block', i === index);
      dots[i].classList.toggle('active-dot', i === index);
    });
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });
  
  // Floating animation for testimonials
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    testimonials.forEach((testimonial) => {
      // Add the 'float' animation class
      testimonial.classList.add('animate-float');
    });
  });
  
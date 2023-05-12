// Smooth scrolling
const scroll = new SmoothScroll('nav a[href*="#"]', {
    speed: 800
  });
  
  // Show active menu item on scroll
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
  
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
  
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(`#${current}`)) {
        link.classList.add('active');
      }
    });
  });
  
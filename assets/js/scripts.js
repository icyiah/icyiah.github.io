// Stop resize animations
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.   body.classList.remove("resize-animation-stopper");
  }, 400);
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const nav = document.querySelector('nav');

  // Toggle nav bar from top to side
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Hide Side Bar when 
  navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navMenu.classList.remove('show');
    }
  });

  // Close the menu if clicking outside the menu
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && navMenu.classList.contains('show') && !menuToggle.contains(e.target)) {
      navMenu.classList.remove('show');
    }
  });
});

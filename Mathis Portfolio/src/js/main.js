document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Merci pour votre message, je vous répondrai rapidement !");
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 100; // hauteur approximative du header
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
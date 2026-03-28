(function () {
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');

  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = nav.contains(event.target);
      const isClickOnToggle = mobileMenuToggle.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    });
  }

  // Contact form functionality
  const form = document.getElementById('contact-form');
  if (!form) {
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    const subject = encodeURIComponent('Web Sitesi İletişim Formu');
    const body = encodeURIComponent(
      `Ad Soyad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`
    );

    window.location.href = `mailto:emeleric@gmail.com?subject=${subject}&body=${body}`;
  });
})();

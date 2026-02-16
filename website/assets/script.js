(function () {
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

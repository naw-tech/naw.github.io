document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name && email) {
      message.textContent = 'お問い合わせありがとうございます。';
    } else {
      message.textContent = 'すべてのフィールドを入力してください。';
    }
  });
});


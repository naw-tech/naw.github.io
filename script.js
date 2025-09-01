document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    document.getElementById('formMessage').textContent = 'お問い合わせありがとうございます。';
  } else {
    document.getElementById('formMessage').textContent = 'すべてのフィールドを入力してください。';
  }
});


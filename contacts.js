const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      let isValid = true;

      if (!nameInput.value.trim()) {
        nameError.textContent = 'Поле "Имя" обязательно для заполнения';
        isValid = false;
      }

      if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Введите корректный email';
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        messageError.textContent = 'Поле "Сообщение" обязательно для заполнения';
        isValid = false;
      }

      if (isValid) {
        alert('Форма успешно отправлена!');
        form.reset();
      }
    });

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    function clearErrors() {
      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
    }
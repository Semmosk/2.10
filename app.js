// Добавление нового пользователя
addUserForm.onsubmit = async event => {
    event.preventDefault();
  
    try {
      const formData = new FormData(addUserForm);
      const name = formData.get('new-name').trim();
      const email = formData.get('new-email').trim();
      const avatarFile = formData.get('avatar'); // Получаем файл
  
      if (!name || !email) {
        throw new Error('Пожалуйста, заполните все поля.');
      }
  
      // Отправляем данные на сервер
      await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: formData // Используем FormData вместо JSON
      }).then(response => response.json());
  
      window.location.reload(); // Перезагружаем страницу после успешного добавления
    } catch (error) {
      console.error(error);
      showError(error.message || 'Не удалось добавить пользователя.');
    };
  };
  


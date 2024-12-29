// Проверка форм и вывод данных
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Получение данных формы
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Проверка email
        const email = data.email || data['email-feedback'];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Пожалуйста, введите корректный адрес электронной почты.');
            return;
        }

        // Проверка телефона (опционально)
        const phone = data.phone || '';
        const phoneRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
        if (phone && !phoneRegex.test(phone)) {
            alert('Пожалуйста, введите корректный номер телефона.');
            return;
        }

        // Вывод данных
        console.log('Данные формы:', data);
        alert(`Форма успешно отправлена! Введенные данные: \n${JSON.stringify(data, null, 2)}`);
    });
});

// Плавный скролл по навигации
document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
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

// // Показ изображений при скролле
// const images = document.querySelectorAll('.gallery');
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//             observer.unobserve(entry.target); // Перестаём отслеживать, если уже показали
//         }
//     });
// }, { threshold: 0.5 });

// images.forEach(img => observer.observe(img));

// document.addEventListener('DOMContentLoaded', () => {
//     const galleryItems = document.querySelectorAll('.gallery-item');

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         }
//       });
//     }, {
//       threshold: 0.1,
//     });

//     galleryItems.forEach((item) => observer.observe(item));
//   });

// // Плавное пролистывание к разделам
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', e => {
//       e.preventDefault();
//       const targetId = e.target.getAttribute('href').substring(1);
//       const targetSection = document.getElementById(targetId);
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//     });
//   });
  
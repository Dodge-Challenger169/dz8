const form = document.getElementById('registrationForm');
const errorDiv = document.getElementById('error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let error = "";

    if (error) {
        errorDiv.innerHTML = error;
    } else {
        errorDiv.innerHTML = "";
        const formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('email', document.getElementById('email').value);
        if (document.getElementById('age').value < 25) {
            error += "Вы должны быть старше 25 лет<br>";
        }
        formData.append('age', document.getElementById('age').value);
        formData.append('spec', document.getElementById('spec').value);
        formData.append('exp', document.getElementById('exp').value);
        fetch('data.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при отправке данных');
            }
            return response.text();
        })
        .then(data => {
            alert("Данные отправлены");
            form.reset();
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert("Ошибка. Попробуйте еще раз.");
        });
    }
});
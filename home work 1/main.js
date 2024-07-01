
function validateForm() {
    const text = document.getElementById('text').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const resultElement = document.getElementById('result');

    const textRegex = /^[A-Za-z]+$/;
    const numberRegex = /^[0-9]+$/;
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

    let isValid = true;

    if (!textRegex.test(text)) {
        isValid = false;
    }

    if (!numberRegex.test(number)) {
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        isValid = false;
    }

    if (isValid) {
        alert('Все поля заполнены правильно!');
        resultElement.textContent = '';
    } else {
        resultElement.textContent =  'Некоторые поля заполнены неправильно.';
    }
}

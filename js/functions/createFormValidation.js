export const formContent = document.querySelector('.modal__content');
export const successMessage = document.querySelector('.modal__success');

function createFormValidation() {
    const submitButton = document.querySelector('.js-submit-button');
    const inputs = document.querySelectorAll('.modal__form-item');

    function validateEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    function validateInput(input) {
        const isEmailField = input.classList.contains('js-email-input');
        const field = input.querySelector('.modal__form-input');
        const value = field.value.trim();
        const isEmpty = value === '';

        input.classList.remove('error', 'email-error');

        if (isEmpty) {
            input.classList.add('error');
        } else {
            field.classList.add('touched');

            if (isEmailField && !validateEmail(value)) {
                input.classList.add('error', 'email-error');
            }
        }
    }

    function checkAllFieldsValid() {
        var allValid = Array.from(inputs).every((input) => {
            return !input.classList.contains('error') && !input.classList.contains('email-error');
        });

        if (allValid) {
            // Объект для отправки данных
            var formData = {};
            inputs.forEach((input) => {
                const field = input.querySelector('.modal__form-input');
                formData[field.name] = field.value;
            });
            fetch('https://script.google.com/macros/s/AKfycbzADXiwVoq-8PSqWSpJ1MBWXAQnwoLrmYupPaq8q7AmCbcXCfzKwYXMCl1XLKisWUoFCA/exec', {
                method: 'POST',
                body: new URLSearchParams(formData).toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                mode: 'cors' // Установите режим CORS
            })
                .then(response => response.text())
                .then(result => {
                    successMessage.classList.remove('hidden');
                    formContent.classList.add('hidden');
                    clearFormFields();
                    console.log('Success:', result);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        return allValid;
    }

    function clearFormFields() {
        inputs.forEach((input) => {
            const field = input.querySelector('.modal__form-input');
            field.value = '';
            field.classList.remove('touched');
        });
    }

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        inputs.forEach(input => {
            validateInput(input);
        });

        if (checkAllFieldsValid()) {
            successMessage.classList.remove('hidden');
            formContent.classList.add('hidden');
            clearFormFields();
        }
    });

    inputs.forEach((input) => {
        const field = input.querySelector('.modal__form-input');

        field.addEventListener('input', () => {
            validateInput(input);
        });

        field.addEventListener('change', () => {
            field.classList.add('touched');
        });
    });

}

export default createFormValidation;

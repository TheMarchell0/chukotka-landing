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
                formData[field.name] = field.value; // Убедитесь, что у каждого input есть `name` атрибут
            });
            console.log( JSON.stringify(formData))
            // Замените 'YOUR_WEB_APP_URL' на URL вашего веб-приложения
            fetch('https://script.google.com/macros/s/AKfycbwJGfa-m63J9C8Zp5ih5c8edA4iwJiaGfWr3CJAUg6SV-Cl73pyjZEs_1rpB11gZdz5/exec', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
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

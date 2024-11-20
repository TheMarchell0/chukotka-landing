export const formContent = document.querySelector('.modal__content');
export const successMessage = document.querySelector('.modal__success');

function createFormValidation() {
    const submitButton = document.querySelector('.js-submit-button');
    const inputs = document.querySelectorAll('.modal__form-item');
    const checkboxBlock = document.querySelector('.js-checkbox-wrapper')

    function validateEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    function validateCheckbox() {
        const checkbox = checkboxBlock.querySelector('.js-checkbox');
        const label = checkboxBlock.querySelector('.js-checkbox-label');

        if (!checkbox.checked) {
            checkboxBlock.classList.add('error');
        } else {
            if (checkboxBlock.classList.contains('error')) {
                checkboxBlock.classList.remove('error');
            }
        }
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
            return !input.classList.contains('error') && !input.classList.contains('email-error') && !checkboxBlock.classList.contains('error');
        });

        if (allValid) {
            // Объект для отправки данных
            var formData = {};
            inputs.forEach((input) => {
                const field = input.querySelector('.modal__form-input');
                formData[field.name] = field.value;
            });
            fetch('https://script.google.com/macros/s/AKfycbzWtnv7MOYlXeUUGwSiv06WfFLTfmo-0N0IAowCCKn8kSWaqx_cS6YIzwhneQ4YhqX5/exec', {
                method: 'POST',
                body: new URLSearchParams(formData).toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                mode: 'cors'
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

        validateCheckbox();

        if (checkAllFieldsValid()) {
            successMessage.classList.remove('hidden');
            formContent.classList.add('hidden');
            clearFormFields();
        }
    });

    checkboxBlock.addEventListener('click', (e) => {
        if (!e.target.classList.contains('checkbox__link')) {
            validateCheckbox();
        }
    })

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

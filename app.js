const mail = document.querySelector('#mail');
const form = document.querySelector('#subscription_form');
const wrapper = document.querySelector('#wrapper');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const submitBtn = document.querySelector('#submit-btn');
const dismissBtn = document.querySelector('#dismiss_btn');

const isRequired = value => value === '' ? false : true;
const isMailValid = (mail) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(mail);
};

const showError = (input, message) => {
    const field = input.parentElement;
    field.classList.add('error');
    field.classList.remove('success');
    const error = field.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const field = input.parentElement;
    field.classList.add('success');
    field.classList.remove('error');
    const error = field.querySelector('small');
    error.textContent = '';
};

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const checkMail = () => {
    let email = mail.value.trim();
    if (!isRequired(email)) {
        showError(mail, 'Email cannot be blank');
    } else if (!isMailValid(email)) {
        showError(mail, 'Valid email required');
    } else {
        showSuccess(mail);
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = mail.value.trim();
    let confirmEmail = document.querySelector('.confirm_email');
    if (!isRequired(email)) {
        showError(mail, 'Email cannot be blank');
    } else if (!isMailValid(email)) {
        showError(mail, 'Valid email required');
    } else {
        showSuccess(mail);
        confirmEmail.textContent = email;
        openModal();
    }
});

form.addEventListener('input', (e) => {
    switch (e.target.id) {
        case 'mail':
            checkMail();
            break;
    }
});

dismissBtn.addEventListener('click', closeModal);
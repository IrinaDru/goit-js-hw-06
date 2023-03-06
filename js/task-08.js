const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

const formElements = event.currentTarget.elements;
console.log(formElements);

const email = formElements.email.value;
const password = formElements.password.value;
console.log('email:', email);
console.log('password:', password);

const formData = {
    email, password
};
console.log(formData);


if(email === '' || password === '') {
    alert('Заполните все поля!');
};

}


form.addEventListener('submit', clearForm);

function clearForm() {
    form.reset()
};



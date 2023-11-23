import throttle from 'lodash.throttle';
import tools from './storage';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

formProlongation();

function onFormInput(event) {
  const formInput = {
      email: email.value,
      message: message.value,
  };
  tools.save(`feedback-form-state`, formInput);
};

function onFormSubmit(event) {
  event.preventDefault();

  if (!form.elements.email.value || !form.elements.message.value) {
    alert('Необхідно заповнити всі поля!');
    return;
  }

  const formInput = {
      email: email.value,
      message: message.value,
  };

  console.log(formInput);

  tools.remove(`feedback-form-state`);

  event.target.reset();
};

function formProlongation() {
  const storageValue = tools.load(`feedback-form-state`);

  if (storageValue) {
    form.elements.email.value = storageValue['email'];
    form.elements.message.value = storageValue['message'];
  }
}
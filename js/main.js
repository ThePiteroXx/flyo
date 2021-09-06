
// mail elements
const inputMail = document.querySelector('#input-mail');
const errorMail = document.querySelector('#error-mail');
const sendMail = document.querySelector('#send-mail');

const checkMail = () => {
   if(!inputMail.value) {
      errorMail.textContent = 'Please enter a valid email adress';
   } else {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(re.test(inputMail.value)) {
         inputMail.value = '';
         errorMail.textContent = '';
      } else {
         errorMail.textContent = 'Please enter a correct email adress';
      }
   }
}

sendMail.addEventListener('click', checkMail);
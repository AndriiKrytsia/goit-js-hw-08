import throttle from "lodash.throttle";

const refs = { 
  form: document.querySelector('.feedback-form')  
}

refs.form.addEventListener('input', throttle(onInputChang, 500));
refs.form.addEventListener('submit', onFormSubmit);

reloadPage();

function onInputChang() {
  
  const userData = {
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value
  }
 
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};


function reloadPage() {
  const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (saveData) {
    refs.form.elements.email.value = saveData.email || "";
    refs.form.elements.message.value = saveData.message || "";
  }
};

function onFormSubmit(e) {
  e.preventDefault();

  const emailValue = refs.form.elements.email.value
  const messageMessage = refs.form.elements.message.value

  if (emailValue === "" || messageMessage === "") {
    return alert("Please enter the data");
  }

  const formData = {
    email: emailValue,
    message: messageMessage
  };

  console.log(formData);
  
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}




// function onInputChang(e) {
//     const userData = {
//   email: email.value,
//   message: message.value
// };

//   
// }


// const email = localStorage.getItem('email');
// const message = localStorage.getItem('message');

// refs.form.elements.email.value = email;
// refs.form.elements.message.value = message;


// refs.form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const email = e.target.elements.email.value;
//   const message = e.target.elements.message.value;
  
//   
// });



// 2 рендер
// 3 сабміт

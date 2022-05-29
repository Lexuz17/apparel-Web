const form = document.getElementById('form');
const email = document.getElementById('form');

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    const emailVal = email.value;

    // check if its a valid email.
    if(!validateEmail(emailVal)){
        form.classList.add('error');
    }
    else{
        form.classList.remove('error');
        document.body.innerHTML = 'Thank You'
    }
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
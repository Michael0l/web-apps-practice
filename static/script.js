const form = document.getElementById('form');
const welcome = document.getElementsByClassName('welcome')[0];

form.addEventListener('submit', getFormValue);

Telegram.WebApp.ready()
console.log(Telegram.WebApp.initDataUnsafe.user)

configureThemeColor(Telegram.WebApp.colorScheme);
addNameGreeting(welcome);



function configureThemeColor(color) {
  if (color === 'dark') {
      document.documentElement.style.setProperty('--body-background-color', '#1e1e28');
      document.documentElement.style.setProperty('--sub-text-color', 'white');
  }
}

function addNameGreeting(welcome) {
  if (Telegram.WebApp.initDataUnsafe.user != "") {
    welcome.textContent = `Привет, ${Telegram.WebApp.initDataUnsafe.user.first_name}! Заполни анкету`;
    
  }
}

function getFormValue(event) {
  event.preventDefault();
  var name = form.querySelector('[name="name"]'),
    email = form.querySelector('[name="email"]'),
    text = form.querySelector('[name="text"]')
    var data = {
    name: name.value,
    email: email.value,
    text: text.value
  };
  if (name.value === '' || email.value === '' || text.value === '') {
    for (key in data) {
      el = form.querySelector(`[name="${key}"]`);
      if (el.value === '') {
        el.style.borderColor = '#CC4949';
      } else {
        el.style.borderColor = '#408f04';
      };
    };
  } else {
      for (key in data) {
        el = form.querySelector(`[name="${key}"]`);
        el.style.borderColor = '#00677e';
        };
      
      const form_text = data

      fetch('/sendMessage', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              initData: window.Telegram.WebApp.initData,
              msg: form_text
          })
      });
 
      console.log(data) 
    };
};



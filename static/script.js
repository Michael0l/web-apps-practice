const form = document.getElementById('form');

form.addEventListener('submit', getFormValue);


Telegram.WebApp.ready()
configureThemeColor(Telegram.WebApp.colorScheme);

function configureThemeColor(color) {
  if (color === 'dark') {
      document.documentElement.style.setProperty('--body-background-color', '#1e1e28');
      document.documentElement.style.setProperty('--sub-text-color', 'white');
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
      name.value = ''
      email.value = ''
      text.value = ''

      
      const items = [...cartItems.children].reduce((res, cartItem) => {
      const cartItemName = cartItem.querySelector('.cart-item__name');
      const cartItemPrice = cartItem.querySelector('.cart-item__price');
      const cartItemAmount = cartItem.querySelector('.cart-item__amount');
      res.push({
          name: cartItemName.textContent,
          price: cartItemPrice.textContent,
          amount: parseInt(cartItemAmount.textContent)
      });
      return res;
      }, []);

      fetch('/sendMessage', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              initData: window.Telegram.WebApp.initData,
              items: items,
              totalPrice: cartTotalPrice.textContent
          })
      });
    




      console.log(data) 
    };
};


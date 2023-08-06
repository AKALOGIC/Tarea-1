
const myToastEl = document.getElementById("toaste");

const lol = bootstrap.Toast.getOrCreateInstance(myToastEl);

lol.show();
setTimeout(() => {
  lol.hide();
}, 10000);

const textInput = document.querySelector('.text-input');
const text = document.querySelector('.text');

textInput.addEventListener('input', function (event) {
  let name = textInput.value;
  localStorage.setItem('name', name);
  text.innerText = `Hello ${name}`;
});

document.addEventListener('DOMContentLoaded', function () {
  const saved = localStorage.getItem('name') || '';
  textInput.value = saved;
  text.innerText = `Hello ${saved}`;
});

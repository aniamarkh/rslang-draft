const main = document.getElementById('main-page');
const mainBtn = document.getElementById('main-btn');

const textbook = document.getElementById('textbook-page');
const textbookBtn = document.getElementById('textbook-btn');

console.log(textbookBtn);

mainBtn.addEventListener('click', () => {
  console.log('main btn');
  textbook.classList.add('hidden');
  main.classList.remove('hidden');
});

textbookBtn.addEventListener('click', () => {
  console.log('textbook btn');
  textbook.classList.remove('hidden');
  main.classList.add('hidden');
});
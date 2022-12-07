const openingPage = document.querySelector('.opening-page');
const hello = document.querySelector('.hello');
const name = document.querySelector('.name');



window.addEventListener('load', () => {
  setTimeout(() => {
    openingPage.classList.add('fade-out');
  }, 4000);
  setTimeout(() => {
    openingPage.remove();
  }, 5000);
  setTimeout(()=> {
    hello.classList.add('fade-in');
  }, 6000);
  setTimeout(()=> {
    name.style.visibility = 'visible';
  }, 6500);
});

const input = document.getElementById('input');
const getName = sessionStorage.getItem('name');
const welcome = document.querySelector('.welcome');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const setName = input.value;
    sessionStorage.setItem('name', setName);
    name.style.display = 'none';
    hello.remove();
    welcome.innerHTML = `
    <h3>${setName}님 만나서 반가워요~ <span class="welcom-emoji">&#x270B</span></h3> 
    <h3>잘 부탁드립니다.<h3>
    <h3><span class="welcom-emoji">김은주</span> 입니다.</h3>
    <span></span>
    <div class="mouse"></div>
    <h3 class=scroll-down>Scroll Down</h3>
    `;}
});





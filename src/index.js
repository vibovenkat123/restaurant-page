import './style.css'
const content = document.getElementById('content');
function main(){
  createNav();
  document.body.appendChild(content);
}
function createNav(){
  const nav =  document.createElement('nav');
  nav.classList.add('navbar');
  createTitle(nav);
}
function createTitle(nav){
  const divTitle = document.createElement('div');
  divTitle.classList.add('title-div');
  const a = document.createElement('a')
  a.href = "./index.html";
  a.classList.add('title');
  const imageTitle = document.createElement('div');
  imageTitle.classList.add('svg-logo');
  const svgTooth = new Image();
  svgTooth.src = "https://www.svgrepo.com/show/257985/tooth.svg";
  console.log(svgTooth.src);
  imageTitle.appendChild(svgTooth);
  const actualTitle = document.createElement('div');
  const h1 = document.createElement('h1')
  actualTitle.classList.add('actual-title');
  actualTitle.classList.add('text-head');
  h1.textContent = 'Sweet Tooth';
  actualTitle.appendChild(h1);
  a.appendChild(actualTitle);
  a.appendChild(imageTitle);
  divTitle.appendChild(a);
  nav.appendChild(divTitle);
  content.appendChild(nav);
} 
main();
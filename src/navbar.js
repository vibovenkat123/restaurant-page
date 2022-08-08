import './style.css';
import tooth from './img/tooth.svg';
export function createNav(){
  const nav =  document.createElement('nav');
  nav.classList.add('navbar');
  createTitle(nav);
  createLinks(nav);
  return nav;
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
  svgTooth.src = tooth;
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
}
function createLinks(nav){
  const linkDiv = document.createElement('div');
  linkDiv.classList.add('links');
  const list = document.createElement('ul');
  const linkArray = ['Home', 'Menu', 'Contact'];
  for (let i = 0; i<3; i++){
    let listElement = document.createElement('li');
    let link = document.createElement('a');
    link.href = '#';
    link.classList.add(linkArray[i]);
    link.classList.add('Tab')
    let span = document.createElement('span');
    span.classList.add('big-link');
    span.textContent = linkArray[i];
    link.appendChild(span);
    if (linkArray[i] == 'Home'){
      link.firstChild.classList.add('active-tab')
    }
    listElement.appendChild(link)
    list.appendChild(listElement);
  }
  linkDiv.appendChild(list);
  nav.appendChild(linkDiv);
} 

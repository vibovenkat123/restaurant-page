import strawberryIceCream from './img/strawberry-icecream.avif'
export function createHome(){
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');
  createImage(homeDiv);
  createLeftSide(homeDiv)
  return homeDiv; 
}
function createImage(home){
  const imageHomeDiv = document.createElement('div');
  imageHomeDiv.classList.add('img-home');
  const image = new Image();
  image.src = strawberryIceCream;
  imageHomeDiv.appendChild(image);
  home.appendChild(imageHomeDiv)
}
function createLeftSide(home){
  const leftSide = document.createElement('div');
  leftSide.classList.add('left-side');
  const container = document.createElement('div');
  container.classList.add('container');
  createHeading(container);
  createInfoBox(container);
  createCredits(container);
  leftSide.appendChild(container)
  home.appendChild(leftSide);
}
function createHeading(container){
  const headingDiv = document.createElement('div');
  headingDiv.classList.add('main-heading');
  headingDiv.classList.add('text-head');
  const textArray = ['Limited Time!', 'Try our Strawberry Ice Cream ! !'];
  for (const head in textArray){
    let heading = document.createElement('h1')
    heading.textContent = textArray[head];
    headingDiv.appendChild(heading);
  }
  container.appendChild(headingDiv);
}
function createInfoBox(container){
  const containerBox = document.createElement('div');
  const boxDiv = document.createElement('div');
  containerBox.classList.add('container-box');
  boxDiv.classList.add('box-home');
  const heading = document.createElement('h1');
  heading.style.fontSize = '1.9em';
  heading.textContent = 'From $15.99 a bowl ! !'
  const paragraph = document.createElement('p');
  paragraph.style.fontSize = '1.8em';
  paragraph.textContent = 'try our exquisite fine ice scream bowl, with 3 ice cream cones, and a handful of strawberries, picked from the finest farms, we will be sure you love it ! !'
  boxDiv.appendChild(heading);
  boxDiv.appendChild(paragraph);
  containerBox.appendChild(boxDiv);
  container.appendChild(containerBox);
}
function createCredits(container){
  const creditsDiv = document.createElement('div');
  creditsDiv.classList.add('credits')
  creditsDiv.innerHTML = 'Photo by <a href="https://unsplash.com/@kekse_und_ich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Svitlana</a> on <a href="https://unsplash.com/images/food/ice-cream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
  container.appendChild(creditsDiv);
}
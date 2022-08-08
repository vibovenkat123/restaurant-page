let menuDiv;
export function createMenu(){
  menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');
  createContainer(menuDiv)
  addCredit(menuDiv)
  return menuDiv;
}
function createContainer(menu){
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');
  createContainerItems(gridContainer);
  menu.appendChild(gridContainer)
}
function createContainerItems(container){
  const iceCreamArray = ['Strawberry (New !!)', 'Cherry Vanilla', 'Peanut Butter Cup', 'Coffee', 'Chocolate', 'Rocky Road', 'Chocolate Almond', 'Lemon', 'Chocolate Chip Cookie Dough'];
  for (const iceCream in iceCreamArray){
    let gridElement = document.createElement('div');
    gridElement.classList.add('grid-element')
    let heading = document.createElement('h1');
    heading.textContent = iceCreamArray[iceCream];
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit?'
    gridElement.appendChild(heading);
    gridElement.appendChild(paragraph);
    container.appendChild(gridElement);
  }
}
function addCredit(menu){
  const creditDiv = document.createElement('div');
  creditDiv.classList.add('credits');
  creditDiv.innerHTML = 'Photo by <a href="https://unsplash.com/@slashiophotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Slashio Photography</a> on <a href="https://unsplash.com/s/photos/ice-cream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
  menu.appendChild(creditDiv);
}
export {menuDiv}

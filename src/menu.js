let menuDiv;
export function createMenu(){
  menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');
  createContainer(menuDiv)
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
    gridElement.appendChild(heading);
    container.appendChild(gridElement);
  }
}
export {menuDiv}

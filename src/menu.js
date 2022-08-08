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
  menu.appendChild(gridContainer)
}
export {menuDiv}

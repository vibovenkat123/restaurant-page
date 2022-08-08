let contactDiv;
export function createContactDiv(){
  contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');
  createInfoBox(contactDiv);
  return contactDiv;
}
function createInfoBox(div){
  const infoBox = document.createElement('div');
  infoBox.classList.add('info-box');
  div.appendChild(infoBox); 
}
export {contactDiv}

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
  const phone = document.createElement('div');
  phone.textContent = "Call us at 197-555-154 ! !";
  phone.classList.add('info-box-text')
  const times = document.createElement('div');
  times.classList.add('info-box-text');
  times.textContent = 'Open 10am-7pm M-F, 9am-8pm Saturday, and off on Sundays.';
  const address = document.createElement('div');
  address.classList.add('info-box-text');
  address.textContent = 'We are located at 1700 CandySweet Rd.';
  infoBox.appendChild(phone);
  infoBox.appendChild(times); 
  infoBox.appendChild(address)
  div.appendChild(infoBox); 
}
export {contactDiv}

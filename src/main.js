import { createNav } from "./navbar";
import { createHome } from "./home";
import { createMenu } from "./menu";
import { homeDiv } from "./home";
import { menuDiv } from "./menu";
import {contactDiv} from "./contact";
import { createContactDiv } from "./contact"
const content = document.getElementById('content');
const tabs = document.getElementsByClassName('Tab');
function main(){
  content.appendChild(createNav());
  content.appendChild(createHome());
  homeDiv.classList.add('show')
  content.appendChild(createMenu());
  content.appendChild(createContactDiv());
  document.body.appendChild(content);
}
main();
console.log(menuDiv)
function removeClasses(){
  for (let tab=0; tab < tabs.length; tab++){
    tabs[tab].firstChild.classList.remove('active-tab');
  }
  homeDiv.classList.remove('show');
  menuDiv.classList.remove('show');
  contactDiv.classList.remove('show')
}
for (let tab=0; tab < tabs.length; tab++){
  tabs[tab].addEventListener('click', (e)=>{
    removeClasses()
    e.target.classList.add('active-tab');
    if (e.target.textContent == 'Home'){
      homeDiv.classList.add('show')
    }
    else if (e.target.textContent == 'Menu'){
      menuDiv.classList.add('show');
      document.body.style.overflow = 'auto';
    }
    else if (e.target.textContent == 'Contact'){
     contactDiv.classList.add('show');
    }
  })
}

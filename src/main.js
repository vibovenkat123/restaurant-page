import { createNav } from "./navbar";
import { createHome } from "./home";
const content = document.getElementById('content');
const tabs = document.getElementsByClassName('Tab');
function main(){
  content.appendChild(createNav());
  content.appendChild(createHome());
  document.body.appendChild(content);
}
main();
function removeTabClass(){
  for (let tab=0; tab < tabs.length; tab++){
    tabs[tab].firstChild.classList.remove('active-tab')
  }
}
for (let tab=0; tab < tabs.length; tab++){
  tabs[tab].addEventListener('click', (e)=>{
    for (let tab=0; tab < tabs.length; tab++){
      tabs[tab].firstChild.classList.remove('active-tab')
    }
    e.target.classList.add('active-tab')
  })
}
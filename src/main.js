import { createNav } from "./navbar";
import { createHome } from "./home";
const content = document.getElementById('content');
function main(){
  content.appendChild(createNav());
  content.appendChild(createHome());
  document.body.appendChild(content);
}
main();
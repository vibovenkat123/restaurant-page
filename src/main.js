import { createNav } from "./navbar";
const content = document.getElementById('content');
function main(){
  content.appendChild(createNav());
  document.body.appendChild(content);
}
main();
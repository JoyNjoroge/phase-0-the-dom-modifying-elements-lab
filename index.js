// Write your code here!
const main = document.querySelector('main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.textContent = 'Joy is the champion';
newHeader.id = 'victory';
document.body.appendChild(newHeader);

import createProfileSection from './profileSection.js';
import createBtnSection from './btnSection.js';
import createMetasSection from './metasSection.js';


// Agregar elementos al body
const main = document.createElement('main');
main.className = 'profile';
main.appendChild(createProfileSection());
main.appendChild(createBtnSection());
main.appendChild(createMetasSection());
document.body.appendChild(main);


// Estilos 
document.body.style.boxSizing = 'border-box';
document.documentElement.style.fontSize = '15px';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'space-evenly';
document.body.style.background = 'linear-gradient(to right, #000c67, #007be5)';
document.body.style.color = '#fff';
document.body.style.fontSize = '1.5rem';
document.body.style.fontFamily = 'Arial, Helvetica, sans-serif';
document.body.style.height = '100vh';
document.body.style.width = '90%';

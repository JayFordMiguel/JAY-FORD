import { Application } from '@splinetool/runtime';

fetch('components/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
 
    const menuToggle = document.getElementById('menu');
    const container = document.getElementById('nav-container');

    function toggleMenu(e) {
        e.preventDefault();
        container.classList.toggle('translate-x-full');
        if (container.classList.contains('translate-x-full')) {
            menuToggle.textContent = '[ MENU ]';
        } else {
            menuToggle.textContent = '[ CLOSE ]';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
  });

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/klObxnF8GFDMxhC5/scene.splinecode');




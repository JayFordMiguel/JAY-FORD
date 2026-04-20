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


const seeMore = document.querySelector('#see-more');
if (seeMore) {
const seeMoreParent = seeMore.parentElement;
const aboutHiddenContent = document.querySelector('#hidden-content');

function revealHidden() {
  if(seeMoreParent.classList.contains('seeMore'))
  {
    seeMoreParent.classList.remove('seeMore')
  } else {
    seeMoreParent.classList.add('seeMore')
  }
}

seeMore.addEventListener('click', revealHidden);
}

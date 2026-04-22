// fetch('components/navbar.html')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('navbar-placeholder').innerHTML = data;

//     const menuToggle = document.getElementById('menu');
//     const container = document.getElementById('nav-container');

//     function toggleMenu(e) {
//         e.preventDefault();
//         container.classList.toggle('translate-x-full');
//         if (container.classList.contains('translate-x-full')) {
//             menuToggle.textContent = '[ MENU ]';
//         } else {
//             menuToggle.textContent = '[ CLOSE ]';
//         }
//     }

//     menuToggle.addEventListener('click', toggleMenu);
//   });

fetch('components/navbar.html')
  .then(response => {
    if (!response.ok) throw new Error('Navbar not found'); // Safety check for GitHub Pages
    return response.text();
  })
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;

    // 1. Setup GSAP inside the fetch success block
    const menuBtn = document.querySelector("#menu");
    const navContainer = document.querySelector("#nav-container");
    const navLinks = document.querySelectorAll("#nav-container li");

    // Clear the Tailwind class so GSAP has total control
    // navContainer.classList.remove('translate-x-full');
    // gsap.set(navContainer, { xPercent: 100 });

    const menuTL = gsap.timeline({ paused: true, reversed: true });

    menuTL
      .fromTo(navContainer, 
        {
          xPercent: 100,
          autoAplha: 0,
        },{
          xPercent: 0,
          duration: 0.4,
          ease: "linear"
      })
      .from(navLinks, {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4
      }, );

    // 2. The Toggle Logic
    menuBtn.addEventListener("click", () => {
        if (menuTL.reversed()) {
            menuTL.play();
            menuBtn.innerText = "[ CLOSE ]";
        } else {
            menuTL.reverse();
            menuBtn.innerText = "[ MENU ]";
        }
    });
  })
  .catch(err => console.error("Navbar loading failed:", err));


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

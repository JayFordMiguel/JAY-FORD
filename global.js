fetch('components/navbar.html')
  .then(response => {
    if (!response.ok) throw new Error('Navbar not found'); // Safety check for GitHub Pages
    return response.text();
  })
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;

    // 1. Setup GSAP inside the fetch success block
    const navLogo = document.querySelector("#nav-logo")

    const menuBtn = document.querySelector("#menu");
    const navContainer = document.querySelector("#nav-container");
    const navLinks = document.querySelectorAll("#nav-container li");

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

// 1. Grab the elements
const marquee = document.querySelector('.marquee-content');

// 2. Clone the content to ensure it fills the width and loops seamlessly
const clone = marquee.innerHTML;
marquee.insertAdjacentHTML('beforeend', clone);

// 3. Setup the animation
gsap.to(".marquee-content", {
    xPercent: -50,          // Move exactly half the width
    ease: "none",           // Linear movement is essential for marquees
    duration: 15,           // Adjust speed (higher = slower)
    repeat: -1,             // Loop forever
});

const tween = gsap.to(".marquee-content", {
    xPercent: -50,
    ease: "none",
    duration: 15,
    repeat: -1
});
//masked ruveal for headers
function maskedRuveal(text) {
    if (!text) return;

    return gsap.fromTo(text, 
        { 
            y: "100%", 
            visibility: "hidden" 
        }, 
        { 
            y: "0%", 
            visibility: "visible", 
            duration: 1.2, 
            ease: "power4.out", 
            stagger: 0.3,
            scrollTrigger: {
                start: "top bottom",
                trigger: text,
                toggleActions: "play none none reverse"
            }
        }
    );
}

//LANDING PAGE ANIMATIONS
const hero = document.querySelector('#hero')
const indexProjs = document.getElementById('projectsHover');

if (hero) {
    const textRuveal = hero.querySelectorAll('.reveal-text')
    maskedRuveal(textRuveal)
}

if (indexProjs) {
    const projRows = indexProjs.querySelectorAll('.projectRows');

    gsap.from(projRows, {
    scrollTrigger: {
        trigger: indexProjs,
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers: true
    },
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    ease: "power3.out"
    });
}

//ABOUT PAGE ANIMATIONS
const aboutHero = document.querySelector('#aboutHero')
const stackSection = document.querySelector('#stackSection') 
const leadingLine = document.querySelectorAll('.leaderLine');

//hero section animations
if (aboutHero) {
    const textRuveal = aboutHero.querySelectorAll('.reveal-text')
    maskedRuveal(textRuveal)
}

//techstack section animations
const rows = document.querySelectorAll('.stackRows');
if (rows.length > 0) {
    rows.forEach((row) => {
        const texts = row.querySelectorAll('.reveal-text');
        const line = row.querySelector('.leaderLine');
        const content = row.querySelector('.stackContent');

        const rowTl = gsap.timeline({
            scrollTrigger: {
                trigger: row,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });

        rowTl.fromTo(texts,
            { x: "-50%", autoAlpha: 0 },
            { x: "0%", autoAlpha: 1, duration: 0.8, ease: "power4.out", stagger: 0.1 }
        )
        .from(line, {
            clipPath: "inset(0% 100% 0% 0%)", // Clips the right side 100%
            duration: 1.5,
            ease: "power3.out",
        }, "-=0.6")
        .fromTo(content,
            { y: "100%", autoAlpha: 0 },
            { y: "0%", autoAlpha: 1, duration: 0.8, ease: "power.out" },
            "-=0.8"
        );
    });
}

//evolution section animations
const evoWrapper = document.querySelector('#evoMainWrapper');
if (evoWrapper) {
    const spine = evoWrapper.querySelector('#evoSpine');
    // const evoContentWrapper = evoWrapper.querySelectorAll('.evoRowWrapper');
    const evoContent = document.querySelectorAll(".evo-item");

    const spineTL = gsap.timeline({
        scrollTrigger: {
            trigger: evoWrapper,
            start: "top 80%",
            // end: "bottom 25%",
            toggleActions: "play none none reverse",
            scrub: 1,
            // markers: true,
        }
    })

    spineTL.fromTo(spine,
        {scaleY: 0,},
        {transformOrigin: "top",
        scaleY: 1}
    );

    evoContent.forEach((item) => {
        const charCount = item.textContent.length;
        const evolTL = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top 75%",
                toggleActions: "play none none reset",
                // markers: true,
            }
        });

        evolTL.from(item,{
            clipPath: "inset(0% 100% 0% 0%)",
            duration: 2,
            ease: "power3.out"
            // ease: 'steps(${charCount})'
        })
    });
}










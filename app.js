
document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)




    // header hidden and appear function
    // THis is for header

    gsap.timeline()
        .from("header", {
            y: -500,
            duration: 0.1
        })
        .from("header img", {
            y: -500,
            duration: 1
        }, "-=0.5")
        .from('header i', {
            y: -50,
            opacity: 1,
            duration: 0.25,
        })
        .from("header nav a", {
            y: -50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.25
        });

    let lastScrollTop = 0;
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            // THis is for header
            header.classList.add("hidden");
            header.classList.remove("scrolling-up");
        } else {
            // Scrolling up
            header.classList.remove("hidden");
            header.classList.add("scrolling-up");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    

    // Burger menu
    const menuLogo = document.querySelector('.fa-bars');
    const menuContainer = document.querySelector('.menu-container');
    const navBar = document.querySelector('header nav');
    const navBarAnchors = document.querySelectorAll('header nav a');

    const openMenu = () => {
        gsap.fromTo(".menu-container", {
            x: 500,
            display: 'flex'
        }, {
            x: 0,
            duration: 0.75,
            ease: "easeInOut"
        });

        menuContainer.style.display = 'flex';
        menuContainer.style.alignItems = 'center';
        menuContainer.style.paddingLeft = '100px';
        menuContainer.style.left = '20%';
        menuContainer.appendChild(navBar);
        navBar.style.display = "flex";
        navBar.style.flexDirection = "column";
        navBarAnchors.forEach(link => {
            link.style.paddingTop = '50px';
            link.style.textDecoration = 'none';
            link.style.fontSize = '2rem';
            link.style.color = 'white';
        });
    };

    const closeMenu = () => {
        gsap.to(".menu-container", {
            x: 500,
            duration: 0.75,
            ease: "easeInOut",
            onComplete: () => {
                menuContainer.style.display = 'none';
                document.querySelector('header').appendChild(navBar);
                navBar.style.display = "";
                navBar.style.flexDirection = "row";
                navBarAnchors.forEach(link => {
                    link.style.paddingTop = '0';
                    link.style.fontSize = '1rem';
                    link.style.color = 'black';
                });
            }
        });
    };

    menuLogo.addEventListener("click", openMenu);
    menuContainer.addEventListener("click", (event) => {
        if (event.target === menuContainer) {
            closeMenu();
        }
    });

    navBarAnchors.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });















    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);























    

    // Create a timeline for the Hero Section
    const heroTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            toggleActions: "restart none none none"
        }
    });

    heroTimeline.from(".hero h1", { y: -100, opacity: 0, duration: 2 });
    heroTimeline.from(".hero p", { y: 100, opacity: 0, duration: 2 }, "-=1");
    heroTimeline.from(".hero img", { x: 100, opacity: 0, duration: 2 }, "-=5");
    heroTimeline.to(".hero", { backgroundColor: "black", duration: 2 });
























    // Create a timeline for the About Section
    const aboutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: "top top",
            end: "bottom top",
            scrub: 2,
            pin: true,
            pinSpacing: true,
            toggleActions: "restart none none none",
        }
    });

    aboutTimeline.from(".about h1", { x: -100, opacity: 0, duration: 2 },);
    aboutTimeline.from(".about p", { x: 100, opacity: 0, duration: 5}, "-=1.5");
    aboutTimeline.from(".about img", { y: 100, opacity: 0, duration: 5 }, "+=1.5");
























    // Create a timeline for the Experience Section
    const experienceTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".experience",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            toggleActions: "restart none none none"
        }
    });

    experienceTimeline.from(".experience .card", { y: -100, opacity:0}, "-=1.5");
    experienceTimeline.from(".experience .card h2", { x: 100, opacity:0}, "+=1.5");
    experienceTimeline.from(".experience .card ul", { x: 100, opacity:0}, "-=1.5");
    experienceTimeline.from(".experience .card li", { x: 100, opacity:0, stagger: 0.25}, "-=1.5");
    experienceTimeline.from(".experience .card .level", { y: 20, opacity:0, stagger: 0.25}, "-=1.5");
    experienceTimeline.from(".experience p", { y: 100, opacity:0});


























    // Create a timeline for the Project Section
    const pricingTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".pricing",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            toggleActions: "play none none none"
        }
    });

    // first card
    pricingTimeline.from(".pricing .card:nth-child(1)", { y: -100, opacity: 0, duration: 1 });
    pricingTimeline.from(".pricing .card:nth-child(1) h3", { y: -100, opacity: 0, duration: 1 });
    pricingTimeline.from(".pricing .card:nth-child(1) .price", { y: 100, opacity: 0, duration: 1 }, "-=0.5");
    pricingTimeline.from(".pricing .card:nth-child(1) .description", { x: 100, opacity: 0, duration: 1 }, "-=0.5");
    pricingTimeline.from(".pricing .card:nth-child(1) li", { x: -100, opacity: 0, stagger: 0.2, duration: 0.5 }, "-=0.5");
    pricingTimeline.from(".pricing .card:nth-child(1) .button", { x: 100, opacity: 0, duration: 1, backgroundColor: "gray" }, "-=0.5");

    // Second card
    pricingTimeline.from(".pricing .card:nth-child(2)", { y: -100, opacity: 0, duration: 1 }, "-=0.5");
    pricingTimeline.from(".pricing .card:nth-child(2) h3", { y: -100, opacity: 0, duration: 1 }, "-=0.5");
    pricingTimeline.from(".pricing .card:nth-child(2) .price", { y: 100, opacity: 0, duration: 1 }, "-=0.5");
    pricingTimeline.from(".pricing .card:nth-child(2) .description", { x: 100, opacity: 0, duration: 1 }, "-=0.5");
    pricingTimeline.from(".pricing .card:nth-child(2) li", { x: -100, opacity: 0, stagger: 0.2, duration: 0.5 }, "-=0.5");
    pricingTimeline.from(".pricing .card:nth-child(2) .button", { x: 100, opacity: 0, duration: 1, backgroundColor: "gray" }, "-=0.5");
    















    // Create a timeline for the Contact Section
    const contactTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            toggleActions: "restart none none none"
        }
    });
    
    contactTimeline.from(".contact", { y: 100, opacity: 0, duration: 2 });
    contactTimeline.from(".contact i", { x: 100, opacity: 0, duration: 2, stagger: 0.5 });
    
});

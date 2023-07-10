


// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  
    mobile: {
      breakpoint: 0,
      smooth: true,

    },
    tablet: {
      breakpoint: 0,
      smooth: true,
     
    },
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
scroller.on("scroll", ScrollTrigger.update);

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
// --- SETUP END ---






// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


const races = document.querySelector(".races");
console.log(races.offsetWidth)

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});


ScrollTrigger.create({
	trigger:".racesWrapper",
	start:"top 10%",
	end: () => `+=${getScrollAmount() * -1}`,
	pin:true,
	animation:tween,
	scrub:1,
	invalidateOnRefresh:true,

})
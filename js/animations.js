


// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
scroller.on("scroll", ScrollTrigger.update);

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
// --- SETUP END ---


// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



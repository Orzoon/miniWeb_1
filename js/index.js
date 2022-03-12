

document.addEventListener("DOMContentLoaded", () => {
    //variables
  
    //---------------//
    /* COMMON FUNCTIONS */
    function getProperty(elem, prop){
        return gsap.getProperty(elem, prop)
    }
    /* 
        TIMELINE FUNCTIONS 
    */
    // --> Star Timeline 
    const leftDistance = 20; // -ve 20px

    function starTimeAndVelocity(elem, velocity = 90){
        const distance = getProperty(elem,"left")
        return Math.abs(leftDistance+distance)/velocity
    }

    function starAnimationComplete(){
        this._targets[0].style.left = "470px"
    }

    //TimeLines
    /* **** */
    const commonProps = {left: -20, ease: "linear"}

    //initial starTimeline
    const t1 = gsap.timeline();
    //second continuous star animation timeline--starting from 7-18
    const t2 = gsap.timeline({delay: 0, repeat: -1});
    
    // MainBody Animation
    const t3 = gsap.timeline({repeat: -1});
    t3.timeScale(3)
    let eyeCount = 0;
    /* ---T1-- */
    t1.to(".star1",{duration:starTimeAndVelocity(".star1"),  ...commonProps,rotate: "20"})
        .to(".star2",{duration:starTimeAndVelocity(".star2"),...commonProps,rotate: "60"}, 0)
        .to(".star3",{duration:starTimeAndVelocity(".star3"),...commonProps,rotate: "20"}, 0)
        .to(".star4",{duration:starTimeAndVelocity(".star4"),...commonProps,rotate: "-150"}, 0)
        .to(".star5",{duration:starTimeAndVelocity(".star5"),...commonProps,rotate: "120"}, 0)
        .to(".star6",{duration:starTimeAndVelocity(".star6"),...commonProps,rotate: "-100"}, 0)
    /* ---T2--- */
    t2.to(".star7", 
            {duration:starTimeAndVelocity(".star7"),
            ...commonProps,
            rotate: "360deg",
            onComplete: starAnimationComplete
            })
        .to(".star8", 
            {duration:starTimeAndVelocity(".star8"),
            ...commonProps,
            rotate: "-360deg",
            onComplete: starAnimationComplete
            }, "<+=0.4")
        .to(".star9", 
            {duration:starTimeAndVelocity(".star9"),
            ...commonProps,
            rotate: "400deg",
            onComplete: starAnimationComplete
            }, "<+=0.9")
        .to(".star10", 
            {duration:starTimeAndVelocity(".star10"),
            ...commonProps,
            rotate: "240deg",
            onComplete: starAnimationComplete
            }, "<+=2")
        .to(".star11", 
            {duration:starTimeAndVelocity(".star11"),
            ...commonProps,
            rotate: "-200deg",
            onComplete: starAnimationComplete
            }, "<+=0.7")
        .to(".star12", 
            {duration:starTimeAndVelocity(".star12"),
            ...commonProps,
            rotate: "-90deg",
            onComplete: starAnimationComplete
            }, "<+=0.3")
        .to(".star12", 
            {duration:starTimeAndVelocity(".star12"),
            ...commonProps,
            rotate: "360deg",
            onComplete: starAnimationComplete
            }, "<+=0.3")
        /*---------*/
        // from 13-18
        .to(".star13", 
            {duration:starTimeAndVelocity(".star13"),
            ...commonProps,
            rotate: "-60deg",
            onComplete: starAnimationComplete
            }, "<+=0.7")
        .to(".star14", 
            {duration:starTimeAndVelocity(".star14"),
            ...commonProps,
            rotate: "360deg",
            onComplete: starAnimationComplete
            }, "<+=0.4")
        .to(".star15", 
            {duration:starTimeAndVelocity(".star15"),
            ...commonProps,
            rotate: "360deg",
            onComplete: starAnimationComplete
            }, "<+=0.9")
        .to(".star16", 
            {duration:starTimeAndVelocity(".star16"),
            ...commonProps,
            rotate: "-200deg",
            onComplete: starAnimationComplete
            }, "<+=1.6")
        .to(".star17", 
            {duration:starTimeAndVelocity(".star17"),
            ...commonProps,
            rotate: "120deg",
            onComplete: starAnimationComplete
            }, "<+=0.8")
        .to(".star18", 
            {duration:starTimeAndVelocity(".star18"),
            ...commonProps,
            rotate: "200deg",
            onComplete: starAnimationComplete
            }, "<+=0.5")

    /*-----T3------*/
    t3.to(".main_body", {x: 18, duration: 1, ease: "none",})
    .addLabel("firstTop")
    .to(".main_body", {y:-40, duration: 1, ease: "none"}, "<")
    .to(".main_body", {rotate: 15}, "<")
    
    // to top
    .to(".main_body", {x:-8, duration: 1, ease: "none"}, "<=0.4")
    .addLabel("secondTop")
    .to(".main_body", {y:-80, duration: 1, ease: "none", delay: 0.3}, "<")
    .to(".main_body", {rotate: -2,}, "<")
    //.to(".legOuter", {y: 10, x: -30, rotate:70 ,duration: 1},"<secondTop")

    // top left
    .to(".main_body", {x: -8, duration: 0.5, ease: "none"}, "<=0.4")
    .addLabel("thirdTop")
    .to(".main_body", {y:-40, duration: 1, ease: "none",}, "<")
    .to(".main_body", {rotate: 0}, "<")

    // // to initial position
    .to(".main_body", {x: 0, duration: 1, ease: "none"}, "<0.4")
    .to(".main_body", {y:0, duration: 1, ease: "none", onComplete: eyeTween}, "<")
    .addLabel("lastPlace")
    .to(".main_body", {rotate: 5, onComplete: function(){
        eyeCount++
    }}, "<")
    // easing the whole timeline
    gsap.to(t3, {ease: "ease-in-out"}, "<lastPlace")
    
    function eyeTween(){
        // eye
        if(eyeCount == 3){
            const t4 = gsap.timeline({});
            t4.timeScale(2)
            t4.to(".eye", {opacity: 0,}, 0)
            .to(".eyeline", {opacity: 1, duration: 0},"<")
            .to(".eye", {opacity: 1,},)
            .to(".eyeline", {opacity: 0, duration: 0},"<")
            
            // setting eyeCount back
            eyeCount = 0
        }

        // shadow tween
        const t5 = gsap.timeline({});
        t5.to('.shadow', {height: 65, width: 65, ease: "linear", duration: 0.2})
            .to(".shadow", {height: 35, width: 35, ease: "ease-in-out", duration: 0.5})


    }
})
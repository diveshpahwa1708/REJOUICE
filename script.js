function loader(){
    let tl=gsap.timeline();
    tl.from(".loader h1",{
        x:100,
        opacity:0,
        duration:0.5,
        stagger:0.3
    })
    tl.to(".loader h1",{
        x:-100,
        opacity:0,
        duration:0.5,
        stagger:0.3
    })
    tl.to(".loader",{
        opacity:0,
        display:"none",
        duration:1
    }) 
    tl.from("nav h1",{
        x:-100,
        opacity:0,
        duration:1
    })
    tl.from(".pg1 h1",{
        y:"25vw",
        duration:1
    })
}
function menu(){
    document.querySelector(".menubutton").addEventListener("click",()=>{
        gsap.to("menu",{
            y:"65vh",
            duration:0.5
        })
        gsap.from("menu h4",{
            x:100,
            opacity:0,
            duration:0.5,
            delay:0.5
        })
        gsap.from("menu h1",{
            y:100,
            opacity:0,
            duration:0.5,
            delay:0.5,
            stagger:0.1
        })
        gsap.from("menu video",{
        scale:0,
            opacity:0,
            duration:0.5,
            delay:0.5
        })
        gsap.from("menu .bottom",{
        opacity:0,
            duration:0.5,
            delay:0.5
        })
    })
    document.querySelector(".closebutton").addEventListener("click",()=>{
        gsap.to("menu",{
            y:"-65vh",
            duration:1
        }) 
    })
}
function cursor(){
    window.addEventListener("mousemove",(dets)=>{
        gsap.to(".watchreel",{
            display:"flex",
            x:`${dets.x-50}px`,
            y:`${dets.y-50}px`,
            duration:0.7
        })
    })
    document.querySelector(".watchreel").addEventListener("click",()=>{
        gsap.to(".video",{
            x:"100vw", 
            duration:0.7
        })
    })
    document.querySelector(".video i").addEventListener("click",()=>{
        gsap.to(".video",{
            x:"-100vw", 
            duration:0.7
        })})
}
loader();
menu();
cursor()
gsap.from(".pg2 h2",{
    x:100,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg2 h2",
        start:"top 50%",
        end:"top 55%"
    }
})
gsap.from(".pg2 p",{
    y:100,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg2 p",
        start:"top 80%",
        end:"top 85%",
    }
})
gsap.from(".pg3 h1",{
    y:100,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg3 h1",
        start:"top 80%",
        end:"top 85%",
    }
})
gsap.from(".pg4 .img",{
    y:100,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg4 .img",
        start:"top 80%",
        end:"top 85%",
    }
})
gsap.from(".pg5 h3",{
    x:100,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg5 h3",
        start:"top 50%",
        end:"top 55%"
    }
})
gsap.from(".pg5 p",{
    y:100,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg5 p",
        start:"top 80%",
        end:"top 85%",
    }
})
gsap.from(".pg5-1 h3",{
    x:100,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg5-1 h3",
        start:"top 50%",
        end:"top 55%"
    }
})
gsap.from(".pg5-1 p",{
    y:100,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg5-1 p",
        start:"top 80%",
        end:"top 85%",
    }
})

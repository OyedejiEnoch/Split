import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Hero = () => {

    useGSAP(()=>{
        const titleSplit = SplitText.create('.hero-title', {type:'chars'})

        const tl =gsap.timeline({
            delay:1, // delay before any of the animations should begin
        })

        tl.to('.hero-content', {opacity:1, y:0, ease:'power1.inOut'}) // we are moving the hero-content from opacity 0 to 1, and to y=0
        .to('.hero-text-scroll', {
            duration:1,
            clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', //we want to make the clip path open
            ease:'circ.out'
        }, '-=0.5') //we are saying this should play 0.5sec before the end of the first animation
        .from(titleSplit.chars, {yPercent:200, stagger:0.02, ease:'power2.out'}, '-=0.5')


        const heroTl =gsap.timeline({
            scrollTrigger:{
                trigger:'.hero-container',
                start:'1% top', //start right when the top of the container reach the top of the view port,
                end:'bottom top',
                scrub:true,
            }
        })

        heroTl.to('.hero-container', {rotate:7, scale:0.9, yPercent:30, ease:'power1.inOut'}) //when the animation start this will occur
    },[])

  return (
    <section className="bg-main-bg ">
        <div className="hero-container">
            <img src="/images/static-img.png" alt="hero-img" className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150" />

            <div className="hero-content opacity-0">
                <div className="overflow-hidden">
                    <h1 className="hero-title">Freaking Delicious</h1>
                </div>

                <div style={{
                    clipPath:'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' //this will acutally hide it or clip path it completely
                }} className="hero-text-scroll">
                    <div className="hero-subtitle">
                        <h1>Protein + Caffeine</h1>
                    </div>
                </div>

                <h2>Live life to the fullest with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.</h2>
            
                <div className="mt-10 md:mt-16 bg-light-brown text-dark-brown px-8 py-3 rounded-full uppercase text-lg font-bold md:p-5 p-3 md:px-16 ">
                    chug the spylt
                </div>
            </div>
        
        </div>
      
    </section>
  )
}

export default Hero


// how we center things that has a positon of absolute "absolute bottom-0 left-1/2 -translate-x-1/2" 
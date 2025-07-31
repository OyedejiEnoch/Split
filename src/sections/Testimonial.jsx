import { useRef } from "react"
import { cards } from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Testimonial = () => {

    const vidRef =useRef([])
    const handlePlay = (index)=>{
        const video = vidRef.current[index]
        video.play()
    }
    const handlePause = (index)=>{
        const video = vidRef.current[index]
        video.pause()
    }

    useGSAP(()=>{
        gsap.set('.testimonials-section', {
            marginTop:'-140vh'
        })

        const tl =gsap.timeline({
          scrollTrigger:{
            trigger:'.testimonials-section',
            start:"top bottom",
            end:'200% top',
            scrub:true,
          }
        })

        tl.to('.testimonials-section .first-title', {
          xPercent:70,
        }).to('.testimonials-section .second-title', {
          xPercent:25,
        },'<').to('.testimonials-section .third-title', {
          xPercent:-50,
        },'<')


        const pinTl =gsap.timeline({
          scrollTrigger:{
            trigger:".testimonials-section",
            start:'10% top',
            end:'200% top',
            scrub:1.5,
            pin:true,
          }
        })

        pinTl.from('.vd-card', {
          yPercent:150,
          stagger:0.2,
          ease:'power1.inOut'
        })
    },[])

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[.5vw] ">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>

        <div className="pin-box">
            {cards.map((card, index)=>(
                <div key={index} className={`vd-card ${card.translation} ${card.rotation} `} onMouseEnter={()=>handlePlay(index)} onMouseLeave={()=>handlePause(index)}>
                    <video ref={(el)=> (vidRef.current[index]= el)} src={card.src} playsInline muted loop className="size-full object-cover" />
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial

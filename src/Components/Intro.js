import { useEffect, useState } from "react"
import gsap from "gsap"


const Intro = ({className}) => {

    const [ isMobile, setIsMobile ] = useState(false)

    const windowSize = window.innerWidth;

    const checkIsMobile = () => {
        if ( windowSize < 768 ) {
            return
        } else {
            let introTimeLine = gsap.timeline({})
            .fromTo('.intro', {background: 'white' }, {background: 'rgba(222, 222, 222, 0.46)'}, '+=1.4')
            .fromTo('.intro__reveal__element', {height: '0px'}, {height: '120%', duration: 0.75}, '-=1')
            .fromTo('.intro__reveal__element', {translateY: '0'}, {translateY: '110%', duration: 0.75}, '-=0.5')
            .fromTo('.intro__background', {opacity: 0}, {opacity: 1}, '-=0.8')
            .fromTo('.intro__headline', {opacity: 0}, {opacity: 1}, '-=1.1')
            .fromTo('.slash', {opacity: 0, translateX: '-100%'}, {opacity: 1, translateX: '0'})
            .fromTo('.stroke', {opacity: 0}, {opacity: 1}, '-=1.1')
            .to('.text-filled', {textFillColor: 'transparent'})
            .to('.intro__reveal__element', {display: 'none'}, '-=1.3')    
        }
    }

    useEffect( () => {

        checkIsMobile()
  
    }, [])

    return (
       <section id="intro-section" className={className}>
                <div className="intro">
                    <div className="intro__reveal__element"></div>
                    <h1 className="intro__headline">Hi! I'm Tyler,</h1>
                    <div className="intro__background">
                        <p className="intro__text">
                        A <span className="bold text-filled"><span className="slash"></span>frontend</span><span className="bold"> developer</span> based out of
                         <span className="bold"> Chicago</span>. I’m passionate about <span className="bold">full stack development</span>, improving my <span className="bold">coding standards</span>, being a <span className="bold">team player</span> and <span className="bold">helping others</span> get into coding.  
                        </p>
                    </div>
                </div>
       </section>
    )
}

export default Intro

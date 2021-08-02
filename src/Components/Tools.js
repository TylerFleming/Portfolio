import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Tools = ({className}) => {

    useEffect(() => {
        let toolsTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#tools-section",
                scrub: true,
                start: "top 85%",
                end: "bottom 75%",
                toggleActions: 'play none   none   none'
            },
        })
        .fromTo([...document.querySelectorAll('.line')][0], {height: '0'}, {height: '70px'})
        .fromTo('.tool-headline', {opacity: 0}, {opacity: 1})
        .fromTo('.tool-container', {opacity: 0}, {opacity: 1})
        .fromTo('.statement__quote', {opacity: 0}, {opacity: 0.1})
        .fromTo('.statement__text', {opacity: 0}, {opacity: 1})
        .fromTo([...document.querySelectorAll('.line')][1], {height: '0'}, {height: '70px'})

        
    }, [])

    return (
        <section id="tools-section" className={className}>
            <div className="line"></div>
            <h2 className="tool-headline">Tools that I have experience with</h2>
            <div className="tool-container">
                <ul>
                    <li>
                        Javascript ES6+
                    </li>
                    <li>
                        HTML {`&`} CSS
                    </li>
                    <li>
                        Git
                    </li>
                    <li>
                        Figma, Sketch {`&`} Photoshop
                    </li>
                </ul>
                <ul>
                    <li>
                        React
                    </li>
                    <li>
                        SCSS
                    </li>
                    <li>
                        Node {`&`} Express
                    </li>
                    <li>
                        Parcel
                    </li>
                </ul>
                <ul>
                    <li>
                        Styled-Components
                    </li>
                    <li>
                        WordPress {`&`} PHP
                    </li>
                    <li>
                        SQL {`&`} MySQL
                    </li>
                    <li>
                        GreenSock/GSAP
                    </li>
                </ul>
            </div>

            <div className="statement">
                <div className="statement__quote">“</div>
                <p className="statement__text">I’ve been very fortunate in my career to work alongside some of the most caring people I know whom were also amazing developers, project managers and UI/UX designers. Through these experiences I’ve grown tremendously as a developer and to value doing things the right way, to help others and always seek opportunities to learn and grow</p>
            </div>

            <div className="line"></div>

        </section>
    )
}

export default Tools

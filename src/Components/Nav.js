import { useEffect } from "react"
import githubIcon from "../Images/github-white.svg"
import linkedinIcon from "../Images/linkedin-white.svg"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Nav = ({className}) => {

    const removeActiveClass = () => {
        const links = [...document.querySelectorAll('.nav-link')]
        links.forEach(link => {
            link.classList.remove('active')
        })
    }

    const scrollToSection = (section) => {
        document.querySelector(`#${section}`).scrollIntoView({behavior: 'smooth', block: 'start'})

    }

    const animateNavLinks = (activeNavLink, inactiveNav, inactiveNav2) => {
            const activeTimeLine = gsap.timeline({})
            .to(`${activeNavLink} > a`, {textFillColor: '#fff', duration: 0.3})
            .to(`${inactiveNav} > a`, {textFillColor: 'transparent'}, '-=0.2')
            .to(`${inactiveNav2} > a`, {textFillColor: 'transparent'}, '-=0.2')
    }
    
    const changeNavigation = () => {
        const links = [...document.querySelectorAll('.nav-link')]
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                removeActiveClass()
                const parent = e.target.parentElement
                parent.classList.add('active')
            })
        })
    }

    useEffect(() => {
        changeNavigation()

        let navTimeLine = gsap.timeline({delay: 1.2,
            scrollTrigger: {
                trigger: '#intro-section',
                start: "top 25%",
                toggleActions: 'play none   none   none'
            },
        })
        .to('nav', {background: '#452FCC'})
        .to('.nav-link.active > a', {textFillColor: '#fff'})
        .fromTo('nav', {opacity: 0}, {opacity: 1})
        .fromTo('.nav-reveal', {translateX: '0'}, {translateX: '100%'})


            let introTimeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: '#intro-section',
                    start: "top 50%",
                    toggleActions: 'play play   play   play',
                    onEnterBack: () => {
                        const links = [...document.querySelectorAll('.nav-link')]
                        links.forEach(link => link.classList.remove('active'))
                        const activeLink = links.filter(link => link.innerText === 'About')
                        activeLink[0].classList.add('active')
                        animateNavLinks('.intro-link', '.projects-link', '.resume-link')
                    }
                },
            })

            let projectTimeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: '#projects-section',
                    start: "top 50%",
                    toggleActions: 'play play   play   play',
                    onEnter: () => {
                        const links = [...document.querySelectorAll('.nav-link')]
                        links.forEach(link => link.classList.remove('active'))
                        const activeLink = links.filter(link => link.innerText === 'Projects')
                        activeLink[0].classList.add('active')
                        animateNavLinks('.projects-link', '.intro-link', '.resume-link')
                    }
                },
            })

    }, [])


    return (
        <nav className={className}> 
        <div className="nav-reveal"></div>
            <div className="container">
                <ul>
                    <li className="nav-link active intro-link">
                        <a onClick={() => scrollToSection('intro-section')} href="#intro-section">About</a>
                    </li>
                    <li className="nav-link projects-link">
                        <a onClick={() => scrollToSection('projects-section')} href="#projects-section">Projects</a>
                    </li>
                    <li className="nav-link resume">
                        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1yRrar_ipcnyA9LHX8-sfXrBfYeCEvbx8/view">Resume</a>
                    </li>
                    <li className="icon">
                        <a target="_blank" rel="noreferrer" href="https://github.com/tylerfleming" aria-label="View my Github"><img src={githubIcon} alt="Github logo" /></a>
                    </li>
                    <li className="icon">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tyler-fleming-76a532157/" aria-label="View my Linkedin"><img src={linkedinIcon} alt="Linkedin logo" /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav

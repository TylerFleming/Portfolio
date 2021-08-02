import githubIcon from '../Images/github.svg'

const Project = ({className, name, position, liveLink, gitHub, description, image, altText}) => {

    if ( position === 'right' ) {   
        return (
            <>
                <div className={`${className} project right`}>
                    <div className={`${position} project__image`}>
                        <img src={image} alt={altText} />
                    </div>
                    <div className="project__description right">
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <div className="links right">
                        <ul>
                                <li>
                                    <a target="_blank" rel="noreferrer" aria-label={`link to Github ${name} Repo`} href={gitHub}> <img src={githubIcon} alt="GitHub icon" /> </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" href={liveLink}>View Live Site</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={`${className} project left`}>
                    <div className="project__description left">
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <div className="links left">
                            <ul>
                                <li>
                                <a target="_blank" rel="noreferrer" aria-label={`link to Github ${name} Repo`} href={gitHub}> <img src={githubIcon} alt="GitHub icon" /> </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" href={liveLink}>View Live Site</a>
                                </li>
                            </ul>
                            </div>
                    </div>
                    <div className={`${position} project__image`}>
                        <img src={image} alt={altText} />
                    </div>
                </div>
            </>
        )
    }
}

export default Project

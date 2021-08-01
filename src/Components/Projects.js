import { StyledProject } from "../Styles/Project.styles"
import { data } from "../ProjectData"

const Projects = ({className}) => {



    return (
        <section id="projects-section" className={className}>
            <h2>Recent Projects</h2>
            {
                data.map(project => {
                   const {id, name, description, liveLink, gitHub, image, altText, position} = project
                    return <StyledProject key={id} name={name} description={description} liveLink={liveLink} gitHub={gitHub} image={image} altText={altText} position={position} />
                })
            }
        </section>
    )
}

export default Projects

import { StyledIntro } from "../Styles/Intro.styles"
import { StyledTools } from "../Styles/Tools.styles"
import { StyledProjects } from "../Styles/Projects.styles"

const SiteContainer = ({className}) => {

    return (
        <div className={className} >
            <StyledIntro />
            <StyledTools />
            <StyledProjects />
        </div>
    )
}

export default SiteContainer

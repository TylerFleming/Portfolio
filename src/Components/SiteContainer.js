import { StyledIntro } from "../Styles/Intro.styles"
import { StyledTools } from "../Styles/Tools.styles"
import { StyledProjects } from "../Styles/Projects.styles"
import { StyledNav } from "../Styles/Nav.styles"

const SiteContainer = ({className}) => {

    return (
        <div className={className} >
            <StyledIntro />
            <StyledTools />
            <StyledProjects />
            <StyledNav />
        </div>
    )
}

export default SiteContainer

import styled from "styled-components";
import Projects from "../Components/Projects";

export const StyledProjects = styled(Projects)`
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;

    h2 {
        margin-bottom: 4rem;
        font-size: 13rem;
        color: ${props => props.theme.colors.mainColor};
        font-family: ${props => props.theme.fonts.oswald};

        @media (max-width: 1299px ) {
            margin-bottom: 2rem;
            font-size: ${props => props.theme.fontSizes.texth2.tablet};
            text-align: center;
        }

        @media (max-width: 690px ) {
            font-size: ${props => props.theme.fontSizes.texth2.mobile};
        }
    }

`
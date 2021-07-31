import styled from "styled-components";
import Intro from "../Components/Intro"

export const StyledIntro = styled(Intro)`

    overflow: hidden;
    
    .intro {
        padding: 3rem;
        position: relative;
        width: 100%;
        width: 94.5rem;
        margin: 16rem auto 0 auto;
        background: ${props => props.theme.colors.secondaryColor};

        &__reveal__element {
            position: absolute;
            top: -90px;
            left: 0;
            background: ${props => props.theme.colors.mainColor};
            height: 100%;
            width: 100%;
            z-index: 1;
        }

        &__headline {
            position: absolute;
            top: -115px;
            font-size: 10rem;
            font-family: ${props => props.theme.fonts.oswald};
            color: ${props => props.theme.colors.mainColor};
        }
        
        &__background {
            padding: 2rem;
            background: ${props => props.theme.colors.mainColor};
        }

        &__text {
            position: relative;
            font-size: 6.2rem;
            font-family: ${props => props.theme.fonts.oswald};
            color: ${props => props.theme.colors.white};
            -webkit-text-fill-color: rgb(255 255 255 / 0%);
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: ${props => props.theme.colors.white};;

                .slash {
                    position: absolute;
                    top: 53px;
                    width: 195px;
                    height: 5px;
                    background: white;
                }

                .bold {
                    font-size: 6.2rem;
                    font-family: ${props => props.theme.fonts.oswald};
                    color: ${props => props.theme.colors.white};
                    -webkit-text-fill-color: rgb(255 255 255 / 100%);
                    -webkit-text-stroke-width: 0px;

                }
        }


    }
`
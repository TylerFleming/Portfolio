import styled from "styled-components";
import Intro from "../Components/Intro"

export const StyledIntro = styled(Intro)`

    margin: 0 auto;
    padding: 0 3rem;
    width: 100%;
    max-width: 1440px;
    overflow: hidden;

    .intro {
        padding: 3rem;
        position: relative;
        width: 100%;
        max-width: 94.5rem;
        margin: 16rem auto 0 auto;
        background: ${props => props.theme.colors.secondaryColor};

        @media (max-width: 1023px) {
            max-width: 66.5rem;
            padding: 2rem;

        }

        @media (max-width: 549px) {
            margin: 10rem auto 0 auto;
        }

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
            top: -11.5rem;
            font-size: ${props => props.theme.fontSizes.texth1.desktop};
            font-family: ${props => props.theme.fonts.oswald};
            color: ${props => props.theme.colors.mainColor};

            @media (max-width: 1023px) {
                top: -8.5rem;
                font-size: ${props => props.theme.fontSizes.texth1.tablet};
            }

            @media (max-width: 549px) {
                top: -5.5rem;
                font-size: ${props => props.theme.fontSizes.texth1.mobile};
            }
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
            -webkit-text-stroke-color: ${props => props.theme.colors.white};

            @media (max-width: 1023px) {
                font-size: ${props => props.theme.fontSizes.text.tablet}
            }

            @media (max-width: 549px) {
                font-size: ${props => props.theme.fontSizes.text.mobile};
                -webkit-text-stroke-width: 0.5px;
            }

                .slash {
                    position: absolute;
                    top: 5.4rem;
                    width: 100%;
                    height: 5px;
                    background: white;
                    
                    @media (max-width: 1023px) {
                        top: 3.6rem;
                        height: 3px;
                    }

                    @media (max-width: 549px) {
                        top: 7vw;
                        height: 3px;
                    }
                }

                .bold {
                    position: relative;
                    font-size: 6.2rem;
                    font-family: ${props => props.theme.fonts.oswald};
                    color: ${props => props.theme.colors.white};
                    -webkit-text-fill-color: rgb(255 255 255 / 100%);
                    -webkit-text-stroke-width: 0px;

                    @media (max-width: 1023px) {
                        font-size: ${props => props.theme.fontSizes.text.tablet}
                    }

                    @media (max-width: 549px) {
                        font-size: ${props => props.theme.fontSizes.text.mobile}
                    }
                }

                .bold.text-filled {
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: ${props => props.theme.colors.white};

                    
                    @media (max-width: 549px) {
                        -webkit-text-stroke-width: 0.5px;

                    }
                 }
        }


    }
`
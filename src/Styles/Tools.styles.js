import styled from "styled-components";
import Tools from "../Components/Tools"

export const StyledTools = styled(Tools)`

    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 3rem;
    width: 100%;
    max-width: 1440px;

    .line {
        margin: 7rem 0 4rem 0;
        width: 3px;
        height: 70px;
        background: ${props => props.theme.colors.secondaryColor};
    }

    h2 {
        margin-bottom: 4.2rem;
        font-size: ${props => props.theme.fontSizes.texth2.desktop};
        font-family: ${props => props.theme.fonts.oswald};
        color: ${props => props.theme.colors.mainColor};

        @media (max-width: 1023px) {
            top: -8.5rem;
            font-size: ${props => props.theme.fontSizes.texth2.tablet};
        }

        @media (max-width: 690px) {
            top: -5.5rem;
            font-size: ${props => props.theme.fontSizes.texth2.mobile};
            text-align: center;
        }

    }

    .tool-container {
        width: 100%;
        max-width: 85rem;
        display: flex;
        justify-content: space-evenly;

        @media (max-width: 690px) {
                display: flex;
                flex-direction: column;
            }
    }

    ul {
        list-style: none;
        
        @media (max-width: 690px) {
                width: 100%;
                text-align: center;
            }

            li {
                font-size: ${props => props.theme.fontSizes.listItem.desktop};
                font-family: ${props => props.theme.fonts.oswald};
                color: ${props => props.theme.colors.mainColor};

                @media (max-width: 1023px) {
                    top: -8.5rem;
                    font-size: ${props => props.theme.fontSizes.listItem.tablet};
                }

                @media (max-width: 690px) {
                    top: -5.5rem;
                    font-size: ${props => props.theme.fontSizes.listItem.mobile};
                }
            }
    }

    .statement {
        margin-top: 10rem;
        width: 100%;
        max-width: 88rem;
        position: relative;

        @media (max-width: 1023px) {
            max-width: 62rem;
        }

        @media (max-width: 690px) {
            margin-top: 5rem;
        }

        &__quote {
            position: absolute;
            top: -14rem;
            left: -5rem;
            font-size: 30rem;
            font-family: ${props => props.theme.fonts.oswald};
            color: ${props => props.theme.colors.mainColor};
            opacity: 0.1;

            @media (max-width: 1023px) {
                top: -11rem;
                left: -2rem;
                font-size: 25rem;
            }
        }

        &__text {
            font-size: ${props => props.theme.fontSizes.bodyText.desktop};
            font-family: ${props => props.theme.fonts.oswald};
            color: ${props => props.theme.colors.mainColor};

            @media (max-width: 1023px) {
                text-align: center;
            }

            @media (max-width: 690px) {
                font-size: ${props => props.theme.fontSizes.bodyText.mobile};
            }
        }
    }
`
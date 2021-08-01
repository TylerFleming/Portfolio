import styled from "styled-components";
import Project from "../Components/Project";

export const StyledProject = styled(Project)`
    display: flex;
    max-width: 1440px;
    margin: 0 auto 120px auto;

    @media (max-width: 1299px) {
        flex-direction: column;
        max-width: 60rem;

    }

    .project {


        &__description {
            padding: 4rem 2rem;
            background: ${props =>props.theme.colors.secondaryColor};

            @media (max-width: 1299px) {
                    padding: 2rem 2rem;
                }

            &.left {
                @media (max-width: 1299px) {
                    order: 2;
                }
            }



            h2 {
                padding: 0;
                margin-bottom: 0;
                font-size: ${props =>props.theme.fontSizes.texth2.desktop};

                @media (max-width: 1299px) {
                    margin-bottom: 1rem;
                    font-size: ${props => props.theme.fontSizes.texth2.tablet};
                }

                @media (max-width: 690px) {
                    font-size: ${props => props.theme.fontSizes.text.mobile};
                }
            }

            p {
                font-size: ${props => props.theme.fontSizes.listItem.desktop};
                font-family: ${props => props.theme.fonts.oswald};
                color: ${props => props.theme.colors.mainColor};

                @media (max-width: 1299px) {
                    font-size: ${props => props.theme.fontSizes.bodyText.desktop};
                    text-align: center;
                }

                @media (max-width: 690px) {
                    font-size: ${props => props.theme.fontSizes.bodyText.mobile};
                }
            }

        }

        &__image {
            display: flex;
            img {
                @media (max-width: 1299px) {
                    width: 100%;
                    object-fit: cover;
                }
            }
        }

    }

    .links {
        margin-top: 15px;
        display: flex;
        &.left {
            justify-content: flex-start;
            @media (max-width: 1299px) {
                justify-content: flex-end;
            }
        }
        &.right {
            justify-content: flex-end;
        }
            ul {
                display: flex;
                list-style: none;
                    li {
                        margin-right: 10px;
                        &:last-child {
                            margin: 0;
                        }
                            a {
                                font-size: ${props => props.theme.fontSizes.listItem.desktop};
                                font-family: ${props => props.theme.fonts.oswald};
                                color: ${props => props.theme.colors.mainColor};

                                @media (max-width: 1299px ) {
                                    font-size: ${props => props.theme.fontSizes.bodyText.desktop};
                                }

                                @media (max-width: 690px ) {
                                    font-size: ${props => props.theme.fontSizes.bodyText.mobile};
                                }
                            }
                    }
            }
        }

`
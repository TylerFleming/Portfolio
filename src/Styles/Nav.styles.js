import styled from "styled-components";
import Nav from "../Components/Nav"


export const StyledNav = styled(Nav)`
    
    padding: 0 5rem;
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    height: 13rem;
    overflow: hidden;
    @media (max-height: 900px) {
        border: 2rem solid #fff; 
    }

    @media (max-width: 767px) {
        bottom: 0;
        height: 8rem;
        width: 100%;
        border: 0.5rem solid #fff; 
    }


    .container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav-reveal {
        position: absolute;
        left: 0;
        background: ${props => props.theme.colors.white};
        width: 100%;
        height: 100%;
        transform: translateX(0);
    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        margin-right: 3rem;
        align-self: flex-end;
            &:nth-child(3) {
                margin-right: 1rem;
            }
        @media (max-width: 767px) {
            margin-right: 1.5rem;
        }
    }

    li.nav-link > a {
        -webkit-text-stroke: 1px white;
        font-size: ${props => props.theme.fontSizes.nav.desktop};
        font-family: ${props => props.theme.fonts.oswald};
        color: transparent;
        text-decoration: none;
        transition: all 3s;

        @media (max-width: 767px) {
            font-size: 7.5vw;
            -webkit-text-stroke: 0.5px white;
        }
    }

    li.nav-link.resume > a {
        -webkit-text-stroke: 0px;
        color: ${props => props.theme.colors.white};


    }

    li.icon {
        margin-right: 1rem;
        margin-bottom: 1rem;
            &:last-child {
                margin-right: 0;
            }

        @media (max-width: 500px) {
            margin-bottom: 0;
        }
    }


`
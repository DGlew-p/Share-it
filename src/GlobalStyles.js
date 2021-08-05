import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --grey: #eee;
        --medGrey: #353535;
        --black: #25250f;
        --springGreen: #d4d7b8;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMedium: 1.2rem;
        --fontSmall: 1rem;
    }
    * {
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

    html {
        background-color: var(--black);
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--black);
        h1 {
            font-size: 2rem;
            color: black;
        }
        h3 {
            font-size: 1.1rem;
        }
        p {
            font-size: var(--fontSmall);
            color: var(--darkGrey);
        }
    }

    .box {
        background-color: #d4d7b8;
    }

    @media screen and (max-width: 1023px) {
        .is-active {

        }
        .navbar-burger{
            display: none;
        }
	}
`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	max-width: 1300px;
	padding-right: 5rem;
	padding-left: 5rem;

	@media screen and (max-width: 991px) {
		padding-right: 3rem;
		padding-left: 3rem;
	}
`;

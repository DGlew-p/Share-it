import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --grey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMedium: 1.2rem;
        --fontSmall: 1rem;


    }

    * {
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
        }

        p {
            font-size: var(--fontSmall);
            color: var(--darkGrey);
        }
    }

`;

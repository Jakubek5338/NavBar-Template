import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        margin: 0;
        padding: 0;
        //Happy Rems
        font-size: 62.5%
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyle;

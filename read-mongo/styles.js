import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-dark: #2e016d;
    --primary: #3f0097;
    --primary-light: #8236ff;
    --secondary-dark: #943215;
    --secondary: #ff4a11;
    --secondary-light: #fddcd2;
    --accent: #ffd15d;
    --error-accent: rgb(255, 0, 47);
    --black-light: #252629;
    --black: #000000;
    --white: #ffffff;
    --grey-dark: #b6b9c2;
    --grey-light: #f5f6f6;
    --bg-gradient: linear-gradient(120deg,
            hsl(265deg 100% 30%) 1%,
            hsl(265deg 64% 39%) 33%,
            hsl(266deg 48% 46%) 42%,
            hsl(267deg 41% 52%) 46%,
            hsl(268deg 41% 59%) 49%,
            hsl(269deg 42% 66%) 50%,
            hsl(270deg 42% 72%) 51%,
            hsl(271deg 43% 79%) 51%,
            hsl(271deg 43% 86%) 51%,
            hsl(272deg 44% 93%) 50%,
            hsl(0deg 0% 100%) 50%,
            hsl(19deg 100% 95%) 50%,
            hsl(19deg 100% 90%) 49%,
            hsl(18deg 100% 86%) 49%,
            hsl(18deg 100% 81%) 49%,
            hsl(17deg 100% 77%) 50%,
            hsl(17deg 100% 72%) 51%,
            hsl(16deg 100% 68%) 54%,
            hsl(15deg 100% 64%) 58%,
            hsl(15deg 100% 59%) 67%,
            hsl(14deg 100% 53%) 99%);

    --gap: 20px;
  }
    
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: auto;
    font-family: system-ui;
    min-height: 100vh;
    // max-width: 50rem;
    background-image: var(--bg-gradient);
  }

  form {
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    color: var(--white);
    font-size: larger;
    border: 1px var(--grey-dark) solid;
    border-radius: 5px;
    padding: 1rem 2rem;
    margin: 1rem 0px;
  }
    
  button {
    appearance: none;
    border: none;
    background: var(--grey-light);
    font-size: 1.2rem;

    padding: 0.5rem 1rem;
    border-radius: 5px;

  } 

  form input{
      width: 20rem;
  }

  a {
    text-decoration: none;
    display: inline-block;
    color: inherit;
    border: none;
    background: var(--grey-light);
    font-size: larger;
    padding: 0.5rem 1rem;
    min-height: 2.5rem;
    border-radius: 2px;

  } 

  a:visited {
    color: inherit;
  }

  ul {
    list-style-type: none;
    display: grid;
    gap: 1rem;
    justify-items: center;
    padding: 0;
  }

  li {
    width: 100%;
  }

  li a {
    width: 100%;
  }
  li a:visited {
    color: var(--primary-light);
  }

  h1, small{
    color: var(--grey-light);
  }

  div:has(h1) {
    display: flex;
    flex-direction: column;

  }

  div:has(h1) button {
    width: fit-content;
    align-self: center;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

import { createGlobalStyle } from "styled-components";

// Typography
import "@fontsource/public-sans";
import "@fontsource/public-sans/300.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/700.css";

const GlobalStyles = createGlobalStyle`

:root {
    --white: #fff;
    --btnColor: #8BDAE3;
    --textColor: #9a9b9d;
    --footerBg: #1B2230;
    --box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    --font-publicSans: 'Public Sans', sans-serif;
    --transition: all .3s ease;
}

*,
*::after,
*::before {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
}

body {
  background-color: var(--white);
  font-family: var(--font-publicSans);
	overflow-x: hidden;
}

a {
    text-decoration: none;
    cursor: pointer;
}

h1, h2, h3, h4, h5{
    color: var(--footerBg);
    font-family: var(--font-publicSans);
    font-weight: 600;
}

ul,
ol,
li {
    list-style: none;
}

p {
    color: var(--textColor);
}

img {
    width: 100%;
    height: auto;
}

button {
    position: relative;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: var(--font-publicSans);
    color: var(--white);
    border: none;
    border-radius: 30px;
    background: rgb(35,236,89);
    background: linear-gradient(114deg, rgba(35,236,89,1) 0%, rgba(20,230,143,1) 30%, rgba(13,221,171,1) 49%, rgba(0,212,255,1) 99%);
    padding: .8rem 5rem;
    transition-property: background;
    transition: var(--transition);
    cursor: pointer;
    z-index: 1;
}

button::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 30px;
    background: rgb(0,171,46);
    background: linear-gradient(114deg, rgba(0,171,46,1) 0%, rgba(2,187,110,1) 30%, rgba(5,198,152,1) 49%, rgba(0,212,255,1) 99%);
    transition: var(--transition);
    opacity:0;
    z-index: -1;
}

button:hover::before {
    opacity: 1;
}

.wrapper {
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
}

@media only screen and (max-width:1280px) {
container {
    width: 90%;
}
}

@media only screen and (max-width:500px) {

button {
    font-size: .8rem;
    padding: .6rem 1.8rem;
}
}

`
export default GlobalStyles;
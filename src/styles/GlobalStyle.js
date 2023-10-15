import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  color: ${(props) => props.theme.white_font};
  background: ${(props) => props.theme.grey_background};
}

html,
:root {
  width: 100%;
  min-height: 100vh;
}

body {
  background: #191919;
  color: #F2F2F2;
  min-height: 100vh;
}

button,
a {
  cursor: pointer;
}

a, li{
  text-decoration: none;
  list-style: none;
  color: inherit;
}

button,
input {
  outline: none;
}

.container{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

`

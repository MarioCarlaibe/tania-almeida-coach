import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from "./routers"
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "./themes/theme-context"

function App() {
  

  return (
    <ThemeProvider>
      <Router>
        <GlobalStyled />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  )
}
const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.color};
  }
  body{
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;

export default App

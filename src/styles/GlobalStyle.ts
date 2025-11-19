import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f5f6fa;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    color: #222;
  }

  
  .p-toast-message-icon {
    margin-right: 0.75rem !important;
  }
`

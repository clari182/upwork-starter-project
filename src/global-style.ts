import { createGlobalStyle } from 'styled-components'
import { FontWeights, Colors } from './lib/style-guide'

export const GlobalStyle = createGlobalStyle`

  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-style: normal;
  }

  body, input {
    font-family: proxima-nova, sans-serif;
    font-weight: ${FontWeights.PR};
    font-size: 14px;
    line-height: 1.4rem;
    color: ${Colors.TX1};
  }

  svg, img {
    display: block;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: ${Colors.BG3};
  }
`

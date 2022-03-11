import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { theme } from './resource/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ChakraProvider>
      <BrowserRouter>
        <CSSReset />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)

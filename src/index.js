import { ErrorBoundary } from './pages/errorBoundary/errorBoundary'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { theme } from './resource/theme'
import styled, { css } from 'styled-components/macro'

export const Main = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.bg};
    width: 100%;
    height: auto;
  `}
`

ReactDOM.render(
  <ChakraProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ErrorBoundary>
          <CSSReset />
          <Main>
            <App />
          </Main>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  </ChakraProvider>,
  document.getElementById('root')
)

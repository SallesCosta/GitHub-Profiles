import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { CSSReset } from '@chakra-ui/react'
import {App} from './App'

ReactDOM.render(
<ChakraProvider>
  <BrowserRouter>
      <CSSReset />
    <App />
  </BrowserRouter>
</ChakraProvider>,
  document.getElementById("root")
);

import { Heading, Flex, Button } from '@chakra-ui/react'

import { Component } from 'react'
import { theme } from './theme'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex h='100vh' justifyContent='center' alignItems='center'>
          <Flex direction='column' padding={8} rounded={6} bg='gray.100'>
            <Heading mb={6} color='gray.600'>Something went wrong.</Heading>
            <Button bg={theme.colors.ls} color='gray.600'>Back to searchPage</Button>
          </Flex>
        </Flex>
      )
    }

    return this.props.children
  }
}

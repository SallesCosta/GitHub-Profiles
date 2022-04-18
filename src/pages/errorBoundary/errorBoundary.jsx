import { Heading, Flex, Button, Text, Box } from '@chakra-ui/react'
import { Component } from 'react'
import { theme } from '../../resource/theme'

export class ErrorBoundary extends Component {
  state = { hasError: false, errorMessage: '' }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex h='100%'justifyContent='center' alignItems='center'>
          <Flex direction='column' padding={8} rounded={6} bg='gray.100'>
            <Box color='gray.600'>
              <Heading mb={6}>Something went wrong.</Heading>
              <Text>{this.state.errorMessage}</Text>
            </Box>
          </Flex>
        </Flex>
      )
    }

    return this.props.children
  }
}

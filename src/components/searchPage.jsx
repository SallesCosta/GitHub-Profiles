import {
  Text,
  Heading,
  Box,
  Input,
  Container,
  Flex,
  HStack,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Button } from './styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CopyIcon } from '@chakra-ui/icons'

export const SearchPage = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm()
  const toast = useToast()
  const sugs = ['Sallescosta', 'userB', 'userC', 'userD', 'userE', 'userF']
  return (
    <Container h='95vh'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex mt='20px'>
          <Input
            mr='10px'
            label='User'
            {...register('user', { required: true, minLength: 3 })}
            bg='white'
          />
          <Button primary>Send</Button>
        </Flex>
      </form>
      <Box mt='30px'>
        <VStack>
          <Heading fontSize='1.3rem '>Sugestions to try</Heading>
          {sugs.map((i, index) => (
            <HStack key={index}>
              <CopyToClipboard text={i}>
                <Button
                  onClick={() =>
                    toast({
                      title: `Copied ${i}`,
                      variant: 'subtle',
                      isClosable: true,
                    })
                  }
                >
                  <HStack>
                    <Text>{i}</Text>
                    <CopyIcon w={3} h={3} />
                  </HStack>
                </Button>
                {/* <button>Copy to clipboard</button> */}
              </CopyToClipboard>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Container>
  )
}

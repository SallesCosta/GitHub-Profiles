import {
  Tooltip,
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
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const SearchPage = ({ onSubmit }) => {
  const toast = useToast()
  const sugs = ['luanpanno', 'gaearon', 'ashulin', 'craftzdog', 'benfrain']

  const sugsOne = ['k', 'x', 'f']

  const schema = yup
    .object({
      user: yup.string().required(),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  return (
    <Container h='93vh'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex mt='20px'>
          <Input
            mr='10px'
            type='search'
            label='User'
            {...register('user', { required: true })}
            bg='white'
          />
          <Button data-testid='search-form' primary>
            Send
          </Button>
        </Flex>
      </form>
      <Text color='tomato'>{errors.user?.message}</Text>
      <Box mt='30px'>
        <VStack>
          <Heading color='gray.600' fontSize='1.3rem '>
            Sugestions to try
          </Heading>
          {sugs.map((i, index) => (
            <HStack key={index}>
              <CopyToClipboard text={i}>
                <Button
                id={i}
                  onClick={() =>
                    toast({
                      title: `Copied ${i}`,
                      variant: 'subtle',
                      isClosable: true,
                    })}
                >
                  <HStack>
                    <Text>{i}</Text>
                    <CopyIcon w={3} h={3} />
                  </HStack>
                </Button>
              </CopyToClipboard>
            </HStack>
          ))}
          {sugsOne.map((i, index) => (
            <Tooltip key={index} label='Wow, length = 1!'>
              <HStack>
                <CopyToClipboard text={i}>
                  <Button
                id={i}

                    onClick={() =>
                      toast({
                        title: `Copied ${i}`,
                        variant: 'subtle',
                        isClosable: true,
                      })}
                  >
                    <HStack>
                      <Text>{i}</Text>
                      <CopyIcon w={3} h={3} />
                    </HStack>
                  </Button>
                </CopyToClipboard>
              </HStack>
            </Tooltip>
          ))}
        </VStack>
      </Box>
    </Container>
  )
}

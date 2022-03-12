import { Box, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Button } from './styles'

export const SearchPage = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm()

  return (
    <>
      <Box>search Page</Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label='User' {...register('user')} />
        <Button
          primary
          // colorScheme='green'
          // size='md'
          // variant='outline'
          // mr='-px'
          // type='submit'
        >
          Send
        </Button>
      </form>
    </>
  )
}

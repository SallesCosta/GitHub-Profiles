import { Box, Input, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

export const SearchPage = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm()

  return (
    <>
      <Box>search Page</Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label='User' {...register('user')} />
        <Button
          colorScheme='green'
          size='md'
          variant='outline'
          mr='-px'
          type='submit'
        >
          Send
        </Button>
      </form>
    </>
  )
}

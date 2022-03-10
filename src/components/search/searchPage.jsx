import { Box, Input, Button, Spacer } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export const SearchPage = () => {
  const [user, setUser] = useState('')
  const { register, handleSubmit } = useForm();

useEffect(()=> {
    console.log('name: ', user.login)
    console.log('Profile Picture: ', user.avatar_url)
    console.log('Total number of repositories: ', user.login)
    console.log('List of repos (name & description)', user.login)
  }, [user])

  const onSubmit = data => {
    const userName = data ?`/${data.user}` : ''
    fetch(`https://api.github.com/users${userName}`)
      .then(res => res.json()
      .then(res => setUser(res)))
    }
  
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
         <Button  colorScheme='orange' variant='solid'>
             <Link to="/user">to User</Link>
         </Button>
       </form>
   </>
   )
}


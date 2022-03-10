import {Link} from 'react-router-dom'
import { Box, Input, Button } from '@chakra-ui/react'
export const UserPage = () => {
  return (
  <>
    <div>user Page</div>
   <Button  colorScheme='teal' variant='solid'>
        <Link to="/">back to Search Page</Link>
    </Button>
    </>
  )
}


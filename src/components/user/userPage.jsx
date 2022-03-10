import { Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

export const UserPage = ({ userData, userRepos  }) => {
  return (
  <>
    <Button  colorScheme='teal' variant='solid'>
        <Link to="/">back to Search Page</Link>
    </Button>
    <div>login: {userData.login}</div>
    <img alt='user pic' src={userData.avatar_url} />
    <div>quantidade de repos: {userData.public_repos}</div>
      <ul>
        {userRepos.map(repo => (
        <li key={repo.id}><b>Name</b>:{repo.name} and <b>description</b>: {repo.description}</li>
          ))
      }
      </ul>
    </>
  )
}


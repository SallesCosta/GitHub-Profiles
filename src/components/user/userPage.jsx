import { Link } from 'react-router-dom'
import { Repo, Tag, TagNav, Button, HStack, VStack } from './sytles-userPage'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const UserPage = ({ userData, userRepos }) => {
  const stack = ['js', 'php', 'ts', 'py', 'ruby', 'shell']
  return (
    <>
      <Button primary>
        <Link to='/'>back to Search Page</Link>
      </Button>
      <div>login: {userData.login}</div>
      <img alt='user pic' src={userData.avatar_url} />
      <div>quantidade de repos: {userData.public_repos}</div>
      {userRepos.map((repo) => (
        <Repo key={repo.id}>
          <HStack>
            <h2>{repo.name}</h2>
            <a href={repo.html_url} target='_blank' rel='noreferrer'>
              <ExternalLinkIcon w={4} h={4} />
            </a>
          </HStack>
          <p>{repo.description ? repo.description : 'No description'}</p>
          <TagNav>
            {stack.map((i) => (
              <Tag key={i} tagName={i} percent='23%' />
            ))}
          </TagNav>
        </Repo>
      ))}
    </>
  )
}

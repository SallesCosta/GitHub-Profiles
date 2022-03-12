import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { Icon, Center, Flex } from '@chakra-ui/react'
import {
  Content,
  RepoHeader,
  VStack,
  ThisRepo,
  Grid,
  Repo,
  Tag,
  Button,
  HStack,
  UserSection,
} from './sytles-userPage'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const UserPage = ({ userData, userRepos }) => {
  return (
    <Content>
      <HStack>
        <UserSection>
          <Button primary>
            <Link to='/'>back to Search Page</Link>
          </Button>
          <img alt='user pic' src={userData.avatar_url} />
          <>
            <p>Name: {userData.login}</p>
            <p>Total number of repositories: {userData.public_repos}</p>
          </>
        </UserSection>
        <Grid>
          {userRepos.map((repo) => {
            const stack = repo.language
            return (
              <Repo key={repo.id}>
                <RepoHeader>
                  <h3>{repo.name}</h3>
                  <a href={repo.html_url} target='_blank' rel='noreferrer'>
                    <ExternalLinkIcon w={4} h={4} />
                  </a>
                </RepoHeader>
                <p>{repo.description ? repo.description : 'No description'}</p>
                <Tag tagName={stack} />
              </Repo>
            )
          })}
          <a
            href='https://github.com/SallesCosta/gh-ch-ls'
            target='_blank'
            rel='noreferrer'
          >
            <ThisRepo>
              <VStack>
                <h3>Does this project</h3>
                <h3>deserve a star?</h3>
                <Icon as={AiFillGithub} />
              </VStack>
            </ThisRepo>
          </a>
        </Grid>
      </HStack>
    </Content>
  )
}

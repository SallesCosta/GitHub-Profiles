import { theme as T } from '../resource/theme'
import { AiFillGithub } from 'react-icons/ai'
import { Icon } from '@chakra-ui/react'
import {
  Content,
  RepoHeader,
  VStack,
  ThisRepo,
  Grid,
  Repo,
  // Tag,
  TagInternal,
  Button,
  HStack,
  UserSection,
} from './styles'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const UserPage = ({ userData, userRepos, backToSearch }) => {
  return (
    <Content>
      <HStack>
        <UserSection>
          <Button primary onClick={backToSearch}>
            back to Search Page
          </Button>
          <img alt='user pic' src={userData.avatar_url} />
          <VStack>
            <p>Name: {userData.name}</p>
            <p>Total number of repositories: {userData.public_repos}</p>
          </VStack>
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
        </Grid>
      </HStack>
    </Content>
  )
}

const FoundStack = ({ tagName }) => {
  const bg = T.colors[tagName].bg
  const border = T.colors[tagName].border
  return (
    <TagInternal bg={bg} border={border}>
      {tagName}
    </TagInternal>
  )
}

const NotFoundStack = () => {
  const bg = T.colors.noLanguage.bg
  const border = T.colors.noLanguage.border
  return (
    <TagInternal bg={bg} border={border}>
      sorry 👎🏻
    </TagInternal>
  )
}

export const Tag = ({ tagName }) => {
  if (tagName === null) {
    return <NotFoundStack />
  } else {
    const match = T.colors[tagName]
    if (match) {
      return <FoundStack tagName={tagName} />
    } else {
      return <NotFoundStack />
    }
  }
}

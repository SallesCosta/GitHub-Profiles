import { Link } from 'react-router-dom'
import { Repo, Tag, TagNav, Button } from './sytles-userPage'
import {useState}from 'react'

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
          <h2>{repo.name}</h2>
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

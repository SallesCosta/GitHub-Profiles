import { Routes, Route, useNavigate } from 'react-router-dom'
import { SearchPage } from './components/searchPage'
import { UserPage } from './components/userPage'
import React, { useEffect, useState } from 'react'
import { Box, Heading, Center } from '@chakra-ui/react'

export function App() {
  const [userData, setUserData] = useState('')
  const [userRepos, setUserRepos] = useState([])

  const navigate = useNavigate()

  const onSubmit = (data) => {
    const userUrl = `https://api.github.com/users/${data.user}`
    fetch(userUrl).then((res) => res.json().then((json) => setUserData(json)))
  }

  const backToSearch = () => {
    setUserData('')
    navigate('/')
  }

  useEffect(() => {
    if (!userData) {
      return
    }
    const toRepo = userData.repos_url
    fetch(toRepo).then((res) => res.json().then((json) => setUserRepos(json)))
    navigate('/user')
  }, [navigate, userData])

  return (
    <>
      <Center>
        <Box h='5vh' fontSize='2rem'>
          GitHub profiles
        </Box>
      </Center>
      <Routes>
        <Route
          path='/'
          element={
            <SearchPage
              userData={userData}
              onSubmit={onSubmit}
              userRepos={userRepos}
              setUserData={setUserData}
              setUserRepos={setUserRepos}
            />
          }
        />
        <Route
          path='user'
          element={
            <UserPage
              backToSearch={backToSearch}
              userData={userData}
              userRepos={userRepos}
            />
          }
        />
      </Routes>
    </>
  )
}

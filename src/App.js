import { Routes, Route, useNavigate } from 'react-router-dom'
import { SearchPage } from './components/searchPage'
import { UserPage } from './components/userPage'
import React, { useEffect, useState } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { Header } from './components/styles'

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
      <Header>
        GitHub profiles
      </Header>
      <Routes>
        <Route
          path='/'
          element={
            <SearchPage
              onSubmit={onSubmit}
              setUserData={setUserData}
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

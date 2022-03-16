import React, { useEffect, useState } from 'react'
import localforage from 'localforage'
import { Text, Center } from '@chakra-ui/react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { SearchPage } from './components/searchPage'
import { UserPage } from './components/userPage'
import { Header } from './components/styles'

const get = (url) => {
  return fetch(url, {
    headers: {
      authorization: process.env.GH,
      accept: 'application/vnd.github.v3+json',
    },
  })
}

export function App () {
  const [userData, setUserData] = useState(null)
  const [userRepos, setUserRepos] = useState(null)
  const [erro, setErro] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    localforage.setItem('GitHub Profiles', userData)
  }, [userData])

  useEffect(() => {
    async function getFromStorage () {
      const user = await localforage.getItem('GitHub Profiles')

      if (user) {
        setUserData(user)
      }
    }

    getFromStorage()
  }, [])

  const onSubmit = (data) => {
    const userUrl = `https://api.github.com/users/${data.user}`
    get(userUrl)
      .then((res) => {
        if (res.ok) return res.json()
        return Promise.reject()
      })
      .then((json) => {
        setUserData(json)
        setErro(false)
      })
      .catch(() => setErro(true))
  }

  const backToSearch = () => {
    setUserData(null)
    setUserRepos(null)
    setErro(false)
    navigate('/')
  }

  useEffect(() => {
    function getReposData () {
      if (!userData) {
        return
      }
      const toRepo = userData.repos_url
      get(toRepo)
        .then((res) => res.json())
        .then((json) => setUserRepos(json))
    }
    getReposData()
  }, [userData])

  useEffect(() => {
    navigate(userRepos === null ? '/' : '/user')
  }, [navigate, userRepos])

  return (
    <>
      <Header>GitHub profiles</Header>
      {erro && (
        <Center>
          <Text fontWeight='Bold' color='tomato'>
            not found, try an other
          </Text>
        </Center>
      )}
      <Routes>
        <Route
          path='/'
          element={<SearchPage onSubmit={onSubmit} setUserData={setUserData} />}
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

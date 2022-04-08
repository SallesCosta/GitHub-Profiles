import { Routes, Route, useNavigate } from 'react-router-dom'
import { SearchPage } from './pages/searchPage/searchPage'
import { UserPage } from './pages/userPage/userPage'
import React, { useEffect, useState } from 'react'
import { Text, Center } from '@chakra-ui/react'
import localforage from 'localforage'
import { Header } from './styles'

const get = (url) => {
  return fetch(url)
}

export function App() {
  const [userData, setUserData] = useState(null)
  const [userRepos, setUserRepos] = useState(null)
  const [erro, setErro] = useState(false)
  const [perPage, setPerPage] = useState(9)
  const [activePage, setActivePage] = useState(1)

  const navigate = useNavigate()

  useEffect(() => {
    localforage.setItem('GitHub Profiles', userData)
  }, [userData])

  useEffect(() => {
    async function getFromStorage() {
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

  function getReposData(page = 1) {
    if (!userData) {
      return
    }
    const toRepo = `${userData.repos_url}?per_page=${perPage}&page=${page}`
    get(toRepo)
      .then((res) => res.json())
      .then((json) => setUserRepos(json))
    setActivePage(page)
  }

  useEffect(() => {
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
              activePage={activePage}
              perPage={perPage}
              backToSearch={backToSearch}
              userData={userData}
              userRepos={userRepos}
              handlePagination={(clicked) => getReposData(clicked)}
            />
          }
        />
      </Routes>
    </>
  )
}

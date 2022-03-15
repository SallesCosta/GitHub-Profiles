import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { SearchPage } from './components/searchPage'
import { UserPage } from './components/userPage'
import { Header } from './components/styles'

const get = (url) => {
  return fetch(url, {
    headers: {
      authorization: process.env.GITHUBAUTH,
      accept: 'application/vnd.github.v3+json',
    },
  })
}

const debug = (value) => {
  console.log(value)
  return value
}

export function App () {
  const [userData, setUserData] = useState(null)
  const [userRepos, setUserRepos] = useState(null)
  const [erro, setErro] = useState(false)

  const navigate = useNavigate()

  const onSubmit = (data) => {
    const userUrl = `https://api.github.com/users/${data.user}`
    get(userUrl)
      .then((res) => {
        if (res.ok) return res.json()
        return Promise.reject()
      })
      // .then(debug)
      .then((json) => setUserData(json))
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
        // setar um estado boolean que renderiza uma mensagem dizendo que não foi encontrado o usuario
      }
      const toRepo = userData.repos_url
      get(toRepo)
        // .then((res) => {
        //   // console.log(res.headers.entries().next())
        //   for (const header of res.headers.entries()) {
        //     console.log(header)
        //   }
        //   return res
        // })
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
      {erro && <div>not found</div>}
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

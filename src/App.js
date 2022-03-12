import { Routes, Route, useNavigate } from 'react-router-dom'
import { SearchPage } from './components/search/searchPage'
import { UserPage } from './components/user/userPage'
import React, { useEffect, useState } from 'react'

export function App () {
  const [userData, setUserData] = useState('')
  const [userRepos, setUserRepos] = useState([])

  const navigate = useNavigate()

  const onSubmit = (data) => {
    const userUrl = `https://api.github.com/users/${data.user}`
    fetch(userUrl).then((res) => res.json().then((json) => setUserData(json)))
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
    <div className='App'>
      <h1>GitHub profiles</h1>
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
          element={<UserPage userData={userData} userRepos={userRepos} />}
        />
      </Routes>
    </div>
  )
}

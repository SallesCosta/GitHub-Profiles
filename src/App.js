import { Routes, Route, Link } from 'react-router-dom'
import { SearchPage } from './components/search/searchPage'
import { UserPage } from './components/user/userPage'

export function App() {
  return (
    <div className="App">
      <h1>GitHub profiles</h1>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="user" element={<UserPage />} />
      </Routes>
    </div>
  );
}

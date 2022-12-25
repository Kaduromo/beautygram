import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar"
import Chat from "./components/layouts/chat"
import Explore from "./components/layouts/explore"
import Users from "./components/layouts/users"
import Main from "./components/layouts/main"
import Heart from "./components/layouts/heart"

function App() {
  return (
    <div className="app__body">
      <div className="app__sidebar">
        <Sidebar />
      </div>
      <div className="app__content">
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/user" element={<Users />} />
          <Route path="/heart" element={<Heart />} />
          {/* <Route path="/users/:userId" element={<Users />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/logout" exact element={<LogOut />} /> */}
          <Route path="/" exact element={<Main />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

import { useEffect } from "react"

const Users = () => {
  useEffect(() => {
    document.title = "Users"
  }, [])

  return <h1>Users</h1>
}

export default Users

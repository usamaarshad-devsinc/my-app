import React from 'react'

interface User{
  id: number,
  username: string,
}
const usersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json();
  
  return (
    <>
      <h1>Users Page</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) =><li key={user.id}>{user.username}</li>)}
      </ul>
    </>
  )
}

export default usersPage

import React, { useEffect } from 'react';
import axios from "axios"
const api = "https://api.github.com"

function User(props){
  const { match: { params: {user} }} = props
  useEffect(
    () => {      
      getUserProject(user)      
    },
    [user]
  )
  async function getUserProject(user){
    const result = await axios.get(`${api}/users/${user}/projects`, {
      headers: {
        "Accept": "application/vnd.github.inertia-preview+json"
    }
      
    }).catch(err => console.log("error: ", err))
    console.log("result: ", result)
  }
  return (
    <div>
      User
    </div>
  )
}

export default User
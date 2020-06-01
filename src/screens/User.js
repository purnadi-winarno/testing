import React, { useEffect, useState } from 'react';
import axios from "axios"
import Parser from 'html-react-parser';
import { Row, Col } from "react-bootstrap"

const api = 'https://api.github.com'
const headers = { "Accept": "application/vnd.github.inertia-preview+json" }
const html_headers = { "Accept": "application/vnd.github.VERSION.html" }

function User(props){
  const { match: { params: {user} }} = props
  const [repos, setRepo] = useState([])
  const [readme, setReadme] = useState('Clik one of project on the left to see readme')
  const [apiError, setApiError] = useState('')

  useEffect(
    () => {      
      getUserProject(user)      
    },
    [user]
  )

  async function getUserProject(user){
    const result = await axios.get(`${api}/users/${user}/repos`, {headers}).catch(err => {
      setApiError(err.response.message)
    })
    if(result)
      setRepo(result.data)
    
  }

  async function getRepoReadme(repo){
    const result = await axios.get(`${api}/repos/${user}/${repo}/readme`, { headers: html_headers }).catch(err => console.log("error: ", err))
    if(result)
      setReadme(result.data)
    else 
      setReadme("no read me yet")
  }

  if(apiError)
    return <div className="page"><span className="error">{apiError}</span></div>

  return (
    <div className="full-width">
      <Row>
        <Col sm={4}>
          <strong>{ user }</strong> Projects list:
          <ol>
            { repos.map(repo => <li key={repo.id}><a onClick={() => getRepoReadme(repo.name)}>{repo.name}</a></li>) }
          </ol>
        </Col>
        <Col sm={8}>
          {
            Parser(readme)
          }
        </Col>
      </Row>
    </div>
  )
}

export default User
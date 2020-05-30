import React, { useState } from 'react';
import {
  Container,
  Row,
  Form,
  Button
}
from "react-bootstrap"
import { useHistory } from "react-router-dom";

function Home(){
  const [user, setUser] = useState("")
  const history = useHistory();

  function process(){    
    history.push("/" + user);
  }
  function changeUser(e){
    setUser(e.target.value)
  }
  return (
    <div className="page">
      <Container>
        <Row>
          Enter Github username here:
        </Row>
        <Row>
          <Form.Group>
            <Form.Control type="text" placeholder="Enter username" onInput={changeUser} />            
          </Form.Group> 

          <Form.Group>
            <Button variant="primary" onClick={process}>Go</Button>   
          </Form.Group>  
        </Row>
      </Container>
      
      
    </div>
  )
}

export default Home
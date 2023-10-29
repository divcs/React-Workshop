import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';


function App() {
  return (

    const [fnum, setFnum]= useState();
    const [snum, setSnum]= useState();
    const [res, setRes]= useState();

    const addFun=()=>{
      setRes("Sum is "+(parseInt(fnum)+parseInt(snum)))
    }
    return 

    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">First Number</InputGroup.Text>
        <Form.Control
          placeholder="Enter first number"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={fnum}
          onChange={(e)=>{setFnum(e.target.value);}}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Second Number</InputGroup.Text>
        <Form.Control
          placeholder="Enter second number"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={snum}
          onChange={(e)=>{setFnum(e.target.value);}}
        />
      </InputGroup>

      <Button variant="success" onClick={()=>addFun()}>ADD</Button>
    <h1>Sum is: {res}</h1>
    </>
  )
}

export default App;

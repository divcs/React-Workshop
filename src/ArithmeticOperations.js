import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function App() {
  const [fnum, setFnum] = useState();
  const [snum, setSnum] = useState();
  const [res, setRes] = useState();

  const addFun = () => {
    setRes("The Result of Sum is " + (parseInt(fnum) + parseInt(snum)));
  };

  const subFun = () => {
    setRes(" The Result of Sub is " + (parseInt(fnum) - parseInt(snum)));
  };

  const mulFun = () => {
    setRes("The Result of  Mul is " + parseInt(fnum) * parseInt(snum));
  };

  const divFun = () => {
    setRes("The Result of  Div is " + (parseInt(fnum) % parseInt(snum)));
  };
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">First Number</InputGroup.Text>
        <Form.Control
          placeholder="Enter first number"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={fnum}
          onChange={(e) => {
            setFnum(e.target.value);
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Second Number</InputGroup.Text>
        <Form.Control
          placeholder="Enter second number"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={snum}
          onChange={(e) => {
            setSnum(e.target.value);
          }}
        />
      </InputGroup>

<div className="d-flex">
      <Button variant="success" onClick={() => addFun()}>
        ADD
      </Button>
      

      <Button variant="danger" onClick={() => subFun()}>
        SUB
      </Button>
  

      <Button variant="info" onClick={() => mulFun()}>
        MUL
      </Button>
    

      <Button variant="primary" onClick={() => divFun()}>
        DIV
      </Button>

      </div>
      <h1>{res}</h1>
    </>
  );
}

export default App;

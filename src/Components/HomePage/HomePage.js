import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';


const homePage = () => {
    return (
        <div style= {{textAlign: "center"}}>
            <Jumbotron fluid>
            <h1>Welcome to BarGain</h1>
            <p>
            In our platform you can find everything and you can sell anything.<br/>
            <b>Fast - Safe - Guarranteed</b>
            </p>
            <p>
            <Button variant="primary" >Learn more</Button>
            </p>
        </Jumbotron>
      </div>
    );
  }

  export default homePage;

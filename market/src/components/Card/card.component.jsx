import React from "react";
import { Card, Button } from "flwww";
import './card.styles.css';

const BusinessDetails = ({ name, phoneno, rcNumber, registered}) => {

  return (
    <div className='business-details' >

      <Card
        style={{ boxShadow: "0 10px 20px #0003", 
        border: "none" }}
        className='business-details_card'>
        <h3 style={{ marginTop: ".5rem" }}>{ name }</h3>
        <p>RC Number: { !rcNumber ? <span className='reg_status'>not registered</span> : rcNumber}</p>
        <p>Phone no: { phoneno }</p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button outlined type="primary">view</Button>
        </div>
      </Card>

    </div>
  )
}

export default BusinessDetails;
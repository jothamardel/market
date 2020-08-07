import React from 'react';
import { Input } from 'flwww';

import './edit-business.styles.css';


const EditBusiness = () => {
  return (
    <React.Fragment>
      <div>
        <form action="">
          <Input type="text" value={"Some text"}/>
          <Input type="number" value={"Some text"}/>
          <Input type="text" value={"Some text"}/>
          <Input type="text" value={"Some text"}/>
          <Input type="text" value={"Some text"}/>
          <Input type="text" value={"Some text"}/>
          <Input type="text" value={"Some text"}/>
          <Input type="text" value={"Some text"}/>
          <Input type="text" value={"Some text"}/>
          <Input type="email" value={"Some text"}/>
          <Input type="checkbox" value={"Some text"}/>
        </form>
      </div>
    </React.Fragment>
  );
}

export default EditBusiness;
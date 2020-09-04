import React from 'react';
import { Icon } from 'flwww';


const Dashboard = () => (
  <div>
    <div>
      <h1>Welcome, John</h1>
    </div>
    <div>
      <p>Wallet</p>
      <Icon type="creditCard" />
      <p>Available Loan</p>
      <Icon type="hashtag" />
      <p>Pool</p>
      <Icon type="layers" />
    </div>
  </div>
);

export default Dashboard;
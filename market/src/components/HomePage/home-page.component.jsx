import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Data } from '../../assets/data.svg';
import { Button } from 'flwww';

import './home-page.styles.css';


const HomePage = () => (
  <div className='home-page'>

    <div className='home-page_svg_container'>
      <Data className='home-page_svg' />
    </div>
    <h1>Kasuwa</h1>
    <p>...powering small businesses.</p>
    <Link to='/login'>
      <Button outlined >Get Started</Button>
    </Link>
  </div>
);

export default HomePage;
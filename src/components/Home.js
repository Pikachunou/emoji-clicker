import React from 'react';
import { Link } from 'react-router-dom'
import smileshower from './assets/smileshower.gif'

function Home() {
  return (
    <>
    <h1>Emoji Clicker</h1>
    <img alt="gif of smile shower" className="home-img" src={smileshower}></img>
    <Link to="game">
        <button className="home-btn">Create new Game</button>
    </Link>
    <button className="home-btn">Load Game</button>
    </>

  );
}

export default Home;
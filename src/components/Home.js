import React from 'react';
import './Home.css'
import smileshower from './assets/smileshower.gif'

function Home() {
  return (
    <>
    <h1>Emoji Clicker</h1>
    <img src={smileshower}></img>
    <a href="./game.html">
        <button className="home-btn">Create new Game</button>
    </a>
    <button className="home-btn">Load Game</button>
    </>

  );
}

export default Home;
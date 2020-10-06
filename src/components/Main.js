import React from 'react'
import Menu from './Menu'


function Main({ handleEmojiClick, goBack, openHelp, openShop, money }) {
  
  return (
    <div className="page-container">
      <canvas id="confetti"></canvas>
      <header className="game-header">
        <Menu />
        <span className="counter emoji" role="img" aria-label="smile">😄</span>
        <p className="counter-value">{money}</p>
        <span className="emoji info" onClick={openHelp} role="img" aria-label="exclamation_mark">❕</span>
      </header>

      <main className="game-main">
        <span className="emoji grin" onClick={handleEmojiClick} role="img" aria-label="smile">😄</span>
      </main>

      <footer className="game-footer">
        <span className="emoji shopcart" onClick={openShop} role="img" aria-label="shopcart">Shopcart 🛒</span>
      </footer>
    </div>
  )
}

export default Main
import React from 'react'


function Help({ goBack }) {
  return (
    <div className="help-overlay">
      <div className="help-header">
        <h2>Help</h2>
        <p>
          If this is your first time playing
          an clicker game, all you have to do is click the emoji in the middle to gain money! The more money you get, the more emojis you can buy! Your goal is to collect every emoji in this idle game!
        </p>
      </div>
      <div className="help-main">
        <span className="emoji exit-help" onClick={goBack} role="img" aria-label="exit">🔙</span>
      </div>
    </div>
  )
}

export default Help
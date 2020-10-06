import React from 'react'
import Upgrade from './Upgrade'


function Shop({ goBack, upgrades }) {
  return (
    <div className="shop-overlay">
      <div className="shop-header">
        <span className="emoji counter" role="img" aria-label="smile">😄</span>
        <p className="counter-value">0</p>
      </div>
      <div className="shop-main">
        <div className="upgrades">
          {Object.entries(upgrades).map(([name, {cost, icon, desc}], key) => <Upgrade key={key} name={name} cost={cost} icon={icon} desc={desc} />)}
        </div>
      </div>
      <div className="shop-footer">
        <span className="emoji exit-shop" onClick={goBack} role="img" aria-label="exit">🔙</span>
      </div>
    </div>
  )
}

export default Shop
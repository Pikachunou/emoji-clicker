import React from 'react'
import Upgrade from './Upgrade'


function Shop({ goBack, money, purchase, upgrades }) {
  return (
    <div className="shop-overlay">
      <div className="shop-header">
        <span className="emoji counter" role="img" aria-label="smile">😄</span>
        <p className="counter-value">{money}</p>
      </div>
      <div className="shop-main">
        <div className="upgrades">
          {
            Object.entries(upgrades).map(([name, {owned, cost, icon, desc}], key) => {
              return (
                <Upgrade
                  key={key}
                  purchase={purchase}
                  owned={owned}
                  name={name}
                  cost={cost}
                  icon={icon}
                  desc={desc}
                />
              )
            })
          }
        </div>
      </div>
      <div className="shop-footer">
        <span className="emoji exit-shop" onClick={goBack} role="img" aria-label="exit">🔙</span>
      </div>
    </div>
  )
}

export default Shop
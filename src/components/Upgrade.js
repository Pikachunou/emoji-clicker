import React from 'react'


const Upgrade = ({ purchase, owned, name, cost, icon, desc}) => {
  const backgroundColor = owned ? "green": "red"
  return (
    <div className="upgrade" style={{background: backgroundColor}} onClick={() => purchase(name)}>
      <p className="name">{name}</p>
      <p className="cost">{cost}</p>
      <span className="icon">{icon}</span> 
      <p className={"description"}>{desc}</p>
    </div>
  )
}

export default Upgrade
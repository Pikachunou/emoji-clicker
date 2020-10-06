import React from 'react'


const Upgrade = ({ name, cost, icon, desc}) => 
  (
    <div className="upgrade">
      <p className="name">{name}</p>
      <p className="cost">{cost}</p>
      <span className="icon">{icon}</span> 
      <p className={"description"}>{desc}</p>
    </div>
  )

export default Upgrade
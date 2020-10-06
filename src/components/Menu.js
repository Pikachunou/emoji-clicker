import React, { useState } from 'react'


function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="menu-container" onClick={e => setOpen(prev => !prev)}>Menu
      {
        open ? (
          <ul className="menu">
            <li className="save">Save</li>
            <li className="export">Export save</li>
            <li>Import save<input className="import" type="file" name="filename" /></li>
            <li>Load</li>
            <li>Achievements</li>
          </ul>
        ) : (
          null
        )
      }
    </div>
  )
}

export default Menu
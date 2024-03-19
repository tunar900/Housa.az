import React from 'react'
import { Outlet } from 'react-router-dom'

function EstateLayout() {
  return (
    <div>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default EstateLayout;
import React from 'react'
import { Outlet } from 'react-router-dom'

function MapLayout() {
  return (
    <div>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default MapLayout
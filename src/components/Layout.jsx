import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import { use } from 'react'

function Layout() {
  const location = useLocation()
    console.log(location.pathname)
  const isSpecialPage = location.pathname === "/"

  return (
    <div className={`app-shell ${isSpecialPage ? "app-shell-alt" : ""}`}>
      <NavBar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout

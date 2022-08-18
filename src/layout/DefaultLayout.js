import React from 'react'
import { connect, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = (props) => {
  const isAuthUser = useSelector((state) => state.auth.isAuthUser)
  if (!isAuthUser) return <Navigate to="/login" />
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default React.memo(DefaultLayout)

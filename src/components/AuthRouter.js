import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router'

const AuthRoute = (props) => {
  const isAuthUser = useSelector((state) => state.auth.isAuthUser)
  const { type } = props
  if (type === 'guest' && isAuthUser) return <Navigate to="/" />
  else if (type === 'private' && !isAuthUser) return <Navigate to="/login" />
  return <Route {...props} />
}

export default React.memo(AuthRoute)

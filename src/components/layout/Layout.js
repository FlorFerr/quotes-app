import React from 'react'
import './Layout.css'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
  return (
    <>
        <MainNavigation></MainNavigation>
        <main className='main'>{props.children}</main>
    </>
  )
}

export default Layout
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Layout({ children,inputHandler ,setPage,allGenres}) {
  return (
    <BrowserRouter>
      <Header inputHandler={inputHandler} setPage={setPage} allGenres={allGenres} />
      {children}
      <Footer />
    </BrowserRouter>
  )
}

export default Layout



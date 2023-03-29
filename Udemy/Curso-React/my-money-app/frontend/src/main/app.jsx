import '../commom/template/dependecies'
import React from 'react'

import Header from '../commom/template/header'
import SideBar from '../commom/template/sidebar'
import Footer from '../commom/template/footer'
import Dialog from '../commom/dialog/dialog'
import Routes from './routes'

export default props => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
    <Dialog />
  </div>
)
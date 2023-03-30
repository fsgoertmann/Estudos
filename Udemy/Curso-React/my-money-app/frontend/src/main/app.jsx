import React from 'react'

import Header from '../commom/template/header'
import SideBar from '../commom/template/sidebar'
import Footer from '../commom/template/footer'
import Dialog from '../commom/dialog/dialog'

export default props => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper">
      {props.children}
    </div>
    <Footer />
    <Dialog />
  </div>
)
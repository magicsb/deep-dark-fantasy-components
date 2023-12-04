import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import styles from './index.less'

const Layout = (props) => {

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        left
      </div>
      <div className={styles.right}>
        <div className={styles.head}>
          <NavLink to='/'>主页</NavLink>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink to='/login'>登录页</NavLink>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink to='/test'>test</NavLink>
        </div>
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout;
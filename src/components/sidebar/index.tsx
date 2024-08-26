import React from 'react'

import SidebarCategory from './sidebar-category'
import SidebarTop from './sidebar-top'

const Sidebar = () => {
  return (
    <div className='sticky top-0'>
      <SidebarCategory />
      <SidebarTop />
    </div>
  )
}

export default Sidebar

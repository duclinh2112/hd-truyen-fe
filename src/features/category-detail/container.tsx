import React from 'react'

import AppLayoutWithSidebar from '@/components/layouts/app-layout-with-sidebar'

import Breadcrumb from './components/breadcrumb'
import Content from './components/content'

const CategoryDetailContainer = () => {
  return (
    <>
      <Breadcrumb />
      <AppLayoutWithSidebar>
        <Content />
      </AppLayoutWithSidebar>
    </>
  )
}

export default CategoryDetailContainer

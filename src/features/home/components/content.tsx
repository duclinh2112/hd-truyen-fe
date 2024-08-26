import React from 'react'

import ListComicWrapper from '@/components/comic/list-comic-wrapper'
import IconFlash2 from '@/components/icons/flash'
import AppLayoutWithSidebar from '@/components/layouts/app-layout-with-sidebar'
import { COMICS } from '@/utils/data'

import NewComic from './new-comic'

const HomeContent = () => {
  return (
    <AppLayoutWithSidebar>
      <ListComicWrapper
        icon={<IconFlash2 />}
        title='Truyện Đề Cử'
        data={COMICS}
        seeMore='/'
      />
      <NewComic />
      <ListComicWrapper
        icon={<IconFlash2 />}
        title='Truyện Full'
        data={COMICS}
        seeMore='/'
      />
    </AppLayoutWithSidebar>
  )
}

export default HomeContent

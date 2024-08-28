import React from 'react'

import ComicWrapper from '@/components/comic/comic-wrapper'
import ItemComic from '@/components/comic/item-comic'
import Pagination from '@/components/common/pagination'
import IconFlash2 from '@/components/icons/flash'
import { COMICS } from '@/utils/data'
import type { IComic } from '@/utils/interface/IComic'

const Content = () => {
  return (
    <ComicWrapper
      icon={<IconFlash2 />}
      title={
        <h3 className='text-[24px] font-semibold leading-[32px] text-main'>
          Truyện Đề Cử
        </h3>
      }
    >
      <div className='text-text-blue'>
        <p>
          Truyện tiên hiệp thường kể về quá trình tu luyện và khám phá thế giới
          tu sĩ thần tiên đầy bí ẩn của nhân vật chính. Trong truyện tiên hiệp
          thường chia ra những cấp bậc tu luyện trước khi thành tiên như sau:
        </p>
        <ul>
          <li>Luyện Khí</li>
          <li>Khai Quang</li>
          <li>Trúc Cơ</li>
        </ul>
      </div>
      <div className='mt-8 grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-3 md:grid-cols-4'>
        {COMICS.map((item: IComic, idx: number) => (
          <div key={idx}>
            <ItemComic item={item} />
          </div>
        ))}
      </div>
      <div className='mt-6 flex items-center justify-center'>
        <Pagination
          initialPage={1}
          total={Math.ceil(COMICS.length / 10)}
          showControls
        />
      </div>
    </ComicWrapper>
  )
}

export default Content

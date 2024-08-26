import Link from 'next/link'
import React from 'react'

import { CATEGORIES } from '@/utils/data'

import Card from '../common/card'
import TextWithIcon from '../common/text-with-icon'
import IconArrowRight from '../icons/arrow-right'
import IconFlash from '../icons/flash-icon'
import IconTag from '../icons/tag'

const SidebarCategory = () => {
  return (
    <div className='py-4'>
      <Card>
        <div className='mb-6 flex items-center justify-between'>
          <h3 className='text-[24px] font-semibold leading-8'>Thể Loại</h3>
          <Link
            href='/'
            className='flex items-center text-[14px] font-medium hover:underline'
          >
            Xem thêm
            <span className='inline-flex items-center'>
              <IconArrowRight />
            </span>
          </Link>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          {CATEGORIES.map((item, idx) => {
            const icon = idx < 4 ? <IconFlash width={24} /> : <IconTag />
            return (
              <div key={idx}>
                <TextWithIcon
                  icon={icon}
                  content={
                    <Link
                      href={`/the-loai/${item.slug}`}
                      className='hover:underline'
                    >
                      {item.title}
                    </Link>
                  }
                />
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

export default SidebarCategory

import Link from 'next/link'
import React from 'react'

import Card from '@/components/common/card'
import TextWithIcon from '@/components/common/text-with-icon'
import IconFlash from '@/components/icons/flash-icon'
import { CATEGORIES } from '@/utils/data'

const HashTag = () => {
  return (
    <div className='py-4'>
      <div className='container'>
        <Card>
          <div className='mb-2'>
            <TextWithIcon
              icon={<IconFlash />}
              content={
                <h4 className='text-[20px] font-semibold text-title'>
                  Từ khoá nổi bật
                </h4>
              }
            />
          </div>
          <div className='flex flex-wrap gap-4'>
            {CATEGORIES.slice(-10).map((item, idx) => (
              <Link
                href={`/the-loai/${item.slug}`}
                key={idx}
                className='text-text-blue hover:underline'
              >
                {item.title}
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default HashTag

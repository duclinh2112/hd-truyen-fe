import Link from 'next/link'
import React from 'react'

import ComicWrapper from '@/components/comic/comic-wrapper'
import IconBook from '@/components/icons/book'
import IconFlash2 from '@/components/icons/flash'

const NewComic = () => {
  return (
    <ComicWrapper
      icon={<IconFlash2 />}
      title={
        <h3 className='text-[24px] font-semibold leading-[32px] text-main'>
          Truyện Mới Cập Nhật
        </h3>
      }
      seeMore='/'
    >
      <div>
        <div className='flex items-center justify-between border-b-1 border-solid border-[#F0F1F3] py-3'>
          <div className='flex items-center gap-2'>
            <span className='inline-flex items-center'>
              <IconBook />
            </span>
            <Link href='/' className='hover:underline'>
              Sống Cùng Biểu Tỷ
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <span className='inline-flex h-6 min-w-[98px] items-center justify-center rounded-[100px] bg-bg-success px-1 text-[14px] leading-[24px] text-text-success'>
              Full
            </span>
            <span>3 giờ trước</span>
          </div>
        </div>
        <div className='flex items-center justify-between border-b-1 border-solid border-[#F0F1F3] py-3'>
          <div className='flex items-center gap-2'>
            <span className='inline-flex items-center'>
              <IconBook />
            </span>
            <Link href='/' className='hover:underline'>
              Sống Cùng Biểu Tỷ
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <span className='inline-flex h-6 min-w-[98px] items-center justify-center rounded-[100px] bg-bg-success px-1 text-[14px] leading-[24px] text-text-success'>
              Full
            </span>
            <span>3 giờ trước</span>
          </div>
        </div>
        <div className='flex items-center justify-between border-b-1 border-solid border-[#F0F1F3] py-3'>
          <div className='flex items-center gap-2'>
            <span className='inline-flex items-center'>
              <IconBook />
            </span>
            <Link href='/' className='hover:underline'>
              Sống Cùng Biểu Tỷ
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <span className='inline-flex h-6 min-w-[98px] items-center justify-center rounded-[100px] bg-bg-success px-1 text-[14px] leading-[24px] text-text-success'>
              Full
            </span>
            <span>3 giờ trước</span>
          </div>
        </div>
        <div className='flex items-center justify-between border-b-1 border-solid border-[#F0F1F3] py-3'>
          <div className='flex items-center gap-2'>
            <span className='inline-flex items-center'>
              <IconBook />
            </span>
            <Link href='/' className='hover:underline'>
              Sống Cùng Biểu Tỷ
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <span className='inline-flex h-6 min-w-[98px] items-center justify-center rounded-[100px] bg-bg-success px-1 text-[14px] leading-[24px] text-text-success'>
              Full
            </span>
            <span>3 giờ trước</span>
          </div>
        </div>
        <div className='flex items-center justify-between border-b-1 border-solid border-[#F0F1F3] py-3'>
          <div className='flex items-center gap-2'>
            <span className='inline-flex items-center'>
              <IconBook />
            </span>
            <Link href='/' className='hover:underline'>
              Sống Cùng Biểu Tỷ
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <span className='inline-flex h-6 min-w-[98px] items-center justify-center rounded-[100px] bg-bg-success px-1 text-[14px] leading-[24px] text-text-success'>
              Full
            </span>
            <span>3 giờ trước</span>
          </div>
        </div>
      </div>
    </ComicWrapper>
  )
}

export default NewComic

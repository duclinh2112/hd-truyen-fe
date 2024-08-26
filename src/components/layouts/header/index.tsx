'use client'

import IMG_AVATAR from '@assets/images/img-avatar.png'
import LOGO from '@assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

import Input from '@/components/common/input'
import IconSearch from '@/components/icons/search'
import { NAVIGATION } from '@/utils/constants'

import AppContainer from '../container'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <div className='flex h-header items-center bg-header text-header'>
      <AppContainer>
        <div className='flex items-center justify-between'>
          <div>
            <Link href='/'>
              <Image src={LOGO} alt='Động truyện' width={65} height={32} />
            </Link>
          </div>
          <div>
            <ul className='flex items-center gap-10'>
              {NAVIGATION.map((item, key) => {
                const active = pathname.split('/', 2).join('/') === item.path
                return (
                  <li key={key}>
                    <Link
                      href={item.path}
                      className={`text-header ${
                        active ? 'opacity-100' : 'opacity-80'
                      } hover:opacity-100`}
                      onClick={() => router.push(item.path)}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='h-10 w-[450px]'>
            <Input
              placeholder='Tìm kiếm'
              startContent={<IconSearch className='text-main' />}
              classNames={{
                innerWrapper: 'bg-transparent',
                inputWrapper: 'bg-main',
                input: 'text-main',
              }}
            />
          </div>
          <div className='flex items-center gap-8'>
            <div className='flex cursor-pointer items-center gap-2'>
              <span>
                <Image
                  width={40}
                  height={40}
                  src={IMG_AVATAR}
                  alt='avatar'
                  className='rounded-full'
                />
              </span>
              <span className='text-header'>User</span>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  )
}

export default Header

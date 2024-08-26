'use client'

import { useParams } from 'next/navigation'
import React from 'react'

import Breadcrumbs from '@/components/common/breadcrumb'
import { CATEGORIES } from '@/utils/data'

const Breadcrumb = () => {
  const params = useParams()

  const { slug } = params

  const titleCat = CATEGORIES.find((item) => item.slug == slug)?.title
  return <Breadcrumbs title={titleCat ?? ''} />
}

export default Breadcrumb

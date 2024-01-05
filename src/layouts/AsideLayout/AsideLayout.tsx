import React, { ReactNode } from 'react'

interface Props{
    children?: ReactNode
}

export default function AsideLayout({ children }: Props) {
  return (
    <aside className='col-4'>
        { children }
    </aside>
  )
}

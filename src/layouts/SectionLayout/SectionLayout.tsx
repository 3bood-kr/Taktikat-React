import React, { ReactNode } from 'react'

interface Props{
    children?: ReactNode
}

export default function SectionLayout({ children }: Props ) {
  return (
    <section className='row gap-3 col-8'>
        { children }
    </section>
  )
}

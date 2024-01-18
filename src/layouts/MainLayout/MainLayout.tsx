import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode,
}

export default function MainLayout({ children }: Props) {
    return (
        <>
            <main className='row main-container py-5'>
                {children}
            </main>
        </>
    )
}

import Header from '@/components/Header'
import React from 'react'

type Children = {
    children: React.ReactNode
} 

const Layout = ({children}: Children) => {
  return (
   <main className='min-h-screen text-gray-400'>

    <Header/>
    
    <div className='container py-10 '>
        {children}

    </div>
   </main>
  )
}

export default Layout;
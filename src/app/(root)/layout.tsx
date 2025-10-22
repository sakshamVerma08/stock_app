import Header from '@/components/Header'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

type Children = {
    children: React.ReactNode
} 

const Layout = async ({children}: Children) => {

   /*
  1. Try to get the Session from the getSession() of better-auth 
  2. If the session exists, then create a new user object, but if it doesn't exist, then redirect the user to /sign-in route.
  */

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if(!session?.user){
    redirect('/sign-in');
  }

  const user = {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email
  }
 
  
  return (
   <main className='min-h-screen text-gray-400'>

    <Header user = {user}/>
    
    <div className='container py-10 '>
        {children}

    </div>
   </main>
  )
}

export default Layout;
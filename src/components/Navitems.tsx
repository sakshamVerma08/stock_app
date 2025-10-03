'use client';

import { NAV_ITEMS } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {}

const NavItems = (props: Props) => {

    const pathname = usePathname();

    const isActive = (path: string)=>{

        if(path === '/') return pathname==='/';

        return pathname.startsWith(path);

    }
  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>

      {NAV_ITEMS.map((items,index)=>(

        <li key = {index}>
            
            <Link href = {items.href} className= {`hover:text-yellow-500 transition-colors ${isActive(items.href) ? 'text-gray-100' : ''} `}>
            
                {items.title}
            </Link>
            
            </li>
      )  
    )}
    </ul>
  )
}

export default NavItems;
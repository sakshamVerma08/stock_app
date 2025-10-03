'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './Navitems'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import UserDropdown from './UserDropdown'
import { useRouter } from 'next/navigation'

type Props = {}
type User = {
    name: string,
    email: string,

}
const Header = (props: Props) => {
    const router = useRouter();

    const handleSignOut = async()=>{
        router.push("/sign-in");
    }

    const user : User = {
        name: "Saksham Verma",
        email:"sakshamverma1000@gmail.com"
    }

  return (
    <header className='sticky top-0 header'>
        <div className="container header-wrapper">
            <Link href = "/">
            
                <Image src = "/assets/icons/logo.svg" alt = "Signalist Logo" width={140} height = {32}  className='h-8 w-auto cursor-pointer'/>
            </Link>

            <nav className='hidden sm:block '>
                {/*Nav Items */}
                <NavItems/>

            </nav>
            {/* User Dropdown */}
            <UserDropdown/>

        </div>
    </header>
  )
}

export default Header
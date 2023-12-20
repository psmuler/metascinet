import Link from 'next/link'
import React from 'react'
import "./styles.css"
import { Button } from '@radix-ui/themes'

const NavBar = () => {
    return (
        <nav className='flex space-x-4 border-b mb-5 px-10 h-16 items-center'>
            <Link href="/">Logo</Link>
            <ul className='flex space-x-4'>
                <li><Link href="/sample">sample</Link></li>
                <li><Link href="/new">new</Link></li>
            </ul>
            <Button className=''>Press me</Button>
        </nav>
    )
}

export default NavBar
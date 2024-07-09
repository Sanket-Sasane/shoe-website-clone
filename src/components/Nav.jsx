import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={30} />
            </a>
            <ul className='flex-1 flex justify-center gap-16 items-center max-lg:hidden'>
                {
                    navLinks.map((link,index)=>(
                        <li key={index}>
                            <a href={link.href} className='font-montserrat text-lg text-slate-gray leading-normal'>
                                {link.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="hamburger" height={25} width={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav
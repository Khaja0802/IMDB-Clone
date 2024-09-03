import React from 'react'
import Logo from '../MovieLogo.png'


const Navbar = () => {
    return (
        <div className='flex border space-x-8 items-center pl-3 py-4'>
            <img className='w-[50px]' src={Logo} alt=""/>
            <a href='/' className='text-amber-500 text-3xl font-bold'>Home</a>
            <a href='/watchlist' className='text-amber-500 text-3xl font-bold'>Watchlist</a>
        </div>
    )
}

export default Navbar
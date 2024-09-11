import React from 'react'
import Logo from '../MovieLogo.png'
import {Link} from "react-router-dom"


const Navbar = () => {
    return (
        <div className='flex border space-x-7 items-center pl-3 py-4'>
            <img className='w-[40px]' src={Logo} alt=""/>
            <Link to='/' className='text-amber-500 text-3xl font-bold'>Home</Link>
            <Link to='/watchlist' className='text-amber-500 text-3xl font-bold'>Watchlist</Link>
        </div>
    )
}

export default Navbar
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Contactus from '../../pages/contactus/Contactus'
import Aboutus from '../../pages/about/Aboutus'
import './header.css'

const Header = () => {

    return (
        <>
            <div className='flex flex-row justify-center items-center align-sub max-h-max py-7 bg-red-400 gap-5'>
                <ul className='flex flex-col md:flex-row gap-5 align-middle '>
                    <li className='align-middle'>
                        <Link to={'/'}>home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>about us</Link>
                    </li>
                    <li>
                        <Link to={'/contactus'}>contact us</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<Aboutus />}></Route>
                <Route path='/contactus' element={<Contactus />}></Route>
            </Routes>
        </>

    )
}

export default Header

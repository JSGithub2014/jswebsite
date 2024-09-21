import React from 'react'

function Navbar() {
    return (
        <React.Fragment>
            <header>
                <nav className='flex justify-between items-center px-20 w-full shadow-md '>
                    <div className='brand-logo'>

                        <a href=""><img className='w-20 pt-2' src="./src/assets/brand-logo-transperent.png" alt="" /></a>
                    </div>
                    <div className='brand-options flex flex-row gap-8 uppercase font-semibold'>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Contact</a>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default Navbar
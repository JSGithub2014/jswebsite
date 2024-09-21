import React from 'react'

function Hero() {
    return (
        <React.Fragment>
            <main className='w-full h-screen'>
                <div className='hero-wrapper flex justify-between items-center px-16'>
                    <aside className='hero-section-left'>
                        <div className='text-7xl font-semibold '>Your Trusted Partner <br />in Finance, Insurance,<br /> and Real Estate.</div>
                        <div ><p>paragraph</p></div>
                        <button className=''>Call Now</button>
                    </aside>
                    <aside className='hero-section-right'>
                        <img className='w-[38vw] pt-5' src="../src/assets/hero.png" alt="" />
                    </aside>
                </div>

            </main>
        </React.Fragment>
    )
}

export default Hero
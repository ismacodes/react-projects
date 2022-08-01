import React from 'react'
import SmallLogo from '../images/small_logo.png'

const Header = () => {
  return (
    <header className='flex items-center justify-between font-sans font-medium text-sm'>
        <div>
            <img src={SmallLogo} alt="Airbnb" className='w-8 h-8 mx-5 my-4'/>
        </div>

        <div className='my-4'>
            <button className='mr-6'>Help</button>
            <button className='mr-6'>Sign Up</button>
            <button className='mr-6'>Log in</button>
        </div>
    </header>
  )
}

export default Header
import React from 'react'
import Navbar from '../components/Navbar'

const Notifications = () => {
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='text-center' style={{marginTop:300}}>
                  <h1 className='lead'>Nothing to show</h1>
            </div>
        </div>
    </div>
  )
}

export default Notifications
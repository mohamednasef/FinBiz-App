import React from 'react'
import Button from '../shared/Button'

function Header() {
  return (
   <header className='header'>
    <div className="container">

    <div className="introducing-containre">

        <div className="introducing mb-5">
            <span>New</span>
            <p>Introducing AI Automation</p>
            <img src="/arrow.svg" alt="" />
        </div>
    </div>
        <div className="header-text">
            <h1>The Finance Solutions <br />
            For Your Business</h1>
            <p>Empower your finance team. The onestop plateform for all financial management of <br /> small and medium-sized business.</p>
        </div>
        <div className="form-head">
            <input type="text" placeholder='Enter your email adress'/>
            <Button variant="primary"  >Get started </Button>
        </div>
        <div className="reviews">
            <ul>
                <li><img src="/m1.jpg" alt="" /></li>
                <li><img src="/m2.jpg" alt="" /></li>
                <li><img src="/m3.jpg" alt="" /></li>
                <li><img src="/m4.jpg" alt="" /></li>
                <li><img src="/m5.jpg" alt="" /></li>
            </ul>
        <span>1,200+ reviews (4.9 of 5)</span>
        </div>

    </div>
    </header>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='flex justify-between p-4 bg-slate-800 text-white'>
            <div className="logo font-bold">ROHIT</div>
            <div className="links">
                <ul>
                    <Link to='/'><li className='inline-block px-2'>Authors</li></Link>
                    <Link to='/most-liked'><li className='inline-block px-2'>Most Liked</li></Link>
                    <li className='inline-block px-2'>Most Commented</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
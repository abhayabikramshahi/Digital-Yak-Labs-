import React from 'react'
import { Link } from 'react-router-dom'
import Privacypolicy from '../Pages/Privacypolicy'

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="py-6" style={{ backgroundColor: '#000', color: '#fff' }}>
  <div className="list text-center mb-4">
    <a href="#" className="mx-4" style={{ color: '#fff' }}>Home</a>
    <a href={Privacypolicy} className="mx-4" style={{ color: '#fff' }}>Privacy Policy</a>
    <a href="#" className="mx-4" style={{ color: '#fff' }}>Terms</a>
    <a href="#" className="mx-4" style={{ color: '#fff' }}>Contact</a>
  </div>
  <div className="name text-center">
    <p>&copy; All rights reserved Nepal Coding House Private Limited</p>
  </div>
</footer>

        </>
    )
}

export default Footer
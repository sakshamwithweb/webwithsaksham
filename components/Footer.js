import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div>
            <h3>Lets create something</h3>
            <div>Ready to bring your ideas to life? Let's discuss your project and create something extraordinary together.</div>
            <button>Start a Project</button>
        </div>
        <div>
            <h3>Quick Links</h3>
            <Link>About</Link>
            <Link>Work</Link>
            <Link>Services</Link>
            <Link>Contact</Link>
        </div>
        <div>
            <h3>Connect</h3>
            <div className='links'>
                <div><Linkedin/></div>
                <div><Github/></div>
                <div><Twitter/></div>
                <div><Email/></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

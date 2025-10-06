import React from 'react'
import '../style/Footer.css'
import twitter from '../svg_icons/twitter.png'
import facebook from '../svg_icons/facebook.png'
import instagram from '../svg_icons/instagram.png'

const Footer = () => {
  return (
   <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2 className="footer-title">About Us</h2>
          <p className="footer-text">
            Discover the world’s most beautiful destinations with us. 
            We provide guides, tips, and recommendations to make your travel unforgettable.
          </p>
        </div>
       
        <div className="footer-section">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#places">Type of Tourism</a></li>
            <li><a href="#gallery">Places to go</a></li>
            <li><a href="#contact">Things to go</a></li>
            <li><a href="#contact">Plan your trip</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h2 className="footer-title">Follow Us</h2>
          <div className="footer-socials">
            <a href="#"><img src={twitter} alt="" /></a> 
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={instagram} alt="" /></a> 
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} VisitWorld. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

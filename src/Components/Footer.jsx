import React from 'react'
import './Footer.css';
import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png'
import link from '../assets/link.png'
import insta from '../assets/insta.jpg' 



const Footer = () => {
  return (
    <div className='footer'>
    <div className='sb-footer section-padding'>
        <div className='sb-footer-links'>
            <div className='sb-footer-links-div'>
                <h4>For Business</h4>
                <a href="/employer">
                    <p>Employer</p>
                </a>
                <a href="/employer">
                    <p>Visit Us</p>
                </a>
                <a href="/healthplan">
                    <p>Health Plan</p>
                </a>
                <a href="/individuals">
                    <p>Individuals</p>
                </a>
                
            </div>
            <div className='sb-footer-links-div'>
                    <h4>Resources</h4>
                    <a href="/Resources">
                    <p>Resources</p>
                    </a>

                    <a href="/Resources">
                    <p>Resources</p>
                </a>

                <a href="/Resources">
                    <p>Resources</p>
                </a>
            </div>

            <div className='sb-footer-links-div'>
                <h4>Partners</h4>

                <a href="/Resources">
                    <p>Swing Tech</p>
                </a>
            </div>

            <div className='sb-footer-links-div'>
                <h4>Company</h4>

                <a href="/Resources">
                    <p>About</p>
                </a>

                <a href="/Resources">
                    <p>Press</p>
                </a>

                <a href="/Resources">
                    <p>Career</p>
                </a>

                <a href="/Resources">
                    <p>Contact</p>
                </a>
            </div>
            <div className='sb-footer-links-div'>
                <h4>COMING SOON ON</h4>
                <div className='socialmedia'>
                    <p><img src={fb} alt="" /></p>
                    <p><img src={twitter} alt="" /></p>
                    <p><img src={link} alt="" /></p>
                    <p><img src={insta} alt="" /></p>
                </div>
            </div>
        </div>

        <hr />
        <div className='sb-footer-below'>
            <div className='sb-footer-copyright'>
                <p>
                    @{new Date().getFullYear()} CodeInn . All right reserved
                </p>
            </div>
            <div className='sb-footer-below-links'>
                <a href="/terms"><div><p>Terms & Condition</p></div></a>
                <a href="/terms"><div><p>Privacy</p></div></a>
                <a href="/terms"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
            </div>
        </div>

    </div>     
    </div>
  )
}

export default Footer

export default function Footer() {
    return (
        <footer className="extra-space">
            <div className="footer__container width">
                <div className="footer__logo-container space-div">
                    <div className="footer-logo">
                        <img className="logo-image " src="/src/assets/company-logo.png" alt="terraconnect-logo" />
                        <h1>Terra<span className="logo-color">Connect</span></h1>
                    </div>
                    <div className="footer-content">
                        <span>© 2023 Sandbox. All rights reserved. </span>   
                    </div>
                </div>
                
                <div className="second-footer">
                    <div className="footer__one space-div">
                        <h2>Get in Touch</h2>
                        <p>Moonshine St. 14/05 Light City, London, United Kingdom</p>
                        <p>info@email.com</p>
                    </div>

                    <div className="footer__two space-div">
                        <h2>Learn More</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Our Story</li>
                            <li>Projects</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer__three space-div">
                        <h2>Our new letter</h2>
                        <p>Subscribe to our newsletter to get our news & deals delivered to you.</p>
                        <div className="footer-form">
                            <input type="email"  placeholder="Email"/>
                            <button className="primary-button">Join</button>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
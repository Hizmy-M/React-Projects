export default function Footer() {
    return (
        <footer>
            <div className="footer__container width">
                <div className="footer__one">
                    <p>SandBox</p>
                    <span>All rights reserved</span>
                    <div className="social-icons">
                        <div>
                            <img src="/src/assets/twitter-icon.png" alt="twiiter" />
                        </div>
                        <div>
                            <img src="/src/assets/instagram-icon.png" alt="twiiter" />
                        </div>
                        <div>
                            <img src="/src/assets/dribble-icon.png" alt="twiiter" />
                        </div>
                        <div>
                            <img src="/src/assets/facebook-icon.png" alt="twiiter" />
                        </div>
                        <div>
                            <img src="/src/assets/youtube-icon.png" alt="twiiter" />
                        </div>
                    </div>
                </div>
                <div className="footer__two">
                    <div>
                        <h3>Get in touch</h3>
                        <p>Moonshine St. <br /> 14/05 Light City, London, <br />United Kingdom</p>
                        <span>info@email.com <br /></span>
                        <span>00 (123) 456 78 90</span>
                    </div>
                    <div>
                        <h3>Learn More</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Our Story</li>
                            <li>Projects</li>
                            <li>Terms of use</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Our newsletter </h3>
                        <p>Subscribe to our newsletter to get our news & deals delivered to you.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default function Header() {
    return (
       <header className="header">
            <nav className="navbar__container">
                <div className="navbar__logo">
                    <img src="/src/assets/logo.png" alt="compnay-logo" />
                    <p>Edu<span>web</span> </p>
                </div>
                <div className="navbar__navigations">
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Community</li>
                        <li>Blog</li>
                        <li>Prices</li>
                    </ul>
                     <button className="primary-btn">Register Now</button>
                </div>

            </nav>
       </header>
    )
}
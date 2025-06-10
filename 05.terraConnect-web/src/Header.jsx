export default function Header() {
    return (
        <header>
            <div className="header__navigation">
                <div className="header__logo">
                    <img src="/src/assets/company-logo.png" alt="terraconnect-logo" />
                    <h1>Terra<span className="logo-color">Connect</span></h1>
                </div>
                <nav className="header__nav">
                    <ul>
                        <li>Demos</li>
                        <li>Products</li>
                        <li>Pages</li>
                        <li>Projects</li>
                        <li>Blog</li>
                        <li>Documentation</li>
                    </ul>
                    <div className="header__cta">
                        <button className="primary-button" >Contact Us</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
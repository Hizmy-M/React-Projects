export default function Header() {
    return (
       <header>
            <nav>
                <div className="navbar__logo">
                    <img src="/src/assets/logo.png" alt="compnay-logo" />
                </div>
                <div className="navbar__navigations">
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Community</li>
                        <li>Blog</li>
                        <li>Prices</li>
                    </ul>
                    <button>Register Now</button>
                </div>
            </nav>
       </header>
    )
}
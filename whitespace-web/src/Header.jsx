export default function Header() {
    return (
        <header>
            <div className="header__container">
                <div className="header__navbar">
                    <span>whitespace</span>
                </div>
                <nav>
                    <ul>
                        <li>Products</li>
                        <li>Solutions</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>
                </nav>
                <div className="header__btns">
                    <button>Login</button>
                    <button>Try Whitespace for free</button>
                </div>
            </div>
        </header>
    )
}


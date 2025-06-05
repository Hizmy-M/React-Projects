export default function Header() {
    return (
        <header className="width" >
            <nav className="header__navigations" >
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Categories</li>
                    <li>Sale</li>
                </ul>
            </nav>
            <div className="header__logo">
                <h1>Mejiwoo</h1>
                <p>미지우</p>

            </div>
            <div className="header__atc">
                <img src="/src/assets/image-01.png" alt="cart-icon" />
                <img src="/src/assets/image-02.png" alt="profile-icon" />
            </div>
        </header>
    )
}
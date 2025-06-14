export default function Header() {
    return (
        <header>
            <div className="header__container width">
                <div className="header__one">
                    <ul className="header__flex">
                        <li>Demos</li>
                        <li>Page</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div className="header__two">
                    <div className="company__logo">Sand<span className="blue">Box</span></div>
                </div>
                <div className="header__three">
                    <ul className="header__flex">
                        <li>Blog</li>
                        <li>Blocks</li>
                        <li>Documentation</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
import AddIcon from '@mui/icons-material/Add';

export default function Navbar() {
    return (
        <>
            <header>
                <nav className='header__container'>
                    <div className="navbar__logo">
                        <p>Primal<span>Training</span></p>
                    </div>
                    <div className='navbar__list' >
                        <div className="removed">
                            <AddIcon  className="navbar__menuIcon" />
                        </div>

                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Reserve your seat</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}


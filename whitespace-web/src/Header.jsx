import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

export default function Header() {
    return (
        <header className="header">
            <div className="header__container width">
                <div className="header__logo">
                    <h1> <span><SpaceDashboardIcon /></span> Whitespace</h1>
                </div>
                <div className="header__navigations">
                    <nav>
                        <ul>
                            <li>Products</li>
                            <li>Solutions</li>
                            <li>Resources</li>
                            <li>Pricing</li>
                        </ul>
                    </nav>
                    <div className="header__btns">
                        <button className='primary-btn secondary-btn'>Login</button>
                        <button className="primary-btn" >Try Whitespace <KeyboardDoubleArrowRightTwoToneIcon /></button>
                    </div>
                </div>
            </div>
        </header>
    )
}


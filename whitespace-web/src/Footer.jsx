import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';



export default function Footer() {
    return (
        <footer className="footer" >
            <div className="footer__container width">
                <div className="footer__one">
                    <div className="footer__one-content">
                        <h1>Try Whitespace <br /> today</h1>
                        <p>Get started for free <br /> Add your whole team as you need to grow </p>
                        <button className="primary-btn" >Try Whitespace Free <KeyboardDoubleArrowRightTwoToneIcon /></button>
                        <p>On a big team? Contact Sales</p>
                    </div>
                </div>
                <div className="footer__two">
                    <div className="footer__two-main">
                        <div className="footer__two-logo">
                            <div className="footer__two-logo-heading">
                                <h1> <span><SpaceDashboardIcon /></span> Whitespace</h1>
                            </div>
                            <p>
                                Whitespace was creted for the new ways we live and work. We make a better
                                workspace around the world
                            </p>
                        </div>
                        <div className="footer__two-one">
                            <h1>Product</h1>
                            <ul>
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Customer Stories</li>
                            </ul>
                        </div>
                        <div className="footer__two-one">
                            <h1>Product</h1>
                            <ul>
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Customer Stories</li>
                            </ul>
                        </div>
                        <div className="footer__two-one">
                            <h1>Product</h1>
                            <ul>
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Customer Stories</li>
                            </ul>
                        </div>
                        <div className="footer__two-one footer__two-cta">
                            <h1>Try it today</h1>
                            <p>Get started for free. Add your whole team as you need to grow</p>
                            <button className="primary-btn" >Start Today <KeyboardDoubleArrowRightTwoToneIcon /></button>
                        </div>
                    </div>
                    <div className="footer__two-sub">
                        <div className="footer__two-sub-one">
                            <p>English</p>
                            <p>Terms and conditions</p>
                            <p>Security</p>
                            <p>Status</p>
                            <p>@2021 Whitespace LLC</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
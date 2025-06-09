import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';


export default function HeroSection() {
    return (
        <main className="main__container">
            <div className="section__container width">
                <div className="section__one">
                    <div className="section__one-heading">
                        <h1>Get More Done with whitespace</h1>
                        <p>
                            Project management software that enables your teams toc collaborate, plan analyze
                            and manage everyday task
                        </p>
                        <button className="primary-btn" >Try Whitespace <KeyboardDoubleArrowRightTwoToneIcon /></button>
                    </div>
                </div>
                <div className="section__two">
                    <img src="/src/assets/image-06.svg" alt="hero-iamge" />
                </div>
            </div>
        </main>
    )
}
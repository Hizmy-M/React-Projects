export default function HeroSection() {
    return (
        <main>
            <div className="hero__container wrapper">
                <div className="hero__content">
                    <h1 className="hero__contentHeading" >Lessons and insights <span className="green">from 8 years</span></h1>
                    <p>Where to grow your business as a photographer, site or social media?</p>
                    <div>
                        <button className="primary-btn">Register</button>
                    </div>
                </div>
                <div className="hero__image">
                    <img src="/src/assets/image-01.png" alt="image-01" className="responsive" width="400" height="300" />
                </div>
            </div>
        </main>
    )
}
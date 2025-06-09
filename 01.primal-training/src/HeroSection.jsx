export default function HeroSection() {
    return (
        <div className="hero__container">
            <div className="hero__heading width">
                <h1>Train Hard. <span>Live Better</span> </h1>
            </div>
            <div className="hero__contents">
                <div className="hero__image">
                    <img src="/src/assets/image-01.jpg" alt="hero-image" />
                </div>
                <div className="hero__cta">
                   <div className="hero__cta_two width">
                        <h1>For the commited</h1>
                        <p>
                            Train like an athlete with top-tier equipment and expert programming.
                            Whether you're building muscle or breaking PRs, we help you push past limits.
                        </p>
                        <button className="primary-btn-style" >About Us</button>
                   </div>
                </div>
            </div>
        </div>
    )
}
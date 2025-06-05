export default function HeroSection() {
    return (
        <main>
            <section className="width">
                <div className="hero__container">
                    <div className="hero__image-one">
                        <img className="hero_images hide"  src="/src/assets/image-03.png" alt="image-01" />
                        <img className="hero_images"  src="/src/assets/image-05.png" alt="image-01" />
                    </div>
                    <div className="hero__content">
                        <div className="hero__content_heading">
                            <h1>Mejiwoo</h1>
                            <p>미지우</p>
                        </div>
                        <div className="hero__content_sub">
                            <p>make your everyday look prettier with MEJIWOO Korean Made</p>
                        </div>
                        <div className="hero__buttons">
                            <button className="primary--btn" >Login</button>
                            <button className="secondary--btn" >Signup</button>
                        </div>
                    </div>
                    <div className="hero__image-two">
                        <img className="hero_images"  src="/src/assets/image-06.png" alt="image-01" />
                        <img className="hero_images hide"  src="/src/assets/image-04.png" alt="image-01" />
                    </div>

                </div>
            </section>
        </main>
    )
}
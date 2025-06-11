export default function SectionThree() {
    return (
        <section className="extra-space">
            <div className="section__container width section__container-reverse">
                <div className="section__one">
                    <div className="section__one-heading">
                        <span className="logo-color highlite-title">Contact Us</span>
                        <h2>Got any questions? <br /> Don't hesitate to get in touch.</h2>
                    </div>
                    <div className="section__one-card-container">
                        <div className="section__one-card">
                            <div className="section__one-card-image">
                                <img className="icon-responsive" src="/src/assets/icon-12.png" alt="icon-12" />
                            </div>
                            <div className="section__one-card-content">
                                <p>Address</p>
                                <span>Moonshine St. 14/05 Light City, London</span>
                            </div>
                        </div>
                        <div className="section__one-card">
                            <div className="section__one-card-image">
                                <img className="icon-responsive" src="/src/assets/icon-13.png" alt="icon-13" />
                            </div>
                            <div className="section__one-card-content">
                                <p>Phone</p>
                                <span>00(123)4567890</span>
                            </div>
                        </div>
                        <div className="section__one-card">
                            <div className="section__one-card-image">
                                <img className="icon-responsive" src="/src/assets/icon-14.png" alt="icon-14" />
                            </div>
                            <div className="section__one-card-content">
                                <p>E-Mail</p>
                                <span>sandbox@email.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section__two">
                    <img  className="image-responsive" src="/src/assets/image-10.png" alt="" />
                </div>
            </div>
        </section>
    )
}
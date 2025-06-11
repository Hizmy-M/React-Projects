export default function AboutUs() {
    return (
        <section>
            <div className="about-us__container width">
                <div className="about-us__one">
                    <div className="about-us__one-images">
                        <div className="two-image">
                            <div className="about-image-responsive">
                                <img  className="image-responsive" src="/src/assets/image-07.png" alt="image-07" />

                            </div>
                            <div className="about-image-responsive">
                                <img  className="image-responsive" src="/src/assets/image-08.png" alt="image-08" />
                            </div>
                        </div>
                        <div className="one-image">
                            <img className="image-responsive" src="/src/assets/image-09.png" alt="image-09" />
                        </div>
                    </div>
                    <div className="about-us__one-content">
                        <div className="one-content-heading">
                            <span className="logo-color highlite-title">who are we</span>
                            <h2>Company that believes in the power of creative strategy.</h2>
                            <p> 
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis
                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Aenean lacinia bibendum nulla sed.
                            </p>
                        </div>
                        <div className="one-content-notes">
                            <ul>
                                <li>Aenean eu leo quam ornare curabitur blandit tempus.</li>
                                <li>Nullam quis risus eget urna mollis ornare donec elit.</li>
                            </ul>
                            <ul>
                                <li>Aenean eu leo quam ornare curabitur blandit tempus.</li>
                                <li>Nullam quis risus eget urna mollis ornare donec elit.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="about-us__two">
                    <div className="about-us__card">
                        <h2>Our Vision</h2>
                        <p>
                            Nulla vitae elit libero, a pharetra augue.
                            Donec id elit non mi porta gravida at eget.
                            Fusce dapibus tellus.
                        </p>
                    </div>
                    <div className="about-us__card">
                        <h2>Our Mission</h2>
                        <p>
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Praesent commodo
                            cursus magna scelerisque.
                        </p>
                    </div>
                    <div className="about-us__card">
                        <h2>Our Values</h2>
                        <p>
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Praesent commodo
                            cursus magna scelerisque.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
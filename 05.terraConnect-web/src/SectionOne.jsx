export default function SectionOne() {
    return (
        <section>
            <div className="section__container width section__container-reverse">
                <div className="section__one">
                    <span className="logo-color highlite-title">Have perfect control</span>
                    <h2>We bring solutions to make life easier for our customers.</h2>
                    <p> 
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas
                        eget quam. Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue rutrum.
                    </p>
                    <div className="section__o-list">
                        <ul>
                            <li>Aenean quam ornare.Curabitur blandit.</li>
                            <li>Nullam quis risus eget urna mollis ornare.</li>
                        </ul>
                        <ul>
                            <li>Aenean quam ornare.Curabitur blandit.</li>
                            <li>Nullam quis risus eget urna mollis ornare.</li>
                        </ul>
                    </div>
                </div>
                <div className="section__two">
                    <img className="image-responsive" src="/src/assets/image-02.png" alt="section-one" />
                </div>
            </div>
        </section>
    )
}
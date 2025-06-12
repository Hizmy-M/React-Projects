export default function LatestProjects() {
    return (
        <section>
            <div className="latest__container">
                <div className="latest__one">
                    <span>Latest Projects</span>
                    <h2>Check out some of our awesome projects with creative ideas and great design.</h2>
                </div>
                <div className="latest__two">
                    <div className="latest-card">
                        <div className="latest-card__image">
                            <img src="/src/assets/image-04.png" alt="image-03" />
                        </div>
                        <div className="latest-card__content">
                            <p>Cras Fermentem Sem</p>
                            <span>Stationary</span>
                        </div>
                    </div>
                    <div className="latest-card">
                        <div className="latest-card__image">
                            <img src="/src/assets/image-05.png" alt="image-03" />
                        </div>
                        <div className="latest-card__content">
                            <p>Mollis Ipsum Mattis</p>
                            <span>Magazine Books</span>
                        </div>
                    </div>
                    <div className="latest-card">
                        <div className="latest-card__image">
                            <img src="/src/assets/image-06.png" alt="image-03" />
                        </div>
                        <div className="latest-card__content">
                            <p>Ipsum Ultricies Cursus</p>
                            <span>Packaging</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
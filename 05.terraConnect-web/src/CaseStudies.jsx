export default function CaseStudies() {
    return (
        <section className="extra-space">
            <div className="case-studies__container width">
                <div className="case-studies__one">
                    <span className="logo-color highlite-title">Case Studies</span>
                    <h2>Check out some of our awesome projects <br /> with creative ideas and great design.</h2>
                </div>
                <div className="case-studies__two">
                    <div className="case-studies__two-card">
                        <img className="image-responsive" src="/src/assets/image-04.png" alt="image-04" />
                        <p>Ligula tristique quis risus</p>
                    </div>
                    <div className="case-studies__two-card">
                        <img  className="image-responsive" src="/src/assets/image-05.png" alt="image-04" />
                        <p>Nullam id dolor elit id nibh</p>
                    </div>
                    <div className="case-studies__two-card">
                        <img  className="image-responsive" src="/src/assets/image-06.png" alt="image-04" />
                        <p>Ultricies fusce porta elit</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
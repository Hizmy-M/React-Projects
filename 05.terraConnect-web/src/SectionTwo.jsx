export default function SectionTwo() {
    return (
        <section>
            <div className="section__container">
                <div className="section__one">
                    <p>What makes us different</p>
                    <h2>We make spending stress free so you have the perfect control.</h2>
                    <p> 
                        Etiam porta sem malesuada magna mollis euismod. Donec
                        ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac
                        cursus. Integer posuere erat a ante venenatis dapibus posuere velit.
                    </p>
                    <div>
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
                    <div className="image__one">
                        <div className="image__one-card">
                            <img src="/src/assets/icon-07.png" alt="icon-07" />
                            <div className="one-card-content">
                                <p>2500+</p>
                                <span>Happy Clients</span>
                            </div>
                        </div>
                        <div className="image__one-card-two">
                            <img src="/src/assets/icon-08.png" alt="icon-07" />
                            <div className="one-card-two-content">
                                <p>80%</p>
                                <span>Time Saved</span>
                            </div>
                        </div>
                    </div>
                    <div className="image__two">
                        <img src="/src/assets/image-03.png" alt="image-03" />
                    </div>
                </div>
            </div>
        </section>
    )
}
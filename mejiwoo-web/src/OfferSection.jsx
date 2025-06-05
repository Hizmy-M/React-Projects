export default function OfferSection() {
    return (
        <section className="offer__section">
            <div className="offer__container width">
                <div className="offer__left">
                    <img src="/src/assets/image-13.png" alt="purple-blouse" />
                    <img src="/src/assets/image-15.png" alt="black-blouse" />
                </div>
                <div className="offer__content">
                    <h1>Get 50% Off</h1>
                    <p>for all new product purchases <br /> min. purchase Rp. 350.000</p>
                    <button className="primary--btn" >Shop Now</button>
                </div>
                <div className="offer__right">
                    <img src="/src/assets/image-14.png" alt="blouse-collection" />
                </div>
            </div>
        </section>
    )
}
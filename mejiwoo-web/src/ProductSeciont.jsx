export default function ProductSeciont() {
    return (
        <section className="best_seller" >
            <div className="product__container width ">
                <div className="product__heading">
                    <h1>Our Products</h1>
                </div>
                <div className="product__images">
                    <div className="product__image_card">
                        <img src="/src/assets/image-16.png" alt="spring-image" />
                        <div className="product__image_card-price">
                            <p>Eto V Neck Yellow</p>
                            <span>Rs : 4600</span>
                        </div>
                    </div>
                    <div className="product__image_card">
                        <img src="/src/assets/image-17.png" alt="summer-image" />
                        <div className="product__image_card-price">
                            <p>Macaroon Dry Half</p>
                            <span>Rs : 5000</span>
                        </div>
                    </div>
                    <div className="product__image_card">
                        <img src="/src/assets/image-18.png" alt="winter-image" />
                        <div className="product__image_card-price">
                            <p>Wave Stripe Hally</p>
                            <span>Rs : 3950</span>
                        </div>
                    </div>
                </div>
                <div className="product__images">
                    <div className="product__image_card">
                        <img src="/src/assets/image-20.png" alt="spring-image" />
                        <div className="product__image_card-price">
                            <p>Floral Waffle Tee</p>
                            <span>Rs : 2000</span>
                        </div>
                    </div>
                    <div className="product__image_card">
                        <img src="/src/assets/image-19.png" alt="summer-image" />
                        <div className="product__image_card-price">
                            <p>Eve Punching Floral</p>
                            <span>Rs : 3500</span>
                        </div>
                    </div>
                    <div className="product__image_card">
                        <img src="/src/assets/image-12.png" alt="winter-image" />
                        <div className="product__image_card-price">
                            <p>Snap Pure Blouse</p>
                            <span>Rs : 1650</span>
                        </div>
                    </div>
                </div>
                <button className="primary--btn" >See More</button>
            </div>
        </section>
    )
}


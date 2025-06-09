export default function BestSeller() {
    return (
        <section className="best_seller" >
            <div className="product__container width ">
                <div className="product__heading">
                    <h1>Our Best Seller</h1>
                </div>
                <div className="product__images">
                    <div className="product__image_card">
                        <img src="/src/assets/image-10.png" alt="spring-image" />
                        <div className="product__image_card-price">
                            <p>Euphoria Crop Blouse</p>
                            <span>Rs : 2950</span>
                        </div>
                    </div>
                    <div className="product__image_card">
                        <img src="/src/assets/image-11.png" alt="summer-image" />
                        <div className="product__image_card-price">
                            <p>Venus Halter Dress</p>
                            <span>Rs : 2650</span>
                        </div>
                    </div>
                    <div className="product__image_card">
                        <img src="/src/assets/image-12.png" alt="winter-image" />
                        <div className="product__image_card-price">
                            <p>Snap Pure Blouse</p>
                            <span>Rs : 3950</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


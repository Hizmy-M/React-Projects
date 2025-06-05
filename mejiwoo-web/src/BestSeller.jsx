export default function BestSeller() {
    return (
        <section>
            <div className="product__container width ">
                <div className="product__heading">
                    <h1>Our Best Seller</h1>
                </div>
                <div className="product__images">
                    <div className="product__image_card">
                        <img src="/src/assets/image-07.png" alt="spring-image" />
                        <p>Spring</p>
                    </div>
                    <div className="product__image_card">
                        <img src="/src/assets/image-09.png" alt="summer-image" />
                        <p>Summer</p>
                    </div>
                    <div className="product__image_card">
                        <img src="/src/assets/image-08.png" alt="winter-image" />
                        <p>Winter</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


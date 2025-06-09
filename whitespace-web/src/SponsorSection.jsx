export default function SponsorSection() {
    return (
        <section>
            <div className="plan__container sponsor__container">
                <div className="plan__one sponsor__one ">
                     <div className="plan__one-heading">
                        <h1>Our Sponsors</h1>
                    </div>
                </div>
                <div className="sponsor__images">
                    {/* todo */}
                    {/* add logos */}
                    <img src="/src/assets/sponsor-one.png" alt="sponsor-one" />
                    <img src="/src/assets/sponsor-two.png" alt="sponsor-one" />
                    <img src="/src/assets/sponsor-three.png" alt="sponsor-one" />
                    <img src="/src/assets/sponsor-four.png" alt="sponsor-one" />
                    <img src="/src/assets/sponsor-five.png" alt="sponsor-one" />
                </div>
            </div>
        </section>
    )
}
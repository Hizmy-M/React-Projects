export default function DetailSection() {
    return (
        <>
            <div className="hero__contents hero__contents_reverse">
                <div className="hero__image details_section_image">
                    <img src="/src/assets/image-04.jpg" alt="hero-image" />
                </div>
                <div className="hero__cta">
                   <div className="hero__cta_two width">
                        <h1>Guided by experts</h1>
                        <p>
                            We believe in creating a positive environment where you can thrive.
                            We're here to help you achieve your goals and unlock your full potential.
                        </p>
                   </div>
                </div>
                 <div className="hero__cta">
                   <div className="hero__cta_two width">
                        <h1>Dynamic Open Gym</h1>
                        <p>
                            Our facility is the optimal environment for strength training and performance, 
                            fully equipped with top-of-the-line tools, ample training area
                        </p>
                   </div>
                </div>
                 
                
            </div>
        </>
    )
}
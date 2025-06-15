export default function CollectIdeas() {
    return(
        <section>
            <div className="collect__container width">
                <div className="collect__one">
                    <img className="main-image" src="/src/assets/image-01.png" alt="image-01" />
                </div>
                <div className="collect__two">
                    <h2>Collect Ideas</h2>
                    <p> 
                        Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non
                        metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                        ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.
                    </p>
                    <ul>
                        <li>Aenean eu leo quam. Pellentesque ornare.</li>
                        <li>Nullam quis risus eget urna mollis ornare.</li>
                        <li>Donec id elit non mi porta gravida at eget.</li>
                    </ul>
                    <button className="primary-btn secondary-btn">Learn More</button>
                </div>
            </div>
        </section>
    ) 
}
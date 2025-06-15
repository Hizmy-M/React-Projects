export default function ChooseUs() {
    return (
        <section>
            <div className="choose-us__container width">
                <div className="choose-us__one">
                    <span className="sub-font" >Why choose sandbox?</span>
                    <h2 className="main-font" >Here are a few reasons why our <br /> customers choose Sandbox</h2>
                </div>
                <div className="choose-us__two">
                    <div className="choose-us__card">
                        <div className="choose-us__card-image">
                            <img className="icon-image" src="/src/assets/icon-05.png" alt="icon-05" />
                        </div>
                        <div className="choose-us__card-content">
                            <h3>Collect Ideas</h3>
                            <p>Duis mollis commodo luctus cursus commodo tortor mauris.</p>
                        </div>
                    </div>
                    <div className="choose-us__card">
                        <div className="choose-us__card-image">
                            <img className="icon-image" src="/src/assets/icon-06.png" alt="icon-05" />
                        </div>
                        <div className="choose-us__card-content">
                            <h3>Data Analysis</h3>
                            <p>Duis mollis commodo luctus cursus commodo tortor mauris.</p>
                        </div>
                    </div>
                    <div className="choose-us__card">
                        <div className="choose-us__card-image">
                            <img className="icon-image" src="/src/assets/icon-04.png" alt="icon-05" />
                        </div>
                        <div className="choose-us__card-content">
                            <h3>Finalize Product</h3>
                            <p>Duis mollis commodo luctus cursus commodo tortor mauris.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
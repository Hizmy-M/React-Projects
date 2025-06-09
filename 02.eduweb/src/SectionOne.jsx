export default function SectionOne() {
    return (
        <section className="section__one">
            <div className="section__container wrapper">
                <div className="section__right">
                    <h1>Having a local <span className="green" >business reinvent itself</span></h1>
                    <p>We reached here with our hardwork and dedication</p>
                </div>
                <div className="section__left">
                   <div>
                     <div className="section__left_card">
                        <img src="/src/assets/image-14.png" alt="member" />
                        <div>
                            <h2>2,245,341</h2>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className="section__left_card">
                        <img src="/src/assets/image-15.png" alt="payment" />
                        <div>
                            <h2>1,926,436</h2>
                            <p>Payments</p>
                        </div>
                    </div>
                   </div>
                   <div>
                     <div className="section__left_card">
                        <img src="/src/assets/image-14.png" alt="event booking" />
                        <div>
                            <h2>828,867</h2>
                            <p>Event Bookings</p>
                        </div>
                    </div>
                    <div className="section__left_card">
                        <img src="/src/assets/image-15.png" alt="clubs" />
                        <div>
                            <h2>46,328</h2>
                            <p>Clubs</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </section>
    )
}
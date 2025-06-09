export default function CommunitySection() {
    return (
        <section>
            <div className="community__container client__container wrapper">
                <div className="community__header client__heading">
                    <div>
                        <h1>Manage your entire community in a single system</h1>
                        <p>Who is Nextcent suitable for?</p>
                    </div>
                </div>
                <div className="community__content client__images">
                    <div className="community__card" >
                       <div>
                            <img src="/src/assets/image-08.png" alt="membership-image" />
                            <h2>Membership Organizations</h2>
                       </div>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                     <div className="community__card" >
                        <div>
                            <img src="/src/assets/image-09.png" alt="membership-image" />
                            <h2>National Association</h2>
                        </div>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                     <div className="community__card" >
                        <div>
                            <img src="/src/assets/image-10.png" alt="membership-image" />
                        <h2>Clubs and Groups</h2>
                        </div>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default function CommnunitySection() {
    return (
        <section className="community-color">
            <div className="community-main width">
                <div className="community-one" >
                    <div className="community-one-heading">
                        <h1>Get more benefits <br /> by Sign Up & Join <br /> Mejiwoo Community!</h1>
                    </div>
                    <div className="community-one-content">
                        <ul>
                            <li>FREE Special Gift to a new member</li>
                            <li>Get 2x JIWOO Points to purchase items</li>
                            <li>Get special voucher code every month</li>
                            <li>Claim Voucher Disc. Up To 50% </li>
                        </ul>
                    </div>
                </div>
                <div className="community-one community-two" >
                    <div className="community-one-heading community-two-form">
                        <form action="#">
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Email Address" />
                            <input type="text" placeholder="Password" />
                        </form>
                        <p>I agree to all the <strong>Terms</strong> and <strong>Privacy Policy</strong></p>
                        <button className="primary--btn" >SIGN UP</button>
                    </div>
                    <p>or</p>
                    <div className="community-one-content community-two-btns">
                        <button className="primary--btn" >SIGN UP WITH GOOGLE</button>
                        <button className="primary--btn" >SIGN UP WITH FACEBOOK</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
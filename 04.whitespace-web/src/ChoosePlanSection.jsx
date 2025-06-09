import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';

export default function ChoosePlanSection() {
    return (
        <section className='extra-space-bottom'>
            <div className="plan__container width">
                <div className="plan__one">
                    <div className="plan__one-heading">
                        <h1>Choose Your Plan</h1>
                        <p>
                            Whether you want to  get organized, keep your personal life on track, or boost
                            workplace productivity, Whitespace has the right plan for you 
                        </p>
                    </div>
                </div>
                <div className="plan__two">

                    <div className="card">
                        <div className="card__heading">
                            <p className='heading'>Personal</p>
                            <p className='price'>$11.99</p>
                        </div>
                        <div className="card__contents">
                            <p>Capture Ideas and find them quickly</p>
                            <ul>
                                <li> ✅ Sync United Data</li>
                                <li> ✅ 10GB Monthly uploads</li>
                                <li> ✅ 200 MB max note size</li>
                                <li> ✅ Customize Home dashboard and access extra widgets</li>
                                <li> ✅ Connecti primary Google Calender account</li>
                                <li> ✅ Add due dates, reminders and notifications to your tasks</li>
                            </ul>
                        <button className="primary-btn button-dark" >Get Started <KeyboardDoubleArrowRightTwoToneIcon /></button>
                        </div>
                    </div>

                    <div className="card blue__card">
                        <div className="card__heading">
                            <p className='heading'>Personal</p>
                            <p className='price'>$11.99</p>
                        </div>
                        <div className="card__contents">
                            <p>Capture Ideas and find them quickly</p>
                            <ul>
                                <li> ✅ Sync United Data</li>
                                <li> ✅ 10GB Monthly uploads</li>
                                <li> ✅ 200 MB max note size</li>
                                <li> ✅ Customize Home dashboard and access extra widgets</li>
                                <li> ✅ Connecti primary Google Calender account</li>
                                <li> ✅ Add due dates, reminders and notifications to your tasks</li>
                            </ul>
                            <button className="primary-btn secondary-btn"  >Get Started <KeyboardDoubleArrowRightTwoToneIcon /></button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__heading">
                            <p className='heading'>Personal</p>
                            <p className='price'>$11.99</p>
                        </div>
                        <div className="card__contents">
                            <p>Capture Ideas and find them quickly</p>
                            <ul>
                                <li> ✅ Sync United Data</li>
                                <li> ✅ 10GB Monthly uploads</li>
                                <li> ✅ 200 MB max note size</li>
                                <li> ✅ Customize Home dashboard and access extra widgets</li>
                                <li> ✅ Connecti primary Google Calender account</li>
                                <li> ✅ Add due dates, reminders and notifications to your tasks</li>
                            </ul>
                            <button className="primary-btn button-dark" >Get Started <KeyboardDoubleArrowRightTwoToneIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';


export default function Announcement() {
    return (
        <section>
            <div className="plan__container">
                <div className="plan__one announcement__container ">
                     <div className="plan__one-heading annoucement__contents">
                        <h1>Your work everywhere you are</h1>
                        <p>
                            Access your notes from your computer, phone or tablet by synchronising with various
                            services, including whitespace, Dropbox and OneDrive. The app is available on Windows,
                            macOs, Linux, Android and IOS. A terminal app is also available!    
                        </p>
                        <button className="primary-btn" >Try Whitespace <KeyboardDoubleArrowRightTwoToneIcon /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
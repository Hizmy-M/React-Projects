import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';


export default function SectionFive() {
    return (
        <main>
            <div className="section__container width">
                <div className="section__one">
                    <div className="section__one-heading">
                        <h1>100% your data</h1>
                        <p>
                            The app is open source and your notes are saved to open format, so you'll always have access to them.
                            Uses End-To-Encryption (E2EE) to secure your notes and ensure no-one but yourself can 
                            access them.   
                        </p>
                        <button className="primary-btn" >Read More <KeyboardDoubleArrowRightTwoToneIcon /></button>
                    </div>
                </div>
                <div className="section__two">
                    <img src="/src/assets/image-14.svg" alt="section-two" />
                </div>
            </div>
        </main>
    )
}
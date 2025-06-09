import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';

export default function SectionOne() {
    return (
        <section>
            <div className="section__container width">
                <div className="section__one">
                    <div className="section__one-heading">
                        <h1>Project Management</h1>
                        <p>
                            Images, videos, PDFs and audio files are supported. Create math expressions and
                            diagrams directly from the app. Take photos with the mobile app and save them to a note  
                        </p>
                        <button className="primary-btn" >Get Started <KeyboardDoubleArrowRightTwoToneIcon /></button>
                    </div>
                </div>
                <div className="section__two">
                    <img src="/src/assets/image-01.svg" alt="section-one" />
                </div>
            </div>
        </section>
    )
}
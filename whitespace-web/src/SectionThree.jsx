import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';

export default function SectionThree() {
    return (
        <section className='blue_container'>
            <div className="section__container width">
                <div className="section__one">
                    <div className="section__one-heading">
                        <h1>Use as Extension</h1>
                        <p>
                            Use the web clipper extension, available on Chrome and Firefox, to save web
                            pages or take screenshots as notes.
                        </p>
                        <button className="primary-btn" >Let's Go <KeyboardDoubleArrowRightTwoToneIcon /></button>
                    </div>
                </div>
                <div className="section__two">
                    <img src="/src/assets/image-07.svg" alt="section-two" />
                </div>
            </div>
        </section>
    )
}
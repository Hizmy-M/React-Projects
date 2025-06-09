import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';


export default function SectionSix() {
    return (
        <section className="blue_container">
            <div className="section__container width reverse">
                <div className="section__one">
                    <div className="section__one-heading">
                        <h1>Work with your faviourite apps using whitespace</h1>
                        <p>
                            Whitespace teams up with your favourite software. Interegate with over 1000+ apps
                            with Zapier to have all the tools you need for your project success
                        </p>
                        <button className="primary-btn" >Read More <KeyboardDoubleArrowRightTwoToneIcon /></button>
                    </div>
                </div>
                <div className="section__two">
                    <img src="/src/assets/image-15.svg" alt="section-two" />
                </div>
            </div>
        </section>
    )
}
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';

export default function SectionFour() {
    return (
        <main>
            <div className="section__container width reverse">
                <div className="section__one">
                    <div className="section__one-heading">
                        <h1>Customise it to your needs</h1>
                        <p>
                            Customise the app with plugins, customise themes and multipletext editors (Rich Text
                            or Markdown) or create your own scripts and plugins using the Extension API. 
                        </p>
                        <button className="primary-btn" > Let's Go <KeyboardDoubleArrowRightTwoToneIcon /></button>
                    </div>
                </div>
                <div className="section__two">
                    <img src="/src/assets/image-03.svg" alt="section-two" />
                </div>
            </div>
        </main>
    )
}
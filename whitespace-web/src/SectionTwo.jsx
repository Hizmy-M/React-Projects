import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';


export default function SectionTwo() {
    return (
        <section>
            <div className="section__container width reverse">
                <div className="section__one">
                    <div className="section__one-heading">
                        <h1>Work together</h1>
                        <p>
                            With whitespace, share your notes with your colleges and collaborate on them.
                            You can also publish a note to the internet and share the URL with others. 
                        </p>
                        <button className="primary-btn" >Try Whitespace <KeyboardDoubleArrowRightTwoToneIcon /></button>
                    </div>
                </div>
                <div className="section__two">
                    <img src="/src/assets/image-11.svg" alt="section-two" />
                </div>
            </div>
        </section>
    )
}
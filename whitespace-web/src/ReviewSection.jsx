import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ChoosePlanSection() {
    return (
        <section>
            <div className="plan__container">
                <div className="plan__one">
                    <div className="plan__one-heading">
                        <h1>What Our Client Says</h1>
                    </div>
                </div>
                <div className="plan__two">
                    <div className="review__card">
                        <div className="review__card-one">
                            <AutoAwesomeIcon sx={{ 
                                fontSize : 70,
                                color : "#043873"
                                }} />
                            <p>
                                Whitespace is desinged as a collaborative tool for businesses tha is a full
                                project management solution
                            </p>
                        </div>
                        <div className="review__card-two">
                            <div className="review__card-two-image">
                                <AccountCircleIcon sx={{
                                    fontSize : 50
                                }} />
                            </div>
                            <div className="review__card-two-content">
                                <h1>Obera Shaw MCH</h1>
                                <p>Head of talent Acquistion north america</p>
                            </div>
                        </div>
                    </div>
                    <div className="review__card">
                        <div className="review__card-one">
                            <AutoAwesomeIcon sx={{ 
                                fontSize : 70,
                                color : "#043873"
                                }} />
                            <p>
                                Whitespace is desinged as a collaborative tool for businesses tha is a full
                                project management solution
                            </p>
                        </div>
                        <div className="review__card-two">
                            <div className="review__card-two-image">
                                <AccountCircleIcon sx={{
                                    fontSize : 50
                                }} />
                            </div>
                            <div className="review__card-two-content">
                                <h1>Obera Shaw MCH</h1>
                                <p>Head of talent Acquistion north america</p>
                            </div>
                        </div>
                    </div>
                    <div className="review__card">
                        <div className="review__card-one">
                            <AutoAwesomeIcon sx={{ 
                                fontSize : 70,
                                color : "#043873"
                                }} />
                            <p>
                                Whitespace is desinged as a collaborative tool for businesses tha is a full
                                project management solution
                            </p>
                        </div>
                        <div className="review__card-two">
                            <div className="review__card-two-image">
                                <AccountCircleIcon sx={{
                                    fontSize : 50
                                }} />
                            </div>
                            <div className="review__card-two-content">
                                <h1>Obera Shaw MCH</h1>
                                <p>Head of talent Acquistion north america</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import './try.css';
const Try = () => {
    return (
        <div className="try-container">
            <div className="features">
                <div className="welcome">
                    <botton className="welcome-button">
                        👋DON'T MISS OUT
                    </botton>
                </div>
                <div>
                    <h1 className="features-heading">
                        Unleash your Potential with us
                    </h1>
                </div>
                <div>
                    <p className="features-para">
                        Join our community of ambitious individuals and organizations<br></br>
                        eager to make a difference.
                    </p>
                </div>
                <div>
                    <button className='try'> Try out now</button>
                </div>

                <div className='happy-user'>
                <span style={{ color: '#8850ff' }}>200+</span> 
                     Happy users
                </div>
                <img src="https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=512" alt='Try'></img>

            </div>
        </div>
    )
}
export default Try;
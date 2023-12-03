import './more.css';
import Connect from '../../assets/connect.webp';
const MoreFeatures = () =>{
    return (
        <div className="more-container">
            <div className='more'>
                <div>
                    and more
                </div>
                <div className='more-heading'>
                    Explore an array of features that elevate your Productivity<br></br>
                     to new heights
                </div>
                <div className='more-desc'>
                    Discover the tools that will revolutionize the way you<br></br>
                    manage and optimize your operations

                </div>
                <MoreFeatureCard
                    imagePath={"https://i.ibb.co/0jZ3Q0K/Group-1.png"}
                    heading="Cross-Platform Compatibility"
                    description="Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device"
                />
                <MoreFeatureCard
                    imagePath={"https://i.ibb.co/0jZ3Q0K/Group-1.png"}
                    heading="Stay Informed with Essential Notifications"
                    description="Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
                />
                <MoreFeatureCard
                    imagePath={"https://i.ibb.co/0jZ3Q0K/Group-1.png"}
                    heading="Secure Data Encryption at all times"
                    description="Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
                />

            </div>
            <div className='integrations'>
                <div>Integrations</div>
                <div className='integration-heading'>
                    Enable integration with other <br></br>
                     popular tools and platforms
                </div>
                <div className='integration-para'>
                    Seamlessly connect and amplify your workflow <br></br>
                    by enabling integration with a diverse array of <br></br>
                    widely-used tools and platforms.
                </div>
                <div className='connect-image'>
                    <img src={Connect} alt="Connect" />
                </div>

            </div>
        </div>
    )
}

const MoreFeatureCard = ({ imagePath, heading, description }) => {
    return (
        <div className="more-feature-card">
            <div className="more-feature-img">
                <img src={imagePath} alt="Feature" />
            </div>
            <div className="more-feature-desc">
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};
export default MoreFeatures;
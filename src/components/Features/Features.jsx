import React from "react";
import './features.css';
import Task from '../../assets/smart-task.webp';
import Schedule from '../../assets/schedule.webp';
import Chats from '../../assets/chats.webp';
import Analytics from '../../assets/analytics.webp';

const Features = () => {
    return (
        <div className="features-container" id="feature">
            <div className="features">
                <div className="welcome">
                    <botton className="welcome-button">
                        🔥PREMIER FEATURES
                    </botton>
                </div>
                <div>
                    <h1 className="features-heading">
                        Discover our product's <span style={{ color: '#fe8162' }}>Capabilities</span>
                    </h1>
                </div>
                <div>
                    <p className="features-para">
                        Don't settle for mediocrity - embrace the future of management <br></br>
                        with Manage Wise.
                    </p>
                </div>
                <div className="productivity">
                    ⭐️ <br></br>
                    Boost productivity and <br></br>
                    streamline workflow with<br></br>
                    us. Enjoy our intuitive<br></br>
                    interface and robust <br></br>
                    features.
                </div>
                <div className="feature-card">
                    <div className="feature-img task">
                        <img src={Task} alt="Feature" />
                    </div>
                    <div className="desc">
                        <h2>Smart Task Management</h2>
                        <p>Say goodbye to chaos with our smart task management system</p>
                    </div>
                </div>
                <FeatureCard
                    imagePath={Schedule}
                    heading="Flexible Scheduling"
                    description="Stay productive with our flexible scheduling system"
                />
                <FeatureCard
                    imagePath={Chats}
                    heading="Easy Communication"
                    description="Collaborate seamlessly with your team in real-time"
                />
                <FeatureCard
                    imagePath={Analytics}
                    heading="Analytics"
                    description="Gain valuable insights with our advanced analytics feature"
                />

            </div>
        </div>
    )
}
const FeatureCard = ({ imagePath, heading, description }) => {
    return (
        <div className="feature-card">
            <div className="feature-img">
                <img src={imagePath} alt="Feature" />
            </div>
            <div className="desc">
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Features;
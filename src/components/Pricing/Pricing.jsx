import './pricing.css';

const Pricing = () =>{
    return (
        <div className="features-container">

            <div className="features">
                <div className="welcome">
                    <botton className="welcome-button">
                        Select your ideal Pricing plan
                    </botton>
                </div>
                <div>
                    <h1 className="features-heading">
                        Select your ideal Pricing plan
                    </h1>
                </div>
                <div>
                    <p className="features-para">
                        At Manage Wise, we believe in providing you with <br></br>
                        pricing plans that adapt to your unique needs.
                    </p>
                </div>
                <div className="price-card free">
                    <div className='type'>
                        Free
                    </div>
                    <div className='price'>
                        $0 /month
                    </div>
                    <div className='offering'>
                        <ul>
                            <li>Access to all basic features</li>
                            <li>Reporting and analytics </li>
                            <li>Up to 5 individual users</li>
                            <li>Chat and email support</li>
                        </ul>
                    </div>
                    <button> Get Started</button>
                </div> 
                <div className="price-card standard">
                    <div className='type'>
                        Standard
                    </div>
                    <div className='price'>
                        $25 /month
                    </div>
                    <div className='offering'>
                        <ul>
                            <li>Access to all basic features</li>
                            <li>Reporting and analytics </li>
                            <li>Up to 5 individual users</li>
                            <li>Chat and email support</li>
                            <li>3+ integrations</li>
                            <li>Account performance reporting</li>
                        </ul>
                    </div>
                    <button> Get Started</button>

                </div> 
                <div className="price-card business">
                    <div className='type'>
                        Business
                    </div>
                    <div className='price'>
                        $42 /month
                    </div>
                    <div className='offering'>
                        <ul>
                            <li>Access to all basic features</li>
                            <li>Reporting and analytics </li>
                            <li>Up to 5 individual users</li>
                            <li>Chat and email support</li>
                            <li>3+ integrations</li>

                        </ul>
                    </div>
                </div>               

            </div>
        </div>
    )
}

export default Pricing;
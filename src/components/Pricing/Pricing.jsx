import './pricing.css';

const Pricing = () => {
    return (
        <div className="features-container">

            <div className="features">
                <div className="welcome">
                    <botton className="welcome-button">
                        💲PRICING
                    </botton>
                </div>
                <div>
                    <h1 className="features-heading">
                        Select your ideal <span style={{ color: '#fe8162' }}>Pricing</span>  plan
                    </h1>
                </div>
                <div>
                    <p className="features-para">
                        At Manage Wise, we believe in providing you with <br></br>
                        pricing plans that adapt to your unique needs.
                    </p>
                </div>
                <div className="price-card free">
                    <div className='welcome-button' id='type'>
                        Free
                    </div>
                    <div className='price'>
                        <span style={{ fontSize: '3rem' }}>$0</span>
                        /month
                    </div>
                    <div className='offering'>
                        <ul>
                            <li><i class="fa-solid fa-check"></i> Access to all basic features</li>
                            <li><i class="fa-solid fa-check"></i> Reporting and analytics </li>
                            <li><i class="fa-solid fa-check"></i> Up to 5 individual users</li>
                            <li><i class="fa-solid fa-check"></i> Chat and email support</li>
                        </ul>
                    </div>
                    <button className='get-started'> Get Started</button>

                </div>
                <div className="price-card standard">
                    <div className='welcome-button' id='type'>
                        Standard
                    </div>
                    <div className='price' style={{ color:'white'}} >
                    <span style={{ fontSize: '3rem' }}>$25</span>
                        /month
                    </div>
                    <div className='offering'>
                        <ul>
                            <li><i class="fa-solid fa-check"></i> Access to all basic features</li>
                            <li><i class="fa-solid fa-check"></i> Reporting and analytics </li>
                            <li><i class="fa-solid fa-check"></i> Up to 5 individual users</li>
                            <li><i class="fa-solid fa-check"></i> Chat and email support</li>
                            <li><i class="fa-solid fa-check"></i> 3+ integrations</li>
                            <li><i class="fa-solid fa-check"></i> Account performance reporting</li>
                        </ul>
                    </div>
                    <button className='get-started purple'> Get Started</button>

                </div>
                <div className="price-card business">
                    <div className='welcome-button' id='type'>
                        Business
                    </div>
                    <div className='price'>
                    <span style={{ fontSize: '3rem' }}>$42</span>
                         /month
                    </div>
                    <div className='offering'>
                        <ul>
                            <li><i class="fa-solid fa-check"></i> Access to all basic features</li>
                            <li><i class="fa-solid fa-check"></i> Reporting and analytics </li>
                            <li><i class="fa-solid fa-check"></i> Up to 5 individual users</li>
                            <li><i class="fa-solid fa-check"></i> Chat and email support</li>
                            <li><i class="fa-solid fa-check"></i> 3+ integrations</li>

                        </ul>
                    </div>
                    <button className='get-started'> Get Started</button>

                </div>

            </div>
        </div>
    )
}

export default Pricing;
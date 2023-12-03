import './faq.css';
import { useState } from 'react';

const FAQ = () => {

    const [activeIndexes, setActiveIndexes] = useState([]);

    const toggleAnswer = (index) => {
        const currentIndexes = [...activeIndexes];
        const indexPosition = currentIndexes.indexOf(index);

        if (indexPosition === -1) {
            currentIndexes.push(index);
        } else {
            currentIndexes.splice(indexPosition, 1);
        }

        setActiveIndexes(currentIndexes);
    };

    const faqData = [
        { question: 'What is Manage Wise and what does it offer?', answer: 'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.' },
        { question: 'Is Manage Wise suitable for small businesses and larger enterprises alike?', answer: 'Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.' },
        { question: 'Can I access Manage Wise from different devices and platforms', answer: 'Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices' },
        { question: 'What kind of support options do you offer to users?', answer: ' We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.' },
        { question: 'How secure is the data stored within Manage Wise?', answer: 'Your data\'s security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.' },
    ];
    return (
        <div className='faq-container'>
            <div className='faq-header'>
                <div> 
                    <button className="welcome-button">
                    🙋‍♀️ FAQ
                    </button>
                </div>
                <div className='faq-heading'>
                    Need <br></br> <span style={{ color: '#fe8162' }}>Answers</span> 
                </div>
                <p className='faq-para'>
                    Check out our most commonly asked questions below to <br></br>
                    find the information you need.
                </p>
            </div>

            <div className='faqs'>
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="question" onClick={() => toggleAnswer(index)}>
                            <span className={`plus ${activeIndexes.includes(index) ? 'activeq' : ''}`}>{item.question }</span>
                            <span className={`plus ${activeIndexes.includes(index) ? 'active' : ''}`}>+</span>
                        </div>
                        <div className={`answer ${activeIndexes.includes(index) ? 'active' : ''}`}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FAQ;
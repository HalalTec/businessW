import { useState } from "react";
import next from '../next-bt.png';
import back from '../previous-bt.png'


const Customer = ({close, msg, submit, quest}) => {
    
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No systems in place for gathering customer feedback.',
            'Consistently negative reviews or complaints from customers.',
            'Lack of customer retention or repeat business.',
            'High customer churn rate.'
          ],
          reflectiveQuestions: [
            'How often do you hear complaints or receive negative feedback from customers?',
            'Are you aware of the major reasons why customers leave?',
            'Do you actively seek out customer feedback or are you reactive to it?'
          ],
          aspiIndication: [
                    'Customer complaints are frequent, and satisfaction levels are low',
                    'Very little feedback is gathered from customers, and their needs are often overlooked.',
                    'There’s a lack of processes for handling customer feedback or improving satisfaction.'
          ],
          futureQuestions: [
                    'Are customer complaints frequent and unresolved?',
                    'Are you aware of what your customers truly need and value?',
                    'Do you have processes in place to collect, address, and act on customer feedback?'
          ]
        },
        {
            score: 2,
          indication: [
            'Minimal efforts to understand customer needs.',
            'Frequent service issues or product dissatisfaction.',
            'Low customer loyalty, few repeat customers.',
            'Rare follow-ups with customers after service'
          ],
          reflectiveQuestions: [
            'What steps are you taking to gather customer feedback?',
            'How often do your customers return or engage with your business again?',
            'Are customer complaints addressed in a timely manner?',
          ],
          aspiIndication: [
                    'There is occasional feedback collection, but it’s rarely used for improvement',
                    'Customers rarely feel heard or valued.',
                    'Some complaints are addressed, but follow-up is inconsistent.'
          ],
          futureQuestions: [
                            'Do you collect customer feedback regularly, even if it’s not always acted upon?',
                            'Do customers feel that their voices are heard, even if it’s not consistent across all touchpoints?',
                            'Are complaints addressed in a timely manner, and do you follow up to ensure resolution?'
          ]
        },  

        {
            score: 3,
            indication: [
                "Some customer feedback is collected, but it's not consistent.",
                'Common issues with product/service quality not being addressed.',
                'Only a small portion of customers provide feedback.',
                'Inconsistent service delivery'
            ],
            reflectiveQuestions: [
                'Are you aware of recurring customer concerns or problems?',
                'How do you handle customer complaints or issues that arise?',
                'Do your customers typically feel satisfied after using your products/services?'
            ],
            aspiIndication: [
                                'Feedback is collected on an ad-hoc basis, but the process is not systematic.',
                                'Customer satisfaction improvements are reactive rather than proactive.',
                                'Customer concerns are often resolved, but not in a way that builds loyalty.'
            ],
            futureQuestions: [
                                'Do you have a structured approach to gather feedback regularly but still lack consistency in using it to drive change?',
                                'Is your response to customer satisfaction issues mostly reactive, waiting for problems to arise before addressing them?',
                                'Do you address customer issues, but without a focus on turning those resolutions into long-term relationships?'
            ]
        },

        {
            score: 4,
            indication: [
                'Regular customer feedback is gathered but not always acted upon.',
                'Some recurring complaints, but action is being taken on some issues.',
                'Moderate customer satisfaction but occasional dissatisfaction'
            ],
            reflectiveQuestions: [
                'How often do you use feedback to make improvements to your business?',
                'Do you feel confident in the overall satisfaction of your customers?',
                'What efforts have you made to reduce customer complaints?'
            ],
            aspiIndication: [
                'Some efforts are made to improve satisfaction, but results are inconsistent.',
                'Customer feedback is tracked but not fully integrated into business processes.',
                'Satisfaction efforts focus mainly on fixing problems rather than building long-term satisfaction.'
            ],
            futureQuestions: [
                'Are your customer satisfaction efforts sporadic, with results varying based on the situation?',
                'Do you track customer feedback, but have trouble integrating it into your overall business strategy?',
                'Do you tend to focus on fixing complaints rather than enhancing overall customer experience for long-term satisfaction?'
            ]
        },
        {
            score: 5,
            indication: [
                            'Customer feedback is gathered consistently, and improvements are made occasionally.',
                            'Moderate levels of customer loyalty and retention.',
                            'Some repeat customers, but not many.'
            ],
            reflectiveQuestions: [
                'How often do your customers return for additional services or purchases?',
                'Do you receive a balance of positive and negative feedback from your customers?',
                'What actions are you taking to address customer complaints effectively?'
            ],
            aspiIndication: [
                            'Satisfaction is a priority, with a basic understanding of customer needs.',
                            'Regular surveys and feedback are part of the business routine.',
                            'Improvements are made, but more work is needed to increase customer loyalty.'
            ],
            futureQuestions: [
                                'Is customer satisfaction an important priority, but your understanding of their evolving needs could be deeper?',
                                'Do you gather feedback on a regular basis, using surveys or other methods to understand customer sentiment?',
                                'Have you made improvements to customer satisfaction, but you’re still working on improving customer loyalty and repeat business?'
            ]
        },
        {
            score: 6,
            indication: [
                'Customer feedback is regularly used to inform decisions and improvements.',
                'A fair level of repeat business and customer satisfaction.',
                'Customer issues are usually resolved in a timely manner.'
            ],
            reflectiveQuestions: [
                'Do you have a clear strategy for addressing customer feedback and complaints?',
                'How much do your customers appreciate your products/services?',
                'Do you have a loyal customer base?'
            ],
            aspiIndication: [
                        'Customer satisfaction is systematically tracked and measured.',
                        'Efforts are made to resolve issues before they escalate.',
                        'Most customer complaints are resolved promptly, with visible efforts toward improvement.'
            ],
            futureQuestions: [
                                'Do you regularly track customer satisfaction using structured methods such as NPS (Net Promoter Score) or CSAT surveys?',
                                'Do you actively prevent issues from escalating by addressing early signs of dissatisfaction?',
                                'Are most complaints resolved quickly and effectively, and do customers see visible improvements as a result?'
            ]
        },
        {
            score: 7,
            indication: [
                'Customer satisfaction is tracked regularly and improvements are often made based on feedback.',
                'Customers are generally satisfied and feel heard'
            ],
            reflectiveQuestions: [
                'How often do your customers recommend your business to others?',
                'How do you track and improve customer satisfaction over time?',
                'A high level of repeat business and positive feedback'           
            ],
            aspiIndication: [
                                'Customer feedback is consistently incorporated into product/service development.',
                                'Satisfaction levels are generally high, with some minor gaps.',
                                'Systems are in place to ensure continuous improvement of customer experience.'
            ],
            futureQuestions: [
                                'Do you incorporate customer feedback into your product or service development, ensuring their input shapes future offerings?',
                                'Are satisfaction levels high overall, with only minor issues that need addressing?',
                                'Do you have systems and processes that ensure ongoing improvement of the customer experience?'
            ]
        }, {
            score: 8,
            indication: [
                'Customer satisfaction is a primary focus, with systems in place to ensure high satisfaction levels.',
                'A large number of repeat customers and strong word-of-mouth referrals.',
                'Proactive efforts to anticipate customer needs and solve issues before they arise'
            ],
            reflectiveQuestions: [
                'How do you anticipate and meet your customers’ evolving needs?',
                'Do you proactively reach out to customers for feedback and to ensure satisfaction?',
                'Are customers consistently satisfied with both the product and service?'
            ],
            aspiIndication: [
                                'Proactive steps are taken to anticipate customer needs.',
                                'Feedback is regularly acted upon to improve satisfaction.',
                                'Loyalty programs or other initiatives exist to retain customers long-term.'
            ],
            futureQuestions: [
                                'Do you take proactive steps to understand and anticipate customer needs before they even ask?',
                                'Do you consistently take action on customer feedback to make meaningful improvements?',
                                'Are you actively working to retain customers through loyalty programs or similar initiatives?'
            ]
        },
        {
            score: 9,
            indication: [
                'Customer satisfaction is consistently high with minimal complaints.',
                'Customers are highly loyal, with a solid base of brand advocates.',
                'Customer feedback is deeply embedded in business operations.'
            ],
            reflectiveQuestions: [
                'How often do you go beyond customer expectations to exceed their needs?',
                'Are you proud of the level of customer service you provide?',
                'Do your customers feel valued and appreciated?'
            ],
            aspiIndication: [
                                'Customer satisfaction is deeply embedded into the company’s culture',
                                'Efforts are made to exceed customer expectations consistently',
                                'Continuous innovation driven by customer insights.'
            ],
            futureQuestions: [
                                'Is customer satisfaction a core value that’s embedded across all levels of your business culture?',
                                'Do you aim not only to meet but exceed customer expectations in every interaction?',
                                'Is your business continually innovating based on customer insights, ensuring that satisfaction is not just met, but anticipated?'
            ]
        },
        {
            score: 10,
            indication: [
               'Customer satisfaction is an integral part of the company culture, constantly improving.',
                'Exceptional customer loyalty and advocacy, with customers consistently promoting the business.',
                'No major complaints, and any issues are quickly resolved'
            ],
            reflectiveQuestions: [
                'Are your customers extremely loyal and vocal in their support of your brand?',
                'How much positive feedback do you receive from customers on a daily basis?',
                'What innovative actions have you taken to elevate the customer experience to the next level?'
            ],
            aspiIndication: [
                                'The business has a strong reputation for outstanding customer satisfaction and loyalty.',
                                'Customers are advocates and promoters of the brand.',
                                'Satisfaction is a key differentiator in a competitive market, setting your business apart.'
            ],
            futureQuestions: [
                                'Is your business known for delivering exceptional customer experiences that lead to high levels of customer loyalty?',
                                'Do your customers actively promote your brand and recommend your products/services to others?',
                                'Is customer satisfaction a key factor that differentiates your business in a competitive market, setting you apart from competitors?'
            ]
        },
        {
            score: 10,
            indication: 'Exceptional satisfaction, highly impactful, career fully aligned with purpose, consistently reaching new heights.',
            reflectiveQuestions: [
                'Do you feel completely fulfilled and purposeful in your career?',
                'Is your career fully aligned with your personal values and aspirations?',
                'Are you achieving or even setting new standards of success in your field?'
            ]
        }

      ];
      
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
      };

      if (quest < 1) {
        return ( 
            <>
                       <div className="message" >
                    <div className="card"> 
                    <div className="confirm">
                    <h2> Confirm Your Selection of: {categories[currentIndex].score} </h2>
                    <button onClick={close} style={{color:"red"}} className="close">X</button>
                    </div>  
                    <h5 style={{color:"red"}}>Go through the description below and confirm your selection, or use the page controls to make changes</h5>
                    <h3>Indicators for level {currentIndex+1}:</h3>
                    <p style={{fontSize:"15px"}}> {categories[currentIndex].indication} </p>
                    <h3> Reflective Questions:</h3>
                    <ul style={{textAlign:"left"}}>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[0]}</li>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[1]}</li>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[2]}</li>
                    </ul>
                    <div className="ref-button">
                    <button onClick={prevSlide} className=" prev" style={{marginTop:"0px"}}><img src={back}  /></button> <button  id="myButton" onClick={submit} >{currentIndex+1}</button>
                    
                    <label htmlFor="myButton" className="select"> Confirm {currentIndex+1}</label> <button onClick={nextSlide} className=" prev" style={{marginTop:"0px"}}><img src={next} /></button>
                    </div>
                    </div>
                </div>
                </>
        )
      }else {
        return (<> 
        
             {/* future */}
                   <div className="message" >
                <div className="card"> 
                <div className="confirm">
                <h2> Confirm Your Selection of: {categories[currentIndex].score} </h2>
                <button onClick={close} style={{color:"red"}} className="close">X</button>
                </div>
                <h5 style={{color:"red"}}>Go through the description below and confirm your selection, or use the page controls to make changes</h5>
                <h3>Aspirational Indicators {currentIndex+1}:</h3>
                <ul style={{textAlign:"left"}}>
                {categories[currentIndex].aspiIndication.map((indication, index) => (
                    <li key={index} style={{ listStyle: "disc" }}>
                    {indication}
                    </li>
                ))}
                </ul>
                <h3> Reflective Questions:</h3>
                <ul style={{textAlign:"left"}}>
                <li style={{listStyle:"disc"}}> {categories[currentIndex].futureQuestions[0]}</li>
                <li style={{listStyle:"disc"}}> {categories[currentIndex].futureQuestions[1]}</li>
                </ul>                
                <div className="ref-button">
                <button onClick={prevSlide} className=" prev" style={{marginTop:"0px"}}><img src={back}  /></button> <button  id="myButton" onClick={submit} >{currentIndex+1}</button>
                
                <label htmlFor="myButton" className="select"> Confirm {currentIndex+1}</label> <button onClick={nextSlide} className=" prev" style={{marginTop:"0px"}}><img src={next} /></button>
                </div>
                </div>
            </div>
            </>
            
        
     );
      }
    

           
}


export default Customer;
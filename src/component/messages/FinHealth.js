import { useState } from "react";
import next from '../next-bt.png';
import back from '../previous-bt.png'


const FinHealth = ({close, msg, submit, quest}) => {
    
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: 'Financial instability, no cash flow, unpaid bills, poor credit history.',
          reflectiveQuestions: [
            'Are you struggling to pay operational expenses or meet financial obligations?',
            'Does your business rely heavily on external funding or loans?'
          ],
          aspiIndication: [
                            'Financial instability with no clear strategy for improvement. High reliance on loans or external funding. Severe cash flow issues.'
          ],
          futureQuestions: [
                        'Are you currently struggling with cash flow on a monthly or weekly basis?',
                        'Do you have a plan for financial recovery in place?',
                        'Is your business unable to meet its financial obligations consistently?'
          ]
        },
        {
            score: 2,
          indication: 'Severe cash flow problems, increasing debt, business survival at risk.',
          reflectiveQuestions: [
            'Do you often find yourself behind on payments or facing overdue invoices?',
            'Is your business constantly facing financial crises or borrowing to stay afloat?',
          ],
          aspiIndication: [
            'Sporadic income with little understanding of business finances. No budget or financial forecasting in place.'
          ],
          futureQuestions: [
            'Are you aware of the basic financial health indicators of your business (e.g., profit margins, expenses)?',
            'Have you ever created a business budget or financial forecast?',
            'Do you often rely on external funding to stay afloat?'
          ]
        },  

        {
            score: 3,
            indication: 'Occasional satisfaction, rare skill development, low sense of contribution',
            reflectiveQuestions: [
                'Is your revenue stream inconsistent or sporadic?',
                'Do your expenses often exceed your income, leaving little room for reinvestment or growth?'
            ],
            aspiIndication: [
                'Inconsistent financial performance, with occasional profit but frequent losses. Limited financial planning.'
            ],
            futureQuestions: [
                'Are there significant periods of financial loss within your business?',
                'Do you find yourself scrambling to cover basic operational costs regularly?',
                'Have you ever attempted financial forecasting, but found it ineffective?'
            ]

        },

        {
            score: 4,
            indication: 'Struggling with low profitability, limited financial resources, some debt.',
            reflectiveQuestions: [
                'Is your business just about covering its costs with little room for growth or investment?',
                'How often do you encounter cash shortages or delays in payments?'
            ],
            aspiIndication: [
                'Struggling to break even, but showing some signs of recovery. Minimal profit, often reliant on a few clients.'
            ],
            futureQuestions: [
                'Do you have a functional system for legal compliance but still see room for improvement?',
                'Have you taken steps to align your business’s practices with major legal standards but face challenges with certain details?',
                'Do you regularly update your policies to keep pace with changes in laws or regulations?'
            ]
        },
        {
            score: 5,
            indication: 'Financial position improving, breaking even, managing some financial strain.',
            reflectiveQuestions: [
                'Are you able to break even most months but still face financial pressure?',
                'Do you have a basic understanding of your cash flow and profitability, but feel limited?'
            ],
            aspiIndication: 'Business is financially stable, but growth is slow. Limited investment in financial strategies. Cash flow is manageable.',
            futureQuestions: [
                'Do you manage to cover all operating costs and have a modest profit, but have little to invest in growth?',
                'Have you started to track and understand where most of your income is coming from?',
                'Are you satisfied with the stability of your cash flow, but feel unsure about future growth potential?'
            ]
        },
        {
            score: 6,
            indication: 'Modest profits, small reserves, manageable debt, improving financial structure.',
            reflectiveQuestions: [
                ' Do you have some financial reserves, but they are not yet substantial?',
                'Is your debt under control, but growth or expansion is still limited by resources?'
            ],
            aspiIndication: 'Steady revenue with some investments in financial planning, but lacking long-term strategies. Debt is under control.',
            futureQuestions: [
                'Are you regularly meeting your financial obligations, but feel that you’re not yet prepared for growth?',
                'Have you established basic financial strategies, but not a full-scale long-term plan?',
                'Do you feel that your debt and obligations are under control, but you lack a clear savings or investment plan?'
            ]
        },
        {
            score: 7,
            indication: 'Profitable, building reserves, maintaining manageable debt, growing steadily.',
            reflectiveQuestions: [
                'Are you seeing consistent profits and beginning to build a financial cushion?',
                'Can you comfortably manage your debts and still invest in growth opportunities?'           
            ],
            aspiIndication: 'Strong and predictable revenue with long-term financial strategies in place. Solid profit margins and manageable debt.',
            futureQuestions: [
                'Is your business generating consistent revenue, and do you have a clear plan for reinvesting profits?',
                'Do you have a solid financial plan in place for the next 1-3 years?',
                'Are you managing debt effectively while preparing for future business growth?'
            ]
        }, {
            score: 8,
            indication: 'Solid financial position, strong cash flow, clear financial plans for growth.',
            reflectiveQuestions: [
                'How confident are you in your legal team or consultants ensuring compliance across all aspects?',
                'Do you actively participate in or follow up on legal compliance training for your team?'
            ],
            aspiIndication: 'Well-capitalized with an investment plan and a strong financial foundation. Steady growth, no issues with cash flow or debt.',
            futureQuestions: [
                                'Are you operating with predictable and increasing profits?',
                                'Do you have a strong and diversified revenue stream that sustains growth?',
                                'Have you built an emergency fund and have strong controls over your financial resources?'
            ]
        },
        {
            score: 9,
            indication: [
                'Excellent profitability, significant reserves, healthy cash flow, low debt.'
            ],
            reflectiveQuestions: [
                'Are you consistently exceeding your financial goals and building strong reserves?',
                'Is your business financially agile and able to weather economic fluctuations?'
            ],
            aspiIndication: 'Highly profitable with robust financial strategies. Business growth is consistently increasing. Clear long-term financial goals.',
            futureQuestions: [
                'Is your business consistently growing, with a strong and clear path for the next 5 years?',
                'Have you fully optimized cash flow and minimized expenses for maximum profitability?',
                'Do you feel confident in your business’s financial strategies and ability to withstand market changes?'
            ]
        },
        {
            score: 10,
            indication: [
                'Exceptional financial health, highly profitable, robust cash flow, and growth'
            ],
            reflectiveQuestions: [
                'Is your business thriving financially, with sustainable growth and highly profitable operations?',
                'Do you have a fully optimized financial strategy, and significant capital to expand?'
            ],
            aspiIndication: 'Exceptional financial health, with sustainable, diversified revenue streams. The business is financially independent and well-positioned for future expansion.',
            futureQuestions: [
                'Is your business financially independent, with a secure profit margin and diversified revenue streams?',
                'Are you fully capitalized for expansion, with multiple long-term investments in place?',
                'Do you have financial strategies in place that ensure growth, stability, and sustainability for decades?'
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



export default FinHealth;
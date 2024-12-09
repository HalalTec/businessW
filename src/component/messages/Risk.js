import { useState } from "react";
import next from '../next-bt.png';
import back from '../previous-bt.png'


const Risk = ({close, msg, submit, quest}) => {
    
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No formal risk management strategy in place',
            'No awareness of potential business risks.',
            'Risk management is ad hoc and unstructured.'
          ],
          reflectiveQuestions: [
            'Are we completely reactive when it comes to risks, rather than being proactive?',
            'Do we have no contingency plans or risk assessments?',
            'Do we lack risk management policies or procedures across the organization?'
          ],
          aspiIndication: 'Minimal Risk Management Systems: The business has little to no formal risk management system in place. Risks are largely addressed reactively.',
          futureQuestions: [
                                'Have we identified the major risks that could impact our business?',
                                'Do we have a clear plan to address unexpected crises?',
                                'How confident are we in managing major risks if they occur today?'
          ]
        },
        {
            score: 2,
          indication: [
            'Minimal risk identification processes.',
            'Risks addressed reactively rather than proactively.'
          ],
          reflectiveQuestions: [
            'Are risks only addressed when they occur, rather than being anticipated?',
            'Do you struggle to allocate resources for risk mitigation?'            
          ],
          aspiIndication: 'Reactive Risk Management: Some reactive measures are in place, but they are inconsistent. The business typically responds to risks after they emerge.',
          futureQuestions: [
                                'Are risks being managed only when they surface?',
                                'Do we have a consistent approach for assessing and reacting to risks?',
                                'How prepared are we for new and emerging risks?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Some informal methods to identify risks.',
                'Limited focus on high-impact risks only.',
                'Weak monitoring mechanisms.'
            ],
            reflectiveQuestions: [
                'Do you have ad-hoc methods for managing risks?',
                'Are your responses to risks inconsistent or poorly documented?'
            ],
            aspiIndication: 'Basic Risk Management Framework: Basic policies and procedures are in place to address major risks, but the approach is still inconsistent.',
            futureQuestions: [
                                'Are we consistently assessing risks in key areas of the business?',
                                'Do we have written procedures to address risks?',
                                'Are these procedures applied regularly or only during crises?'
            ]
        },

        {
            score: 4,
            indication: [
                'Basic risk management framework in place.',
                'Some staff trained in risk awareness.',
                'Limited integration into business strategy.'
            ],
            reflectiveQuestions: [
                'Do you have a basic framework for identifying and managing risks?',
                'Are risk discussions infrequent or limited to certain types of risks?'
            ],
            aspiIndication: 'Risk Identification and Mitigation: The business has a formal risk identification process, but mitigation strategies are underdeveloped or incomplete.',
            futureQuestions: [
                                'Do we regularly assess both internal and external risks?',
                                'Are mitigation plans in place for the top risks, or are they being developed?',
                                'How often do we update our risk mitigation plans?'
            ]
        },
        {
            score: 5,
            indication: [
                'Formal risk management processes exist but lack regular updates.',
                'Focus on operational risks.'
            ],
            reflectiveQuestions: [
                'Are your risk management processes documented but infrequently updated?',
                'Are certain types of risks, like operational ones, prioritized over others?'
            ],
            aspiIndication: 'Emerging Risk Management: The business has a formal process for identifying, assessing, and mitigating risks, but it is still evolving and may not cover all areas.',
            futureQuestions: ['How regularly do we assess emerging risks in our industry?',
                            'Are we making proactive efforts to prepare for future risks?',
                            'Is our risk management system integrated across all business functions?'
            ]
        },
        {
            score: 6,
            indication: [
                'Regularly updated risk management framework.',
                'Monitoring tools are in use.',
                'Some predictive capabilities for future risks.'
            ],
            reflectiveQuestions: [
                'Do you use tools to monitor and predict risks?',
                'Are risk reviews part of your regular business discussions?'
            ],
            aspiIndication: 'Comprehensive Risk Management: A robust risk management framework is in place, covering major risks, with clear mitigation strategies for most identified risks.',
            futureQuestions: [
                                'How confident are we that all major risks are identified and managed?',
                                'Do we have contingency plans in place for unexpected major events?',
                                'How regularly do we test and review our risk mitigation strategies?'
            ]
        },
        {
            score: 7,
            indication: [
                ' Risk management integrated into strategic decision-making.',
                'Proactive identification of risks.',
                'Consistent team-wide training.'
            ],
            reflectiveQuestions: [
                'Are your risk strategies aligned with long-term business goals?',
                'Does your team regularly undergo risk awareness and management training?'           
            ],
            aspiIndication: 'Proactive Risk Management: The business has a proactive risk management culture, anticipating potential risks and preparing mitigation strategies in advance.',
            futureQuestions: [
                        'Do we regularly monitor and review both existing and emerging risks?',
                        'How well are we anticipating and preparing for possible disruptions?',
                        'Are we investing in risk management training and awareness for all key employees?'
            ]
        }, {
            score: 8,
            indication: [
                'Advanced risk identification systems in place.',
                'Data-driven approaches for risk assessment.',
                'Established risk response plans.'
            ],
            reflectiveQuestions: [
                'Do you leverage technology or analytics for risk management?',
                'Are your risk response plans detailed and pre-approved for execution?'
            ],
            aspiIndication: 'Integrated Risk Management: Risk management is deeply integrated into business operations, with consistent reviews and a comprehensive mitigation strategy across all major areas.',
            futureQuestions: [
                                'How well integrated is risk management into day-to-day decision-making processes?',
                                'Do we regularly revisit and adjust risk strategies to ensure they align with our evolving business goals?',
                                'How actively do we engage all teams in identifying and mitigating risks?'
            ]
        },
        {
            score: 9,
            indication: [
                ' Robust, predictive risk management systems.',
                'Real-time risk monitoring tools in use.',
                'Strong culture of risk awareness.'
            ],
            reflectiveQuestions: [
                'Are your risk monitoring systems highly responsive and predictive?',
                'Do employees across all levels actively engage in risk mitigation efforts?'
            ],
            aspiIndication: 'Advanced Risk Resilience: The business is highly resilient to risk, with both a strong preventive approach and well-established response plans.',
            futureQuestions: [
                                ' How quickly can we respond to a crisis with minimal disruption?',
                                'Do we have strong risk resilience in all business functions, and can we recover quickly from setbacks?',
                                'How consistently do we manage risks across global markets or diverse operational areas?'
            ]
        },
        {
            score: 10,
            indication: [
                'Best-in-class risk management practices.',
                'Fully integrated, data-driven systems.',
                'Proactive and adaptable risk culture.'
            ],
            reflectiveQuestions: [
                'Is risk management a core strength and competitive advantage for your business?',
                'Are risks consistently managed with minimal disruption to operations?'
            ],
            aspiIndication: 'Risk Mastery: The business excels in risk management, anticipating and mitigating all forms of risk proactively. Risk is seen as an opportunity to innovate.',
            futureQuestions: [
                                'How well are we positioned to turn potential risks into growth opportunities?',
                                'Are we leading the market with our approach to risk management?',
                                'How integrated are risk strategies in every aspect of our business, ensuring sustainable growth and innovation?'
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



export default Risk;
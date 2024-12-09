import { useState } from "react";
import next from '../next-bt.png';
import back from '../previous-bt.png'


const Legal = ({close, msg, submit, quest}) => {
    
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            ' Legal issues are frequent and unresolved.',
            'The business operates with minimal or no legal compliance.',
            'The risk of legal penalties is high'
          ],
          reflectiveQuestions: [
            'Are there ongoing legal disputes or lawsuits?',
            'Are legal regulations often ignored or overlooked in daily operations?',
            'How much legal risk are you exposing your business to?'
          ],
          aspiIndication: 'Legal compliance is largely nonexistent or inconsistent across key areas.',
          futureQuestions: [
                                'Are you regularly facing legal issues or penalties that impede business operations?',
                                'Are your internal processes and policies not aligned with current legal regulations?',
                                'Do you lack a dedicated legal team or resources for compliance?'
          ]
        },
        {
            score: 2,
          indication: [
            'Legal compliance is sporadic.',
            'The business faces occasional fines or warnings.',
            'Some regulations are known but not consistently followed.'
          ],
          reflectiveQuestions: [
            'How often do you encounter legal challenges or fines?',
            'Are there clear gaps in understanding key regulations affecting your business?',
            'How often do you seek legal counsel?'            
          ],
          aspiIndication: 'Legal compliance is minimal but there are significant gaps in various aspects of the business.',
          futureQuestions: [
                                'Are there areas of your business where legal requirements are being ignored or misunderstood?',
                                'Do you have any legal risks or challenges that have not been addressed yet?',
                                'Are there limited or no attempts to regularly monitor legal changes in your industry?'
          ]
        },  

        {
            score: 3,
            indication: [
                'The business occasionally meets legal requirements but is inconsistent.',
                'There is some awareness of legal issues, but follow-through is lacking.'
            ],
            reflectiveQuestions: [
                'Are compliance issues frequently addressed or put off?',
                'Are there policies in place but not consistently enforced?',
                'How often are legal audits conducted?'
            ],
            aspiIndication: 'Some legal compliance measures are in place, but critical areas are still underdeveloped.',
            futureQuestions: [
                                'Have you begun implementing legal compliance systems but are struggling to make them consistent?',
                                'Are there gaps in your compliance processes that might expose your business to legal risk?',
                                'Have you yet to create an internal team or dedicated individual responsible for overseeing legal compliance?'
            ]
        },

        {
            score: 4,
            indication: [
                'Technology is improving but lacks integration and scalability.',
                'Infrastructure is functional but still often faces performance bottlenecks.',
                'Basic cybersecurity measures are in place but not fully effective.'
            ],
            reflectiveQuestions: [
                'Basic legal compliance is mostly in place but not fully optimized.',
                'Legal procedures are in place but could be more streamlined.'
            ],
            aspiIndication: 'Legal compliance measures are inconsistent but have been addressed in some key areas.',
            futureQuestions: [
                                'Are you beginning to address most legal requirements but still unsure about specific regulations?',
                                'Have you started consulting legal professionals or hired part-time legal support?',
                                'Is your company’s internal legal documentation or policy still being refined or updated regularly?'
            ]
        },
        {
            score: 5,
            indication: [
                'Legal compliance is stable but not comprehensive.',
                'The business addresses most legal requirements but overlooks some minor areas.'
            ],
            reflectiveQuestions: [
                'Are there any known areas of compliance that are neglected?',
                'How confident are you in your current legal processes? Are there any gaps or risks?'
            ],
            aspiIndication: 'Legal compliance is adequately addressed but lacks comprehensive integration across all business areas.',
            futureQuestions: [
                                'Do you have a functional system for legal compliance but still see room for improvement?',
                                'Have you taken steps to align your business’s practices with major legal standards but face challenges with certain details?',
                                'Do you regularly update your policies to keep pace with changes in laws or regulations?',
            ]
        },
        {
            score: 6,
            indication: [
                'Compliance is mostly in place with occasional lapses.',
                'Regular checks are in place to ensure legal obligations are met.'
            ],
            reflectiveQuestions: [
                'How often do you review and update your compliance policies?',
                'Are there systems in place to ensure that legal requirements are met regularly?',
                'How proactive are you in addressing legal issues?'
            ],
            aspiIndication: 'Legal compliance is well-implemented in several key areas, but there is room for improvement in others.',
            futureQuestions: [
                                'Do you have an internal team or department in place for legal matters?',
                                'Have you conducted an internal audit of your legal compliance and identified areas of improvement?',
                                'Do you have a process for evaluating legal compliance at least annually in place?'
            ]
        },
        {
            score: 7,
            indication: [
                'The business is legally compliant with most regulations.',
                'There is a robust legal compliance framework and clear policies in place.'
            ],
            reflectiveQuestions: [
                ' How easily can your team identify and implement legal regulations affecting your business?',
                'Are compliance audits performed regularly and thoroughly?'           
            ],
            aspiIndication: 'Legal compliance is integrated into most business operations, with ongoing monitoring and improvements.',
            futureQuestions: [
                                'Have you conducted thorough audits of all legal areas within your business, and are you regularly addressing legal changes?',
                                'Do you have a solid understanding of your industry’s specific legal challenges and solutions?',
                                'Are your employees trained on legal compliance and the importance of staying compliant?'
            ]
        }, {
            score: 8,
            indication: [
                'Legal compliance is strong, with few issues remaining.',
                'Regular training and legal consultations ensure comprehensive adherence.'
            ],
            reflectiveQuestions: [
                'How confident are you in your legal team or consultants ensuring compliance across all aspects?',
                'Do you actively participate in or follow up on legal compliance training for your team?'
            ],
            aspiIndication: 'Legal compliance is consistently met, with proactive measures in place for future regulatory challenges.',
            futureQuestions: [
                                'Do you have proactive measures in place to anticipate and adapt to potential legal changes that could impact your business?',
                                'Is legal compliance seamlessly integrated into all areas of the business, from operations to finance?',
                                'Have you implemented risk management strategies to mitigate legal exposure in your operations?'
            ]
        },
        {
            score: 9,
            indication: [
                'The business is largely compliant with no significant legal concerns.',
                'A proactive approach to legal matters with an established compliance culture.'
            ],
            reflectiveQuestions: [
                'Are you continuously ahead of legal changes or new regulations affecting your industry?',
                "How confident are you in your business's ability to adapt to changes in legal requirements?"
            ],
            aspiIndication: 'Legal compliance is a cornerstone of the business, with systems in place for continual assessment and improvement.',
            futureQuestions: [
                                    'Is your business recognized for its strong legal compliance standards in your industry?',
                                    'Do you have a legal compliance expert or team that works closely with senior leadership on strategic decisions?',
                                    'Are you confident that legal compliance is fully aligned with your company’s long-term vision and operations?'
            ]
        },
        {
            score: 10,
            indication: [
                'The business is fully compliant and actively invests in legal systems to stay ahead of potential challenges.',
                'The organization fosters a culture of legal vigilance.'
            ],
            reflectiveQuestions: [
                'Is your technology system an industry leader, providing a competitive edge?',
                'Are all operational aspects optimized through innovative systems and automation?',
                'Do you have absolute confidence in your security systems, with no breaches or concerns?'
            ],
            aspiIndication: 'Legal compliance is exemplary, exceeding industry standards, with constant adaptation to evolving regulations.',
            futureQuestion: [
                                'Do you have comprehensive, industry-leading legal compliance systems in place across all business operations?',
                                'Are you regularly updating your compliance processes based on evolving laws, risks, and best practices?',
                                'Is your company a role model in legal compliance, with proven results and a strong legal track record?'
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


export default Legal;
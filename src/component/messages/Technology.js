import { useState } from "react";
import next from '../next-bt.png';
import back from '../previous-bt.png'


const Technology = ({close, msg, submit, quest}) => {
    
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No technology systems in place or completely outdated.',
            'Infrastructure is not supporting business operations effectively.',
            'High dependency on manual processes with frequent disruptions.'
          ],
          reflectiveQuestions: [
            'Do you struggle with constant downtime or failures in your systems?',
            'Is your technology completely outdated and inadequate for your needs?',
            'Are you still relying on manual processes, resulting in inefficiency?'
          ],
          aspiIndication: 'Technology is non-existent or severely outdated. Infrastructure is fragmented and lacks scalability.',
          futureQuestions: [
                                'Are you currently unable to support basic technological needs?',
                                'Is your infrastructure inefficient and inadequate for growth?',
                                'Do you face frequent disruptions or breakdowns due to outdated systems?'
          ]
        },
        {
            score: 2,
          indication: [
            'Technology systems are rudimentary and insufficient for scale.',
            'Infrastructure is unreliable, leading to frequent operational disruptions.',
            'Systems are insecure and prone to data loss.'
          ],
          reflectiveQuestions: [
            'Is your infrastructure unreliable, causing frequent disruptions?',
            'Are your tech systems inadequate to support your business’s growing needs?',
            'Do you face security issues, like data loss or breaches?'            
          ],
          aspiIndication: 'Minimal technological integration with significant gaps. Infrastructure is unreliable, requiring frequent repairs.',
          futureQuestions:[
                'Are your technology solutions limited to a few basic functions?',
                'Is your infrastructure often unable to keep up with demand?',
                'Do you experience significant downtime or data loss due to poor infrastructure?'
            ]
        },  

        {
            score: 3,
            indication: [
                'Technology and infrastructure are reactive, not proactive.',
                'Some tools and systems are in place but have limited capability.',
                'Security is only partially addressed, with minimal automation or monitoring.'
            ],
            reflectiveQuestions: [
                'Are you constantly reacting to tech issues rather than preventing them?',
                'Do you lack some essential systems or tools for business operations?',
                'Is security a concern but not a priority for investment or improvement?'
            ],
            aspiIndication: 'Technology is implemented but inconsistent, with some systems out of sync. Infrastructure is functional but lacks flexibility.',
            futureQuestions: [
                                'Do you have technology in place, but it requires frequent manual intervention?',
                                "Is your infrastructure not fully aligned with your business's core needs?",
                                'Is scaling your infrastructure a challenge?'
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
                'Do you experience some operational bottlenecks due to insufficient tech capabilities?',
                'Are your systems not fully integrated, limiting scalability?',
                'Do you have basic security but worry about vulnerabilities?'
            ],
            aspiIndication: 'Technology is somewhat integrated but lacks full automation. Infrastructure is stable but not future-ready.',
            futureQuestions: [
                                'Is your technology in place but not fully optimized?',
                                'Are there limitations on your infrastructure that hinder growth?',
                                'Does your infrastructure struggle to meet both current and projected business needs?'
            ]
        },
        {
            score: 5,
            indication: [
                'Technology and infrastructure are adequate for current needs.',
                'There are some systems and tools, but not all processes are automated.',
                'Security measures are in place but could be more robust.'
            ],
            reflectiveQuestions: [
                'Are your systems able to handle current business operations with minimal disruptions?',
                'Is automation in place for most processes but not fully optimized?',
                'Do you have adequate security, but there is room for improvement?'
            ], 
            aspiIndication: 'Technology is functioning well but lacks advanced capabilities. Infrastructure is solid but not optimized for growth.',
            futureQuestions: [
                                "Does your technology perform well, but you're missing key advanced features?",
                                'Is your infrastructure functional but lacking strategic alignment with future goals?',
                                'Are there any recurring performance bottlenecks in your infrastructure?'
            ]

        },
        {
            score: 6,
            indication: [
                'Systems and tools are efficient, with some level of integration.',
                'Infrastructure supports growth with moderate scalability.',
                'Security measures are robust, and some automation is in place.'
            ],
            reflectiveQuestions: [
                'Do you experience minimal tech-related disruptions, and your systems are more integrated?',
                'Is your infrastructure scalable enough to accommodate growth, though not fully optimized?',
                'Do you have solid security practices and some level of automated monitoring?'
            ],
            aspiIndications: 'Technology is improving, with some systems automated. Infrastructure is scalable but may not be fully optimized.',
            futureQuestions: [
                                'Is your technology beginning to integrate automation and smart tools?',
                                'Can your infrastructure accommodate moderate growth with some upgrades?',
                                'Are there areas where your infrastructure needs a technology upgrade to meet future needs?'
            ]
        },
        {
            score: 7,
            indication: [
                'Technology and infrastructure are highly functional and scalable.',
                'There is an emphasis on proactive management, with good system integration.',
                'Security and data protection are strong, with considerable automation.'
            ],
            reflectiveQuestions: [
                'Do you have systems that can efficiently scale and handle growth?',
                'Is your tech infrastructure proactive in addressing issues before they arise?',
                'Are your security measures and data protection practices robust and automated?'           
            ],
            aspiIndication: 'Technology is mostly up to date, and infrastructure is flexible enough for growth but needs fine-tuning.',
            futureQuestions: [
                                'Is your technology infrastructure aligned with your growth plans?',
                                'Do you have a clear strategy for scaling your infrastructure?',
                                'Are your systems fully optimized to handle larger-scale operations without additional cost?'
            ]
        }, {
            score: 8,
            indication: [
                'Infrastructure is flexible and easily adaptable to change.',
                'Technology is fully integrated with seamless operations across departments.',
                'Security is well managed with advanced tools and proactive measures.'
            ],
            reflectiveQuestions: [
                'Does your tech infrastructure adapt quickly to changing needs or market conditions?',
                'Are your systems fully integrated, improving efficiency across departments?',
                'Do you have advanced security protocols in place with proactive threat management?'
            ],
            aspiIndication: 'Technology is advanced and integrated into all business operations. Infrastructure is robust and designed for growth.',
            futureQuestions: [
                                ' Is your technology capable of supporting both current and future needs with minimal upgrades?',
                                'Can your infrastructure scale easily without needing a major overhaul?',
                                'Are your systems capable of integrating new technologies without disruption?'
            ]
        },
        {
            score: 9,
            indication: [
                'Cutting-edge technology and infrastructure enable innovation.',
                'Systems are fully automated, with real-time monitoring and optimization.',
                'Security is comprehensive, with real-time threat detection and response'
            ],
            reflectiveQuestions: [
                ' Is your technology at the forefront of industry trends, enabling innovation?',
                'Do your systems work autonomously with real-time monitoring and optimization?',
                'Do you have state-of-the-art security, with real-time threat detection and quick response?'
            ],
            aspiIndication: 'Technology is cutting-edge and highly integrated, offering innovation across operations. Infrastructure is fully optimized for current and future needs.',
            futureQuestions: [
                                'Are your technology solutions state-of-the-art and offer cutting-edge capabilities?',
                                'Is your infrastructure agile and responsive to rapid changes in the business landscape?',
                                'Can your infrastructure seamlessly support innovation and rapid scaling?'
            ]
        },
        {
            score: 10,
            indication: [
                'Technology and infrastructure are world-class, supporting industry leadership.',
                'Every aspect of operations is optimized through cutting-edge systems and automation.',
                'Security and compliance are top-tier, with zero breaches and full resilience.'
            ],
            reflectiveQuestions: [
                'Is your technology system an industry leader, providing a competitive edge?',
                'Are all operational aspects optimized through innovative systems and automation?',
                'Do you have absolute confidence in your security systems, with no breaches or concerns?'
            ],
            aspiIndication: 'Technology is futuristic and continuously evolving, providing a competitive advantage. Infrastructure is world-class, sustainable, and future-proof.',
            futureQuestions: [
                                'Does your technology position you as an industry leader in innovation?',
                                'Is your infrastructure fully future-proofed, offering maximum flexibility and scalability?',
                                'Can you rapidly adopt new technologies and infrastructure with no risk of disruption or inefficiency?'
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


export default Technology;
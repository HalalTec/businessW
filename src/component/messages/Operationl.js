import { useState } from "react";
import next from '../next-bt.png';
import back from '../previous-bt.png'


const Operationl = ({close, msg, submit, quest}) => {
    
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Processes are chaotic or undefined.',
            'Frequent delays and errors.',
            'Poor resource utilization'
          ],
          reflectiveQuestions: [
            'Are workflows unpredictable or unclear?',
            'Do delays and inefficiencies hinder business objectives?'
          ],
          aspiIndication: [
                                'Operational processes are largely chaotic, with frequent errors and delays. Minimal systems are in place.',
    
          ],
          futureQuestions: [
                            ' Is your business often scrambling to manage basic operations?',
                            'Are inefficiencies regularly causing disruptions?',
                            'Do your operations lack any form of standardized process or systems?'
          ]
        },
        {
            score: 2,
          indication: [
            'Minimal standardization in processes.',
            'High dependency on specific individuals.'
          ],
          reflectiveQuestions: [
            'Are processes overly reliant on certain team members?',
            'Do inefficiencies regularly disrupt operations?',
          ],
          aspiIndication: 'Basic operational systems are established, but they are not consistently effective or reliable.',
          futureQuestions: [
                                'Do you have systems in place, but they’re inconsistent or prone to failure?',
                                'Are you often firefighting operational issues rather than improving them?',
                                'Do you struggle to meet deadlines and performance expectations?'
          ]
        },  

        {
            score: 3,
            indication: [
                            'Basic processes exist but are inconsistently applied.',
                            'High error rates persist.'
            ],
            reflectiveQuestions: [
                'Are some processes established but not followed consistently?',
                'Is there an over-reliance on manual interventions?'
            ],
            aspiIndication: 'Some operational processes work well, but others still need significant improvements.',
            futureQuestions: [
                'Are there operational areas that are functioning well but others constantly fail?',
                'Do you see areas for improvement but lack the resources or time to address them?',
                'Are your processes still largely reactive rather than proactive?'
            ]
        },

        {
            score: 4,
            indication: [
                'Efforts to document processes are underway.',
                'Minor improvements seen but still sporadic.'
            ],
            reflectiveQuestions: [
                'Are process improvements happening but not systematically?',
                'Are tools and technologies underutilized?'
            ],
            aspiIndication: 'Operational processes are fairly reliable, though there are occasional hiccups and inefficiencies.',
            futureQuestions: [
                                'Do you have reliable processes but still encounter occasional roadblocks or inefficiencies?',
                                'Are there areas where processes are outdated or need refinement?',
                                'Do you see room for significant improvement in your overall operational flow?'
            ]
        },
        {
            score: 5,
            indication: [
                'Processes are moderately standardized.',
                'Occasional delays or quality issues.'
            ],
            reflectiveQuestions: [
                'Are workflows documented but not optimized?',
                'Are resources generally sufficient but not fully aligned to business needs?'
            ],
            aspiIndication: 'Operational systems are mostly efficient, but there’s room for optimization in certain areas.',
            futureQuestions: ['Are your processes generally effective but could be improved in specific areas?',
                                'Do you actively seek to identify and improve inefficiencies?',
                                'Are you able to meet most operational goals but find some challenges along the way?'
            ]
        },
        {
            score: 6,
            indication: [
                'Most processes are clear and functioning.',
                'Errors and delays are infrequent but noticeable.'
            ],
            reflectiveQuestions: [
                'Are processes defined and followed by most teams?',
                'Do inefficiencies arise in complex scenarios?'
            ],
            aspiIndication: 'Processes run well most of the time, with clear steps to address inefficiencies when they arise.',
            futureQuestions: [
                                    'Are your processes well defined and mostly smooth?',
                                    'Do you have mechanisms in place to quickly identify and fix inefficiencies?',
                                    'Is there a system for continuous improvement, even though not everything is perfect?'
            ]
        },
        {
            score: 7,
            indication: [
                'Processes are standardized and monitored for compliance.',
                'Efficiency is high in most areas.'
            ],
            reflectiveQuestions: [
                'Are KPIs used to measure operational success?',
                'Are most operations meeting their time and quality benchmarks?'           
            ],
            aspiIndication: 'Operational systems are efficient, and minor inefficiencies are proactively identified and addressed.',
            futureQuestions: [
                            'Are you regularly reviewing and improving your operational systems?',
                            'Do you see improvements in your operational efficiency with minor room for fine-tuning?',
                            'Are your operational challenges now infrequent and easily addressed when they occur?'
            ]
        }, {
            score: 8,
            indication: [
                'Processes are optimized and continuously improved.',
                'Performance consistently meets goals.'
            ],
            reflectiveQuestions: [
                'Do teams actively seek and implement efficiencies?',
                'Are process improvements tracked and celebrated?'
            ],
            aspiIndication: 'The business has streamlined, optimized systems that run efficiently, with minimal waste or downtime.',
            futureQuestions: [
                                'Are your systems highly streamlined, with only small inefficiencies remaining?',
                                'Do you consistently achieve your operational goals with minimal disruptions?',
                                'Are you able to focus on growth because operations are running efficiently?'
            ]
        },
        {
            score: 9,
            indication: [
                'Industry best practices are implemented.',
                'Automation is leveraged for key tasks.'
            ],
            reflectiveQuestions: [
                'Are operational practices setting benchmarks in the industry?',
                'Are automation tools effectively reducing manual errors?'
            ],
            aspiIndication: 'Operational efficiency is a competitive strength, with systems that allow for scalability and flexibility.',
            futureQuestions: [
                                'Are your operations highly optimized, allowing for easy scaling and adaptation?',
                                'Do you consistently exceed operational targets and deliver with precision?',
                                'Are you able to quickly adapt to changes in demand or market conditions due to efficient systems?'
            ]
        },
        {
            score: 10,
            indication: [
                'Operations are seamless, scalable, and innovative.',
                'Processes are a competitive advantage.'
            ],
            reflectiveQuestions: [
                'Are your operations recognized for excellence within your industry?',
                'Can your business scale without compromising efficiency?'
            ],
            aspiIndication: 'Operational excellence is ingrained in the business, with fully optimized processes and continuous innovation.',
            futureQuestions: [
                                'Are your operations so efficient that they drive competitive advantage and continuous growth?',
                                'Is there a culture of ongoing improvement where inefficiencies are immediately identified and corrected?',
                                'Do you consistently push the boundaries of operational excellence?'
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



export default Operationl;
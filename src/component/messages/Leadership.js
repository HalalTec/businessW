import { useState } from "react";
import next from '../next-bt.png';
import back from '../previous-bt.png'


const Leadership = ({close, msg, submit, quest}) => {
    
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: 'Leadership and governance structures are non-existent or severely dysfunctional. No clear direction, vision, or decision-making processes.',
          reflectiveQuestions: [
            'Does your business have any clearly defined leadership roles?',
            'Are decisions made haphazardly without structure or oversight?',
            'Is there confusion or a lack of communication about who is responsible for what?'
          ],
          aspiIndication: 'Leadership is largely ineffective, with no clear vision or strategy. There is a lack of accountability and authority.',
          futureQuestions: [
                        'Do you have a defined vision or mission guiding your leadership?',
                        'Are roles and responsibilities unclear within your leadership team?',
                        'Is there a significant lack of trust among leadership?',
                        'Do you experience frequent conflicts without resolution?'
          ]
        },
        {
            score: 2,
          indication: 'Leadership is weak, with little direction or clarity. There is inconsistent decision-making, and governance structures are ad-hoc or missing.',
          reflectiveQuestions: [
            ' Are leaders in your organization lacking vision or guidance?',
            'Is there frequent confusion or conflict regarding authority and decision-making?',
            'Do you struggle with lack of leadership alignment across your teams?',
          ],
          aspiIndication: 'Leadership is emerging but lacks cohesion and consistency. Governance structures are weak and poorly defined.',
          futureQuestions: [
                        'Does your leadership team struggle to align on key decisions?',
                        'Are there inconsistencies in leadership communication?',
                        'Is there a lack of clear policies or frameworks for governance?'
          ]
        },  

        {
            score: 3,
            indication: 'Leadership is emerging but still not cohesive or effective. Governance processes are informal and lack consistency.',
            reflectiveQuestions: [
                'Is leadership starting to take shape, but still unclear or inconsistent in some areas?',
                'Do some leaders struggle to communicate or delegate effectively?',
                'Are there gaps in decision-making due to unclear processes?'
            ],
            aspiIndication: 'Leadership is beginning to take shape but lacks clear strategic direction. Governance systems are being established.',
            futureQuestions: [
                        'Are leadership roles somewhat defined, but there is still confusion about key responsibilities?',
                        'Are decisions made reactively rather than proactively?',
                        'Is there an effort to build trust but little consistency in follow-through?'
            ]
        },

        {
            score: 4,
            indication: 'Leadership is beginning to show structure, but governance lacks full formality or consistency. Decision-making processes are still underdeveloped.',
            reflectiveQuestions: [
                'Have you started to formalize leadership roles, but still face inconsistency?',
                'Are there informal decision-making processes that need improvement?',
                'Is leadership alignment starting, but not fully cohesive across the organization?'
            ],
            aspiIndication: 'Leadership team has a basic strategic direction but still lacks cohesiveness. Governance structures are being formalized but are not yet fully effective.',
            futureQuestions: [
                        'Does your leadership team have some alignment on vision but struggle to execute it?',
                        'Are governance systems in place but lacking in regular review or adaptation?',
                        'Are there gaps in leadership competencies that hinder decision-making?'
            ]
        },
        {
            score: 5,
            indication: 'Leadership is stable, with clear roles and emerging formal governance structures, but there’s room for improvement in communication and accountability.',
            reflectiveQuestions: [
                'Is your leadership team well-defined, but still lacking in full alignment?',
                'Are your governance structures somewhat defined, but in need of optimization?',
                'Is there room for improvement in accountability and communication between leadership and teams?'
            ],
            aspiIndication: 'Leadership is becoming more cohesive with a clearer strategic direction. Governance structures are in place but may still need optimization.',
            futureQuestions: [
                            'Are leadership roles clearly defined, with a growing sense of accountability?',
                            'Is there a governance framework in place, but there are occasional lapses in its application?',
                            'Does your leadership team communicate fairly well but still experience occasional disagreements?'
            ]
        },
        {
            score: 6,
            indication: 'Leadership is functional, with defined roles and clearer governance structures. However, some areas still need refinement for full effectiveness.',
            reflectiveQuestions: [
                'Is there clarity on who leads which areas, though some gaps exist?',
                'Are decision-making processes clearer, but inconsistent in some situations?',
                'Are you working to improve how leaders communicate and align across departments?'
            ],
            aspiIndication: 'Leadership is aligned with a clear strategy, and governance structures are becoming more effective. The leadership team begins to operate with higher trust.',
            futureQuestions: [
                                'Are you consistently achieving alignment between leadership and staff on key goals?',
                                'Are governance policies becoming more effective but still need refining in some areas?',
                                'Do leadership conflicts occur occasionally but are resolved constructively?'
            ]
        },
        {
            score: 7,
            indication: 'Strong leadership is in place with formalized governance structures and processes. Some areas of improvement exist in alignment and accountability.',
            reflectiveQuestions: [
                "Are your leadership structures solid, with clearly defined roles across the organization?",
                'Are decision-making processes transparent, though there might be occasional delays or misalignments?',
                'Are there regular leadership meetings or reviews to ensure alignment?'           
            ],
            aspiIndication: 'Leadership is strategic, with strong alignment and shared goals. Governance practices are becoming increasingly efficient and adaptive.',
            futureQuestions: [
                                'Is your leadership team highly aligned, with a shared vision and set of priorities?',
                                'Are governance practices regularly reviewed for improvement?',
                                'Is leadership communication clear, transparent, and effective?'
            ]
        }, {
            score: 8,
            indication:   'Leadership is effective and well-aligned, with established governance frameworks. Decision-making processes are well-structured, with clear accountability.',
            reflectiveQuestions:[
                'Is your leadership team effective in both strategy and day-to-day operations?',
                'Are governance processes transparent, and do they include regular checks and balances?',
                'Are decisions being made with confidence and clear accountability?'
            ],
            aspiIndication: 'Leadership is highly effective and focused on growth. Governance systems are robust, providing clear oversight and accountability.',
            futureQuestions: [
                                ' Is your leadership team leading the business in new and innovative directions?',
                                'Are governance practices advanced, ensuring clarity and transparency in all decisions?',
                                'Is leadership consistently trusted by employees and stakeholders?'
            ]
        },
        {
            score: 9,
            indication: [
                'Leadership is highly effective with robust governance practices. There is clear strategic direction and high accountability at all levels.'
            ],
            reflectiveQuestions: [
                'Do you have a well-aligned leadership team that is driving organizational success?',
                'Are your governance frameworks actively supporting decision-making and long-term planning?',
                'Is there strong accountability, with leaders taking responsibility for outcomes across all areas?'
            ],
            aspiIndication: 'Leadership is exceptional, driving innovation and sustainability. Governance structures are highly effective, with clear accountability and a strong ethical framework.',
            futureQuestion: [
                                'Is your leadership team leading the business in new and innovative directions?',
                                'Are governance practices advanced, ensuring clarity and transparency in all decisions?',
                                'Is leadership consistently trusted by employees and stakeholders?'
            ]
        },
        {
            score: 10,
            indication: [
                'Leadership is exemplary, with world-class governance practices in place. There is full alignment and accountability, driving optimal business performance and innovation.'
            ],
            reflectiveQuestions: [
                'Does your leadership inspire and drive exceptional performance?',
                'Are governance practices fully integrated into everyday business decisions?',
                'Is your leadership team not only aligned but also accountable for long-term strategic growth and success?'
            ],
            aspiIndication: 'Leadership is visionary and transformative, and governance is exemplary, ensuring maximum effectiveness, growth, and stability.',
            futureQuestion: [
                                'Does your leadership inspire others to go beyond their limits, creating lasting impact?',
                                'Are governance structures fully optimized for long-term sustainability and agility?',
                                'Do you consistently lead with ethical standards, fostering loyalty and high performance?'
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



export default Leadership;
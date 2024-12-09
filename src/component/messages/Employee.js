import { useState } from "react";
import next from '../next-bt.png';
import back from '../previous-bt.png'


const Employee = ({close, msg, submit, quest}) => {
    
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Employee morale is very low.',
            'Staff turnover is high.',
            'Employee engagement is minimal or non-existent.',
            'No structured learning or growth opportunities are offered'
          ],
          reflectiveQuestions: [
            'Are employees disengaged or apathetic about their roles?',
            'How often do you lose employees? Are they leaving voluntarily or being forced out?',
            'Do employees feel valued and supported in their career growth?'
          ],
          aspiIndication: [
            'Employee engagement is minimal.',
            'High turnover and absenteeism.',
            'Little or no professional development opportunities.'
          ],
          futureQuestions: [
                'Are your employees disengaged or frequently absent?',
                'Do your team members lack opportunities to learn or advance?',
                'Are you struggling with high employee turnover in your organization?'
          ],
          
        },
        {
            score: 2,
          indication: [
            'Employees express dissatisfaction openly.',
            'Very few employees have access to training or development.',
            'Feedback and recognition are infrequent.',
            'Low internal mobility and promotions.'
          ],
          reflectiveQuestions: [
            'Do employees feel their voices are heard and respected?',
            'Are there clear pathways for career advancement within the company?',
            'How often do you conduct formal or informal feedback sessions with employees?',
          ],
          aspiIndication: [
            'Employee satisfaction is low.',
            'Some training or development opportunities exist but are not widely accessible.',
            'Feedback mechanisms are sporadic or ineffective.'
          ],
          futureQuestions: [
            'Do employees seem dissatisfied or unmotivated?',
            'Are professional development resources scarce or inconsistently offered?',
            'Is feedback from employees rarely acted upon or overlooked?'
          ]
        },  

        {
            score: 3,
            indication: [
                "Employee satisfaction is below average.",
                'Employee development opportunities are limited but available.',
                'Employee feedback is infrequent and sometimes ignored.',
                'There’s a lack of recognition for employees’ achievements.'
            ],
            reflectiveQuestions: [
                'Are employees satisfied with the work environment but feel there’s little opportunity for personal growth?',
                'How often do you offer training or professional development programs?',
                'Do employees feel their contributions are acknowledged?'
            ],
            aspiIndication: [
                'Employee morale is improving, but not consistent.',
                'A few development programs are offered, but not all employees have access.',
                'Some employee feedback is considered, though it’s not a regular practice.'
            ],
            futureQuestions: [
                "Are employees starting to feel more engaged, but there's still a sense of inconsistency?",
                'Is professional development available only to certain groups of employees?',
                "Do you occasionally collect feedback, but it doesn't lead to regular changes?"
            ]
        },

        {
            score: 4,
            indication: [
                ' Employee satisfaction is moderate.',
                'Employees have limited development options but there are some opportunities.',
                'Feedback processes are in place, but not always acted upon'
            ],
            reflectiveQuestions: [
                'Do employees have some opportunities to grow professionally but feel there could be more?',
                'Are employees’ concerns and feedback acknowledged and addressed consistently?'
            ],
            aspiIndication: [
                'Employee satisfaction is moderate.',
                'Development programs are available, but employees may not feel they are tailored to their needs.',
                'Feedback is gathered, but it may not always be implemented.'
            ],
            futureQuestions: [
                'Do employees express moderate satisfaction but may still feel unappreciated?',
                "Are development opportunities present, but employees don't always feel they meet their needs?",
                'Is feedback regularly collected but not always acted upon in a timely way?'
            ]
        },
        {
            score: 5,
            indication: [
                            'Employee satisfaction is average.',
                            'Training and development are somewhat prioritized, but there’s room for improvement.',
                            'Feedback is regular but not fully actioned.'
            ],
            reflectiveQuestions: [
                'Are there structured programs for employee development that are utilized frequently?',
                'Do you regularly collect feedback but feel that sometimes it doesn’t lead to tangible changes?'
            ],
            aspiIndication: [
                ' Employee engagement is decent, with clear pathways for growth.',
                'A variety of training programs are offered, but not all are widely taken advantage of.',
                'Feedback is considered, but follow-up actions are inconsistent.'
            ], 
            futureQuestions: [
                'Are employees moderately engaged but still not fully motivated?',
                'Do many employees have access to development programs, but uptake is lower than expected?',
                'Is employee feedback regularly acted upon but not always consistently followed through?'
            ]
        },
        {
            score: 6,
            indication: [
                'Employee satisfaction is above average.',
                'Regular development programs are in place and are utilized by employees.',
                'Feedback is acted upon and used to improve satisfaction.'
            ],
            reflectiveQuestions: [
                'Do employees seem satisfied with available development opportunities but feel there’s potential for more tailored programs?',
                'How often do you take concrete action based on employee feedback?'
            ],
            aspiIndication: [
                ' Employee satisfaction is generally good with room for improvement.',
                'Training and development opportunities are accessible and somewhat aligned with employee needs.',
                'Feedback loops exist and have led to improvements, but not all employees feel heard.'
            ],
            futureQuestions: [
                'Employee satisfaction is high and steadily improving.',
                'Development programs are diverse and accessible to most employees.',
                'Feedback is gathered regularly, and actions are being taken to address concerns.'
            ],
        },
        {
            score: 7,
            indication: [
                'Employee satisfaction is generally high.',
                'Strong focus on employee development, with programs available for all employees.',
                'Feedback is actively sought and results in improvements.'
            ],
            reflectiveQuestions: [
                'Are employees happy with their opportunities for development and feel they are advancing?',
                'Do you have a system for gathering, processing, and acting on feedback effectively?'           
            ],
            aspiIndication: [
                    ' Employee satisfaction is high and steadily improving.',
                    'Development programs are diverse and accessible to most employees.',
                    'Feedback is gathered regularly, and actions are being taken to address concerns.'
            ],
            futureQuestions: [
                    'Are employees engaged and motivated, with fewer signs of dissatisfaction?',
                    'Do employees actively take advantage of the development programs offered?',
                    'Are feedback mechanisms consistently in place, with changes being made based on employee input?'
            ]
        }, {
            score: 8,
            indication: [
                'Employee satisfaction is consistently high.',
                'A wide range of employee development opportunities is offered.',
                'Regular feedback loops are in place, and employees feel listened to and valued.'
            ],
            reflectiveQuestions: [
                'Are employees consistently satisfied with the development programs provided?',
                'Do employees feel empowered to voice concerns and have them addressed promptly?'
            ],
            aspiIndication: [
                'Employee satisfaction is very high with a strong sense of belonging and purpose.',
                'Development opportunities are robust and tailored to employee needs.',
                'Feedback loops are strong, with visible improvements based on employee input.'
            ],
            futureQuestions: [
                'Are employees highly satisfied, and do they feel motivated to contribute to the organization’s success?',
                'Are your development programs well-tailored to employee career goals, with strong participation?',
                'Is employee feedback consistently implemented to make visible, impactful changes?'
            ]
        },
        {
            score: 9,
            indication: [
                'Employee satisfaction is excellent.',
                'Continuous development and career progression are core to the business.',
                'Feedback is highly valued and leads to tangible change, creating a culture of continuous improvement.'
            ],
            reflectiveQuestions: [
                'Do employees feel there is unlimited potential for personal and professional growth?',
                'How often do employees recommend your company as an employer?'
            ],
            aspiIndication: [
                'Employee satisfaction is exceptional, and retention rates are very high.',
                'Development programs are personalized, diverse, and part of the company’s core culture.',
                'Feedback is not only collected but also used proactively to drive improvements.'
            ],
            futureQuestions: [
                'Do employees report exceptional satisfaction and high levels of motivation to stay with the organization?',
                'Is professional development a core part of the company culture, with employees feeling supported and equipped for growth?',
                'Is employee feedback proactively used to continuously improve the work environment?'
            ]
        },
        {
            score: 10,
            indication: [
               ' Employee satisfaction is exceptional, with minimal turnover.',
                'Employees are deeply engaged, and development is continuously aligned with individual goals.',
                'The company has an outstanding reputation for employee satisfaction and development.'
            ],
            reflectiveQuestions: [
                'Do employees feel their careers are flourishing, and their personal aspirations are supported?',
                'Would you say that employee development is a key differentiator in your company’s success?'
            ]
        },
        {
            score: 10,
            indication: 'Exceptional satisfaction, highly impactful, career fully aligned with purpose, consistently reaching new heights.',
            reflectiveQuestions: [
                'Do you feel completely fulfilled and purposeful in your career?',
                'Is your career fully aligned with your personal values and aspirations?',
                'Are you achieving or even setting new standards of success in your field?'
            ],
            aspiIndication: [
                ' Employee satisfaction is outstanding, with a highly engaged, loyal, and productive workforce.',
                'Development opportunities are highly personalized, with employees growing rapidly and continuously.',
                'Feedback mechanisms are embedded into the organizational culture, driving continuous improvement and innovation.'
            ],
            futureQuestions: [
                'Is employee satisfaction exceptional, with employees constantly eager to contribute and stay within the company?',
                'Are development opportunities deeply integrated into the organizational culture, and is there a strong focus on personalized growth?',
                'Are feedback systems used as a strategic tool for continuous improvement and innovation in the company?'
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


export default Employee;
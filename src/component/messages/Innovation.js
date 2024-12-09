import { useState } from "react";
import next from '../next-bt.png';
import back from '../previous-bt.png'


const Innovation = ({close, msg, submit, quest}) => {
    
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: 'Innovation is minimal. No systematic approach to innovation. No growth in the past year. Current business models and processes are outdated and inflexible.',
          reflectiveQuestions: [
            'How often do you explore new ideas or approaches in your business?',
            'What is the level of innovation in your current processes?',
            'Do you see your competitors innovating more than you?'
          ],
          aspiIndication: [
                'Business has minimal innovation or growth strategies in place.',
                'Lacks focus on new opportunities or market trends.',
                'No formal strategy for exploring new markets.'
          ],
          futureQuestions: [
                'Are you currently experimenting with any new products, services, or processes?',
                'Do you actively seek out innovative solutions or advancements in your industry?',
                'Does your team struggle to come up with creative ideas or improvements?'
          ]
        },
        {
            score: 2,
          indication: 'Rare innovation, no structured growth strategy. Innovation is reactive, not proactive, and doesn’t contribute to significant business change.',
          reflectiveQuestions: [
            'When was the last time you launched a new product or service?',
            'Do you have a plan for business growth in the next 12 months?',
            'How much of your business is still based on traditional practices?',
          ],
          aspiIndication: [
                'Rarely takes risks on new ideas or products.',
                'Innovation efforts are disorganized or ad-hoc.',
                'No clear framework for innovation or growth.'
          ],
          futureQuestions: [
                'Do you feel that your current offerings are becoming outdated or less competitive?',
                'Are there any efforts to identify new customer needs or trends, but they are not fully implemented?',
                'How often do you assess the effectiveness of your current products or services in the market?'
          ]
        },  

        {
            score: 3,
            indication: 'Innovation is occasional but isolated. Some growth initiatives are tried, but they are not consistently integrated into business strategies',
            reflectiveQuestions: [
                'How consistent is your innovation effort across all areas of your business?',
                'Have any growth efforts been unsuccessful, and what did you learn from them?',
                "What is your team's response to changes in your industry?"
            ],
            aspiIndication: [
                'Some focus on innovation but not consistently pursued.',
                'Reactive to market changes rather than proactive.',
                'Growth is slow, and there is little structured support for innovation.'
            ],
            futureQuestions: [
                "Have you started setting aside resources for research and development, but it's inconsistent?",
                'Do you rely more on competitors for ideas than creating original solutions?',
                'Are you in the early stages of testing new products or services but have yet to scale them?'
            ]
        },

        {
            score: 4,
            indication: 'Innovation is not fully embedded. There is some awareness of growth opportunities but a lack of clear, long-term strategy or commitment.',
            reflectiveQuestions: [
                'Are you actively setting aside time and resources for innovation?',
                'Do you measure the impact of innovation in your business?',
                'What barriers are stopping you from being more innovative?'
            ],
            aspiIndication: [
                'Innovation is considered but often delayed.',
                'Some initial investment in new technology, products, or services.',
                'Business growth has shown some positive signs, though still limited.'
            ],
            futureQuestions: [
                'Are you committed to staying on top of trends, but lack a formal process to manage them?',
                'Do you have a formal innovation budget or department, but it’s not fully leveraged yet?',
                'Have you made incremental changes to products or services, but not fully disrupted your market?'
            ]
        },
        {
            score: 5,
            indication: 'Innovation is part of the business culture. There is some strategic alignment to growth, though efforts are inconsistent across departments or areas.',
            reflectiveQuestions: [
                'How integrated is innovation in your company culture?',
                'Have you seen a tangible increase in market share or revenue from new initiatives?',
                'How do you encourage your employees to be innovative?'
            ],
            aspiIndication: [
                'Innovation and growth are actively pursued but not fully integrated into the company culture.',
                'Developing a consistent innovation process but still facing obstacles.',
                'New products or services have been launched with moderate success.'
            ],
            futureQuestions: [
                'Are you testing out new ideas regularly but struggle to implement them across the organization?',
                'Do you gather input from customers or employees to improve offerings, but lack a full strategy to implement this feedback?',
                'Are you facing challenges in scaling your new innovations to match market demand?'
            ]
        },
        {
            score: 6,
            indication: 'Strategic innovation, but implementation is slow. The company is actively pursuing growth and innovation, but progress is slower than anticipated.',
            reflectiveQuestions: [
                ' How quickly are new ideas turning into actionable plans?',
                'Do you have measurable targets for innovation success?',
                'How does your organization adapt to industry trends and shifts?'
            ],
            aspiIndication: [
                ' Innovation is a part of the company’s growth strategy but not fully embedded in operations.',
                'Regular focus on finding new market opportunities or improving products.',
                'Business growth is steady, but there’s room for more transformative change.'
            ],
            futureQuestions: [
                    ' Are innovation initiatives typically supported by leadership, but not yet fully prioritized across teams?',
                    'Do you have structured processes for ideation and growth, but it’s still early in execution?',
                    'Do you evaluate competitors and market trends to shape your growth, but are still refining your approach?'
            ]
        },
        {
            score: 7,
            indication: 'Innovation is strategically aligned and supports business growth. Growth initiatives are clear, but there may still be inefficiencies in execution.',
            reflectiveQuestions: [
                "How clear is your business's growth strategy?",
                'Are innovation projects consistently contributing to revenue and market share growth?',
                'How well is the company managing innovation timelines and resources?'           
            ],
            aspiIndication: [
                    'Strong focus on innovation and continuous improvement.',
                    'Innovation is beginning to become ingrained in the culture.',
                    'Growth is accelerating, and some market disruption is occurring.'
            ],
            futureQuestions: [
                    'Are you integrating feedback into your growth strategies, but still working to streamline innovation processes?',
                    'Do you have dedicated teams or resources working on innovation, but need more alignment for scaling?',
                    'Is your organization proactive in exploring new opportunities, but you’re facing challenges with execution consistency?'
            ]
        }, {
            score: 8,
            indication:   'High alignment between innovation and business growth. Processes are largely efficient, with innovation efforts consistently yielding positive result',
            reflectiveQuestions:[
                'How often are your innovations aligned with customer needs and market trends?',
                'Can you track a direct impact of innovation on your bottom line?',
                'How effective is your team at executing innovative ideas?'
            ],
            aspiIndication: [
                'Innovation is a key driver of business success.',
                'New technologies, services, or business models are regularly introduced',
                'Growth is robust, with multiple avenues for expansion.'
            ],
            futureQuestions: [
                'Do you have a clear, well-supported strategy for innovation and growth with measurable goals?',
                'Are you often ahead of competitors in offering new solutions or reaching new markets?',
                'Are innovation and growth central to your culture and future business planning, but still facing some scaling challenges?'
            ]
        },
        {
            score: 9,
            indication: [
                'Innovation is a major driver of growth. Business is proactively exploring new opportunities, and innovation is continually driving competitive advantage.'
            ],
            reflectiveQuestions: [
                'How do you foster a culture of continuous innovation?',
                'What percentage of your revenue comes from new products or services?',
                'Are your innovation strategies scalable for long-term growth?'
            ],
            aspiIndication: [
                'Constant market disruption with bold innovation initiatives.',
                'Innovation is embedded into every aspect of the business, including leadership and operations.',
                'Growth is highly sustainable with scalable systems.'
            ],
            futureQuestions: [
                'Is your business leading its industry in innovation, often setting new benchmarks for competitors?',
                'Do you have a well-established framework for scaling new innovations across all parts of your business?',
                'Are you continually evolving and experimenting with new ideas at an organizational level?'
            ]
        },
        {
            score: 10,
            indication: [
                'Innovation is fully embedded and transformative. Continuous innovation is shaping your business model, and growth is exponential with no stagnation.'
            ],
            reflectiveQuestions: [
                'How is your business seen as an industry leader in innovation?',
                'Can you predict future growth areas based on current innovation trends?',
                'How often are your innovations outpacing competitors?'
            ],
            aspiIndication: [
                'Business is a recognized leader in innovation and growth within its industry.',
                'Constantly evolving with cutting-edge solutions and market leadership.',
                'Achieves significant competitive advantage through relentless innovation.'
            ],
            futureQuestions: [
                'Does your business actively shape future trends and set industry standards for innovation?',
                'Are you recognized as an industry leader who not only drives innovation but creates entirely new markets or business models?',
                'Does your business have multiple success stories of disruptive innovations, generating exponential growth across various markets?'
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

export default Innovation;
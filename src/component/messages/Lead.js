import { useState } from "react";
import next from '../next-bt.png';
import back from '../previous-bt.png'


const Lead = ({close, msg, submit, quest}) => {
    
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No defined lead generation strategy.',
            'Minimal or no awareness in the market.',
            'Little or no customer engagement.'
          ],
          reflectiveQuestions: [
            'Do we have any consistent method of generating leads?',
            'Are we recognized by our target audience?',
            'Are our efforts leading to any meaningful inquiries?'
          ],
          aspiIndication: [
                                'No established lead generation strategy.',
                                'Market position is unknown or weak'
          ],
          futureQuestions: [
                                'Have I identified any potential leads or target markets in the defined timeframe?',
                                'Do I have a plan in place to actively pursue leads and establish a presence?'
          ]
        },
        {
            score: 2,
          indication: [
            'Basic lead generation methods in place but inconsistent.',
            'Weak brand presence in the market.',
            'Limited customer awareness.'
          ],
          reflectiveQuestions: [
            ' Are our lead generation activities sporadic and unstructured?',
            'Is our brand visible to only a small segment of our market?',
          ],
          aspiIndication: [
                            'Occasional or inconsistent lead generation efforts.',
                            'Market position is uncertain or unestablished.'
          ],
          futureQuestions: [
                                'In the defined timeframe, have I been able to generate at least a few leads?',
                                'How will I build a consistent and recognizable market presence moving forward?'
          ]
        },  

        {
            score: 3,
            indication: [
                            'Some structured efforts to generate leads, but outcomes are below expectations.',
                            'Low market penetration.',
                            'Limited differentiation from competitors.'
            ],
            reflectiveQuestions: [
                'Are we relying on a few unreliable lead sources?',
                'How distinct is our brand in the marketplace?',
                'Do potential customers understand what we offer?'

            ],
            aspiIndication: [
                'Basic lead generation efforts in place, but with little consistency or follow-through.',
                'Market presence is somewhat noticeable but not widely recognized.'
            ],
            futureQuestions: [
                                'Do I consistently generate leads, even if not at a high volume, in the defined timeframe?',
                                'How will I strengthen my market presence to stand out from competitors?'
            ]
        },

        {
            score: 4,
            indication: [
                'Lead generation strategy exists but lacks scalability.',
                'Modest brand recognition.',
                'Moderate customer engagement.'
            ],
            reflectiveQuestions: [
                'Do we have a plan for attracting new customers?',
                'Is our brand gaining recognition, even if limited?',
                'Are customers partially aware of our unique selling points?'
            ],
            aspiIndication: [
                    'Some lead generation systems in place but with gaps.',
                    'Market position is still developing but with some awareness.'
            ],
            futureQuestions: [
                                'How many leads have I generated in the defined timeframe, and what was their quality?',
                                'Is my market position beginning to resonate with my target audience?'
            ]
        },
        {
            score: 5,
            indication: [
                'Steady but unspectacular lead flow.',
                'Clear value proposition but underutilized.',
                'Moderate presence in the target market.'
            ],
            reflectiveQuestions: [
                'Are we getting a predictable number of leads?',
                'Is our value proposition well-articulated to the market?',
                'Do we reach a significant portion of our target audience?'
            ],
            aspiIndication: [
                        'Established lead generation processes but with room for improvement.',
                        'Market position is stable but not dominant.'
            ],
            futureQuestions: [
                        'Have I consistently generated quality leads in the defined timeframe?',
                        'In what ways have I strengthened my market position and visibility?'
            ]
        },
        {
            score: 6,
            indication: [
                'Reliable lead generation process.',
                'Strong value proposition communicated effectively.',
                'Solid brand presence but not leading'
            ],
            reflectiveQuestions: [
                'Are leads coming in consistently through multiple channels?',
                'Is our target audience responding positively to our messaging?',
                'Are we a known player in our industry?'
            ],
            aspiIndication: [
                    'Lead generation strategies are solid but need optimization.',
                    'Market position is somewhat strong, though not at the forefront.'
            ],
            futureQuestions: [
                        'In the defined timeframe, have I optimized my lead generation efforts for better results?',
                        'How do my competitors perceive my market position, and what can I do to improve it?'
            ]
        },
        {
            score: 7,
            indication: [
                'Effective, scalable lead generation strategy.',
                'High brand awareness in key market segments.',
                'Strong differentiation from competitors'
            ],
            reflectiveQuestions: [
                'Do we attract quality leads in large numbers?',
                'Is our brand recognized by most of our target audience?',
                'Are we clearly perceived as better than our competitors?'           
            ],
            aspiIndication: [
                    'High-performing lead generation strategies in place.',
                    'Market position is well-established but not top-tier.'
            ],
            futureQuestions: [
                    'Have I consistently attracted a good volume and quality of leads in the defined timeframe?',
                    'How can I differentiate my market position from my competitors even further?'
            ]
        }, {
            score: 8,
            indication: [
                'Very strong lead pipeline supporting sustained growth.',
                'Market position among top competitors.',
                'High levels of customer engagement.'
            ],
            reflectiveQuestions: [
                'Are we overwhelmed by leads due to effective strategies?',
                'Is our business consistently ranking among top competitors in the market?',
                'Are customers loyal to our brand?'
            ],
            aspiIndication: [
                'Advanced and optimized lead generation strategies yielding high-quality leads.',
                'Market position is strong and well-regarded.'
            ],
            futureQuestions: [
                'In the defined timeframe, how effectively have I optimized my lead generation systems for maximum impact?',
                'How has my market position evolved into one that is recognized and respected in my industry?'
            ]
        },
        {
            score: 9,
            indication: [
                'Industry-leading lead generation strategy.',
                'Dominant market position in key segments.',
                'Exceptional customer loyalty and advocacy.'
            ],
            reflectiveQuestions: [
                'Are our lead generation strategies being copied by competitors?',
                'Are we widely recognized as the top choice in the market?',
                'Do customers frequently recommend us?'
            ],
            aspiIndication: [
                    ' Highly efficient lead generation systems with measurable, consistent success.',
                    'Dominant market position, respected and recognized by peers.'
            ],
            futureQuestions: [
                    'Have I reached a level where lead generation is a reliable and consistent source of business in the defined timeframe?',
                    'How does my market position align with the industry’s top leaders?'
            ]
        },
        {
            score: 10,
            indication: [
                'Benchmark for excellence in lead generation.',
                'Ubiquitous brand recognition.',
                'Market leader setting trends and standards'
            ],
            reflectiveQuestions: [
                'Are we considered a thought leader and trendsetter?',  
                'Is our brand recognized and trusted universally in the market?',
                'Have we achieved complete market dominance?'
            ],
            aspiIndication: [
                    'Lead generation systems are industry-leading, innovative, and scalable.',
                    'Market position is the best in the industry.'
            ],
            futureQuestions: [
                    'In the defined timeframe, have I consistently dominated the market with a continuous stream of high-quality leads?',
                    'How does my market position reflect a clear leadership role in my industry, and how can I maintain it?'
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



export default Lead;
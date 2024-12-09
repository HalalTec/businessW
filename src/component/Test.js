import {  useState } from "react";
import Career from "./Career";
import Result from "./Result";
import Carousel from "./Carousel";
import Message from "./Message";
import Warning from "./Warning";

const Test = ({selected}) => {
    const [warning, setWarning] = useState(false)
    const [val, setVal] = useState()
    const [counter, setCounter] = useState(1);
    const [style, setSty] = useState({backgroundColor: "#ED6A56"})
    const [p, setP] = useState("Financial Health")
    const [career, setCareer] = useState([])
    const [health, setHealth] = useState([])
    const [money, setMoney] = useState([])
    const [per, setPer] = useState([])
    const [rel, setRel] = useState([])
    const [fun, setFun] = useState([])
    const [physical, setPhysical] = useState([])
    const [spirit, setSpirit] = useState([])
    const [cont, setCont] = useState([])
    const [pur, setPur] = useState([])
    const [item, setItem] = useState([ "How satisfied are you with your company's current profitability and cash flow?",
                                        "To what extent have you achieved your financial targets in the past year?",
                                        "How confident are you in your company's financial stability and growth prospects?"])
    const tip =["Tip 1", "Tip 2", "Tip 3"]
    const [message, setMessage] = useState(false)
    const [msg, setMsg] = useState(0)
    const [check, setChecker] = useState(false)




        const confirm = (e) => {
            setMsg(e.target.textContent)
            setMessage(true)
        }

        const confirmFuture = (e) => {
            setMsg(e.target.textContent)
            setChecker(true)
        }
   
    const submit = (e) => {
        e.preventDefault();
        let ans= e.target.textContent
        setCounter(counter + 1);
        setVal(ans)

        if (counter <= 2) {
            setCareer([...career, ans]);
            
        }

       
        if (counter === 2 && counter < 4) {
            setSty({ backgroundColor: "#F09B36" });
            setP("Customer Satisfaction");
       
            setItem([
                "How would you rate your overall customer satisfaction levels?",
                "To what degree do you effectively gather and act on customer feedback?",
                "How well does your product or service meet or exceed customer expectations?"
            ])
            
          
        } 
       if(counter > 2 && counter <= 4){ 
            setMoney([...money, ans]);

        }
        
        
         if (counter ===4 && counter < 6) {
            setSty({ backgroundColor: "#FFC74E" });
            setP("Operational Efficiency");
            setItem([
                "How satisfied are you with your company's current operational processes?",
                "To what extent have you optimized your resource allocation and utilization?",
                "How effectively do you identify and eliminate inefficiencies in your operations?"
            ])
            
        } 
        
        if(counter > 4 && counter <= 6){ 
            setHealth([...health, ans]);

        }
        
        if (counter === 6 && counter < 8) {
            setSty({ backgroundColor: "#A0B470" });
            setP("Lead Generation & Market Position");
            setItem([
                    "How effective are your current lead generation strategies?",
                    "To what degree has your market share grown in the past year?",
                    "How well positioned is your company compared to your main competitors?"
            ])
        }
        
        if(counter > 6 && counter <= 8){ 
            setRel([...rel, ans]);

        }
        
        if (counter === 8 && counter < 10) {
            setSty({ backgroundColor: "#6E9E75" });
            setP("Innovation & Growth-Level Involvement");
            setItem([
               "How satisfied are you with your company's rate of innovation?",
                "To what extent does your company culture foster and support new ideas?",
                "How effectively do you transform innovative ideas into marketable products or services?"

            ])
        } 
        if(counter > 8 && counter <= 10){ 
            setPer((e) => [...e, ans]);
        }
        if (counter === 10 && counter < 12) {
            setSty({ backgroundColor: "#73CCE4" });
            setP("Employee Satisfaction & Development");
            setItem([
                "How would you rate overall employee satisfaction in your company?",
                "To what degree do you provide opportunities for employee growth and development?",
                "How effective are your strategies for employee retention and engagement?"

            ])
        } 
        if(counter > 10 && counter <= 12){ 
            setFun((p) => [...p, ans]);
        }
        
         if (counter === 12 && counter < 14) {
            setSty({ backgroundColor: "#869ACF" });
            setP("Leadership & Governance");
            setItem([
                 "How confident are you in your leadership team's ability to drive the company forward?",
                "To what extent do your governance structures support ethical and effective decision-making?",
                "How well does your leadership communicate and implement the company's vision and strategy?"

            ])

        } 

        if(counter > 12 && counter <= 14){ 
            setPhysical((res) => [...res, ans]);
        }

        if (counter === 14 && counter < 16) {
            setSty({ backgroundColor: "#895881" });
            setP("Legal Compliance");
            setItem([
                    "How confident are you in your company's compliance with all relevant laws and regulations?",
                    "To what degree do you proactively stay informed about changes in legal requirements?",
                    "How effectively do you integrate compliance considerations into your business operations?"
            ])


        } 

        if(counter > 14 && counter <= 16){ 
            setSpirit((re) => [...re, ans]);
        }

         if (counter === 16 && counter < 18) {
            setSty({ backgroundColor: "#ff5733" });
            setP("Risk Management");
            setItem([
                "How satisfied are you with your company's ability to identify potential risks?",
                "To what degree have you implemented effective risk mitigation strategies?",
                "How well prepared is your company to handle unexpected crises or market changes?"

            ])
        } 

        if(counter > 16 && counter <= 18){ 
            setPur((v) => [...v, ans]);
        }

         if (counter === 18 && counter < 20) {
            setSty({ backgroundColor: "#58261b" });
            setP("Technology & Infrastructure");
            setItem([
                "How up-to-date is your company's technological infrastructure?",
                "To what extent does your current technology support your business objectives?",
                "How effectively do you leverage technology to gain a competitive advantage?"

            ])
        }
        
        if(counter > 18 && counter <= 20){ 
            setCont((pr) => [...pr, ans]);
        }

        
            close()
    }

    const close = () => {
        setMessage(false)
        setWarning(false)
        setChecker(false)
    }
    


 
       
   
    

   

    

      
   

    return ( 
       
       <div>
                     {counter <= 20 && (   <header style={style}> {p}  </header> )}
                <div className="section">
                {counter === 1 && (
                <Career question="How confident are you in your business’s current financial stability and profitability?" />

            )}
           
                {counter === 2 && (
                <Career question={`How would you like to see your business’s financial stability and profitability in next`} select={selected}/>
            )}

        {counter === 3 && (
                <Career question= "How satisfied are you with the overall feedback and loyalty of your customers?" />
            )}
        {counter === 4 && (
                <Career question={`How satisfied do you want to be with the overall feedback and loyalty of your customers in the next`} select={selected}/>
            )}
        {counter === 5 && (
                <Career question="How efficient and streamlined are your business operations in meeting your strategic goals?" />
            )}
        {counter === 6 && (
                <Career question="How efficient and streamlined do you want your business operations to meet your strategic goals in the next" select={selected}/>
            )}
        {counter === 7 && (
                <Career question= "How effective is your business at generating leads and maintaining a strong position in the market?" />
            )}
        {counter === 8 && (
                <Career question= "How effective do you want your business to be at generating leads and maintaining a strong position in the market in next?" select={selected}/>
            )}
        {counter === 9 && (
                <Career question="How well does your business foster innovation and pursue sustainable growth opportunities?" />
            )}
        {counter === 10 && (
                <Career question="How well do you want your business to foster innovation and pursue sustainable growth opportunities in next" select={selected} />
            )}
         {counter === 11 && (
                <Career question="How satisfied are you with the engagement, development, and satisfaction of your employees?" />
            )}
        {counter === 12 && (
                <Career question="How satisfied do you want to be with the engagement, development, and satisfaction of your employees in next" select={selected} />
            )}
        {counter === 13 && (
                <Career question= "How confident are you in the leadership quality and governance structure of your business?" />
            )}
        {counter === 14 && (
                <Career question= "How confident do you want to be in the leadership quality and governance structure of your business in next" select={selected} />
            )}
        {counter === 15 && (
                <Career question="How effectively does your business identify, assess, and manage potential risks?" />
            )}
        {counter === 16 && (
                <Career question="How effectively do you want your business to identify, assess, and manage potential risks in next" select={selected} />
            )}
        {counter === 17 && (
                <Career question="How well-equipped is your business with modern technology and infrastructure to support its objectives?" />
            )}
         {counter === 18 && (
                <Career question="How well-equipped do you want your business to be with modern technology and infrastructure to support its objectives?" select={selected}/>
            )}
         {counter === 19 && (
                <Career question="How confident are you in your business’s adherence to relevant legal and regulatory requirements?" />
            )}
         {counter === 20 && (
                <Career question="How confident do you want your business’s adherence to relevant legal and regulatory requirements to be in next" select={selected}/>
            )}
          
          {message === true && (< Message msg= {msg-1} close={close} p={p} submit={submit} quest={0} />)}
          
          {check === true && (< Message msg= {msg-1} close={close} p={p} submit={submit} quest={1} />)}      
            {counter <= 20 && ( 
                <>
                    {counter % 2 === 1 && (<Carousel items={item} tips = {tip}/>)}
                    <ol>
                    {counter % 2 === 1 &&( <>    
                <span onClick={confirm}> 1 </span>
                <span onClick={confirm}>2</span>
                <span onClick={confirm}>3</span>
                <span onClick={confirm}>4</span>
                <span onClick={confirm}>5</span>
                <span onClick={confirm}>6</span>
                <span onClick={confirm}>7</span>
                <span onClick={confirm}> 8</span>
                <span onClick={confirm}>9</span>
                <span onClick={confirm}>10</span>
                </>
                 )}
                 {counter % 2 != 1 &&( <>     
                    <span onClick={submit} style={{filter: 1 < val ? 'blur(2px)' : 'none',
                                        cursor: 1 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 1 < val ? 'none' : 'auto'}}> 1 </span>
                <span onClick={submit} style={{filter: 2 < val ? 'blur(2px)' : 'none',
                                        cursor: 2 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 2 < val ? 'none' : 'auto'}}>2</span>
                <span onClick={submit} style={{filter: 3 < val ? 'blur(2px)' : 'none',
                                        cursor: 3 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 3 < val ? 'none' : 'auto'}}>3</span>
                <span onClick={submit} style={{filter: 4 < val ? 'blur(2px)' : 'none',
                                        cursor: 4 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 4 < val ? 'none' : 'auto'}}>4</span>
                <span onClick={submit} style={{filter: 5 < val ? 'blur(2px)' : 'none',
                                        cursor: 5 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 5 < val ? 'none' : 'auto'}}>5</span>
                <span onClick={submit} style={{filter: 6 < val ? 'blur(2px)' : 'none',
                                        cursor: 6 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 6 < val ? 'none' : 'auto'}}>6</span>
                <span onClick={submit} style={{filter: 7 < val ? 'blur(2px)' : 'none',
                                        cursor: 7 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 7 < val ? 'none' : 'auto'}}>7</span>
                <span onClick={submit} style={{filter: 8 < val ? 'blur(2px)' : 'none',
                                        cursor: 8 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 8 < val ? 'none' : 'auto'}}> 8</span>
                <span onClick={submit} style={{filter: 9 < val ? 'blur(2px)' : 'none',
                                        cursor: 9 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 9 < val ? 'none' : 'auto'}}>9</span>
                <span onClick={submit} style={{filter: 10 < val ? 'blur(2px)' : 'none',
                                        cursor: 10 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 10 < val ? 'none' : 'auto'}}>10</span>
                </>
                 )}
                </ol>
                </>
                   )}
                </div>
                {counter <= 16 && ( 
                    <footer style={style} className="foot"> </footer>
                )}
                    {counter > 20 && (
                <Result career={career}  
                        money={money}
                        per= {per}
                        rel= {rel}
                        fun = {fun}
                    physical = {physical} 
                    spirit = {spirit}
                    health = {health}
                    contribution = {cont}
                    purpose = {pur}
                    selected = {selected}
                

                />
            )}
             
                </div>
            )
            
}
 
export default Test;
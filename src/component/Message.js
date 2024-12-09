import Customer from "./messages/Customer";
import FinHealth from "./messages/FinHealth";
import Operationl from "./messages/Operationl";
import Lead from "./messages/Lead";
import Innovation from "./messages/Innovation";
import Employee from "./messages/Employee";
import Leadership from "./messages/Leadership";
import Risk from "./messages/Risk";
import Technology from "./messages/Technology";
import Legal from "./messages/Legal";



const Message = ({close, msg, p, submit, quest}) => {

    if (p === 'Financial Health'){

        return ( 
            <FinHealth close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Customer Satisfaction'){

        return ( 
            <Customer close={close} msg={msg} submit={submit}  quest={quest}/>
        );
    }
      
    if (p === 'Operational Efficiency'){

        return ( 
            <Operationl close={close} msg={msg} submit={submit}  quest={quest}/>
        );
    }

    if (p === 'Lead Generation & Market Position'){

        return ( 
            <Lead close={close} msg={msg} submit={submit}  quest={quest}/>
        );
    }

    if (p === 'Innovation & Growth-Level Involvement'){

        return ( 
            <Innovation close={close} msg={msg} submit={submit}  quest={quest}/>
        );
    }

    if (p === 'Employee Satisfaction & Development'){

        return ( 
            <Employee close={close} msg={msg} submit={submit}  quest={quest}/>
        );
    }

    if (p === 'Leadership & Governance'){

        return ( 
            <Leadership close={close} msg={msg} submit={submit}  quest={quest}/>
        );
    }

    if (p === 'Risk Management'){

        return ( 
            <Risk close={close} msg={msg} submit={submit}  quest={quest}/>
        );
    }

    if (p === 'Technology & Infrastructure'){

        return ( 
            <Technology close={close} msg={msg} submit={submit}  quest={quest}/>
        );
    }

    if (p === 'Legal Compliance'){

        return ( 
            <Legal close={close} msg={msg} submit={submit}  quest={quest}/>
        );
    }

      
}
 
export default Message;
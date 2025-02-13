import { useRecoilValue } from "recoil"
import { signUpSelector, signInSelector } from "./store/atoms"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function Buttoncomp ({text, type}) {
    const value = useRecoilValue(signUpSelector);
    const sign = useRecoilValue(signInSelector)
    const navigate = useNavigate();
    return(
        <div className="flex justify-center p-2 flex-col">
            <button className="bg-black text-slate-200 rounded-lg px-10 py-0.5 shadow-md hover:shadow-lg" onClick={async () => {
                if(type == 'signup')
                {
                    try
                    {
                        const {data} = await axios.post('http://localhost:3000/api/v1/user/signup',
                            value
                        );
                        if(data.msg != 'signed Up')
                        {
                            alert("This is a test alert!");
                            console.log(data.msg);
                        }
                        else
                        {  
                            alert(data.msg); 
                            navigate('/signin');    
                        }
                    }
                    catch(error)
                    {
                        alert(error.response.data.msg);
                    }   
                }
                else if(type == 'signin')
                {
                    try {
                        const {data} = await axios.post('http://localhost:3000/api/v1/user/signin',
                            sign
                        )
                        if(data.token)
                        {
                            localStorage.setItem("token", data.token);
                            navigate("/dashboard");
                        }
                    } catch (error) {
                        alert(error.response.data.msg);
                    }
                }
            }}>
                {text}
            </button>
        </div>
    )
}


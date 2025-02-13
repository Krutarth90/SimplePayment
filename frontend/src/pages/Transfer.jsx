import { useSearchParams } from "react-router-dom";
import { Card } from "./Components/Card";
import { useState } from "react";
import axios from "axios";

export function Transfer(){
    const [params] = useSearchParams();
    const name = params.get('fname');
    const id = params.get('id');
    const [Amount, setAmount] = useState(0);
    return (
        <div className="flex justify-center items-center h-screen">
            <Card>
                <div className="font-sans text-2xl font-bold pb-2">
                    SEND MONEY TO
                </div>
                
                <div>
                    <div>
                        {name}
                    </div>
                    <div className="flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md  font-[sans-serif]">
                        <input placeholder="Enter the Amount" className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" onChange={(e) => setAmount(e.target.value)}/>
                    </div>
                    
                </div>
                <div className="flex justify-center bg-black text-slate-200 rounded-lg px-10 py-0.5 shadow-md hover:shadow-lg m-2">
                    <button  onClick={async ()=>{
                        await axios.post('http://localhost:3000/api/v1/account/transfer', {
                            to : id,
                            amount : Amount
                        }, {
                        headers : {
                            authorization : 'Bearer' + ' ' + localStorage.getItem('token')
                        }})
                    }}>Send</button>
                </div>
                
            </Card>
        </div>
    )

}
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function List () {
    const navigate = useNavigate();
    const [list, setlist] = useState([]);
    const [filter, setfilter] = useState('');
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
            headers : {
                authorization : "Bearer " + localStorage.getItem('token')
            }
        }).then(({data}) => {
            setlist(data.users);
            console.log(list);
        })    
    }, [filter])
    return (
        <div className="p-8">
            <div className="py-2 font-semibold">
                Users
            </div>
            <div className="">
                <div className="flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md  font-[sans-serif]">
                    <input type="text" placeholder="Search USers" className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" onChange={async (e) => {
                        setfilter(e.target.value);
                    }}/>
                    
                </div>
                <div>
                    {list.map((user, index) => (
                        <div className="flex justify-between m-2">
                            <div>
                                {user.firstName} {user.lastName}
                            </div>
                            <div>
                                <button className="bg-black text-slate-200 rounded-lg px-10 py-0.5 shadow-md hover:shadow-lg" onClick={()=>{
                                    navigate("/transfer?id=" + user.id + "&fname=" + user.firstName);
                                }}>PAY MONEY</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
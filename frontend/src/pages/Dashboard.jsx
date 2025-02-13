import { useEffect } from "react";
import { Currentbalance } from "./Components/Currentbalance";
import { List } from "./Components/List";
import { Topbar } from "./Components/Topbar";
import axios from "axios";
import { useState } from "react";

export function Dashboard () {
    const [balance, setbalance] = useState(0);
    useEffect(()=> {
        axios.get("http://localhost:3000/api/v1/account/balance", {
        headers: {
            authorization: "Bearer " + localStorage.getItem("token")  // Fix: Add space after "Bearer"
        }}).then((response)=>{
            setbalance(response.data.balance);
        })
    }, []);
    return (

        <div>
            <Topbar/>
            <Currentbalance balance={balance}/>
            <List></List>
        </div>

    )
}
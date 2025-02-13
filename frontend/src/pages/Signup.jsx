import { Bottom } from "./Components/Bootom";
import { Buttoncomp } from "./Components/Buttoncomp";
import { Card } from "./Components/Card";
import { Heading } from "./Components/Heading";
import { Inputbox } from "./Components/Inputbox";
import { fName, lName, password, username } from "./Components/store/atoms";

export function Signup () {

    return (
        <div className="flex items-center justify-center h-screen bg-slate-500">
            <Card>
                <Heading title ='Sign Up' descreption ='Enter the Details'/>
                <Inputbox header ='First Name' placeholder = 'Enter your First Name' setter = {fName}/>
                <Inputbox header ='Last Name' placeholder = 'Enter your Last Name' setter = {lName}/>
                <Inputbox header ='E-mail' placeholder = 'Enter your E-mail' setter = {username}/>
                <Inputbox header ='Password' placeholder = 'Enter a strong Password' setter = {password}/>
                <Buttoncomp text = 'Sign Up' type = 'signup'/>
                <Bottom text = {"Already have an Account? "} toLabel={" Sign in"} to = {"/signin"}/>
            </Card>
        </div>    
    )
}


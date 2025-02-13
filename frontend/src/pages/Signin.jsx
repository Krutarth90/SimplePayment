import { Bottom } from "./Components/Bootom";
import { Buttoncomp } from "./Components/Buttoncomp";
import { Card } from "./Components/Card";
import { Heading } from "./Components/Heading";
import { Inputbox } from "./Components/Inputbox";
import { password, username } from "./Components/store/atoms";

export function Signin () {

    return (
        <div className="flex justify-center">
            <Card>
                <Heading title="Sign In" descreption="Enter the Credentials"/>
                <Inputbox header="E-mail" placeholder="Enter your e-mail" setter={username}/>
                <Inputbox header="Password" placeholder="Enter your password" setter={password}/>
                <Buttoncomp text="Sign In" type = {"signin"}/>
                <Bottom text={"New User?"} to={"/signup"} toLabel={"Sign-Up"} />
            </Card>
        </div>
        
    )
}
import { atom, selector } from "recoil";

export const username = atom ({
    key : "usernae",
    default : ""
})
export const fName = atom ({
    key : "fName",
    default : ""
})
export const lName = atom ({
    key : "lName",
    default : ""
})
export const password = atom ({
    key : "password",
    default : ""
})

export const signUpSelector = selector({
    key : "signUpSelector",
    get : ({get}) => {
        return {
            fName : get(fName),
            lName : get(lName),
            username : get(username),
            password : get(password)
        }
    }
})

export const signInSelector = selector({
    key : "signInSelector",
    get : ({get}) => {
        return {
            username : get(username),
            password : get(password)
        }
    }
})
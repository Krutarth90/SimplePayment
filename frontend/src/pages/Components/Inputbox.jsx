import { useSetRecoilState } from "recoil";

export function Inputbox ({header, placeholder, setter}) {
    const setstate = useSetRecoilState(setter);
    const clicker = (e) => setstate(e.target.value);
    return (
        <div className="p-2">
            <div className="font-medium">
                {header}
            </div>
            <div className="shadow-md rounded-lg ">
                <input placeholder={placeholder} onChange={clicker}/>
            </div>
        </div>
    )
}
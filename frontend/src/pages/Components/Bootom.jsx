import { Link } from "react-router-dom";

export function Bottom ({text, to, toLabel}) {


    return (
        <div className="flex justify-center text-xs">
            <div>
                {text}
            </div>
            <div>
                <Link to = {to}>
                    {toLabel}
                </Link>
            </div>
        </div>
    )
}
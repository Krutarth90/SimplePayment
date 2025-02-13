export function Currentbalance ({balance}) {
    console.log(balance);
    return (
        <div className="p-5 font-semibold">
            Your Balance : {balance}
        </div>
    )
}
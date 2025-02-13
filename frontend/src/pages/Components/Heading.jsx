export function Heading ({title, descreption}) {

    return (
        <div className="pt-2.5">
            <div className="flex justify-center font-sans text-2xl font-bold pb-2">
                {title}
            </div>
            <div className="flex justify-center text-gray-200">
                {descreption}
            </div>
        </div>
    )
}
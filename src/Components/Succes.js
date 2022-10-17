export function Succes ({message}) {

    return <div className="bg-green-100 border-solid border-2
                           border-green-500 text-green-700 
                           text-center px-4 py-4 relative mb-3 
                           text-xl rounded-lg">
        
        <span className="xs:inline block sm:inline block">
        {message}
        </span>
    </div>
}
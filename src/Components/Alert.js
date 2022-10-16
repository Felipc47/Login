export function Alert ({message}) {
return <div 
className="bg-red-100 border-solid border-2
 border-red-500 text-red-700 
 text-center px-4 py-4 relative mb-3 text-xl rounded-lg" >
    <span className="xs:inline block sm:inline block">{message}</span>
</div>
}
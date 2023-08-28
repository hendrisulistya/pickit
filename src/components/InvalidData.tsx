import { Link } from "react-router-dom"


function InvalidData(){
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-sky-200'>
      <h1 className="text-4xl font-semibold mb-4">Invalid Data</h1>
      <p className="text-lg text-gray-600 mb-8">Your Ordered data didn't exist </p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <Link to="/" className="text-black" >Back to Home</Link>
      </button>
      
    </div>
  )
}

export default InvalidData
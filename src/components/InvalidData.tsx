
function InvalidData(){
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-semibold mb-4">Invalid Data</h1>
      <p className="text-lg text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <img src="/path/to/404-image.svg" alt="404 Illustration" className="w-64 h-auto mb-8" />
      <a href="/" className="text-blue-500 underline hover:text-blue-600">Go back to the home page</a>
    </div>
  )
}

export default InvalidData
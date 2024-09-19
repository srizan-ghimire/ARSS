import React,{useState,useEffect} from 'react'

const UserProfile = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-amber-600 to-amber-900 p-4">
      <div className="bg-gray-100 shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Upload Resume</h1>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />

        {file && (
          <p className="mt-4 text-sm text-gray-700">
            File "{file.name}" has been uploaded.
            Please wait...
          </p>
        )}
      </div>
    </div>
  );
}

export default UserProfile

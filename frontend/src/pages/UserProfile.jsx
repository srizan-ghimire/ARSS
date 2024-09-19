import React,{useState,useEffect} from 'react'

const UserProfile = () => {
  const [file, setFile] = useState(null);

  // Handle file upload and auto-download
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  // Automatically trigger download when file is uploaded
  useEffect(() => {
    if (file) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file);
      link.download = file.name;
      link.click();
    }
  }, [file]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Upload Resume to Auto-Download</h1>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />

        {file && (
          <p className="mt-4 text-sm text-gray-700">
            File "{file.name}" has been downloaded automatically.
          </p>
        )}
      </div>
    </div>
  );
}

export default UserProfile

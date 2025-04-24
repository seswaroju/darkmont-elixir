import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5050/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("❌ Failed to connect to backend"));
  }, []);  

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold text-green-600">
        {message || "Connecting to backend..."}
      </h1>
    </div>
  );
}

export default App;

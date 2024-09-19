import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import testService from "./controllers/testcontroller";
import { testinterface } from "./models/test";

function App() {
  const [data, setData] = useState<testinterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await testService.getData();
        setData(result);
      } catch (error) {
        console.error(error); // Log the error for debugging
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data && <h1>{data.message}</h1>} {/* Display the fetched message */}
      </header>
    </div>
  );
}

export default App;

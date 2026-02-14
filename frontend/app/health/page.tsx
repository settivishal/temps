"use client"; // if using app directory

import { useEffect, useState } from "react";

export default function TestBackend() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5173/api/health") // your backend URL
      .then((res) => res.json())
      .then((json) => setData(json.message))
      .catch((err) => setData("Error: " + err.message));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Backend Test</h1>
      <p>{data || "Loading..."}</p>
    </div>
  );
}

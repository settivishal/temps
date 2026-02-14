import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ 
  origin: ["http://localhost:3000"]
}));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json("Backend running");
});

const PORT = 5173;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

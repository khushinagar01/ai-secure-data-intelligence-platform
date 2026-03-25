const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// upload config
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("pdf"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // const dataBuffer = fs.readFileSync(req.file.path);

        // const data = await pdfParse(dataBuffer);

        
        const filePath = req.file.path;
const fileName = req.file.originalname;

let text = "";
let findings = [];
let riskLevel = "low";

// 📄 PDF
if (fileName.endsWith(".pdf")) {
    const dataBuffer = fs.readFileSync(filePath);
    const pdfParse = require("pdf-parse");
    const data = await pdfParse(dataBuffer);
    text = data.text;
} 

// 📜 LOG or TXT
else if (fileName.endsWith(".log") || fileName.endsWith(".txt")) {
    text = fs.readFileSync(filePath, "utf-8");
}
// 🔍 Simple detection
if (text.includes("password")) {
    findings.push({ type: "password", risk: "critical" });
    riskLevel = "high";
}

if (text.includes("api_key")) {
    findings.push({ type: "api_key", risk: "high" });
    riskLevel = "high";
}

if (text.includes("@")) {
    findings.push({ type: "email", risk: "low" });
}
    res.json({
    text: text || "",
    findings: findings,
    risk_level: riskLevel
});

    } catch (err) {
        console.error("ERROR:", err.message);

        res.status(500).json({
            error: err.message
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
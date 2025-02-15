const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(express.json());

// ✅ CORS: Allow all origins (Web & Mobile Support)
app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
}));

// ✅ Handle Preflight Requests for Mobile/Web
app.options("*", (req, res) => res.sendStatus(200));

// ✅ Get Local Network IP (For Mobile Access)
const getLocalIP = () => {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const net of interfaces[name]) {
            if (net.family === "IPv4" && !net.internal) {
                return net.address;
            }
        }
    }
    return "localhost";
};

// ✅ API Route: Get Day of the Week
app.post("/get-day", (req, res) => {
    console.log("📩 Received request:", req.body);
    
    const { date } = req.body;
    if (!date) return res.status(400).json({ error: "Date is required" });

    try {
        const day = new Date(date).toLocaleDateString("en-US", { weekday: "long" });
        res.json({ date, day });
    } catch (error) {
        res.status(500).json({ error: "Invalid date format" });
    }
});

// ✅ Start Server with Dynamic Port & IP
const PORT = process.env.PORT || 5000;
const LOCAL_IP = getLocalIP();

app.listen(PORT, "0.0.0.0", () => 
    console.log(`✅ Server is running at:
    📍 Local: http://localhost:${PORT}  
    📱 Mobile: http://${LOCAL_IP}:${PORT}`)
);
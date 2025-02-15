const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" })); // Allow all origins

// Get local network IP
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

// API Route to get day of the week
app.post("/get-day", (req, res) => {
    console.log("Received request:", req.body); // Debugging
    const { date } = req.body;
    if (!date) return res.status(400).json({ error: "Date is required" });

    const day = new Date(date).toLocaleDateString("en-US", { weekday: "long" });
    res.json({ date, day });
});

const PORT = 5000;
const LOCAL_IP = getLocalIP();

app.listen(PORT, "0.0.0.0", () => 
    console.log(`✅ Server running at:  
    📍 Local: http://localhost:${PORT}  
    📱 Mobile: http://${LOCAL_IP}:${PORT}`)
);

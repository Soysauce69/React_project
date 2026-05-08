const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route
app.get('/api/status', (req, res) => {
    res.json({
        message: "Backend is running successfully!",
        status: "active",
        timestamp: new Date().toISOString(),
        features: ["Express", "CORS", "JSON Parsing"]
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

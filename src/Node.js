import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(process.cwd(), 'bd.json');

app.use(express.json());
app.use(express.static('.')); // Serves index.html and css

// Helper to read data
function readData() {
    try {
        if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]');
        return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    } catch (err) {
        return [];
    }
}

// Get all services
app.get('/api/services', (req, res) => {
    const data = readData();
    res.json(data);
});

// Add a new service
app.post('/api/services', (req, res) => {
    const data = readData();
    const newService = { id: Date.now(), ...req.body, status: 'scheduled' };
    data.push(newService);
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        res.json(newService);
    } catch (err) {
        res.status(500).json({ error: 'Failed to save service.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at
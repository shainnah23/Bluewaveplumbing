import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('.')); // Serves index.html and css

// Get all services
app.get('/api/services', (req, res) => {
    const data = JSON.parse(fs.readFileSync('bd.json', 'utf-8'));
    res.json(data);
});

// Add a new service
app.post('/api/services', (req, res) => {
    const data = JSON.parse(fs.readFileSync('bd.json', 'utf-8'));
    const newService = { id: Date.now(), ...req.body, status: 'scheduled' };
    data.push(newService);
    fs.writeFileSync('bd.json', JSON.stringify(data, null, 2));
    res.json(newService);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
import express from 'express';
import { runMission } from './main';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/navigate', (req, res) => {
    const { input } = req.body;
    
    if (!input || typeof input !== 'string') {
        return res.status(400).json({ error: 'Invalid input. Please provide a string input.' });
    }

    try {
        const result = runMission(input);
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing the input.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
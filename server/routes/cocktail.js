import express from 'express';
import axios from 'axios';
import Base_URL from '../config/default.js';

const router = express.Router(); // Use express.Router for defining routes

router.get('/random',async(req,res)=>{

    try {
        const response = await axios.get(`${Base_URL}/random.php`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching random cocktail:', error.message);
        res.status(500).json({ error: 'Failed to fetch random cocktail' });
    }
})

export default router; 



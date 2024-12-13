import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cocktailRoutes from './routes/cocktail.js';

// Load environment variables
dotenv.config();
const app = express();

// Middleware
app.use(cors());  // Allow cross-origin requests from the frontend
app.use(express.json())  // Parse incoming JSON requests

// Routes
app.use('/api/cocktails',cocktailRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Load environment variables
dotenv.config();

// Database Connection
connectDB();

// Initialize express
const app = express();
// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('API is working!');
  });
  
//API Endpoints
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

//PORT
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
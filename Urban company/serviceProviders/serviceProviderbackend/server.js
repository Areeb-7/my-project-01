import express from 'express';
import connectDB from './dbconnect.js';
import router from './router/router.js';
import cors from 'cors'

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors())

// Middleware
app.use(express.json());

// Routes
app.use('/api/service-providers', router);

// Start server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

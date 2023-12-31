// Dev dependencies
import dotenv from 'dotenv';

// Dependencies
import express from 'express';
import { connectDB } from './src/utils/mongoose.js';
import { errorHandler, handler404 } from './src/middlewares/errorHandler.js';

// Importing routers
import userRouter from './src/routes/user/index.js';

// Constants
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
connectDB(); // Start mongoose
app.use(express.json());

// Routes
app.use('/api/:version/user', userRouter);

// Error handler
app.use(handler404);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

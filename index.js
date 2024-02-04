// Dev dependencies
import dotenv from 'dotenv';

// Dependencies
import express from 'express';
import { connectDB, countUsers } from './src/utils/mongoose.js';
import { errorHandler, handler404 } from './src/middlewares/errorHandler.js';

// Importing routers
import userRouter from './src/routes/user/index.js';
import courseRouter from './src/routes/course/index.js';
import subjectRouter from './src/routes/subject/index.js';
import taskRouter from './src/routes/task/index.js';
import sessionRouter from './src/routes/session/index.js';

// Constants
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
connectDB(); // Start mongoose
app.use(express.json());

// Endpoit to avoid free hostings to sleep (you need to send a request here)
app.get('/api/awake', (req, res) => res.sendStatus(200));
app.get('/api/awake/db', async (req, res) => {
  const users = await countUsers();
  res.json({ users });
});

// Routes
app.use('/api/:version/user', userRouter);
app.use('/api/:version/course', courseRouter);
app.use('/api/:version/subject', subjectRouter);
app.use('/api/:version/task', taskRouter);
app.use('/api/:version/session', sessionRouter);

// Error handler
app.use(handler404);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

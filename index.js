// Dev dependencies
import dotenv from 'dotenv';

// Dependencies
import path from 'path';
import express from 'express';
import cors from 'cors';
import { connectDB, countUsers } from './src/utils/mongoose.js';
import { errorHandler, handler404 } from './src/middlewares/errorHandler.js';
import combineURL from './src/utils/combineURL.js';

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
const corsConfig = { origin: ['http://localhost:5173', process.env.MY_FRONTEND_DEPLOY] };

// Middlewares
connectDB(); // Start mongoose
app.use(cors(corsConfig));
app.use(express.json());

// Endpoit to avoid free hostings to sleep (you need to send a request here)
app.get('/api/verify', (req, res) => res.send('fasty-task-server'));
app.get('/api/verify/db', async (req, res) => {
  const users = await countUsers();
  res.json({ users });
});

// Routes
app.use('/api/:version/user', userRouter);
app.use('/api/:version/course', courseRouter);
app.use('/api/:version/subject', subjectRouter);
app.use('/api/:version/task', taskRouter);
app.use('/api/:version/session', sessionRouter);

// Handle any other API route
app.use('/api/*', handler404);

// Handle front-end or static routes
app.use((req, res) => {
  // If env var for other frontend is not set, serve the default frontend
  const redirectTo = process.env.MY_FRONTEND_DEPLOY_REDIRECT || process.env.MY_FRONTEND_DEPLOY;
  if (!redirectTo) return res.sendFile(path.resolve('public/index.html'));
  return res.redirect(combineURL(redirectTo, req.url));
});
app.use(express.static('public'));

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

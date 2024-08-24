// Dependencies
import path from 'path';
import express from 'express';
import cors from 'cors';
import { connectDB } from './src/utils/mongoose.js';
import { errorHandler, handler404 } from './src/middlewares/errorHandler.js';
import combineURL from './src/utils/combineURL.js';

// Importing routers
import userRouter from './src/routes/user/index.js';
import courseRouter from './src/routes/course/index.js';
import subjectRouter from './src/routes/subject/index.js';
import taskRouter from './src/routes/task/index.js';
import sessionRouter from './src/routes/session/index.js';

// Constants
const app = express();
const PORT = process.env.PORT || 80;
const corsConfig = { origin: ['http://localhost:5173', process.env.MY_FRONTEND_DEPLOY] };

// Middlewares
connectDB(); // Start mongoose
app.use(cors(corsConfig));
app.use(express.json());

// Endpoit to check if the server is running.
app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

// Routes
app.use('/api/:version/user', userRouter);
app.use('/api/:version/course', courseRouter);
app.use('/api/:version/subject', subjectRouter);
app.use('/api/:version/task', taskRouter);
app.use('/api/:version/session', sessionRouter);

// Handle any other API route
app.use('/api/*', handler404);

// Handle front-end and static files
app.use(express.static('public'));
app.use((req, res) => {
  // If env var for other frontend is not set, serve the default frontend
  const redirectTo = process.env.MY_FRONTEND_DEPLOY;
  if (!redirectTo) return res.sendFile(path.resolve('public/index.html'));
  return res.redirect(combineURL(redirectTo, req.url));
});

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

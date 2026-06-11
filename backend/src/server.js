import { app } from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';

// Handle uncaught exceptions globally
process.on('uncaughtException', (err) => {
  console.error('❌ UNCAUGHT EXCEPTION! Shutting down server...');
  console.error(err.name, err.message, err.stack);
  process.exit(1);
});

app.get('/', (req, res) => {
  res.send('Welcome to the SaaS API!');
});

// Connect database
await connectDB();



const server = app.listen(env.PORT, () => {
  console.log(`🚀 SaaS Server running in [${env.NODE_ENV}] mode on port ${env.PORT}`);
});

// Handle unhandled promise rejections globally
process.on('unhandledRejection', (err) => {
  console.error('❌ UNHANDLED REJECTION! Shutting down server gracefully...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

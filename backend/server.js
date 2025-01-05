import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check Auth Cookie Middleware
app.use(cookieParser());

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
    // set root directory
    const __dirname = path.resolve();
    // make frontend a static folder
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    // any route that is not '/api/users' goes to '/frontend/dist/index.html'
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
        res.send('server is ready');
    });
}

// Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

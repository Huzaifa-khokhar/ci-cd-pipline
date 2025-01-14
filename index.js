const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'Service is healthy' });
});

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to our CI/CD demo application!' });
});

// Sample API route
app.get('/api/info', (req, res) => {
    res.json({
        appName: 'CI/CD Demo App',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Handle 404 routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

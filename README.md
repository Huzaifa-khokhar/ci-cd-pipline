
# Node.js CI/CD Pipeline Project

A complete CI/CD pipeline implementation using Node.js, Docker, and Jenkins. This project demonstrates automated building, testing, and deployment of a Node.js application.

## Project Overview

This project sets up a complete CI/CD pipeline that:
- Automatically builds a Node.js application
- Creates Docker containers
- Deploys the application using Jenkins

### Tech Stack

- Node.js
- Express.js
- Docker
- Jenkins
- GitHub

## Project Structure

```
ci-cd-pipeline/
├── index.js           # Main application file
├── package.json       # Node.js dependencies
├── Dockerfile        # Docker configuration
├── Jenkinsfile      # Jenkins pipeline configuration
└── README.md        # Project documentation
```

## Application Details

The application is a basic Node.js/Express server that includes:
- Health check endpoint
- Basic routing
- Error handling
- Docker containerization

## Pipeline Stages

The Jenkins pipeline includes the following stages:
1. Checkout (Source Code)
2. Build (npm install)
3. Docker Build
4. Deploy

## Prerequisites

- Node.js
- Docker
- Jenkins
- Git

## Setup Instructions

### 1. Local Development Setup

```bash
# Clone the repository
git clone https://github.com/Huzaifa-khokhar/ci-cd-pipline.git

# Install dependencies
npm install

# Start the application
node index.js
```

### 2. Docker Setup

```bash
# Build Docker image
docker build -t node-cicd-app .

# Run Docker container
docker run -p 3000:3000 -d node-cicd-app
```

### 3. Jenkins Setup

1. Install required Jenkins plugins:
   - Docker Pipeline
   - GitHub Integration
   - NodeJS Plugin

2. Create new Jenkins Pipeline:
   - Create "New Item"
   - Select "Pipeline"
   - Configure Git repository
   - Set up webhook with GitHub

## Testing

Access the application endpoints:
- Health Check: `http://localhost:3000/health`
- Root Endpoint: `http://localhost:3000`
- Info Endpoint: `http://localhost:3000/api/info`

## Deployment

The application automatically deploys through Jenkins when changes are pushed to the main branch.

## CI/CD Flow

1. Developer pushes code to GitHub
2. GitHub webhook triggers Jenkins pipeline
3. Jenkins pulls the latest code
4. Application is built and tested
5. Docker image is created
6. Application is deployed in container

## Contributing

Feel free to fork this repository and submit pull requests.

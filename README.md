A complete DevOps portfolio project demonstrating Docker, CI/CD with GitHub Actions, and cloud deployment.

## 🚀 Features

- **Full Stack Application**: Node.js + Express + EJS
- **Containerization**: Docker with optimized image
- **CI/CD Pipeline**: GitHub Actions automation
- **Health Monitoring**: Built-in health check endpoints
- **Production Ready**: Environment variable configuration

## 📁 Project Structure
portfolio-app/
├── src/
│ ├── app.js # Main application
│ ├── views/ # EJS templates
│ └── public/ # Static assets
├── tests/ # Test files
├── .github/workflows/ # CI/CD pipelines
├── Dockerfile # Docker configuration
├── package.json # Dependencies
└── README.md # Documentation

text

## 🐳 Docker Commands

```bash
# Build Docker image
docker build -t portfolio-app .

# Run container
docker run -p 3000:3000 -d portfolio-app

# View logs
docker logs <container-id>

# Stop container
docker stop <container-id>
🔄 CI/CD Pipeline
GitHub Actions Workflow:
Test: Automatically runs on every push

Build Docker: Creates optimized Docker image

Deploy Ready: Prepares for cloud deployment

Workflow Status:
https://github.com/YOUR_USERNAME/portfolio-app/actions/workflows/ci-cd.yml/badge.svg

🌐 API Endpoints
Endpoint	Method	Description
/	GET	Home page
/health	GET	Health check
/deployment-info	GET	Deployment details
🚢 Deployment Options
Option 1: Render (Recommended - Free)
Connect GitHub repository to Render

Select "Web Service"

Configure: Docker, Port 3000

Enable auto-deploy

Option 2: Railway
Import GitHub repository

Add Dockerfile

Deploy with one click

🛠️ Local Development
bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build Docker image
npm run docker:build
📊 DevOps Skills Demonstrated
✅ Containerization: Docker

✅ CI/CD: GitHub Actions

✅ Infrastructure as Code: Dockerfile

✅ Monitoring: Health checks

✅ Cloud Deployment: Render/Railway

📝 License
MIT License - feel free to use this project for your portfolio!

👨‍💻 Author
Haram Fatima - DevOps Portfolio Project


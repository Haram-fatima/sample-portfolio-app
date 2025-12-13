
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { 
        title: 'DevOps Portfolio',
        deployment: process.env.NODE_ENV || 'development'
    });
});

app.get('/projects', (req, res) => {
    const projects = [
        {
            name: 'Portfolio App',
            description: 'Complete DevOps pipeline with Docker, CI/CD',
            technologies: ['Node.js', 'Docker', 'GitHub Actions', 'Render']
        },
        {
            name: 'Task Manager API',
            description: 'REST API with authentication',
            technologies: ['Express', 'MongoDB', 'JWT']
        }
    ];
    res.render('projects', { projects });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        service: 'portfolio-app',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString(),
        github_actions: process.env.GITHUB_ACTIONS || 'false'
    });
});

app.get('/deployment-info', (req, res) => {
    res.json({
        docker: 'Containerized',
        ci_cd: 'GitHub Actions',
        deployment: 'Render.com',
        status: 'Live'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
    🚀 DevOps Portfolio App
    🔗 Local: http://localhost:${PORT}
    🔗 Health: http://localhost:${PORT}/health
    📦 Docker: Ready
    ⚡ CI/CD: GitHub Actions
    ☁️  Deploy: Render.com
    
    ✅ Complete DevOps Pipeline!
    `);
});

module.exports = app;


const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes using individual pages
app.get('/', (req, res) => {
    res.render('pages/home', { 
        title: 'Home | DevOps Portfolio'
    });
});

app.get('/about', (req, res) => {
    res.render('pages/home', { 
        title: 'About Me'
    });
});

app.get('/projects', (req, res) => {
    const projects = [
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'A complete portfolio with Docker and CI/CD pipeline',
            techStack: ['Node.js', 'Express', 'Docker', 'GitHub Actions'],
            githubUrl: '#',
            liveUrl: '#'
        },
        {
            id: 2,
            title: 'Task Manager API',
            description: 'REST API with authentication',
            techStack: ['Node.js', 'MongoDB', 'JWT'],
            githubUrl: '#',
            liveUrl: '#'
        }
    ];
    res.render('pages/projects', {
        title: 'My Projects',
        projects: projects
    });
});

app.get('/blog', (req, res) => {
    res.render('pages/home', {
        title: 'Blog'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`🌐 Visit: http://localhost:${PORT}`);
});

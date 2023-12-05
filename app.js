const express = require('express');
const app = express();
const port = 3000;

// Install the EJS template engine
app.set('view engine', 'ejs');

// Array for storing blog articles
const blogPosts = [
   { id: 1, title: 'First article', content: 'This is the content of the first blog article.' },
   { id: 2, title: 'Second article', content: 'This is the content of the second blog article.' }
];

// Route to display all blog articles
app.get('/', (req, res) => {
   res.render('index', { blogPosts });
});

// Route for displaying a single article
app.get('/post/:id', (req, res) => {
   const postId = parseInt(req.params.id);
   const post = blogPosts.find(post => post.id === postId);
   res.render('post', { post });
});

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});

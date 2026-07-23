const express = require("express");

const app = express();

app.use(express.static('public'));

// Home Page
app.get("/", (req, res) => {
    res.send("<h1>🏠 Welcome to My Website</h1>");
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});
// About Page
app.get("/about", (req, res) => {
    res.send(`
        <h1>About Us</h1>
        <p>This website is built using Express.js.</p>
    `);
});

// Contact Page
app.get("/contact", (req, res) => {
    res.send(`
        <h1>Contact Us</h1>
        <p>Email: support@example.com</p>
        <p>Phone: +91 9876543210</p>
    `);
});

// Services Page
app.get("/services", (req, res) => {
    res.send(`
        <h1>Our Services</h1>
        <ul>
            <li>Web Development</li>
            <li>Backend Development</li>
            <li>API Development</li>
        </ul>
    `);
});

// Profile Page
app.get("/profile", (req, res) => {
    res.send(`
        <h1>User Profile</h1>
        <p>Name: Shravan</p>
        <p>Role: Full Stack Developer</p>
    `);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
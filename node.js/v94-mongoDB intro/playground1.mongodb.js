

// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('cources').insertMany([
  {"name": "Shravan","about": "Learning MongoDB","age": 21,"energy": "High"},
  {"name": "Rahul","about": "Java Full Stack Developer","age": 23,"energy": "Medium"},
  {"name": "Priya","about": "React Developer","age": 22,"energy": "High"},
  {"name": "Aman","about": "Preparing for placements","age": 24,"energy": "Low"},
  {"name": "Neha","about": "Learning Express.js and Node.js","age": 20,"energy": "High"},
  {"name": "Rohit","about": "Backend Developer","age": 26,"energy": "Medium"},
  {"name": "Anjali","about": "Building MERN projects","age": 21,"energy": "High"},
  {"name": "Karan","about": "Learning Data Structures","age": 22,"energy": "Medium"},
  {"name": "Sneha","about": "Web Designer","age": 25,"energy": "Low"},
  {"name": "Vikram","about": "Cloud Computing Enthusiast","age": 27,"energy": "High"}
]);



// Print a message to the output window.
console.log("Done inserting");


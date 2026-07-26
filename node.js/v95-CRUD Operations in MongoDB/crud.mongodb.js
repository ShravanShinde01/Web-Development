use('crudDB')

// db.createCollection('mongoCource')

// db.mongoCource.insertMany(
//     [
//   {
//     "name": "Shravan",
//     "age": 21,
//     "gender": "Male",
//     "domain": "Full Stack Java",
//     "branch": "Computer Engineering",
//     "experience": 1,
//     "expertise": "Java"
//   },
//   {
//     "name": "Rahul",
//     "age": 23,
//     "gender": "Male",
//     "domain": "Frontend Development",
//     "branch": "Information Technology",
//     "experience": 2,
//     "expertise": "React"
//   },
//   {
//     "name": "Priya",
//     "age": 22,
//     "gender": "Female",
//     "domain": "Backend Development",
//     "branch": "Computer Engineering",
//     "experience": 3,
//     "expertise": "Node.js"
//   },
//   {
//     "name": "Aman",
//     "age": 24,
//     "gender": "Male",
//     "domain": "Data Science",
//     "branch": "Artificial Intelligence",
//     "experience": 2,
//     "expertise": "Python"
//   },
//   {
//     "name": "Neha",
//     "age": 20,
//     "gender": "Female",
//     "domain": "Web Development",
//     "branch": "Computer Science",
//     "experience": 1,
//     "expertise": "HTML & CSS"
//   },
//   {
//     "name": "Karan",
//     "age": 25,
//     "gender": "Male",
//     "domain": "Android Development",
//     "branch": "Electronics",
//     "experience": 4,
//     "expertise": "Kotlin"
//   },
//   {
//     "name": "Sneha",
//     "age": 23,
//     "gender": "Female",
//     "domain": "Cloud Computing",
//     "branch": "Information Technology",
//     "experience": 3,
//     "expertise": "AWS"
//   },
//   {
//     "name": "Vikram",
//     "age": 27,
//     "gender": "Male",
//     "domain": "DevOps",
//     "branch": "Computer Engineering",
//     "experience": 5,
//     "expertise": "Docker & Kubernetes"
//   },
//   {
//     "name": "Anjali",
//     "age": 22,
//     "gender": "Female",
//     "domain": "Cyber Security",
//     "branch": "Cyber Security",
//     "experience": 2,
//     "expertise": "Ethical Hacking"
//   },
//   {
//     "name": "Rohan",
//     "age": 26,
//     "gender": "Male",
//     "domain": "Machine Learning",
//     "branch": "Artificial Intelligence",
//     "experience": 4,
//     "expertise": "TensorFlow"
//   }

// ])


// db.mongoCource.find({"age": 24})

// db.mongoCource.updateMany({age:22},{$set:{age:24}})

db.mongoCource.deleteMany({age:24})
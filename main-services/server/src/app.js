// app.js
const express = require("express");
const cors = require("cors");
const dbFunctions = require("./controllers/dbFunctions");
const jwt =require('jsonwebtoken');
const bcrypt =require('bcrypt');
const cookieParser=require('cookie-parser')
const PORT = process.env.PORT || 3002;
const app = express();
const jwt_secret_key=';oeukgjhbsrkj.,hndk.jf,hsnfolkehapihfaws';

app.use(express.json());
app.use(cors(
  {
    origin:['http://127.0.0.1:5173'],
    methods:['POST','PUT','UPDATE','DELETE'],
    credentials:true
  }
));
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get("/api/users", (req, res) => {
  dbFunctions.getAllUsers((err, data) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ error: "Database error occurred" });
    }

    return res.status(200).json({ users: data });
  });
});
app.get('/api/video', (req, res) => {
  const videoPath = 'server/src/assets/videos/pexels-cottonbro-5473806 (2160p).mp4'; // Set the path to your video file
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunkSize = (end - start) + 1;
    const file = fs.createReadStream(videoPath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(200, head);
    fs.createReadStream(videoPath).pipe(res);
  }
});
app.get("/api/login", (req, res) => {
  const { email, password } = req.query;
  
  dbFunctions.getUserByEmailAndPassword(email, password, (err, data) => {
    if (err) {
      console.error('Error executing login query:', err);
      return res.status(500).json({ error: "Database error occurred" });
    }

    if (data.length === 1) {
      const id =data[0].id;
      
      // const expiresIn = 60 * 60 * 5; // 5 hours in seconds
      const token=jwt.sign({_id: id},'secret');
     
      res.cookie('token', token, { 
        httpOnly:true,
        // secure: true ,
        maxAge:24 *60 *60 *1000
      });
      return res.status(200).json({ message: "Login successful", user: data[0] });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  });
});
app.post("/api/register", (req, res) => {
  const { firstname,lastname,email, password } = req.body;

  // Hash the password before storing it
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Create an object to pass to the function
  const userData = {
    name: firstname,
    lastname: lastname,
    email: email,
    password: hashedPassword
  };

  dbFunctions.registerUser(userData, (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      return res.status(500).json({ error: "Registration error occurred" });
    }

    return res.status(201).json({ message: "User registered successfully" });
  });
});
app.get("/api/services", (req, res) => {
  
});

app.get("/api/services?id=", (req, res) => {
  
});
app.get("/api/requests", (req, res) => {
  
});

app.get("/api/request?id=", (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


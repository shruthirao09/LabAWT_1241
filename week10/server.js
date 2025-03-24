const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

const mockUser = {
  id: 1,
  username: "testuser",
  password: "password123" 
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== mockUser.username || password !== mockUser.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: mockUser.id, username }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

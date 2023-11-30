import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Assuming you have a User type/interface
interface User {
	email: string;
	password: string;
}

// Assuming a simple in-memory store for users (replace with a real database in production)
const users: Record<string, string> = {};

const app = express();
app.use(express.json());

// Signup endpoint
app.post("/api/signup", async (req: Request, res: Response) => {
	try {
		const user: User = req.body;
		const hashedPassword = await bcrypt.hash(user.password, 10);
		users[user.email] = hashedPassword;
		res.status(201).send("User created");
	} catch (error) {
		res.status(500).send("Error creating user");
	}
});

// Login endpoint
app.post("/api/login", async (req: Request, res: Response) => {
	try {
		const user: User = req.body;
		const storedUserPassword = users[user.email];
		if (
			storedUserPassword &&
			(await bcrypt.compare(user.password, storedUserPassword))
		) {
			const token = jwt.sign({ email: user.email }, "your_jwt_secret", {
				expiresIn: "1h",
			});
			res.json({ token });
		} else {
			res.status(400).send("Invalid credentials");
		}
	} catch (error) {
		res.status(500).send("Error logging in");
	}
});

// Start the server
// const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

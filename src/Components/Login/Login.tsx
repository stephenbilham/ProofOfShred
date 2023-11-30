import { FormEvent, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevent the default form submission
		try {
			const response = await axios.post("/api/login", { email, password });
			// Save the token in local storage or in a cookie
			localStorage.setItem("token", response.data.token);
			console.log(localStorage.getItem("token"), "ya");
			// Redirect the user or do something else upon successful login
			console.log("Login successful, token:", response.data.token);
		} catch (error) {
			return {
				res: null,
				error: error as Error,
			};
		}
	};

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ height: "100vh" }}>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Form onSubmit={handleLogin}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Login
					</Button>
				</Form>
			</div>
		</Container>
	);
};

export default Login;

import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignup = async () => {
		try {
			const response = await axios.post("/api/signup", { email, password });
			console.log(response.data);
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
				<Form onSubmit={handleSignup}>
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
						Sign Up
					</Button>
				</Form>
			</div>
		</Container>
	);
};

export default Signup;

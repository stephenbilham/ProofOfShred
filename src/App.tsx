import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import styles from "./App.module.scss";

const App = () => {
	return (
		<Router>
			<div className={styles.app}>
				<AppNavbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const AppNavbar = () => {
	return (
		<Navbar
			bg="dark"
			variant="dark"
			expand="lg"
			className={styles.navbarContainer}>
			<Navbar.Brand as={Link} to="/">
				SPORTS RANKER
			</Navbar.Brand>
			<Nav className="ms-auto">
				{/* ms-auto will push the Nav items to the right */}
				<Nav.Link as={Link} to="/login">
					Login
				</Nav.Link>
				<Nav.Link as={Link} to="/signup">
					Sign up
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default AppNavbar;

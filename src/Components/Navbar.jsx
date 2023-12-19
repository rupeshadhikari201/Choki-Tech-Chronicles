import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";
import "../App.css";
const Navbar = () => {
	return (
		<Container className="nav-container ">
			<div
				className="logo"
				style={{ position: "relative" }}
			>
				<p className="fw-bolder logo ">
					<span
						style={{
							position: "absolute",
							top: "50%",
							transform: "translateY(-50%)",
						}}
					>
						LOGO
					</span>
				</p>
			</div>
			<div className="center">
				<ul className="list-unstyled d-flex align-items-center m-0 ">
					<li className="c text-decoration-none">
						<Link
							to="/"
							className="text-decoration-none"
							style={{ color: "#5ecc5c" }}
						>
							Home
						</Link>
					</li>
					<li className="c">
						<Link
							to="/services"
							className="text-decoration-none"
							style={{ color: "#5ecc5c" }}
						>
							Services
						</Link>
					</li>
					<li className="c">
						<Link
							to="/products"
							className="text-decoration-none"
							style={{ color: "#5ecc5c" }}
						>
							Products
						</Link>
					</li>
					<li className="c">
						<Link
							to="/team"
							className="text-decoration-none"
							style={{ color: "#5ecc5c" }}
						>
							Team
						</Link>
					</li>
					<li className="c">
						<Link
							to="/blogs"
							className="text-decoration-none"
							style={{ color: "#5ecc5c" }}
						>
							Blogs
						</Link>
					</li>
				</ul>
			</div>
			<div className="cta d-flex gap ">
				<button className="buttonlightgreen }">Login</button>
				<button className="buttongreen">Sign Up</button>
			</div>
		</Container>
	);
};

export default Navbar;

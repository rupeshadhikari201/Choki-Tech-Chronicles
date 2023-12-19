import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					></Route>
					<Route
						path="services"
						element={<Services />}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;

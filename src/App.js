import React from "react";
import Header from "./Header";
import "./App.css";
import SideBar from "./SideBar";
function App() {
	return (
		<div className="app">
			<Header />
			<div className="app__body">
				<SideBar />
			</div>
		</div>
	);
}

export default App;

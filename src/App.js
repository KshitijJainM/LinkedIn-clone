import React from "react";
import Header from "./Header";
import "./App.css";
import SideBar from "./SideBar";
import Feed from "./Feed";
function App() {
	return (
		<div className="app">
			<Header />
			<div className="app__body">
				<SideBar />
				<Feed />
			</div>
		</div>
	);
}

export default App;

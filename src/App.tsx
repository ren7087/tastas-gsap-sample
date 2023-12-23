import Management from "./components/organisms/Management";
import Navbar from "./components/organisms/Navbar";
import Service from "./components/organisms/Service";
import Top from "./components/organisms/Top";

function App() {
	return (
		<>
			<Navbar />
			<Top />
			<Service />
			<Management />
			{/* <Footer /> */}
		</>
	);
}

export default App;

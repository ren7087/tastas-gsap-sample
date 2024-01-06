import Footer from "./components/organisms/Footer";
import Management2 from "./components/organisms/Management2";
import Navbar from "./components/organisms/Navbar";
import Service2 from "./components/organisms/Service2";
import Top from "./components/organisms/Top";
import Welcome from "./components/organisms/Welcome";

function App() {
	return (
		<>
			<Navbar />
			<Top />
			<Service2 />
			<Welcome />
			<Management2 />
			<Footer />
		</>
	);
}

export default App;

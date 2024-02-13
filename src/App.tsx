import Footer from "./components/organisms/Footer";
import Management from "./components/organisms/Management";
import Service from "./components/organisms/Service";
import ServiceSP from "./components/organisms/ServiceSP";
import Top from "./components/organisms/Top";
import Welcome from "./components/organisms/Welcome";

function App() {
  return (
    <>
      <Top />
      <div className="md:hidden">
        <ServiceSP />
      </div>
      <div className="hidden md:block">
        <Service />
      </div>
      <Welcome />
      <Management />
      <Footer />
    </>
  );
}

export default App;

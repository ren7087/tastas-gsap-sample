import Footer from "./components/organisms/Footer";
import Management2 from "./components/organisms/Management2";
import Service2 from "./components/organisms/Service2";
import ServiceSP from "./components/organisms/ServiceSP";
import Top2 from "./components/organisms/Top2";
import Welcome from "./components/organisms/Welcome";

function App() {
  return (
    <>
      <Top2 />
      <div className="md:hidden">
        <ServiceSP />
      </div>
      <div className="hidden md:block">
        <Service2 />
      </div>
      <Welcome />
      <Management2 />
      <Footer />
    </>
  );
}

export default App;

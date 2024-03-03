import "./App.css";
import Footer from "./Components/FooterComponent/Footer";
import Navbar from "./Components/Header/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Home from "./home.jsx";
import Introduction from "./introduction.jsx";
import Contract from "./contract.jsx";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/contract" element={<Contract />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;


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
          <Route path="/itis3135-react/" element={<Home />} />
          <Route path="/itis3135-react/introduction" element={<Introduction />} />
          <Route path="/itis3135-react/contract" element={<Contract />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;



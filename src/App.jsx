import { Routes, Route } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Home from "./home.jsx";
import Introduction from "./introduction.jsx";
import Contract from "./contract.jsx";
import Students from "./student.jsx";   // ⭐ ADD THIS LINE

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/itis3135-react/student" element={<Students />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;


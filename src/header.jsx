import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Long Doan's Loyal Donkey || ITIS 3135</h1>
      <nav>
        <Link to="/">Home</Link> ||
        <Link to="/introduction">Introduction</Link> ||
        <Link to="/contract">Contract</Link> ||
        <Link to="/student">Students</Link>
      </nav>
    </header>
  );
}

export default Header;


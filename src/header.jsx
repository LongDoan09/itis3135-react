import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Long Doan's Loyal Donkey || ITIS 3135</h1>
      <nav>
        <a href="/itis3135-react/">Home</a> ||
        <a href="/itis3135-react/introduction">Introduction</a> ||
        <a href="/itis3135-react/contract">Contract</a> ||
        <a href="/itis3135-react/student">Students</a>

      </nav>
    </header>
  );
}

export default Header;


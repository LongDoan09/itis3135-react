import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Long Doan's Loyal Donkey || ITIS 3135</h1>
      <nav>
        <Link to="/itis3135-react/">Home</Link> |
        <Link to="/itis3135-react/introduction">Introduction</Link> |
        <Link to="/itis3135-react/contract">Contract</Link>
      </nav>
      <hr />
    </header>
  );
}




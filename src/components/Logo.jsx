import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="text-3xl font-bold" to="/">
      <div>Big(O)</div>
    </Link>
  );
}

export default Logo;

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-full flex items-center justify-center gap-x-4  relative  overflow-hidden">
      <Link className="btn btn-primary-nonbordered">instructor</Link>
      <div className="flex gap-x-2">
        <Link to="/login" className="btn btn-primary-border-nav">
          Log in
        </Link>
        <Link className="btn btn-primary-border-nav">Sign up</Link>
      </div>
    </nav>
  );
}

export default Navbar;

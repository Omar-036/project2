import { Link } from "react-router-dom";

function Navbar() {
  const isAuthenticated = false;
  return (
    <nav className="h-full flex items-center justify-center gap-x-4  relative  ">
      <Link className="btn btn-primary-nonbordered">instructor</Link>
      <div className="flex gap-x-2">
        {isAuthenticated ? (
          <div>
            <Link
              to="/"
              className="btn btn-primary-border-nav"
              onClick={() => {
                logout();
              }}
            >
              logout
            </Link>
            <div>
              <img src={`${user.image}`} alt="" />
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-primary-border-nav">
              Log in
            </Link>
            <Link to="/sign-up" className="btn btn-primary-border-nav">
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

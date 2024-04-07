import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className="h-full flex items-center justify-center gap-x-4  relative  overflow-hidden">
      <Link className="btn btn-primary-nonbordered">instructor</Link>
      <div className="flex gap-x-2">
        {isAuthenticated ? (
          <Link
            to="/"
            className="btn btn-primary-border-nav"
            onClick={() => {
              logout();
            }}
          >
            logout
          </Link>
        ) : (
          <>
            <Link to="/login" className="btn btn-primary-border-nav">
              Log in
            </Link>
            <Link className="btn btn-primary-border-nav">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

import { Link, useLocation} from "react-router-dom";
import "./Sidebar.css";
import { useAuth } from "../context/AuthContext";
const Sidebar = ({ open, onClose }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const item = (path, label) => (
    <Link
      to={path}
      className={location.pathname === path ? "nav-link active" : "nav-link"}
      onClick={onClose}
    >
      {label}
    </Link>
  );

  return (
    <>
      <aside className={`sidebar ${open ? "open" : ""}`}>
      <img style={{ width: "200px", height: "100px" }} src="https://zmtrutech.com/wp-content/uploads/2024/04/cropped-zm_logo-removebg-preview.png" alt="Logo" className="logo" />
        <nav className="nav-menu">
          {item("/", "Dashboard")}
          {item("/products", "Products")}
          {item("/subscriptions", "Subscriptions")}
          {item("/calendar", "Calendar")}
        </nav>

        {/* 👤 Profile Section */}
        <div className="profile-section">
          <div className="profile-info">
            <div className="avatar">
              {user?.name.charAt(0)}
            </div>
            <div>
              <p className="username">{user?.name}</p>
              <span className="role">{user?.role}</span>
            </div>
          </div>

          <div className="profile-actions">
            <Link to="/profile" onClick={onClose}>Profile</Link>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </aside>
      {open && <div className="overlay" onClick={onClose} />}
    </>
  );
};

export default Sidebar;

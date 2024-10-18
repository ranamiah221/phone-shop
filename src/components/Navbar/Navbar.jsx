import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 px-5 shadow-lg">
        {/* navbar title */}
      <div>
        <h1 className="text-2xl font-semibold">Phone Shop</h1>
      </div>
      {/* nav links */}
      <nav>
        <ul className="flex items-center gap-5 text-base font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-500 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-500 underline"
                  : ""
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-500 underline"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

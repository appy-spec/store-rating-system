import { NavLink } from "react-router-dom";

const Sidebar = ({ links }) => {
  return (
    <aside
      className="
                w-72
                bg-white
                border-r
                border-gray-200
                min-h-screen
                p-6
            "
    >
      <h1
        className="
                    text-3xl
                    font-bold
                    text-indigo-600
                    mb-10
                "
      >
        Store Rating
      </h1>

      <nav
        className="
                    flex
                    flex-col
                    gap-2
                "
      >
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `
                px-5
                py-3
                rounded-xl
                transition-all
                font-medium
                ${
                    isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-indigo-50"
                }

                `
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

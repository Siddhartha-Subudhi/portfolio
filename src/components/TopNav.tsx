
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Posts", to: "/posts" },
  { name: "Blogs", to: "/blogs" },
  { name: "Courses", to: "/courses" },
];

const TopNav = () => {
  const location = useLocation();
  return (
    <nav className="w-full bg-primary text-white shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 h-16">
        <div className="text-xl font-bold tracking-tight">MyPortfolio</div>
        <ul className="flex space-x-3">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors duration-200 ${
                  location.pathname === item.to
                    ? "bg-white text-primary shadow"
                    : "hover:bg-rose-100 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;

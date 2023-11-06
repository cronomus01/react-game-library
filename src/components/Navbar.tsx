import "./Navbar.css";
import Profile from "./navbar/Profile";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 flex justify-between items-center px-5">
      <div className="flex flex-row gap-2 items-center">
        <h2 className="text-slate-50"></h2>
      </div>
      <Profile></Profile>
    </nav>
  );
};

export default Navbar;

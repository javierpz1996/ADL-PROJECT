import { Link } from "react-router-dom";

export default function NavBarComponent() {
  return (
    <nav className="absolute top-0 z-[9999] w-full bg-transparent px-4 sm:px-6 py-2 sm:py-4 flex items-center mt-3">
      <div className="text-xl sm:text-2xl font-bold text-white mr-6 sm:mr-10">
        <Link to="/">
          <img
            className="w-[75px] sm:w-[100px]"
            src="/LogoADL1.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div
        style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
        className="flex flex-wrap sm:flex-nowrap space-x-4 sm:space-x-6 text-lg sm:text-2xl text-gray-200"
      >
        <Link to="/podio" className="hover:text-gray-300 transition">
          PODIO
        </Link>
        <Link to="/reglamento" className="hover:text-gray-300 transition">
          GUIA
        </Link>
      </div>
    </nav>
  );
}

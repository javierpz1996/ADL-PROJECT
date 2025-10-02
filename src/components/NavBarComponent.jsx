import { Link } from "react-router-dom";

export default function NavBarComponent() {
  return (
    <nav className="absolute top-0 z-[9999] w-full bg-transparent px-4 sm:px-6 py-2 sm:py-4 flex items-center mt-3">
      {/* Logo */}
      <div className="text-xl sm:text-2xl font-bold text-white">
        <img
          className="w-[40px] sm:w-[65px]"
          src="https://media.discordapp.net/attachments/1398776532733788251/1423382773523152967/hd-dota-2-official-white-logo-symbol-png-7017516947882886xthtjd1ji_1.png?ex=68e01c02&is=68deca82&hm=db0fb3c10680d4da158c019ff9a1750b593119cf478bc6876e898187412fb10b&=&format=webp&quality=lossless"
          alt="Logo"
        />
      </div>

      {/* Links */}
      <div
        style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
        className="flex flex-wrap sm:flex-nowrap space-x-4 sm:space-x-6 pl-4 text-lg sm:text-2xl text-gray-200"
      >
        <Link to="/" className="hover:text-gray-300 transition">
          GUIA
        </Link>
        <Link to="/contact" className="hover:text-gray-300 transition">
          PODIO
        </Link>
        <Link to="/contact" className="hover:text-gray-300 transition">
          REGLAMENTO
        </Link>
      </div>
    </nav>
  );
}

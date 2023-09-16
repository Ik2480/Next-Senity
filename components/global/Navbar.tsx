
import Image from "next/image";
import Link from "next/link";
import Name from "../icons/name.png";
import DropdownMenu from "../Hamburger";



export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-blue-800 z-30 sticky top-0 bg-blue-400 text-white md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Name} width={40} height={40} alt="logo" />
        </Link>
        <nav>
          <DropdownMenu />
        </nav>
      </div>
    </header>
  );
}
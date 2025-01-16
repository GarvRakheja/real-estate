import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-[#d7242a] text-white px-6 py-4 shadow-md">
      <Link href="/">
        <button className="container mx-auto flex items-center">
          <FaHome className="text-2xl mr-2 cursor-pointer" />
          <h1 className="text-2xl font-bold cursor-pointer">RealEstate</h1>
        </button>
      </Link>
    </nav>
  );
}

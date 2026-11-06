
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-3 bg-[#FAF9F6]/85 backdrop-blur-md border-b border-[#E8DDCC] shadow-sm">

            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="TechNova Logo"
                    width={150}
                    height={60}
                    className="h-14 w-auto object-contain"
                    priority
                />
            </Link>

            {/* Navigation Links */}
            <ul className="flex items-center gap-8">
                <li className="text-[#302B25] text-lg font-medium hover:text-[#B18B5E] transition">
                    <Link href="/">Home</Link>
                </li>

                <li className="text-[#302B25] text-lg font-medium hover:text-[#B18B5E] transition">
                    <Link href="/about">About</Link>
                </li>

                <li className="text-[#302B25] text-lg font-medium hover:text-[#B18B5E] transition">
                    <Link href="/services">Services</Link>
                </li>

                <li className="text-[#302B25] text-lg font-medium hover:text-[#B18B5E] transition">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

            {/* Button */}
            <Link
                href="/contact"
                className="rounded-lg bg-[#302B25] text-white px-5 py-3 font-semibold hover:bg-[#B18B5E] transition duration-300"
            >
                Get Started
            </Link>

        </nav>
    );
}

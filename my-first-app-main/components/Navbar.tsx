import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center 	bg-header">
            <h1 className="text-2xl font-bold py-8 px-10 ">Asim Website</h1>

            <ul className=" flex items-center gap-8 ">
                <li className="text-lg font-medium hover:text-purple-500"><Link href="/">Home</Link></li>
                <li className="text-lg font-medium hover:text-purple-500"><Link href="/about">About</Link></li>
                <li className="text-lg font-medium hover:text-purple-500"><Link href="/services">Services</Link></li>
                <li className="text-lg font-medium hover:text-purple-500"><Link href="/contact">Contact</Link></li>
            </ul>

            <button className="rounded-lg bg-[#8B5CF6] px-5 py-2 font-semibold hover:bg-blue-700">
                Get Started
            </button>

        </nav>
    );
}
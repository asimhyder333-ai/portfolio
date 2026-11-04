import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center ">
            <h1 className="text-2xl font-bold py-8 px-10">Asim Website</h1>

            <ul className=" flex items-center gap-8">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

            <button className="rounded-lg bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700">
                Get Started
            </button>

        </nav>
    );
}
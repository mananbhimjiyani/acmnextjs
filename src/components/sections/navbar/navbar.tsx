import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-300 hover:bg-black">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <a className="text-white text-2xl font-bold hover:text-white hover:cursor-pointer">
                        Your Logo
                    </a>
                {/* Add your navigation links here */}
                <div className="space-x-4">
                        <a className="text-white hover:cursor-pointer">About</a>
                        <a className="text-white hover:cursor-pointer">Services</a>
                        <a className="text-white hover:cursor-pointer">Contact</a>
                </div>
            </div>
        </nav>
    );
}

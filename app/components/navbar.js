

export default function Navbar() {
    return (
        <nav className="backdrop-filter sticky backdrop-blur-sm p-4 h-24">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-shrink-0 flex items-center">
                        <img className="h-12 m-2 ml-4 w-auto" src="/assets/logo-light.webp" alt="Restaurant Logo" />
                    </div>
                <div>
                    <a href="/" className="text-gray-300 hover:text-white text-[26px] mx-4">Home</a>
                    <a href="/menu" className="text-gray-300 hover:text-white text-[26px] mx-4">Menu</a>
                    <a href="/about" className="text-gray-300 hover:text-white text-[26px] mx-4">About</a>
                    <a href="/contact" className="text-gray-300 hover:text-white text-[26px] mx-4">Contact</a>
                </div>
            </div>
        </nav>
    );
}
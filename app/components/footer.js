export default function Footer() {
    return (
        <footer className="backdrop-filter sticky backdrop-blur-sm p-4 h-24 mt-8">
            <div className="container mx-auto text-center items-center text-gray-300">
                        <img className="h-12 mb-[10px] m-auto w-auto" src="/assets/logo-light.webp" alt="Restaurant Logo" />
                &copy; Copyright {new Date().getFullYear()} RESTAN. All rights reserved.
            </div>
        </footer>
    );
}


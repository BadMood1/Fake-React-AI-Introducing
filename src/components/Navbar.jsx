import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMobalMenuOpened, setIsMobalMenuOpened] = useState(false);

    return (
        <nav
            className="fixed top-0 w-full z-50 transition-all duration-300
    bg-slate-950/20 backdrop-blur-sm border-b"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 transition-resize duration-300 ">
                    <div className="flex items-center gap-x-2 group cursor-pointer">
                        <div>
                            <img src={logo} alt="BadMood" className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Bad</span>
                            <span className="text-blue-400">Mood</span>
                        </span>
                    </div>
                    {/* Nav Links */}
                    <div
                        className="hidden md:flex items-center gap-x-6 lg:gap-x-9 text-gray-300 [&_a]:hover:text-white
                    text-sm lg:text-base"
                    >
                        <a href="#features">Features</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#testimonials">Testimonials</a>
                    </div>

                    <button
                        className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer"
                        onClick={() => setIsMobalMenuOpened((prev) => !prev)}
                    >
                        {isMobalMenuOpened ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobalMenuOpened && (
                <div
                    className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in 
                    slide-in-from-top duration-300 z-0"
                >
                    <div
                        className="flex flex-col px-4 py-4 sm:py-6 gap-y-3 sm:gap-y-4 text-gray-300 [&_a]:hover:text-white
                    text-sm lg:text-base"
                    >
                        <a href="#features" onClick={() => setIsMobalMenuOpened(false)}>
                            Features
                        </a>
                        <a href="#pricing" onClick={() => setIsMobalMenuOpened(false)}>
                            Pricing
                        </a>
                        <a href="#testimonials" onClick={() => setIsMobalMenuOpened(false)}>
                            Testimonials
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import logo from "../assets/logo.png";

const footerLinks = {
    Product: [
        "Core Features",
        "Pricing Plans",
        "Security & Privacy",
        "Development Roadmap",
        "Latest Updates",
    ],
    Company: ["Our Story", "Company Blog", "Join Our Team", "Media Kit", "Partner Network"],
    Resources: [
        "Documentation",
        "Support Center",
        "User Community",
        "Developer API",
        "System Status",
        "Learning Resources",
    ],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Software Licenses", "Compliance Info"],
};

export default function Footer() {
    console.log(
        Object.entries(footerLinks).map(([category, links]) => {
            console.log(category, "LINKS:", links);
        })
    );
    return (
        <footer>
            <div className="border-slate-800 border-t">
                <div className="hidden sm:flex gap-x-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                    {/* Left side */}
                    <div className="flex-1">
                        <div className="flex items-center gap-x-2 cursor-default mb-3">
                            <div>
                                <img src={logo} alt="BadMood" className="w-4 h-4 sm:w-6 sm:h-6" />
                            </div>
                            <span className="text-base sm:text-xl font-bold">
                                <span className="text-white">Bad</span>
                                <span className="text-blue-400">Mood</span>
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6 sm:mb-8">
                            Revolutionize your workflow with intelligent automation and AI-driven tools.
                            Engineered for forward-thinking teams.
                        </p>
                        <div className="flex gap-x-2 sm:gap-x-3">
                            <a href="#" className="p-2 bg-slate-800 rounded-lg">
                                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg">
                                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg">
                                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg">
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 flex-2">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div className="flex flex-col gap-3">
                                <h1 className="font-bold mb-2">{category}</h1>
                                {links.map((link) => (
                                    <a href="#" className="text-gray-400">
                                        {link}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-slate-800">
                <div
                    className="flex flex-col gap-y-3 items-center md:flex-row justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 
                mb-5 text-gray-400 max-sm:text-xs"
                >
                    <p>© 2025 BadMood AI. All rights reserved.</p>
                    <div className="flex gap-x-4 md:gap-x-4 lg:gap-x-6 xl:gap-x-8">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

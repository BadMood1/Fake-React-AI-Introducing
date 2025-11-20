import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeExamples, floatingCards } from "../data/CodeExamples";

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });
    const [activeTab, setActiveTab] = useState("App.jsx");

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const currentFloatingCard = floatingCards[activeTab];

    return (
        <section
            className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 
        px-4 sm:px-6 lg:px-6 overflow-hidden mt-4 "
        >
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
                }}
            ></div>

            <div className="absolute top-30 left-4 sm:left-10 md:left-20 lg:left-30 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-30 right-4 sm:right-10 md:right-20 lg:right-35 xl:right-50 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto text-center relative w-full">
                <div
                    className="max-w-7xl mx-auto flex flex-col text-center lg:text-left lg:grid lg:grid-cols-2 gap-6
                sm:gap-8 lg:gap-12 items-center relative"
                >
                    {/* Section with presenting text */}
                    <div>
                        <div
                            className="inline-flex gap-x-2 px-3 sm:px-4 py-2 bg-blue-500/15 
                        border border-blue-500/25 rounded-full items-center mb-4 sm:mb-6
                        slide-in-from-bottom animate-in duration-700"
                        >
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-xs sm:text=sm text-blue-300">Introducing BadMood AI</span>
                        </div>

                        <h1
                            className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold 
                        mb-4 sm:mb=6 slide-in-from-bottom animate-in duration-700 anim-delay-200"
                        >
                            <span
                                className="bg-linear-to-r from-cyan-400 via-blue-700 to-cyan-400
                            bg-clip-text text-transparent mb-1 sm:mb-2 block"
                            >
                                Code Faster
                            </span>
                            <span
                                className="bg-linear-to-b from-blue-700 via-cyan-500 to-blue-700
                            bg-clip-text text-transparent mb-1 sm:mb-2 block"
                            >
                                Build Better
                            </span>
                            <span
                                className="bg-linear-to-r from-blue-900 via-blue-400 to-cyan-400
                            bg-clip-text text-transparent mb-1 sm:mb-2 block"
                            >
                                With <span className="border-b-2 border-blue-400">BadMood AI</span>
                            </span>
                        </h1>

                        <p
                            className="text-md mt-6 sm:text-base lg:text-lg text-blue-300/50 max-w-2xl
                        mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 anim-delay-400
                        leading-relaxed"
                        >
                            Accelerate your development workflow with intelligent code completion, automated
                            testing, and smart debugging. Ship production-ready code 10x faster.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row items-center justify-center
                        lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom
                        duration-700 anim-delay-600"
                        >
                            <button
                                className="group w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4
                            bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold
                            text-sm sm:text-base transition-transform duration-300 hover:scale-102 flex
                            items-center justify-center gap-x-1"
                            >
                                <span>Start Coding Free</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>

                            <button
                                className="group w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4
                            bg-white/5 backdrop-blur-sm rounded-lg font-semibold
                            text-sm sm:text-base transition-all duration-300 hover:bg-white/10 hover:scale-102 flex
                            items-center justify-center gap-x-1"
                            >
                                <div className="">
                                    <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-113 group-hover:-translate-x-1 transition-transform duration-300" />
                                </div>
                                <span>Watch Demo</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative order-2 w-full">
                        <div
                            className="relative bg-white/5 backdrop-blur-xl rounded-xl
                             sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10
                         hover:border-blue-600/50 hover:border duration-300"
                        >
                            <div
                                className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px]
                    lg:h-[450px] border border-white/5"
                            >
                                {/* IDE HEADER */}
                                <div className=" flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                                    <div className="flex gap-x-2 items-center">
                                        <div className="flex gap-x-1 sm:gap-x-2 items-center">
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-300">BadMood AI</span>
                                    </div>
                                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                </div>
                                <div className="p-3 sm:p-4 relative h-full">
                                    {/* file tabs */}
                                    <div className="flex gap-x-1 sm:gap-x-2 mb-3 sm:mb-4 overflow-x-auto">
                                        <button
                                            className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg
                                border ${
                                    activeTab === "App.jsx"
                                        ? "bg-blue-500/30 text-white border-blue-400/20"
                                        : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20 "
                                } transition-all duration-200 whitespace-nowrap`}
                                            onClick={() => setActiveTab("App.jsx")}
                                        >
                                            App.jsx
                                        </button>
                                        <button
                                            className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg
                                border ${
                                    activeTab === "Hero.jsx"
                                        ? "bg-blue-500/30 text-white border-blue-400/20"
                                        : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20 "
                                } transition-all duration-200 whitespace-nowrap`}
                                            onClick={() => setActiveTab("Hero.jsx")}
                                        >
                                            Hero.jsx
                                        </button>
                                        <button
                                            className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg
                                border ${
                                    activeTab === "Navbar.jsx"
                                        ? "bg-blue-500/30 text-white border-blue-400/20"
                                        : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20 "
                                } transition-all duration-200 whitespace-nowrap`}
                                            onClick={() => setActiveTab("Navbar.jsx")}
                                        >
                                            Navbar.jsx
                                        </button>
                                    </div>

                                    {/* Code Content */}
                                    <div className="relative overflow-hidden grow">
                                        <SyntaxHighlighter
                                            language="javascript"
                                            style={nightOwl}
                                            customStyle={{
                                                margin: 0,
                                                paddingLeft: "20px",
                                                borderRadius: "8px",
                                                fontSize: "11px",
                                                lineHeight: "1.4",
                                                height: "100%",
                                                border: "1px solid #3c3c3c",
                                            }}
                                        >
                                            {codeExamples[activeTab]}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Cards */}
                            <div
                                className={`hidden lg:block absolute bottom-4 right-4 transform
                        translate-x-8 translate-y-8 w-72 ${currentFloatingCard.bgColor} 
                        backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}
                            >
                                <div className="flex items-centered gap-x-2 mb-2">
                                    <div
                                        className={`w-6 h-6 ${currentFloatingCard.iconColor} flex items-center
                            justify-center text-sm font-bold`}
                                    >
                                        {currentFloatingCard.icon}
                                    </div>
                                    <span className={`text-sm font-medium ${currentFloatingCard.textColor}`}>
                                        {currentFloatingCard.title}
                                    </span>
                                </div>

                                <div className={`text-sm ${currentFloatingCard.contentColor}`}>
                                    {currentFloatingCard.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

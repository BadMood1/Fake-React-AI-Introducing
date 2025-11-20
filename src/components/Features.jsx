import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const features = [
    {
        title: "AI Code Completion",
        description:
            "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
        codeSnippet: `function handleSubmit() {
        // AI suggests next line
        const data = await fetch("/api/submit")
        // Auto-completed by AI
        }`,
        imagePosition: "left",
    },
    {
        title: "Automated Testing",
        description:
            "Streamline your testing workflow with AI-generated test cases and execution. Automatically detect edge cases, generate unit tests, and ensure comprehensive code coverage with minimal manual effort.",
        codeSnippet: `describe("User Authentication", () => {
    // Автоматически сгенерированные тесты
    it("should login successfully", () => {
    // Реализация теста
    })
}`,
        imagePosition: "right",
    },
    {
        title: "Smart Debugging",
        description:
            "Identify and fix bugs efficiently with AI-powered diagnostics. Get precise error analysis, step-by-step debugging guidance, and automated solutions for common programming issues.",
        codeSnippet: `// AI предлагает исправление:
const result = await processData(input)
// Исправлено: Добавлен ключевое слово await`,
        imagePosition: "left",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent">
                            Your Complete Development
                        </span>
                        <br />
                        <span className="bg-linear-to-b from-blue-500 to-cyan-300 bg-clip-text text-transparent">
                            Workflow
                        </span>
                    </h2>
                </div>

                <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                    {features.map((feature, key) => (
                        <div
                            key={key}
                            className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12
                        ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}
                        >
                            {/* Code Section */}
                            <div className="flex-1 w-full">
                                <div className="relative group">
                                    <div
                                        className="absolute inset-0 bg-linear-to-br frou-blue-500/20 to-purple-500/20
                                    rounded-xl sm:rounded-2xl"
                                    />
                                    <div
                                        className="relative bg-white/5 backdrop-blur-xl     
                                rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border
                                group-hover:border-blue-600/50 transition-colors duration-300 shadow-2xl border border-white/10"
                                    >
                                        {/* Ide Interface */}
                                        <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                                            <div className="flex items-center gap-x-1 sm:gap-x-2 mb-3 sm:mb-4">
                                                <div className="flex gap-x-1 sm:gap-x-2 items-center">
                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                                                </div>
                                                <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                                                    {feature.title}
                                                </span>
                                            </div>
                                            <div>
                                                <SyntaxHighlighter
                                                    language="javascript"
                                                    style={nightOwl}
                                                    customStyle={{
                                                        margin: 0,
                                                        paddingLeft: "20px",
                                                        background: "transparent",
                                                        borderRadius: "8px",
                                                        fontSize: "0.75rem",
                                                        lineHeight: "1.4",
                                                        height: "100%",
                                                    }}
                                                    wrapLines={true}
                                                >
                                                    {feature.codeSnippet}
                                                </SyntaxHighlighter>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="flex-1 w-full">
                                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                                    <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300 text-xl sm:text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

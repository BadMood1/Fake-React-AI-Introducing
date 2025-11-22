import person1 from "../assets/persons/person1.jpg";
import person2 from "../assets/persons/person2.jpg";
import person3 from "../assets/persons/person3.jpg";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Senior Developer",
        image: person1,
        content:
            "This platform completely transformed my development workflow. I'm now shipping code 3x faster with significantly fewer bugs.",
    },
    {
        name: "Bill Gates",
        role: "Founder of Microsoft",
        image: person2,
        content:
            "The AI-powered code assistance is revolutionary. This is exactly the kind of innovation that pushes the entire software industry forward.",
    },
    {
        name: "Elon Musk",
        role: "CEO of Tesla & SpaceX",
        image: person3,
        content:
            "Incredible productivity gains. Our engineering team adopted this tool and immediately saw a 40% reduction in development time.",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
                    {/* Left side - Header */}
                    <div className="lg:w-1/2 w-full text-center lg:text-left">
                        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            What developers are saying about us
                        </h2>
                        <p className="text-gray-400 text-xl sm:text-lg max-w-2xl mx-auto">
                            Everything you need to build, test, and deploy applications with AI-powered
                            development tools.
                        </p>
                    </div>

                    {/* Right side - Testimonials */}

                    <div className="lg:w-1/2 w-full space-y-4 sm:space-y-6 lg:space-y-8">
                        {testimonials.map((testimonial, key) => (
                            <div
                                key={key}
                                className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm
                            border border-slate-800 rounded-xl sm:rounded-2xl"
                            >
                                <div className="flex items-start gap-x-3 sm:gap-x-4">
                                    <div className="shrink-0">
                                        <div
                                            className="text-2xl sm:text-3xl lg:text-4xl font-bold
                                        bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                                        >
                                            "
                                        </div>
                                    </div>
                                    <div className="grow">
                                        <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                                            {testimonial.content}
                                        </p>
                                        <div className="flex items-center gap-x-2 sm:gap-x-3">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full"
                                            />
                                        </div>
                                        <h4 className="font-semibold text-white text-sm sm:text-base">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

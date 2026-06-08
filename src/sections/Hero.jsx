import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* bg */}
            <div className="absolute inset-0">
                <img src="/paisaje.jpeg" alt="alt hero image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* green dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => {
                    <div className="absolute w-1.5h h-1.5h rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }} />
                })}
            </div>

            {/* section */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* left column -text content */}
                    <div className="space-y-8">
                        <div className="animation-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Software Enginer - Full Stack Developer
                            </span>
                        </div>
                        {/* headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    precision.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animated-fade-in animation-delay-200">
                                Hi, Alejandro here. I described myself as software engineer specialized in React, Javascript with profesional experiencies in frontend projects, currently looking for new goals and looking to improv my backend experience.
                            </p>
                        </div>
                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                            <AnimatedBorderButton />
                        </div>
                        {/* social links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me:</span>
                            {[
                                { icon: ``, href: "" },
                                { icon: ``, href: "#" },
                                { icon: ``, href: "#" },
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">{<social.icon className="w-5 h-5" />}</a>
                            ))}
                        </div>
                    </div>
                    {/* right column - text content */}
                </div>
            </div>
        </section>
    );
}
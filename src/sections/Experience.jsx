import { ExperienceCard } from "@/components/ExperienceCard";
import experiencies from "@/data/experiencies.json";

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="container mx-auto px-6 relative z-10">
                {/* section header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secundary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Career Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secundary-foreground">
                        Experience that {" "}
                        <span className="font-serif italic font-normal text-white">
                            {" "}speaks volumes.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A timeline of my professional growth, from curious begineer to senior engineer leading teams and building products at scale
                    </p>
                </div>
                {/* timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32, 178, 166, 0.8)]" />
                    {/* experience items */}
                    <div className="space-y-12">

                        {experiencies.map((exp, idx) => (
                            <ExperienceCard
                                key={exp.company}
                                exp={exp}
                                i={idx}
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
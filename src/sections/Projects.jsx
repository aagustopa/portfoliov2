import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ProjectCard } from "@/components/ProjectCard";
import projects from "@/data/projects.json";

export const Projects = () => {
    return <section id="projects" className="py-32 relative overflow-hidden">
        {/* bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* section header */}
            <div className="text-center mx-auto mx-w-3xl mb-16">
                <span text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in>Feature work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secundary-foreground">
                    Projects that
                    <span className="font-serif italic font-normal text-white">
                        {" "}
                        make an impact.
                    </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">A section of my recent work, from complex web applications to innovative tools that solve rea-world problems.</p>
            </div>

            {/* projects grid */}
            {/* on big screens should show projects in 2 cols, in small should be 1 cols */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        project={project}
                        style={{ animationDelay: `${(i + 1) * 100}ms` }}
                    />
                ))}
            </div>
            {/* view all cta (call to action)*/}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton>
                    View All Projects
                    <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>
            </div>
        </div>
    </section>;
}
const experiencies = [
    {
        period: "2021-2025",
        role: "Frontend Engineer",
        company: "Vasava - Mango",
        description: "cositas",
        technologies: ["React", "Javascript", "SASS", "CMS", "PHP"],
        current: false,
    },
    {
        period: "2020-2021",
        role: "Full Stack Developer",
        company: "Sigma",
        description: "cositas",
        technologies: ["Java", "Javascript", "Spring", "CMS", "PHP"],
        current: false,
    },
    {
        period: "2015-2020",
        role: "Checking Agent",
        company: "BC Tours",
        description: "cositas",
        technologies: ["React", "Javascript", "SASS", "CMS", "PHP"],
        current: false,
    },
]

export const Experience = () => {
    return (
        <section id="experiencie" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="container mx-auto px-6 relative z-10">
                {/* section header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secundary-foreground text-sm font-medium tracking-wider uppercase animatae-fade-in">
                        Career Journey
                    </span>
                    <h2>
                        Experience that <span>speaks volumes.</span>
                    </h2>
                </div>
            </div>
        </section>
    );
}
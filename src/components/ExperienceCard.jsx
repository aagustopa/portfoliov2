export const ExperienceCard = ({ exp, i, style }) => {
    return (
        <>
            <div className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={style} >
                {/* timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">{exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                )}
                </div>
                {/* content */}
                <div className={`pl-8 md:pl-0 ${i % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:col-start-2 md:pl-16"
                    }`}>
                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground mt-4">{exp.company}</p>
                        <p>{exp.description}</p>
                        <div className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0
                            ? "md:justify-end"
                            : ""
                            }`}>
                            {exp.technologies.map((tech, techIdx) => (
                                <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
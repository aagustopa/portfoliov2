import { Code2, Rocket, Users, Lightbulb } from 'lucide-react';

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
];


export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* left column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secundary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Builiding the future
                            <span className="font-serif italic font-normal text-white">
                                {" "} one component at a time.
                            </span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est omnis accusantium eveniet odio cupiditate fugiat corporis tenetur illo deserunt sit. Nisi, excepturi iusto debitis molestias ducimus repellendus. Laudantium, suscipit accusantium.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam provident tenetur excepturi quia quas molestias ducimus soluta culpa nesciunt deserunt voluptas, rem eaque est voluptate, porro a magni illo cumque?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cumque consequuntur tenetur, soluta tempore adipisci odit earum in ab quos nobis sunt, vel error, nam nostrum beatae magnam ea quas.</p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
                            <p className="text-lg font-medium italic text-foreground">My mission is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis accusamus atque vitae ut, fugit voluptates tenetur sequi cumque velit ipsam odio quae deleniti explicabo consequatur, ipsa cum sunt necessitatibus architecto?</p>
                        </div>
                    </div>
                    {/* right colum - highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div key={index} className="glass p-6 rounded-2xl animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                                    <item.icon className='w-6 h-6 text-primary' />
                                </div>
                                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                                <p className='text-sm text-muted-foreground'>{item.description}</p>
                            </div>
                            // <span key={index}>{item.description}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
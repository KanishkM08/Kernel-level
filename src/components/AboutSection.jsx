import { Briefcase, ShieldPlus, User } from "lucide-react";


export const AboutSection= () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className = "container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className="text-primary"> Me </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">What fuels me?</h3>
                    <p className="text-muted-foreground"> I'm an engineering student focused on Cybersecurity, low-level programming and software development. I work best where code meets coordination—handling databases, workflows, and real-world tech ops with speed and clarity. I'm building toward a global career in computer science, with a growing interest in securing critical systems.</p>
                    <div className="flex flex-col sm: flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>
                        <a href="https://drive.google.com/file/d/17VaB7Q5Dj0pUYB2_bibHpqVrD75TXVkS/view?usp=sharing" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 translation-colors duration-300">
                            {" "}
                            Download CV
                        </a>
                    </div>
                </div>

                <div className = "grid grid-cols-1 gap-6">
                    <div className="gradient-border px-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <ShieldPlus className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">CyberSecurity</h4>
                                <p className="text-muted-foreground">
                                    I'm deeply interested in cybersecurity. I'm currently learning how operational technology (OT), IoT, and IIoT devices can be protected from modern cyber threats.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border px-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Operations Lead</h4>
                                <p className="text-muted-foreground">
                                    As the Inventory and Logistics Lead for 
                                    <a href="https://www.linkedin.com/company/team-gigawatt/" className="text-primary/80" target="_blank"> Team GigaWatt </a>
                                    at BITS Goa, I manage the end-to-end flow of materials required for manufacturing our student-built EV. My role includes compiling system-wide BOMs, coordinating with vendors, handling procurement, and ensuring timely availability of parts during critical build phases.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
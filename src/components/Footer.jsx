import {ArrowUp} from "lucide-react";


export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t text-foreground mt-12 pt-8 flex flex-wrap justify-between items-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between space-y-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Kanishk Malhotra. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://github.com/KanishkM08" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/kanishk-malhotra0803" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                    <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-purple scroll-smooth duration-300">
                        <ArrowUp size={20}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

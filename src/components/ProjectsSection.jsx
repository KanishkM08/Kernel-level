import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";
const projects = [
    {
        id: 1,
        title: "Keylogger",
        description: "Stores Keystrokes information, screenshots, system info of your device.",
        image: "https://www.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/Keyloggers%20What%20They%20Are/What_is_a_Keylogger-Hero.jpg?width=1200&name=What_is_a_Keylogger-Hero.jpg",
        link: "https://github.com/KanishkM08/KeyLogger",
        tags: ["Cybersecurity", "Python", "Keylogger"]
    },
        {
        id: 2,
        title: "Youtube Downloader",
        description: "Youtube Video and Audio Downloader(720p) using pytube.",
        image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91dHViZSUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D",
        link: "https://github.com/KanishkM08/yt-downloader",
        tags: ["Python"]
    },
        {
        id: 3,
        title: "Ceasar Cipher decryption",
        description: "monoalphabetic substitution cipher decoder(key = 3 for breaking ceaser cipher)",
        image: "https://ik.imagekit.io/edtechdigit/uscsi/Content/images/articles/a-brief-guide-on-cryptography-technology-for-cybersecurity.jpg",
        link: "https://github.com/KanishkM08/shift_cipher_break",
        tags: ["Python", "Cryptography"]
    }
]

export const ProjectsSection = () => {
  return (
    <section id = "projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Here are some of my notable projects that showcase my skills and expertise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
                >
                    <div className="h-48 overflow-hidden">
                        <img src={project.image}
                             alt={project.title}
                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                
                    <div className="p-6">
                    <div className="flex flex-wrap gap-1 mb-2">
                        {project.tags.map((tag, index) => (
                            <span
                            key={index}
                            className="bg-secondary border text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                          href={project.link}
                          target = "_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size = {20} />
                        </a>
                      </div>
                    </div>
                </div>
            ))}
            </div>

            <div className = "text-center mt-12">
                <a className = "cosmic-button w-fit flex items-center mx-auto gap-2" 
                    href = "https://github.com/KanishkM08" 
                    target = "_blank"
                >
                     Check My Github <ArrowRight size={16} />
                </a>
            </div>


        </div>
    </section>
  );
}
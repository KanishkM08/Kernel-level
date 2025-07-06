import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="bg-card p-10 rounded-2xl shadow-sm border border-border/50">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Email</h4>
                  <a 
                    href="mailto:malhotra.kanishk0803@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    malhotra.kanishk0803@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground text-base">Goa, India</p>
                </div>
              </div>
            </div>

            {/* Social Connections */}
            <div className="space-y-8">
              <div>
                <h4 className="font-medium text-lg mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/kanishk-malhotra0803" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-muted hover:bg-primary/10 transition-colors flex items-center gap-2 w-full"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/KanishkM08" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-muted hover:bg-primary/10 transition-colors flex items-center gap-2 w-full"
                  >
                    <Github className="h-5 w-5" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-xl">
                <h4 className="font-medium text-lg mb-2">Availability</h4>
                <p className="text-muted-foreground text-sm">
                  Typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Github, Linkedin, Download, ArrowRight, Mail } from "lucide-react";
import profileImg from "@/assets/sanjana-profile.jpeg";
import resumePdf from "@/assets/Sanjana_Dhage_Resume.pdf";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center grid-overlay pt-16">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="section-container w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="flex items-center gap-2 text-primary font-medium mb-6 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="w-6 h-0.5 bg-primary inline-block" />
              Introduction
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up text-secondary" style={{ animationDelay: "0.2s" }}>
              Sanjana <span className="hero-gradient-text">Dhage.</span>
            </h1>
            <div className="w-12 h-1 bg-primary mb-6 mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.25s" }} />
            <p className="text-lg md:text-xl text-foreground font-semibold mb-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Data Analyst | Data Visualization | Machine Learning Enthusiast
            </p>
            <p className="text-muted-foreground italic mb-4 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              "Turning Data Into Insightful Decisions"
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Detail-oriented professional with expertise in transforming complex datasets into actionable business insights through advanced analytics and visualization.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">

                View My Work <ArrowRight size={16} />
              </a>
              <a
                href={resumePdf}
                download="Sanjana_Dhage_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors">

                <Download size={16} /> Download CV
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <a href="mailto:sanjana.dhage05@gmail.com" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail size={22} />
              </a>
              <a href="https://www.linkedin.com/in/sanjana-dhage/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="https://github.com/SanjanaDhage" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <Github size={22} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-72 h-80 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]">
                <img
                  src={profileImg}
                  alt="Sanjana Dhage - Data Analyst"
                  className="w-full h-full object-cover object-top" />

              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-primary/15 -z-10" />
              <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-primary/50" />
              <div className="absolute bottom-8 -left-2 w-2 h-2 rounded-full bg-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
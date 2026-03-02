import { Github, Linkedin, Download, ArrowRight, Mail } from "lucide-react";
import profileImg from "@/assets/sanjana-profile.jpeg";
import resumePdf from "@/assets/Sanjana_Dhage_Resume.pdf";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center grid-overlay pt-16">
      {/* Gradient orb */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="section-container w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Hello, I'm
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Sanjana <span className="hero-gradient-text">Dhage</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground font-medium mb-6 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Data Analyst | Turning Data into Business Insights
            </p>
            <p
              className="text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              I am a detail-oriented Data Analyst skilled in transforming complex data into actionable business
              insights. With expertise in SQL, Python, and Power BI, I build end-to-end analytics solutions — from
              designing ETL pipelines and writing optimized queries to developing interactive KPI dashboards that
              support data-driven decision-making.
            </p>
            <p
              className="text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up"
              style={{ animationDelay: "0.45s" }}
            >
              My experience includes exploratory data analysis, feature engineering, and predictive modeling,
              delivering models with 84%–88% accuracy. I focus on translating analytical findings into clear,
              strategic recommendations that create real business impact.
            </p>

            {/* CTA */}
            <div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
              >
                <Mail size={16} /> Contact Me
              </a>
              <a
                href={resumePdf}
                download="Sanjana_Dhage_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary/50 transition-colors"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>

            {/* Social */}
            <div
              className="flex gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="https://www.linkedin.com/in/sanjana-dhage/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/SanjanaDhage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <img
                  src={profileImg}
                  alt="Sanjana Dhage - Data Analyst"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/10 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

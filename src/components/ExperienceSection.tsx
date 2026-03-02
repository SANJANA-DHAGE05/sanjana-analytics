import { Briefcase } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="bg-section-alt">
      <div className="section-container">
        <div ref={ref} className={`text-center mb-12 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Professional journey and contributions</p>
        </div>
        <div className={`glass-card max-w-3xl mx-auto opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.2s" }}>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-xl">AI & Machine Learning Intern</h3>
              <p className="text-primary font-medium mb-1">Zeel Code</p>
              <p className="text-sm text-muted-foreground mb-4">Belgaum, Karnataka · Jan 2025 – Apr 2025</p>
              <ul className="space-y-2">
                {[
                  "Cleaned and structured 1,000+ records using Pandas and NumPy",
                  "Conducted exploratory data analysis to identify key feature patterns",
                  "Supported model development through feature engineering",
                  "Improved dataset quality for downstream ML workflows",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

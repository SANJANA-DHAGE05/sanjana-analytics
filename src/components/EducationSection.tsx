import { GraduationCap } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education">
      <div className="section-container">
        <div ref={ref} className={`text-center mb-12 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background</p>
        </div>
        <div className={`glass-card max-w-3xl mx-auto opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.2s" }}>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-xl">Bachelor of Engineering in Computer Science</h3>
              <p className="text-primary font-medium mb-1">KLS Gogte Institute of Technology</p>
              <p className="text-sm text-muted-foreground mb-2">Belgaum, Karnataka · Dec 2022 – Jun 2025</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10">
                <span className="text-sm font-semibold text-primary">CGPA: 8.6 / 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

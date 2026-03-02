import { useScrollReveal } from "./useScrollReveal";
import { Target, TrendingUp, BarChart3 } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="bg-section-alt">
      <div className="section-container">
        <div ref={ref} className={`text-center mb-12 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Who I am and what I do</p>
        </div>

        <div className={`max-w-4xl mx-auto opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.2s" }}>
          <div className="glass-card text-sidebar-primary">
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              I am a detail-oriented Data Analyst skilled in transforming complex data into actionable business
              insights. With expertise in SQL, Python, and Power BI, I build end-to-end analytics solutions — from
              designing ETL pipelines and writing optimized queries to developing interactive KPI dashboards that
              support data-driven decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              My experience includes exploratory data analysis, feature engineering, and predictive modeling,
              delivering models with 84%–88% accuracy. I focus on translating analytical findings into clear,
              strategic recommendations that create real business impact.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm mb-1 text-sidebar-primary">Analytics & BI</h4>
                  <p className="text-xs text-muted-foreground">End-to-end KPI dashboards & data pipelines</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm mb-1 text-secondary">Predictive Modeling</h4>
                  <p className="text-xs text-muted-foreground">ML models with 84%–88% accuracy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm mb-1 text-secondary">Business Impact</h4>
                  <p className="text-xs text-muted-foreground">Data-driven strategic recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;
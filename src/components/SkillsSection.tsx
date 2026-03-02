import { useScrollReveal } from "./useScrollReveal";
import { BarChart3, Brain, Database, Wrench } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    icon: <Database size={24} />,
    title: "Data Analysis & Programming",
    skills: [
      { name: "Python (Pandas, NumPy, Matplotlib, Seaborn)", level: 90 },
      { name: "SQL (Joins, CTEs, Subqueries, Window Functions)", level: 92 },
      { name: "Statistical Analysis", level: 85 },
    ],
  },
  {
    icon: <BarChart3 size={24} />,
    title: "BI & Visualization",
    skills: [
      { name: "Power BI (DAX, Data Modeling, Power Query)", level: 90 },
      { name: "Tableau", level: 80 },
      { name: "Dashboard Design", level: 88 },
    ],
  },
  {
    icon: <Brain size={24} />,
    title: "Machine Learning & Analytics",
    skills: [
      { name: "Scikit-learn", level: 82 },
      { name: "Random Forest & Logistic Regression", level: 80 },
      { name: "Feature Engineering & ETL Pipelines", level: 85 },
    ],
  },
  {
    icon: <Wrench size={24} />,
    title: "Tools",
    skills: [
      { name: "Excel (Pivot Tables, Automation)", level: 88 },
      { name: "Git & GitHub", level: 82 },
      { name: "Streamlit & Jupyter Notebook", level: 85 },
    ],
  },
];

const SkillCard = ({ cat, delay }: { cat: SkillCategory; delay: number }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`glass-card opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-lg bg-primary/10 text-primary">{cat.icon}</div>
        <h3 className="font-display font-semibold text-lg">{cat.title}</h3>
      </div>
      <div className="space-y-4">
        {cat.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-foreground">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className={`h-full rounded-full skill-bar-fill ${isVisible ? "animate-bar-fill" : "w-0"}`}
                style={{ "--bar-width": `${skill.level}%` } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="bg-section-alt">
      <div className="section-container">
        <div ref={ref} className={`text-center mb-12 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} delay={0.1 * (i + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

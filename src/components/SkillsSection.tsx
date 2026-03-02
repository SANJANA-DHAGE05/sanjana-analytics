import { useScrollReveal } from "./useScrollReveal";
import { BarChart3, Brain, Code, Wrench } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
{
  icon: <Code size={24} />,
  title: "Data Analysis & Programming",
  skills: [
  "Python (Pandas, NumPy, Matplotlib, Seaborn)",
  "SQL (Joins, CTEs, Subqueries, Window Functions)",
  "Statistical Analysis"]

},
{
  icon: <BarChart3 size={24} />,
  title: "BI & Visualization",
  skills: [
  "Power BI (DAX, Data Modeling, Power Query)",
  "Tableau",
  "Dashboard Design"]

},
{
  icon: <Brain size={24} />,
  title: "Machine Learning & Analytics",
  skills: [
  "Scikit-learn",
  "Random Forest & Logistic Regression",
  "Feature Engineering",
  "ETL Pipelines"]

},
{
  icon: <Wrench size={24} />,
  title: "Tools",
  skills: [
  "Excel (Pivot Tables, Automation)",
  "Git & GitHub",
  "Streamlit",
  "Jupyter Notebook"]

}];


const SkillCard = ({ cat, delay }: {cat: SkillCategory;delay: number;}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`glass-card opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
      style={{ animationDelay: `${delay}s` }}>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-lg bg-primary/10 text-primary">{cat.icon}</div>
        <h3 className="font-display font-semibold text-lg text-sidebar-primary">{cat.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {cat.skills.map((skill) =>
        <span key={skill} className="tech-tag">{skill}</span>
        )}
      </div>
    </div>);

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
          {categories.map((cat, i) =>
          <SkillCard key={cat.title} cat={cat} delay={0.1 * (i + 1)} />
          )}
        </div>
      </div>
    </section>);

};

export default SkillsSection;
import { Github, ExternalLink } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

interface Project {
  title: string;
  bullets: string[];
  tags: string[];
  github?: string;
}

const projects: Project[] = [
  {
    title: "Healthcare 30-Day Readmission Prediction",
    bullets: [
      "Processed 100K+ patient records from UCI Diabetes dataset",
      "Engineered 50+ clinical features and handled missing data",
      "Built classification model achieving 88% accuracy (Recall: 0.79)",
      "Identified inpatient visits and emergency utilization as key readmission drivers",
      "Developed interactive Power BI dashboard to support risk-based discharge planning",
    ],
    tags: ["Python", "Scikit-learn", "Power BI", "SQL"],
  },
  {
    title: "Telecom Customer Churn Prediction",
    bullets: [
      "Designed end-to-end ETL pipeline (staging to production tables) for 6,000+ customers",
      "Cleaned and transformed customer data using SQL Server",
      "Identified contract type and monthly charges as primary churn drivers",
      "Built Random Forest model achieving 84% accuracy",
      "Created Power BI dashboard tracking churn rate, tenure groups, and revenue impact",
    ],
    tags: ["SQL Server", "Python", "Power BI", "Random Forest"],
  },
  {
    title: "India Data Science Job Market Analysis",
    bullets: [
      "Analyzed 2,253 job postings across 16 attributes",
      "Extracted 25+ technical skills using text processing",
      "Identified SQL (61.7%) and Python (31.5%) as top in-demand skills",
      "Built interactive Streamlit dashboard with real-time filtering by salary, location, and seniority",
    ],
    tags: ["Python", "Pandas", "Streamlit", "EDA"],
  },
  {
    title: "Hinglish Sentiment Analysis",
    bullets: [
      "Built NLP pipeline for code-mixed Hinglish text classification",
      "Applied preprocessing techniques including tokenization and TF-IDF",
      "Performed sentiment classification with feature engineering",
      "Addressed multilingual challenges in informal text datasets",
    ],
    tags: ["Python", "NLP", "Sentiment Analysis", "ML"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`glass-card group opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
      style={{ animationDelay: `${0.15 * (index + 1)}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display font-semibold text-xl leading-tight pr-4">{project.title}</h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground flex-shrink-0"
          >
            <Github size={18} />
          </a>
        )}
      </div>
      <ul className="space-y-2 mb-6">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects">
      <div className="section-container">
        <div ref={ref} className={`text-center mb-12 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Data-driven solutions with real business impact</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sanjana.dhage05@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="bg-section-alt">
      <div className="section-container">
        <div ref={ref} className={`text-center mb-12 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and discuss opportunities</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Info */}
          <div className={`space-y-6 opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary"><Mail size={20} /></div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:sanjana.dhage05@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  sanjana.dhage05@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary"><MapPin size={20} /></div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">Karnataka, India</p>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <a href="https://www.linkedin.com/in/sanjana-dhage/" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/SanjanaDhage" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className={`glass-card opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.3s" }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-secondary">Name</label>
                <input
                  type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />

              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-secondary">Email</label>
                <input
                  type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />

              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-secondary">Message</label>
                <textarea
                  required rows={4} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" />

              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">

                <Send size={16} /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>);

};

export default ContactSection;
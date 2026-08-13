import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectGrid } from '../components/ProjectGrid';
import { ExperienceCard } from '../components/ExperienceCard';
import { SkillGroup } from '../components/SkillGroup';
import { EducationCard } from '../components/EducationCard';
import { Button } from '../components/Button';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';
import { skillsData } from '../data/skills';
import { educationData } from '../data/education';
import { achievementsData } from '../data/achievements';
import { Send, Award, CheckCircle, Mail, MapPin, User } from 'lucide-react';

export const Home: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-brand-background min-h-screen relative overflow-hidden">
      {/* 1. Dynamic Animated background mesh */}
      <AnimatedBackground />

      {/* 2. Hero Block */}
      <Hero />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-24 md:space-y-36 relative z-10">
        
        {/* Section 1: About Me (Directly After Hero) */}
        <section id="about" className="scroll-mt-24 bg-transparent">
          <SectionHeading 
            title="Profile" 
            subtitle="About Me" 
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-accent/15 rounded-full blur-xl group-hover:bg-brand-accent/25 transition-all duration-300" />
                <div className="relative bg-brand-surface border-4 border-brand-border w-48 h-48 rounded-full flex items-center justify-center shadow-lg group-hover:border-brand-accent/40 transition-all duration-300">
                  <User size={80} className="text-brand-accent animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-brand-textPrimary">
                Bridging Data Science, Machine Learning, and Robust Software Engineering
              </h3>
              <p className="text-base text-brand-textSecondary leading-relaxed">
                I am a technically serious B.Tech Computer Science Engineering student specializing in Data Science at <span className="font-semibold text-brand-textPrimary">UPES</span>, with a strong minor in <span className="font-semibold text-brand-textPrimary">Aerospace Engineering</span>. Currently in my 5th semester, I maintain an exceptional academic standing with an <span className="font-bold text-brand-accent">8.72/10 CGPA</span>.
              </p>
              <p className="text-sm md:text-base text-brand-textSecondary leading-relaxed">
                My approach to engineering is defined by a rigorous analytical mindset combined with hands-on development. I design complete, end-to-end solutions—bridging advanced machine learning models (like XGBoost, CatBoost, and LightGBM) with high-performance visualization systems and secure data pipelines. From analyzing millions of job market datapoints to engineering user-facing applications, I aim for mathematical precision and structural integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Education (Snapshot and coursework removed) */}
        <section id="education" className="scroll-mt-24 bg-transparent">
          <SectionHeading 
            title="Academic Records" 
            subtitle="Education Credentials" 
          />
          <div className="max-w-4xl">
            <EducationCard edu={educationData} />
          </div>
        </section>

        {/* Section 3: Technical Stack (Highly Styled) */}
        <section id="skills" className="scroll-mt-24 bg-transparent">
          <SectionHeading 
            title="Technical Environment" 
            subtitle="Core Skills & Technologies" 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((group) => (
              <SkillGroup key={group.category} group={group} />
            ))}
          </div>
        </section>

        {/* Section 4: Experience */}
        <section id="experience" className="scroll-mt-24 bg-transparent">
          <SectionHeading 
            title="Career Timeline" 
            subtitle="Professional Experience" 
          />
          <div className="max-w-4xl">
            {experienceData.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </section>

        {/* Section 5: Achievements */}
        <section id="achievements" className="scroll-mt-24 bg-transparent">
          <SectionHeading 
            title="Verified Honors" 
            subtitle="Achievements & Recognition" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.map((achievement) => (
              <div 
                key={achievement.id} 
                className="bg-brand-surface border border-brand-border p-6 rounded-lg flex gap-4 items-start hover:border-brand-borderHover hover:shadow-sm transition-all"
              >
                <div className="p-3 bg-brand-background border border-brand-border rounded text-brand-accent shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-brand-textPrimary">
                    {achievement.title}
                  </h4>
                  {achievement.issuer && (
                    <p className="text-xs text-brand-accent font-semibold mt-1">{achievement.issuer}</p>
                  )}
                  <p className="text-xs text-brand-textSecondary mt-2.5 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Selected Work (Projects) */}
        <section id="work" className="scroll-mt-24 bg-transparent">
          <SectionHeading 
            title="Project Repositories" 
            subtitle="Selected Work" 
          />
          <ProjectGrid projects={projectsData} />
        </section>

        {/* Section 7: Get In Touch */}
        <section id="contact" className="scroll-mt-24 max-w-4xl mx-auto bg-transparent">
          <SectionHeading 
            title="Initialize Communication" 
            subtitle="Let's build something." 
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-brand-surface border border-brand-border p-6 md:p-8 rounded-lg shadow-sm">
            
            {/* Info Col */}
            <div className="md:col-span-5 space-y-6 self-center">
              <p className="text-sm text-brand-textSecondary leading-relaxed">
                Interested in collaborating, discussing a project, or exploring professional opportunities? Feel free to reach out. I am open to technical inquiries, research initiatives, and professional developer roles.
              </p>
              <div className="space-y-4 pt-4 border-t border-brand-border/60 text-sm">
                <div className="flex items-center gap-3 text-brand-textSecondary">
                  <Mail size={16} className="text-brand-accent" />
                  <span>tanishk.sharma@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-brand-textSecondary">
                  <MapPin size={16} className="text-brand-accent" />
                  <span>Dehradun, India</span>
                </div>
              </div>
            </div>

            {/* Form Col */}
            <form onSubmit={handleFormSubmit} className="md:col-span-7 space-y-4 text-xs font-medium">
              <div>
                <label htmlFor="form-name" className="block text-xs font-semibold uppercase tracking-wider text-brand-textSecondary mb-1.5">Name</label>
                <input 
                  type="text" 
                  id="form-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-brand-background border border-brand-border rounded px-4 py-2.5 text-sm text-brand-textPrimary focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="form-email" className="block text-xs font-semibold uppercase tracking-wider text-brand-textSecondary mb-1.5">Email</label>
                <input 
                  type="email" 
                  id="form-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full bg-brand-background border border-brand-border rounded px-4 py-2.5 text-sm text-brand-textPrimary focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="form-message" className="block text-xs font-semibold uppercase tracking-wider text-brand-textSecondary mb-1.5">Message</label>
                <textarea 
                  id="form-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message details..."
                  className="w-full bg-brand-background border border-brand-border rounded px-4 py-2.5 text-sm text-brand-textPrimary focus:outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full gap-2 py-3 rounded-none">
                <Send size={14} />
                <span>Submit Inquiry</span>
              </Button>

              {isSubmitted && (
                <div className="flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 p-3 rounded text-xs text-brand-accent mt-4">
                  <CheckCircle size={14} />
                  <span>Your message has been sent successfully. Thank you!</span>
                </div>
              )}
            </form>

          </div>
        </section>

      </div>
    </div>
  );
};

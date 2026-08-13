import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectGrid } from '../components/ProjectGrid';
import { ExperienceCard } from '../components/ExperienceCard';
import { SkillGroup } from '../components/SkillGroup';
import { EducationCard } from '../components/EducationCard';
import { Button } from '../components/Button';
import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';
import { skillsData } from '../data/skills';
import { educationData } from '../data/education';
import { achievementsData } from '../data/achievements';
import { Send, Award, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export const Home: React.FC = () => {
  // Simple Contact form handling state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static submission integration target placeholder
    console.log("Submitting secure content to provider:", formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-brand-background">
      {/* 1. Hero Block */}
      <Hero />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-24 md:space-y-36">
        
        {/* 2. Selected Work Section */}
        <section id="work" className="scroll-mt-24">
          <SectionHeading 
            title="Selected Work" 
            subtitle="A selection of systems, applications and technical projects I've built." 
          />
          <ProjectGrid projects={projectsData} />
        </section>

        {/* 3. Professional Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <SectionHeading 
            title="Experience" 
            subtitle="My professional journey and technical impact." 
          />
          <div className="max-w-4xl">
            {experienceData.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </section>

        {/* 4. About & Skills Grid Section */}
        <section id="about" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* About Column (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading 
              title="About Me" 
              subtitle="The engineer behind the console." 
            />
            <p className="text-sm text-brand-textMuted leading-relaxed">
              I am a Computer Science Engineering student specializing in Data Science at UPES. My engineering approach balances machine learning frameworks with robust, highly structured software development.
            </p>
            <p className="text-sm text-brand-textMuted leading-relaxed">
              Whether optimizing database index schemas, training deep ensemble models, or developing intuitive, lightweight frontends, I design systems built on efficiency, clean architecture, and technical credibility.
            </p>
            <div className="bg-brand-surface border border-brand-border p-5 rounded-lg">
              <h4 className="text-xs uppercase tracking-wider font-bold text-brand-accent mb-2">
                Current Focus
              </h4>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                Strengthening DSA, SQL and core CS fundamentals while preparing for advanced technical projects and 2027 internship opportunities.
              </p>
            </div>
          </div>

          {/* Skills Column (Right) */}
          <div id="skills" className="lg:col-span-7 scroll-mt-24 space-y-6">
            <SectionHeading 
              title="Technical Stack" 
              subtitle="Core skills and technologies." 
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.map((group) => (
                <SkillGroup key={group.category} group={group} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Education & Achievements Combined Panel */}
        <section id="education" className="scroll-mt-24 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Education Layout Card */}
            <div className="lg:col-span-7">
              <SectionHeading 
                title="Education" 
                subtitle="Academic credentials." 
              />
              <EducationCard edu={educationData} />
            </div>

            {/* Achievements Layout Card */}
            <div className="lg:col-span-5">
              <SectionHeading 
                title="Achievements" 
                subtitle="Verified recognitions." 
              />
              <div className="space-y-4">
                {achievementsData.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className="bg-brand-surface border border-brand-border p-5 rounded-lg flex gap-4 items-start hover:border-brand-accent/20 transition-all"
                  >
                    <div className="p-2 bg-brand-background border border-brand-border rounded text-brand-accent">
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-brand-textPrimary">
                        {achievement.title}
                      </h4>
                      {achievement.issuer && (
                        <p className="text-xs text-brand-accent mt-0.5">{achievement.issuer}</p>
                      )}
                      <p className="text-xs text-brand-textMuted mt-1.5 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 6. Simple Contact Section */}
        <section id="contact" className="scroll-mt-24 max-w-4xl mx-auto">
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Let's build something." 
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-brand-surface border border-brand-border p-6 md:p-8 rounded-lg">
            
            {/* Info Col */}
            <div className="md:col-span-5 space-y-6">
              <p className="text-sm text-brand-textMuted leading-relaxed">
                Interested in collaborating, discussing a project, or exploring an opportunity? Feel free to reach out. I am open to technical inquiries, research initiatives, and professional developer opportunities.
              </p>
              <div className="space-y-4 pt-4 border-t border-brand-border/40 text-sm">
                <div className="flex items-center gap-3 text-brand-textMuted">
                  <Mail size={16} className="text-brand-accent" />
                  <span>tanishk.sharma@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-brand-textMuted">
                  <MapPin size={16} className="text-brand-accent" />
                  <span>Dehradun, India</span>
                </div>
              </div>
            </div>

            {/* Form Col */}
            <form onSubmit={handleFormSubmit} className="md:col-span-7 space-y-4">
              <div>
                <label htmlFor="form-name" className="block text-xs font-semibold uppercase tracking-wider text-brand-textMuted mb-1.5">Name</label>
                <input 
                  type="text" 
                  id="form-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-brand-background border border-brand-border rounded px-4 py-2 text-sm text-brand-textPrimary focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="form-email" className="block text-xs font-semibold uppercase tracking-wider text-brand-textMuted mb-1.5">Email</label>
                <input 
                  type="email" 
                  id="form-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full bg-brand-background border border-brand-border rounded px-4 py-2 text-sm text-brand-textPrimary focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="form-message" className="block text-xs font-semibold uppercase tracking-wider text-brand-textMuted mb-1.5">Message</label>
                <textarea 
                  id="form-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message details..."
                  className="w-full bg-brand-background border border-brand-border rounded px-4 py-2 text-sm text-brand-textPrimary focus:outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full gap-2">
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

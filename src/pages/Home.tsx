import React from 'react';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectGrid } from '../components/ProjectGrid';
import { ExperienceCard } from '../components/ExperienceCard';
import { SkillGroup } from '../components/SkillGroup';
import { EducationCard } from '../components/EducationCard';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';
import { skillsData } from '../data/skills';
import { educationData } from '../data/education';
import { achievementsData } from '../data/achievements';
import { Award, Mail, User, Github, Linkedin, FileText, Layout, Database, Terminal, ShieldAlert } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="bg-brand-background min-h-screen relative overflow-hidden">
      {/* 1. Subtle, slow background floating nodes */}
      <AnimatedBackground />

      {/* 2. Typographic Hero */}
      <Hero />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-24 md:space-y-36 relative z-10">
        
        {/* Section 1: About Me */}
        <section id="about" className="scroll-mt-24 bg-transparent">
          <SectionHeading 
            title="Profile" 
            subtitle="About Me" 
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Profile Frame */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-accent/15 rounded-full blur-xl group-hover:bg-brand-accent/25 transition-all duration-300" />
                <div className="relative bg-brand-surface border-4 border-brand-border w-48 h-48 rounded-full flex items-center justify-center shadow-lg group-hover:border-brand-accent/40 transition-all duration-300">
                  <User size={80} className="text-brand-accent" />
                </div>
              </div>
            </div>
            
            {/* Rewritten About Text */}
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-brand-textPrimary">
                Tanishk Sharma — Emerging Data Science Professional
              </h3>
              <p className="text-base text-brand-textSecondary leading-relaxed">
                I am a B.Tech Computer Science Engineering student specializing in Data Science at UPES, with a Minor in Aerospace Engineering. Currently in my 5th semester, I maintain a CGPA of 8.72/10 and focus on building strong foundations in data analysis, software development, algorithms, and machine learning.
              </p>
              <p className="text-sm md:text-base text-brand-textSecondary leading-relaxed">
                My work combines analytical thinking with practical engineering. I enjoy turning large datasets and real-world problems into structured, usable software systems—from analyzing more than 1.3 million job postings to developing data-management solutions during my technical internship at Uttarakhand Power Corporation Limited (UPCL).
              </p>
              <p className="text-sm md:text-base text-brand-textSecondary leading-relaxed font-medium">
                I am particularly interested in Data Science and Data Analytics, while continuing to strengthen my software engineering and DSA foundations.
              </p>
              
              {/* Dynamic Status / Currently Element */}
              <div className="bg-brand-surface border border-brand-border p-5 rounded-lg flex flex-col sm:flex-row justify-between gap-4 font-mono text-xs">
                <div>
                  <span className="text-brand-accent font-bold uppercase block mb-1">&gt; CURRENTLY</span>
                  <span className="text-brand-textPrimary font-semibold">5th Semester · B.Tech CSE (Data Science) · UPES</span>
                </div>
                <div className="sm:border-l sm:border-brand-border sm:pl-6">
                  <span className="text-brand-accent font-bold uppercase block mb-1">&gt; ACTIVE FOCUS</span>
                  <span className="text-brand-textPrimary font-semibold">Data Science · Data Analytics · DSA · Software Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Academic Credentials */}
        <section id="education" className="scroll-mt-24 bg-transparent">
          <SectionHeading 
            title="Academic Snapshot" 
            subtitle="Education Credentials" 
          />
          <div className="max-w-4xl">
            <EducationCard edu={educationData} />
          </div>
        </section>

        {/* Section 3: Core Skills */}
        <section id="skills" className="scroll-mt-24 bg-transparent">
          <SectionHeading 
            title="Systems Environment" 
            subtitle="Core Technical Stack" 
          />
          
          {/* Quick "What I Work With" Summary Panel (SRS Section 29) */}
          <div className="bg-brand-surface border border-brand-border p-6 rounded-xl mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs shadow-sm">
            <div className="space-y-2">
              <span className="text-brand-accent font-bold flex items-center gap-1.5"><Database size={14} /> DATA</span>
              <p className="text-brand-textPrimary font-semibold">Python · Pandas · NumPy · SQL · Scikit-learn</p>
            </div>
            <div className="space-y-2 sm:border-l sm:border-brand-border/60 sm:pl-6">
              <span className="text-brand-accent font-bold flex items-center gap-1.5"><Terminal size={14} /> ENGINEERING</span>
              <p className="text-brand-textPrimary font-semibold">DSA · OOP · Databases · APIs · Git</p>
            </div>
            <div className="space-y-2 lg:border-l lg:border-brand-border/60 lg:pl-6">
              <span className="text-brand-accent font-bold flex items-center gap-1.5"><Layout size={14} /> DEVELOPMENT</span>
              <p className="text-brand-textPrimary font-semibold">React · TypeScript · Flask · Vite</p>
            </div>
            <div className="space-y-2 lg:border-l lg:border-brand-border/60 lg:pl-6">
              <span className="text-brand-accent font-bold flex items-center gap-1.5"><ShieldAlert size={14} /> ML</span>
              <p className="text-brand-textPrimary font-semibold">Supervised · Ensemble · Evaluation</p>
            </div>
          </div>

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

        {/* Section 6: Selected Work */}
        <section id="work" className="scroll-mt-24 bg-transparent">
          <SectionHeading 
            title="Project Repositories" 
            subtitle="Selected Work" 
          />
          <ProjectGrid projects={projectsData} />
        </section>

        {/* Section 7: Re-designed Contact Section (No Forms) */}
        <section id="contact" className="scroll-mt-24 max-w-4xl mx-auto bg-transparent">
          <div className="text-center space-y-4 mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent">COMMUNICATION_LINK</span>
            <h2 className="text-2xl md:text-4xl font-black text-brand-textPrimary">Let's Build Something Useful.</h2>
            <p className="text-sm text-brand-textSecondary max-w-lg mx-auto">
              I'm always interested in data-driven projects, software development opportunities, and technical collaborations. Feel free to connect!
            </p>
          </div>

          <div className="bg-brand-surface border border-brand-border p-8 rounded-xl shadow-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <a href="https://github.com/tame3723" target="_blank" rel="noopener noreferrer" className="p-5 border border-brand-border rounded-lg hover:border-brand-accent/40 hover:bg-brand-background transition-all flex flex-col items-center gap-3 group">
              <Github size={24} className="text-brand-textMuted group-hover:text-brand-accent" />
              <span className="font-mono text-xs text-brand-textPrimary">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/tanishk-sharma-235a89324/" target="_blank" rel="noopener noreferrer" className="p-5 border border-brand-border rounded-lg hover:border-brand-accent/40 hover:bg-brand-background transition-all flex flex-col items-center gap-3 group">
              <Linkedin size={24} className="text-brand-textMuted group-hover:text-brand-accent" />
              <span className="font-mono text-xs text-brand-textPrimary">LinkedIn</span>
            </a>
            <a href="mailto:Tanishk.16061@stu.upes.ac.in" className="p-5 border border-brand-border rounded-lg hover:border-brand-accent/40 hover:bg-brand-background transition-all flex flex-col items-center gap-3 group">
              <Mail size={24} className="text-brand-textMuted group-hover:text-brand-accent" />
              <span className="font-mono text-xs text-brand-textPrimary">Email Me</span>
            </a>
            <a href="resume.pdf" download="Tanishk_Sharma_Resume.pdf" className="p-5 border border-brand-border rounded-lg hover:border-brand-accent/40 hover:bg-brand-background transition-all flex flex-col items-center gap-3 group">
              <FileText size={24} className="text-brand-textMuted group-hover:text-brand-accent" />
              <span className="font-mono text-xs text-brand-textPrimary">Resume CV</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

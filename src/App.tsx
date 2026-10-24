import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ObjectiveSection } from './components/ObjectiveSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactModal } from './components/ContactModal';
import { CertificationsModal } from './components/CertificationsModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectData } from './components/ProjectCard';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCertificationsOpen, setIsCertificationsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{ overflowX: 'clip' }}
      className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] min-h-screen selection:bg-[#7621B0] selection:text-white relative"
    >
      {/* 1. HERO SECTION */}
      <HeroSection
        onNavigate={scrollToSection}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCertifications={() => setIsCertificationsOpen(true)}
      />

      {/* 2. OBJECTIVE SECTION */}
      <ObjectiveSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 4. SKILLS SECTION (replaces Services) */}
      <EducationSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection
        onOpenLive={(project) => setSelectedProject(project)}
      />

      {/* Footer & Social Bar */}
      <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 sm:px-10 py-12 relative z-20">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-xl font-black uppercase tracking-wider text-white">
              Abbas Vali — Full Stack Developer & AI Engineer
            </span>
            <p className="text-xs text-[#D7E2EA]/60 uppercase tracking-widest mt-1">
              Building scalable full-stack applications with creative AI productivity
            </p>
          </div>

          <div className="flex items-center gap-4 text-[#D7E2EA]/70">
            <a
              href="https://www.linkedin.com/in/abbas-vali-shaik-42640b2a9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-white transition-colors p-2 hover:scale-110 transition-transform"
            >
              <Linkedin className="w-5 h-5 text-[#0077B5]" />
            </a>
            <a
              href="https://github.com/abbasvali7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-white transition-colors p-2 hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href="mailto:abbasvali44@gmail.com"
              aria-label="Email Abbas Vali"
              className="hover:text-white transition-colors p-2 hover:scale-110 transition-transform"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Scroll to top"
              className="ml-2 w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <CertificationsModal
        isOpen={isCertificationsOpen}
        onClose={() => setIsCertificationsOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

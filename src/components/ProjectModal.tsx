import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers, CheckCircle } from 'lucide-react';
import { ProjectData } from './ProjectCard';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl rounded-[36px] border border-[#D7E2EA]/20 bg-[#111114] p-6 sm:p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.95)] text-[#D7E2EA] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-3xl font-black text-[#D7E2EA]">
              {project.number}
            </span>
            <span className="px-3 py-1 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#B600A8]/20 border border-[#B600A8]/50 text-[#D7E2EA]">
              {project.category} Showcase
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-4">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-[#D7E2EA]/80 leading-relaxed mb-6 max-w-2xl">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#1e1e24] border border-white/10 text-[#D7E2EA]/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Image Showcase Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-[24px] overflow-hidden border border-white/10 bg-[#16161a]">
              <img
                src={project.col1Img1}
                alt="Detail preview 1"
                className="w-full h-56 sm:h-64 object-cover"
              />
            </div>
            <div className="rounded-[24px] overflow-hidden border border-white/10 bg-[#16161a]">
              <img
                src={project.col1Img2}
                alt="Detail preview 2"
                className="w-full h-56 sm:h-64 object-cover"
              />
            </div>
            <div className="md:col-span-2 rounded-[24px] overflow-hidden border border-white/10 bg-[#16161a]">
              <img
                src={project.col2Img}
                alt="Full detail view"
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
            {project.extraImages &&
              project.extraImages.map((extraImg, idx) => (
                <div
                  key={idx}
                  className="md:col-span-2 rounded-[24px] overflow-hidden border border-white/10 bg-[#16161a]"
                >
                  <img
                    src={extraImg}
                    alt={`Additional detail view ${idx + 1}`}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              ))}
          </div>

          {/* Architectural highlights */}
          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs text-[#D7E2EA]/70">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#B600A8]" /> Full-Stack Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#B600A8]" /> RESTful APIs & Auth
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#B600A8]" /> AI Integration & Clean Code
              </span>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="px-6 py-2.5 rounded-full border border-[#D7E2EA] text-[#D7E2EA] text-xs font-semibold uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
            >
              Close View
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

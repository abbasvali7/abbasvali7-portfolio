import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, CheckCircle, Calendar, ShieldCheck } from 'lucide-react';

interface CertificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  description: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    title: 'Full-Stack Software Engineering Specialization',
    issuer: 'Meta / Coursera',
    date: '2025',
    credentialId: 'META-FS-849204',
    skills: ['React', 'JavaScript', 'Node.js', 'REST APIs', 'Git', 'CSS3/HTML5'],
    description:
      'Comprehensive software engineering track covering modern React component architecture, Node.js server pipelines, database integrations, and testing.',
  },
  {
    title: 'Generative AI & LLM Application Engineering',
    issuer: 'DeepLearning.AI',
    date: '2025',
    credentialId: 'DLAI-LLM-11938',
    skills: ['LLMs', 'RAG Pipelines', 'Prompt Engineering', 'LangChain', 'Python'],
    description:
      'Architecting intelligent applications using foundation models, vector stores, custom retrieval augmented generation (RAG), and context steering.',
  },
  {
    title: 'Backend Development & RESTful API Architecture',
    issuer: 'Postman & Node.js Foundation',
    date: '2024',
    credentialId: 'POSTMAN-API-9923',
    skills: ['Express.js', 'API Design', 'JWT Authentication', 'Middleware'],
    description:
      'Designing and deploying secure, high-throughput REST APIs, JWT authentication protocols, endpoint validation, and automated API testing.',
  },
  {
    title: 'Relational Database Design & SQL Mastery',
    issuer: 'HackerRank & Stanford Online',
    date: '2024',
    credentialId: 'SQL-GOLD-55821',
    skills: ['PostgreSQL', 'MySQL', 'Schema Normalization', 'Complex Queries'],
    description:
      'Designing normalized relational schemas, index optimization, transactional consistency, and data aggregation for production systems.',
  },
  {
    title: 'Python for Data Structures & Algorithms',
    issuer: 'University of Michigan',
    date: '2024',
    credentialId: 'UMICH-DSA-3341',
    skills: ['Python 3', 'Data Structures', 'Algorithmic Complexity', 'Optimization'],
    description:
      'In-depth mastery of algorithmic problem solving, trees, graphs, sorting algorithms, and memory-efficient data processing pipelines.',
  },
];

export const CertificationsModal: React.FC<CertificationsModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
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
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B600A8] mb-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Credentials</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                Certifications & Accreditations
              </h2>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/65 mt-1 max-w-xl">
                Continuous mastery in full-stack web technologies, modern AI pipelines, scalable backend infrastructure, and computational problem solving.
              </p>
            </div>

            {/* Certifications List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {CERTIFICATIONS.map((cert, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-white/10 bg-[#16161a] p-5 sm:p-6 flex flex-col justify-between hover:border-[#B600A8]/50 transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#B600A8]/20 text-[#D7E2EA] border border-[#B600A8]/40">
                        <Award className="w-3.5 h-3.5 text-[#B600A8]" />
                        {cert.issuer}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-[#D7E2EA]/50 font-mono">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#BBCCD7] transition-colors leading-snug mb-2">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-[#D7E2EA]/70 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-black/40 text-[#D7E2EA]/80 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#D7E2EA]/50">
                      <span className="font-mono">ID: {cert.credentialId}</span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle className="w-3 h-3" /> Verified
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#D7E2EA]/60">
                Issued to Abbas Vali • CSE Software Engineering Focus
              </span>
              <button
                onClick={onClose}
                type="button"
                className="px-6 py-2.5 rounded-full border border-[#D7E2EA] text-[#D7E2EA] text-xs font-semibold uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
              >
                Close Certifications
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

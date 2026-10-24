import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, CheckCircle2, Code2, Linkedin, Github, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full Stack Web Application',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

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

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-[36px] border border-[#D7E2EA]/20 bg-[#121214] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-[#D7E2EA] z-10 max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#B600A8]/20 border border-[#B600A8] flex items-center justify-center text-[#B600A8]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                  Message Sent!
                </h3>
                <p className="text-sm text-[#D7E2EA]/70 max-w-xs">
                  Thanks for reaching out! Abbas Vali will get back to you within 24 hours to discuss your software engineering project or opportunity.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B600A8] mb-1">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Full Stack & AI Developer</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                    Let&apos;s Build Together
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/60 mt-1">
                    Connect directly on LinkedIn, view my code on GitHub, or send an inquiry below.
                  </p>
                </div>

                {/* Direct Social Links with Exact Icons */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <a
                    href="https://www.linkedin.com/in/abbas-vali-shaik-42640b2a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-[#0077B5]/15 border border-[#0077B5]/40 text-[#D7E2EA] hover:text-white hover:bg-[#0077B5]/30 transition-all text-xs font-medium group"
                  >
                    <Linkedin className="w-4 h-4 text-[#0077B5] group-hover:scale-110 transition-transform" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
                  </a>

                  <a
                    href="https://github.com/abbasvali7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-white/5 border border-white/15 text-[#D7E2EA] hover:text-white hover:bg-white/10 transition-all text-xs font-medium group"
                  >
                    <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
                  </a>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-2xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-2xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-medium">
                      Project or Focus Area
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-2xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                    >
                      <option value="Full Stack Web Application">Full Stack Web Application (React / Node / TS)</option>
                      <option value="AI & LLM / RAG Integration">AI & LLM / RAG Pipeline Integration</option>
                      <option value="Backend Development & REST API">Backend Development & REST API</option>
                      <option value="Database Architecture">Database Architecture & Schema Design</option>
                      <option value="Frontend Development">Frontend Development & Responsive UX</option>
                      <option value="Full-Time / Software Engineer Role">Full-Time / Software Engineer Role</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-medium">
                      Project / Message Details
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe what you're building, the stack requirements, or role details..."
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-2xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background:
                        'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow:
                        '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                    }}
                    className="mt-1 w-full py-3 rounded-full text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Abbas</span>
                  </button>
                </form>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-[#D7E2EA]/60">
                  <a
                    href="mailto:abbasvali44@gmail.com"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>abbasvali44@gmail.com</span>
                  </a>
                  <span>Response: &lt; 24h</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

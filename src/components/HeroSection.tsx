import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
  onOpenCertifications: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenContact,
  onOpenCertifications,
}) => {
  const [imgSrc, setImgSrc] = useState(
    'https://i.ibb.co/6cHX7sL7/abbas-3d-pfp.png'
  );

  const navLinks = [
    { label: 'About', action: () => onNavigate('about') },
    { label: 'Skills', action: () => onNavigate('skills') },
    { label: 'Projects', action: () => onNavigate('projects') },
    { label: 'Certifications', action: onOpenCertifications },
  ];

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Navbar with 4 links: About, Skills, Projects, Certifications */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30"
      >
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={link.action}
            type="button"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.35rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0"
          >
            {link.label}
          </button>
        ))}
      </motion.nav>

      {/* Hero Heading Container: Hi, i'm abbas vali */}
      <div className="w-full overflow-hidden text-center z-0 pointer-events-none px-2">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[9vw] sm:text-[10vw] md:text-[11vw] lg:text-[12.2vw] mt-6 sm:mt-4 md:-mt-4 select-none"
        >
          Hi, i&apos;m abbas vali
        </motion.h1>
      </div>

      {/* Hero Portrait with Magnet using Abbas's PFP */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-auto top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="relative flex justify-center items-end"
        >
          <img
            src={imgSrc}
            alt="Abbas Vali - 3D Creator & Full Stack Developer"
            onError={() => {
              setImgSrc(
                'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
              );
            }}
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] max-h-[75vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] filter brightness-105 pointer-events-none"
            loading="eager"
            draggable={false}
          />
        </Magnet>
      </motion.div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ fontSize: 'clamp(0.75rem, 1.35vw, 1.4rem)' }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[310px]"
        >
          Aspiring Full Stack Web developer who always thinks creatively with AI for more productivity with his ideas
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton onClick={onOpenContact} />
        </motion.div>
      </div>
    </section>
  );
};

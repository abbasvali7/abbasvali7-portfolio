import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const paragraphText =
    'CSE student leveraging modern full-stack web tech and AI tools to build scalable applications at speed. Passionate about architecture, clean code, and building high-impact tech from scratch.';

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative 3D Corner Items */}
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Decorative"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter brightness-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-10">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Geometric Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter brightness-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Element"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter brightness-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-10">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Composition Group"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter brightness-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </FadeIn>
      </div>

      {/* Center Content Column */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph with Abbas's bio */}
        <div className="max-w-[580px] px-4">
          <AnimatedText
            text={paragraphText}
            className="text-[clamp(1rem,2vw,1.35rem)] text-center font-medium"
          />
        </div>

        {/* Spacing between text and contact button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';

export interface ProjectData {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  extraImages?: string[];
  demoUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
  onOpenLive: (project: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  range,
  targetScale,
  progress,
  onOpenLive,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[620px] flex items-start justify-center sticky top-24 md:top-32"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(1rem + ${index * 28}px)`,
        }}
        className="relative w-full max-w-5xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-5 sm:gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] will-change-transform origin-top"
      >
        {/* Top Row: Number, Category, Title, Live Project Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Number */}
            <span
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              className="font-black text-[#D7E2EA] leading-none tracking-tighter select-none"
            >
              {project.number}
            </span>

            {/* Category & Title */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                {project.category}
              </span>
              <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#D7E2EA] tracking-wide max-w-md sm:max-w-lg truncate">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Live Project Button */}
          <LiveProjectButton onClick={() => onOpenLive(project)} />
        </div>

        {/* Bottom Row: 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 w-full items-stretch">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 justify-between">
            <div
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[45px] overflow-hidden bg-[#181a1f] border border-[#23272e]/80 shadow-md group"
            >
              <img
                src={project.col1Img1}
                alt={`${project.title} Preview 1`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            <div
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[45px] overflow-hidden bg-[#181a1f] border border-[#23272e]/80 shadow-md group"
            >
              <img
                src={project.col1Img2}
                alt={`${project.title} Preview 2`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="md:col-span-7 h-[260px] sm:h-[340px] md:h-auto min-h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden bg-[#181a1f] border border-[#23272e]/80 shadow-md group">
            <img
              src={project.col2Img}
              alt={`${project.title} Full Showcase`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1280&q=80';
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

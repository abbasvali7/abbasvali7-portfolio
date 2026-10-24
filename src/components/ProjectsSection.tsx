import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ProjectCard, ProjectData } from './ProjectCard';

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'Client',
    title: 'E-Commerce Order Management System App',
    description:
      'High-throughput real-time inventory and multi-channel fulfillment dashboard with custom logistics visualizer and responsive UX.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind', 'REST API'],
    col1Img1:
      'https://www.infoskysolutions.com/blog/wp-content/uploads/2019/11/successful-e-commerce-website-design.jpg',
    col1Img2:
      'https://m.media-amazon.com/images/G/31/smartcommerce/smartcommerce_banner.png',
    col2Img:
      'https://miro.medium.com/v2/resize:fit:1400/1*M8kXp4qm0_wfzxcQN-E6-A.png',
    demoUrl: 'https://ecommerce-oms.demo.abbasvali.io',
  },
  {
    number: '02',
    category: 'Personal',
    title: 'Role-Based Placement or Job Portal',
    description:
      'Interactive talent matching platform featuring dynamic role permissions, applicant tracking, data filtering, and kinetic animation cues.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT Auth', 'Tailwind'],
    col1Img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSumxQnO-d9YJMIkWQmDW1f5xChJn_pmdSGzt58GD-41Q&s=10',
    col1Img2:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJgXBLuvjh85ekp0sfDqvo9byx7DrI66B-MdCTtWDcA&s=10',
    col2Img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZN3lA50pi6jDrQTHWkir2iqXVeVDRM_jxE3SPhypEA&s=10',
    extraImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatqG_H346pUj8-5OjjS1pSeUE6BX_GWoXVI9NN0xwRg&s=10',
    ],
    demoUrl: 'https://jobportal.demo.abbasvali.io',
  },
  {
    number: '03',
    category: 'Client',
    title: 'Movie Search Tool',
    description:
      'Cinematic exploration engine with deep filtering, trailer overlays, mood-based recommendations, and responsive tactile cards.',
    tags: ['JavaScript', 'REST API', 'CSS3', 'Python', 'AI Integration'],
    col1Img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjn5QWtdbuh7ZHJq814xuSJ1GMveafqWfCZNY6ugvhFA&s',
    col1Img2:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgFwWLWISpDfxbNzLp_RO_fRDKzrQJu1C7jlmrC7JwA&s',
    col2Img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FSEcukI2cyXv5zRDgt4dWHy-gBpNKs-8oL7SeW46Fw&s=10',
    demoUrl: 'https://moviesearch.demo.abbasvali.io',
  },
];

interface ProjectsSectionProps {
  onOpenLive: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenLive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
    >
      {/* Heading: "Project" using .hero-heading gradient */}
      <div className="max-w-5xl mx-auto w-full mb-16 sm:mb-20 md:mb-24 text-center">
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
          >
            Project
          </h2>
        </FadeIn>
      </div>

      {/* 3 Stacking Cards */}
      <div className="relative max-w-5xl mx-auto w-full">
        {PROJECTS.map((project, index) => {
          const totalCards = PROJECTS.length;
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;
          const range: [number, number] = [index * 0.25, 1];

          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={totalCards}
              targetScale={targetScale}
              range={range}
              progress={scrollYProgress}
              onOpenLive={onOpenLive}
            />
          );
        })}
      </div>
    </section>
  );
};

import React from 'react';
import { FadeIn } from './FadeIn';

interface SkillItem {
  number: string;
  name: string;
  description: string;
}

const SKILLS: SkillItem[] = [
  {
    number: '01',
    name: 'Python, JavaScript, HTML5, CSS3',
    description:
      'The core foundation of my development stack. I use HTML5 and CSS3 to structure clean layouts, JavaScript to build dynamic user interactions, and Python to handle data processing and AI script integrations',
  },
  {
    number: '02',
    name: 'Backend Development',
    description:
      'My choice for building fast, scalable server-side applications. I leverage Node.js and Express.js to construct robust RESTful APIs, manage server routing, handle user authentication',
  },
  {
    number: '03',
    name: 'Databases',
    description:
      'design structured, relational database schemas for applications. I am comfortable managing tables, establishing data relationships',
  },
  {
    number: '04',
    name: 'AI & Intelligent Systems',
    description:
      'I build intelligent applications by integrating Large Language Models (LLMs) and designing Retrieval-Augmented Generation (RAG) pipelines that allow software to query custom knowledge bases. I use advanced Prompt Engineering to ensure AI responses are accurate, safe, and context-aware.',
  },
  {
    number: '05',
    name: 'Developer Tools & Version Control',
    description:
      'I use Git and GitHub for clean version control, branching strategies, and tracking project history. I maximize my development speed by utilizing modern IDEs like VS Code and Cursor, using AI-assisted coding features to write, debug, and ship code faster while maintaining human oversight',
  },
];

export const EducationSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading: Skills */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28 select-none"
          >
            Skills
          </h2>
        </FadeIn>

        {/* 5 Skills Items List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SKILLS.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={30}
              className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 sm:gap-10 md:gap-16 group transition-all duration-300">
                {/* Number */}
                <div
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  className="font-black text-[#0C0C0C] leading-none shrink-0 tracking-tighter select-none transition-transform duration-300 group-hover:translate-x-2"
                >
                  {item.number}
                </div>

                {/* Name & Description Stack */}
                <div className="flex-1 flex flex-col gap-2 sm:gap-3">
                  <h3
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

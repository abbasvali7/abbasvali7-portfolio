import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedChar: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 will-change-[opacity]"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charCounter = 0;

  return (
    <p
      ref={containerRef}
      className={`font-medium text-center leading-relaxed text-[#D7E2EA] ${className}`}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const wordElements = (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordChars.map((char) => {
              const charIndex = charCounter++;
              const start = charIndex / totalChars;
              const step = 1 / totalChars;
              const end = Math.min(1, start + step * 1.5);

              return (
                <AnimatedChar
                  key={charIndex}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
        return wordElements;
      })}
    </p>
  );
};

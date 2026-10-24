import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sparkles } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTier: (tierName: string) => void;
}

const TIERS = [
  {
    name: '3D Asset & Render',
    price: '$950',
    period: 'per asset / scene',
    description: 'Custom detailed 3D assets with photorealistic materials & lighting.',
    features: [
      'Custom 3D modeling & geometry',
      '4K high-res studio renders (up to 5 angles)',
      'Physically-based rendering (PBR) textures',
      'Source files in .blend, .obj, .fbx, or .gltf',
      '2 revision rounds included',
    ],
    highlighted: false,
  },
  {
    name: 'Kinetic Motion & Brand',
    price: '$1,950',
    period: 'per project',
    description: 'Dynamic storytelling animations to elevate brands and digital campaigns.',
    features: [
      'Up to 30-sec custom 3D motion graphic',
      'Sound design & cinematic lighting sync',
      'Seamless social media aspect ratios (16:9, 9:16, 1:1)',
      'Vector logo translation into kinetic 3D',
      '3 revision rounds included',
    ],
    highlighted: true,
  },
  {
    name: 'Full 3D Web Experience',
    price: '$3,800',
    period: 'turnkey build',
    description: 'End-to-end interactive 3D landing page with React, WebGL, and micro-interactions.',
    features: [
      'Interactive 3D viewport with mouse track/physics',
      'Mobile-responsive fluid layout (Kanit/Tailwind)',
      'Performance-optimized glTF/DRACO assets',
      'Scroll-driven kinetic reveals & transitions',
      'Deployment to Vercel/Cloud Run with source repo',
    ],
    highlighted: false,
  },
];

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  onSelectTier,
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl rounded-[36px] border border-[#D7E2EA]/20 bg-[#101012] p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-[#D7E2EA] z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B600A8] flex items-center justify-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Transparent Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                Creative Packages
              </h2>
              <p className="text-sm text-[#D7E2EA]/60 mt-2">
                Direct collaboration with Jack. No agency markups, clear timelines, and meticulous craftsmanship.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-[28px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                    tier.highlighted
                      ? 'border-2 border-[#B600A8] bg-[#17141f] shadow-[0_0_30px_rgba(182,0,168,0.25)]'
                      : 'border border-[#D7E2EA]/15 bg-[#141416] hover:border-[#D7E2EA]/30'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white text-[10px] font-bold uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold uppercase text-white tracking-wide">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#D7E2EA]/65 mt-1.5 mb-5 min-h-[34px]">
                      {tier.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        {tier.price}
                      </span>
                      <span className="text-xs text-[#D7E2EA]/50 ml-1.5 uppercase font-medium">
                        / {tier.period}
                      </span>
                    </div>

                    <div className="border-t border-white/10 pt-5 space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#D7E2EA]/80">
                          <Check className="w-4 h-4 text-[#B600A8] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ContactButton
                    label="Choose Package"
                    onClick={() => {
                      onSelectTier(tier.name);
                    }}
                    className="w-full text-center !py-3 !text-xs"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

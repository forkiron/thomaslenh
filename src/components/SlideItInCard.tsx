import React from "react";

interface SlideItInCardProps {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  githubButton: {
    text: string;
    onClick: () => void;
  };
}

const SlideItInCard: React.FC<SlideItInCardProps> = ({
  category,
  title,
  subtitle,
  description,
  primaryButton,
  githubButton,
}) => {
  return (
    <div className="bg-amber-50 rounded-lg p-6 shadow-lg max-w-4xl mx-auto mb-8 relative overflow-hidden">
      {/* Notebook paper lines background */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="h-px bg-gray-400"
            style={{ marginTop: `${i * 20}px` }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Category tag */}
        <div className="mb-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>

        {/* Title and subtitle */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <h3 className="text-4xl font-bold text-orange-500 mb-2">
            {subtitle}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6 text-lg">{description}</p>

        {/* Visual elements */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* Document stack */}
            <div className="flex">
              <div className="w-12 h-16 bg-white border-2 border-orange-300 rounded-sm shadow-sm transform rotate-2"></div>
              <div className="w-12 h-16 bg-white border-2 border-orange-300 rounded-sm shadow-sm transform -rotate-1 -ml-2"></div>
              <div className="w-12 h-16 bg-white border-2 border-orange-300 rounded-sm shadow-sm transform rotate-1 -ml-2"></div>
            </div>

            {/* Presentation slide */}
            <div className="w-16 h-12 bg-yellow-400 rounded-sm shadow-sm flex items-center justify-center">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={primaryButton.onClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            {primaryButton.text}
          </button>

          <button
            onClick={githubButton.onClick}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {githubButton.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideItInCard;

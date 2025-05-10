import { useTypewriter } from "@/hooks/useTypewriter";

// Color mapping for different words - exempted from global text color
const WORD_COLORS = {
  Democratized: "#dc626d", // Red
  Simplified: "#54b054",   // Green
  Organized: "#f7630c",    // Orange
  default: "white"
};

/**
 * Props for TypewriterEffect component
 */
interface TypewriterEffectProps {
  /** Array of phrases to cycle through */
  phrases: string[];
  /** Speed of typing characters in milliseconds */
  typingSpeed?: number;
  /** Speed of deleting characters in milliseconds */
  deletingSpeed?: number;
  /** Time to pause before starting deletion in milliseconds */
  pauseBeforeDelete?: number;
  /** Time to pause before moving to next phrase in milliseconds */
  pauseBeforeNextPhrase?: number;
}

/**
 * A component that displays text with a typewriter effect
 * Shows a static prefix with a changing suffix that types and deletes
 */
export default function TypewriterEffect({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBeforeDelete = 1500,
  pauseBeforeNextPhrase = 500,
}: TypewriterEffectProps) {
  // Use the typewriter hook to handle animation logic
  const { staticText, changingText, cursor } = useTypewriter({
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
    pauseBeforeNextPhrase,
  });
  
  /**
   * Determines the color for the changing text based on content
   */
  const getTextColor = (): string => {
    return changingText in WORD_COLORS 
      ? WORD_COLORS[changingText as keyof typeof WORD_COLORS]
      : WORD_COLORS.default;
  };

  return (
    <div className="inline-block">
      <span className="text-xl md:text-3xl font-georama font-light">
        {/* Static text - will use global text color */}
        <span>{staticText}</span>
        
        {/* Dynamic text with color based on content - exception from global color */}
        <span className="typewriter-changing-text" style={{ color: getTextColor() }}>{changingText}</span>
        
        {/* Blinking cursor */}
        <span className="typewriter-cursor">
          {cursor}
        </span>
      </span>
    </div>
  );
}

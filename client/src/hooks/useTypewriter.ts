import { useState, useEffect, useCallback } from "react";

/**
 * Props for the useTypewriter hook
 */
interface UseTypewriterProps {
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
 * Return type for the useTypewriter hook
 */
interface UseTypewriterResult {
  /** Combined text (static + changing parts) */
  text: string;
  /** The static portion of the text that doesn't change */
  staticText: string;
  /** The portion of text that changes with each phrase */
  changingText: string;
  /** Cursor character to display */
  cursor: string;
  /** Whether currently typing or paused */
  isTyping: boolean;
  /** Whether currently deleting text */
  isDeleting: boolean;
  /** Current phrase index in the array */
  currentPhraseIndex: number;
}

/**
 * A hook that creates a typewriter effect with a static prefix and changing suffixes
 */
export function useTypewriter({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBeforeDelete = 1500,
  pauseBeforeNextPhrase = 500,
}: UseTypewriterProps): UseTypewriterResult {
  // State for tracking typewriter status
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  
  // The static part of the text that doesn't change
  const staticText = "Artificial Intelligence ";

  /**
   * Extracts the dynamic part of a phrase
   */
  const getChangingPart = (phrase: string): string => {
    return phrase.replace("Artificial Intelligence ", "");
  };

  /**
   * Handles typing/deleting the next character and manages state transitions
   */
  const typeNextCharacter = useCallback(() => {
    const currentPhrase = getChangingPart(phrases[currentPhraseIndex]);
    
    if (isDeleting) {
      // Delete characters one by one
      setCurrentText(currentPhrase.substring(0, currentText.length - 1));
    } else {
      // Add characters one by one
      setCurrentText(currentPhrase.substring(0, currentText.length + 1));
    }
    
    // State transitions based on current status
    if (!isDeleting && currentText === currentPhrase) {
      // Complete phrase is typed, prepare to delete after pause
      setIsTyping(false);
      
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setIsTyping(true);
      }, pauseBeforeDelete);
      
      return () => clearTimeout(timeout);
    } 
    else if (isDeleting && currentText === "") {
      // Deletion is complete, move to next phrase
      setIsDeleting(false);
      setIsTyping(false);
      
      const timeout = setTimeout(() => {
        const nextIndex = (currentPhraseIndex + 1) % phrases.length;
        setCurrentPhraseIndex(nextIndex);
        setIsTyping(true);
      }, pauseBeforeNextPhrase);
      
      return () => clearTimeout(timeout);
    }
  }, [
    currentPhraseIndex,
    currentText,
    isDeleting,
    pauseBeforeDelete,
    pauseBeforeNextPhrase,
    phrases,
  ]);

  // Effect to handle the typing animation timing
  useEffect(() => {
    if (!isTyping) return;
    
    const typingDelay = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(typeNextCharacter, typingDelay);
    
    // Cleanup timeout on unmount or when dependencies change
    return () => clearTimeout(timeout);
  }, [
    typeNextCharacter,
    isTyping,
    isDeleting,
    typingSpeed,
    deletingSpeed,
  ]);

  return {
    text: staticText + currentText,
    staticText,
    changingText: currentText,
    cursor: "|",
    isTyping,
    isDeleting,
    currentPhraseIndex,
  };
}

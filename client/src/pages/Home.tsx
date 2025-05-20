import TypewriterEffect from "@/components/TypewriterEffect";
import { BsHexagonFill } from "react-icons/bs";

/**
 * Home page component
 * 
 * Displays the company name and typewriter effect showcasing different AI capabilities
 */
export default function Home() {
  // Phrases to be displayed in the typewriter effect
  const phrases = [
    "Artificial Intelligence Democratized",
    "Artificial Intelligence Organized",
    "Artificial Intelligence Simplified",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <main className="flex-grow flex flex-col items-center justify-center">
        {/* Company Logo/Name */}
        <div className="mb-6">
          {/* Logo and company name side by side */}
          <div className="flex items-center justify-center gap-3">
            {/* Placeholder Logo - will be replaced later with actual logo */}
            <div className="relative">
              <BsHexagonFill size={50} className="text-[#54b054]" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold text-sm">DL</div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-georama tracking-tight">
              DeepLure
            </h1>
          </div>
        </div>

        {/* Typewriter Animation */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-10">
          <TypewriterEffect
            phrases={phrases}
            typingSpeed={100}
            deletingSpeed={50}
            pauseBeforeDelete={1500}
            pauseBeforeNextPhrase={500}
          />
        </div>
      </main>

      {/* Copyright Footer */}
      <footer className="w-full py-6 mt-auto">
        <p className="text-muted-foreground text-sm font-georama">
          &copy; {new Date().getFullYear()} DeepLure Research Pvt. Ltd.
        </p>
      </footer>
    </div>
  );
}

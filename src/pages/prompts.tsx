import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Spacebar from "../assets/spacebar.svg"
import { Lock } from "lucide-react"
import { LockOpen } from "lucide-react"

function Prompts() {
    
    const designOptions = [
        "a loyalty app",
        "a landing page",
        "a dashboard",
        "a checkout flow"
      ];

      const forOptions = [
        "a food truck business",
        "a freelance photographer",
        "a fitness app",
        "a pet adoption agency"
      ];

    // State to store the selected design option
    const [selectedDesignOption, setSelectedDesignOption] = useState<string>(
        designOptions[0]
    );

    const [forprompt, setForPrompt] = useState<string>(
        forOptions[0]
    );

    // Add state to manage lock status
    const [isDesignLocked, setIsDesignLocked] = useState(false);
    const [isForLocked, setIsForLocked] = useState(false);
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.code === "Space") {
            event.preventDefault(); // Prevent scrolling when space is pressed
            generateRandomDesignOption();
            generateRandomForPrompt();
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
      }, [isDesignLocked, isForLocked]);
  

    // Function to generate a random design option
    const generateRandomDesignOption = () => {
        if (!isDesignLocked) {
            const randomIndex = Math.floor(Math.random() * designOptions.length);
            setSelectedDesignOption(designOptions[randomIndex]);
        }
    };

    // Function to generate a random "for" prompt
    const generateRandomForPrompt = () => {
        if (!isForLocked) {
            const randomIndex = Math.floor(Math.random() * forOptions.length);
            setForPrompt(forOptions[randomIndex]); 
        }
    };


  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-amber-50 p-4">
        <div className="md:w-md w-full max-w-md">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-extrabold mb-4 text-primary/90">LearnUI</h1>
            </div>
            <div className="flex flex-col mb-16">
                <div>
                    <p className="bg-pink-400 inline-block px-4 py-1 rounded-tr-lg rounded-tl-lg text-white text-xs">Design</p>
                    <div className="flex items-center mb-4">
                        <span className="text-white pe-6 text-2xl bg-pink-500 px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg me-4 flex flex-grow"> {selectedDesignOption} </span>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className={isDesignLocked ? "text-slate-900" : "text-slate-400"}
                            onClick={() => setIsDesignLocked(prev => !prev)}
                        >
                            {isDesignLocked ? <Lock /> : <LockOpen />}
                        </Button>
                    </div>
                </div>
                <div>
                    <p className="bg-blue-500 inline-block px-4 py-1 rounded-tr-lg rounded-tl-lg text-white text-xs">For</p>
                    <div className="flex items-center mb-4">
                        <span className="text-white pe-6 text-2xl bg-blue-600 px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg me-4 flex flex-grow"> {forprompt} </span>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className={isForLocked ? "text-slate-900" : "text-slate-400"}
                            onClick={() => setIsForLocked(prev => !prev)}
                        >
                            {isForLocked ? <Lock /> : <LockOpen />}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
            <Button onClick={() => { generateRandomDesignOption(); generateRandomForPrompt(); }}> Generate prompt
                <img src={Spacebar} alt="Spacebar" className="ps-2" />
            </Button>
    </div>
    </>
  )
}

export default Prompts
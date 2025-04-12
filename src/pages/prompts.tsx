import { useState } from "react"
import { Button } from "@/components/ui/button"
import Spacebar from "../assets/spacebar.svg"
import { Lock } from "lucide-react"
import { LockOpen } from "lucide-react"




function Prompts() {
    
    const designOptions = [
        "Design a loyalty app",
        "Design a landing page",
        "Design a dashboard",
        "Design a checkout flow"
      ];

      const forOptions = [
        "for a food truck business",
        "for a freelance photographer",
        "for a fitness app",
        "for a pet adoption agency"
      ];

    // State to store the selected design option
    const [selectedDesignOption, setSelectedDesignOption] = useState<string>(
        designOptions[0]
    );

    const [forprompt, setForPrompt] = useState<string>(
        forOptions[0]
    );

    // Function to generate a random design option
        const generateRandomDesignOption = () => {
        const randomIndex = Math.floor(Math.random() * designOptions.length);
        setSelectedDesignOption(designOptions[randomIndex]);
    };

    const generateRandomForPrompt = () => {
        const randomIndex = Math.floor(Math.random() * forOptions.length);
        setForPrompt(forOptions[randomIndex]); 
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
                        <Button variant="ghost" size="icon" className="text-slate-900">
                            <Lock />
                        </Button>
                    </div>
                </div>
                <div>
                    <p className="bg-blue-500 inline-block px-4 py-1 rounded-tr-lg rounded-tl-lg text-white text-xs">For</p>
                    <div className="flex items-center mb-4">
                        <span className="text-white pe-6 text-2xl bg-blue-600 px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg me-4 flex flex-grow"> {forprompt} </span>
                        <Button variant="ghost" size="icon" className="text-slate-400">
                            <LockOpen />
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
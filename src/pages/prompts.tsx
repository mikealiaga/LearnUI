import { Button } from "@/components/ui/button"
import Spacebar from "../assets/spacebar.svg"
import { Lock } from "lucide-react"
import { LockOpen } from "lucide-react"




function Prompts() {
    const designprompt: string = "A loyalty rewards app "
    const forprompt: string = "a foodtruck business"

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
                        <span className="text-white pe-6 text-2xl bg-pink-500 px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg me-4 flex flex-grow"> {designprompt} </span>
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
            <Button> Generate prompt
                <img src={Spacebar} alt="Spacebar" className="ps-2" />
            </Button>
    </div>
    </>
  )
}

export default Prompts
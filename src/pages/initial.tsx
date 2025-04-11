import { Button } from "@/components/ui/button"
import Spacebar from "../assets/spacebar.svg"


function Initial() {

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-amber-50 p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-primary/90">LearnUI</h1>
        <p className="text-xl text-gray-500 mb-8 max-w-lg">Practice you UI skills by generating a prompt and designing some figma screens!</p>
      </div>
      <Button> Generate prompt
        <img src={Spacebar} alt="Spacebar" className="ps-2" />
      </Button>
    </div>
    </>
  )
}

export default Initial
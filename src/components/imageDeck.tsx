import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
interface ImageDeckProps {
  name: string;
}


const imagesMap: Map<string, [string, string][]> = new Map<string, [string, string][] >([
  ["cpu", [
    ["/png/cpu1.png", "ALU component of the 8-bit custom breadboard CPU"]
  ]],
  ["niosorbit", [
    ["/png/niosorbit1.png", "Start screen of projectile simulator game."], 
    ["/png/niosorbit2.png", "Graphic showing trajectory and telemetry data."], 
    ["/png/niosorbit3.png", "Endscreen on success after orbit achieved."], 
    ["/png/niosorbit4.png", "Launch screen, where users can select launch parameters."],
  ]],
]);


export default function ImageDeck(props: ImageDeckProps) {

  const images = imagesMap.get(props.name);

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="flex flex-col justify-center align-middle w-full relative">
      {images!.length > 1 && <div 
        className="cursor-default rounded-full bg-slate-300 opacity-20 text-black absolute flex justify-center align-middle left-0 top-1/2 -translate-y-1/2 hover:opacity-50 z-10"
        onClick={() => setCurrentImage((currentImage - 1 + images!.length) % images!.length)}
      >
        <ChevronLeft />
      </div>}
      <img src={images![currentImage][0]} className="w-full md:w-5/6 h-auto rounded-3xl mx-auto mb-2" />
      {images!.length > 1 && <div 
        className="cursor-default rounded-full bg-slate-300 opacity-20 text-black absolute flex justify-center align-middle right-0 top-1/2 -translate-y-1/2 hover:opacity-50 z-10"
        onClick={() => setCurrentImage((currentImage + 1) % images!.length)}
      >
        <ChevronRight />
      </div>}
      <p className="text-sm italic flex justify-center mb-4 font-thin">{images![currentImage][1]}</p>
    </div>    
  )
}
import Navbar from "@/components/navbar";

export default function ResumePage() {
  return (
    <div>
      <Navbar />  
      <main className="flex min-h-screen">
        <div className="mx-auto text-4xl font-inter font-light tracking-wider mt-10">
          resume
        </div> 
      </main>
    </div>
  );
}
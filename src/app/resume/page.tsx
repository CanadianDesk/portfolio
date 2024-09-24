import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function ResumePage() {
  return (
    <div>
      <Navbar />  
      <main className="flex min-h-screen text-white flex-col">
        <div className="mx-auto text-4xl font-inter font-light tracking-wider mt-10 mb-16">
          resume
        </div> 
        <div className="w-full h-full">
          <iframe src="/pdf/resume.pdf" className="w-[90vw] h-[75vh] mx-auto"></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}
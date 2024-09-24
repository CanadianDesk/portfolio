import Navbar from "@/components/navbar";
import Link from "next/link";
import { MoveDown, MoveRight, Github, Linkedin, Mail } from "lucide-react";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="relative text-white">
        <Navbar  />  
      <main className="flex flex-col min-h-screen relative max-w-[1000px] mx-auto bg-black">
        <div className="mx-auto text-4xl font-inter font-light tracking-wider mt-[25vh] md:mt-[35vh]">
          hi, i&apos;m 
          <div className="font-bold text-8xl">avinav</div>
        </div> 
        <MoveDown className="mx-auto mt-32 animate-bounce" size={48} />
        <h1 className="mx-8 text-4xl font-semibold mt-96">
          about me.
        </h1>
        <p className="font-thin mx-8 my-6">
          Hi! I&apos;m currently a Computer Engineering student at the Unviersity of Toronto, also pursuing a minor in Artificial Intelligence Engineering. 
          I have experience and interest in a lot of things software- like webdev, full-stack, and embedded systems. See my projects and experiences to see what I&apos;ve been up to. <br/><br/>
          For fun, in addition to doing technical projects, I enjoy gaming, hiking, and reffing soccer games.
        </p>
        <Link className="bg-white text-black w-4/5 md:w-1/3 mx-auto flex items-center justify-between py-2 px-16 rounded-full hover:text-white hover:bg-black border-2 border-white my-2" href='/work'>
          <div>
            projects & experience 
          </div>
          <MoveRight />
        </Link>
        {/* <Link className="bg-white text-black w-4/5 md:w-1/3 mx-auto flex items-center justify-between py-2 px-16 rounded-full hover:text-white hover:bg-black border-2 border-white my-2" href='/work'>
          <div>
            contact me
          </div>
          <MoveRight />
        </Link> */}
        <h1 className="mx-8 text-4xl font-semibold mt-16">
          socials.
        </h1>
        <div className="mx-8 font-thin mt-6 mb-32">
          <a className="flex space-x-2 mb-4" href="https://github.com/CanadianDesk" target="_blank">
            <Github/> <span className="underline hover:text-gray-400">Github</span>
          </a>
          <a className="flex space-x-2 my-4" href="https://www.linkedin.com/in/avinav-bhandari-35a4541ba/" target="_blank">
            <Linkedin/> <span className="underline hover:text-gray-400">LinkedIn</span>
          </a>
          <a className="flex space-x-2 my-4" href="mailto:avinav.bhandari@mail.utoront.ca" target="_blank">
            <Mail/> <span className="underline hover:text-gray-400">avinav.bhandari@mail.utoronto.ca</span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

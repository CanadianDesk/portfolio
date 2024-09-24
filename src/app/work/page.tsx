"use client"; 

import Navbar from "@/components/navbar";
import { useState } from "react";
import dynamic from 'next/dynamic';
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/footer";

const Chrono = dynamic(() => import('react-chrono').then((mod) => mod.Chrono), {
  ssr: false,
});

enum Tab {
  EXPERIENCE,
  PROJECTS
}

function WorkPageContent() {

  const queryTab = useSearchParams().get('mode');
  const [activeTab, setActiveTab] = useState(queryTab == 'projects' ? Tab.PROJECTS : Tab.EXPERIENCE);

  const experienceContent = [
    <div className="text-left w-full p-4 font-inter text-white" key={null} id="draftparty2">
      <h3 className="font-bold text-xl">Full Stack Software Development Intern</h3>
      <h4 className="font-semibold text-base mb-2">@ <a href="https://draftparty.net" className="text-gray-300 hover:text-white underline" target="_blank">Draft Party</a></h4>
      <div className="font-extralight">
        Worked as a full stack software development intern at Draft Party, a startup that creates trivia games played in a sports draft format targeted for corporate team-building.
        <ul className="list-inside list-disc pl-4 pt-2 text-white">
          <li>Developed the backend for the Daily Game feature using Cloudflare Workers and Durable Objects</li>
          <li>Created 20+ REST API endpoints using Typescript and Node.js, including thorough unit testing using Jest</li>
          <li>Designed and implemented a user dashboard as well as login/signup flow on the frontend using Vue/Nuxt/Tailwind CSS/Typescript</li>
          <li>Utilized version control (Git/Github) and Project Management tools (Jira) to manage tasks and code</li>
        </ul>
      </div>
    </div>,
    <div className="text-left w-full p-4 font-inter text-white" key={null} id="draftparty1">
      <h3 className="font-bold text-xl">Jr. Part-time Frontend Software Developer</h3>
      <h4 className="font-semibold text-base mb-2">@ <a href="https://draftparty.net" className="text-gray-300 hover:text-white underline" target="_blank">Draft Party</a></h4>
      <div className="font-extralight">
        Worked part-time as a frontend software developer at Draft Party. Was mainly responsible to implemented a ground-up redesign of the entire frontend of the Draft Party website.
        <ul className="list-inside list-disc pl-4 pt-2">
          <li>Implemented a website redesign from scratch, efficiently translating mock-up designs into functional frontend code using Vue/Nuxt, Typescript, HTML, and CSS</li>
          <li>Created adaptive and responsive web layouts that render effectively across various devices and screens, reaching over 800 players</li>
          <li>Implemented a brand new leaderboard page which brought new corporate customers immediately after releasing</li>
        </ul>
      </div>
    </div>,  
    <div className="text-left w-full p-4 font-inter text-white" key={null} id="rocketry1">
      <h3 className="font-bold text-xl">Avionics/Software Developer</h3>
      <h4 className="font-semibold text-base mb-2">@ <a href="https://www.utat.ca/rocketry" className="text-gray-300 hover:text-white underline" target="_blank">University of Toronto Aerospace Team - Rocketry Division</a></h4>
      <div className="font-extralight">
        Was a member of the avionics/software on the University Rocketry Team. Was responsible for maintaining/developing software used to aid in the design and launch of rockets.
        <ul className="list-inside list-disc pl-4 pt-2">
          <li>Communicated with a team of approximately 20 people to develop avionics/software solutions to aid the successful launch of an experimental hybrid-fuelled rocket</li>
          <li>Developed a headless C/C++ Linux application that is responsible for driving signals to GPIO pins in order to actuate and read from different sensors in the fuelling system</li>
          <li>Led the development of a C++ backend application and networking solution that successfully parses thermocouple data and enables seamless data transfer over a small network</li>
          <li>Developed Python scripts to implement GPS data parsing and storage functionality, enhancing the efficiency and accuracy of data handling processes</li>
          <li>Successfully placed 3rd and 2nd at Launch Canada 2023 and 2024 competitions of over 30 university teams</li>
        </ul>
      </div>
    </div>,    
  ];

  const exprerienceItems = [
    {
      title: "May 2024 - Aug 2024",
    },
    {
      title: "Jan 2024 - May 2024",
    },
    {
      title: "Sep 2022 - May 2024",
    },
  ];

  const projectContent = [
    <div className="text-left w-full p-4 font-inter text-white" key={null}>
      <h3 className="font-bold text-xl mb-4">Complete Breadboard CPU and Custom Instruction Set</h3>
      <img src="/png/cpu1.png" className="w-2/3 h-auto rounded-3xl mx-auto mb-2" />
      <p className="text-sm italic flex justify-center mb-4 font-thin">ALU component of the 8-bit custom breadboard CPU</p>
      <div className="font-extralight">
        Designed an implemented a custom CPU on a breadboard, mainly using 74LS series ICs. This project includes:
        <ul className="list-inside list-disc pl-4 pt-2">
          <li>a register file with 4 D-Type 8-bit registers</li>
          <li>a complete 8-bit ALU with add, sub, shift, or, and, xor, not operations using just 74LS ICs with simple logic gates</li>
          <li>a clock that can run at variable speeds</li>
          <li>an 13-instruction set with custom opcodes</li>
          <li>a program counter</li>
        </ul>
      </div>
    </div>,
    <div className="text-left w-full p-4 font-inter text-white" key={null}>
      <h3 className="font-bold text-xl mb-4">Krumbz Recipe App: Recipe Searcher</h3>
      <div className="font-extralight">
        Created an app where users can see what recipes they can make, based on the ingredients they have. Some features include:
        <ul className="list-inside list-disc pl-4 pt-2">
          <li>ways for users to set macronutrient goals, and get suggested recipes to meet their goals</li>
          <li>allow users to add ingredients using AI using their camera</li>
          <li>intergration with a PostgreSQL database hosting over 1000 recipes & user data</li>
          <li>user authentication using JWT tokens, including OTP authentication to email</li>       
          <li>frontend using React Native for iOS and Android</li>  
          <li>backend RESTful API using Go/Golang with 25+ endpoints and thorough unit testing</li> 
          <li>containerized backend and microservices using Docker, hosted on Google Cloud Run</li>
        </ul>
      </div>
    </div>,
    <div className="text-left w-full p-4 font-inter text-white" key={null}>
      <h3 className="font-bold text-xl mb-4">Rocket Projectile Simulator</h3>
      <img src="/png/niosorbit1.png" className="w-2/3 h-auto rounded-3xl mx-auto mb-2" />
      <p className="flex justify-center text-sm italic mb-4 font-thin">Start screen of projectile simulator game.</p>
      <div className="font-extralight">
        Created a physics-accurate projectile simulator disguised as a rocket game. This was directly implemented on a soft-core processor on an FPGA, with no operating system. Some details:
        <ul className="list-inside list-disc pl-4 pt-2">
          <li>written entirely in C, compiled to Nios II assembly</li>
          <li>players had the ability to choose a planet (gravity, air resistance), as well as the angle and initial velocity of the &quot;rocket&quot;.</li>
          <li>the game had graphics that included an animation of the &quot;rocket&quot; trajectory, as well as telemetry like velocity and height. players won the game if they made orbit, and lost if they crashed.</li>
          <li>the game made use of a 60Hz VGA display, for which custom double-buffering drivers were written in C</li>
          <li>wrote custom drivers to implement PS/2 protocol for keyboard and mouse</li>
          <li>the game was implemented on a DE1-SoC FPGA board</li>
        </ul>
      </div>
    </div>,
    <div className="text-left w-full p-4 font-inter text-white" key={null}>
      <h3 className="font-bold text-xl mb-4">FPGA Human BenchMmark Games Project</h3>
      <div className="font-extralight">
        Designed a series of interactive games inspired by <a href="https://www.humanbenchmark.com/" className="underline text-gray-400 hover:text-white">Human Benchmark</a>. 
        A reaction time test and chimpanzee memory test were implemented on a DE1-SoC FPGA board, built in Verilog/SystemVerilog. Some more details:
        <ul className="list-inside list-disc pl-4 pt-2">
          <li>players had to respond to green light on a VGA display by pressing a key in order to see a score on the screen</li>
          <li>a 7-segment display shhowd the user&apos;s top score, timed in ms</li>
          <li>drivers for the VGA display, 7-segment display, and PS/2 keyboard were written in Verilog</li>
        </ul>
      </div>
    </div>,
  ];

  const projectItems = [
    {
      title: "May 2024 - Present",
    },
    {
      title: "May 2024 - Present",
    },
    {
      title: "Jan 2024 - May 2024",
    },
    {
      title: "Sep 2023 - Dec 2023",
    },
  ];

  return (
    <div className="">
      <Navbar />  
      <main className="flex min-h-screen flex-col bg-black text-white mb-32">
          <div className="flex justify-center space-x-8 align-middle mb-20 mt-16 text-xl">
            <button onClick={() => {setActiveTab(Tab.EXPERIENCE);}} className={`rounded-full px-4 py-2 ${activeTab === Tab.EXPERIENCE ? `bg-white text-black animate-pulse` : `bg-black text-white hover:border hover:border-white`}`}>experience</button>
            <button onClick={() => setActiveTab(Tab.PROJECTS)} className={`rounded-full px-4 py-2 ${activeTab === Tab.PROJECTS ? `bg-white text-black animate-pulse` : `bg-black text-white hover:border hover:border-white`}`}>projects</button>
          </div>
          <div className="flex justify-center align-middle">
            <Chrono
              items={activeTab === Tab.EXPERIENCE ? exprerienceItems : projectItems}
              mode="VERTICAL_ALTERNATING"
              key={activeTab}
              theme={{
                primary: "white",
                secondary: "white",
                cardBgColor: "#0f0f0f",
                cardDetailsColor: "white",
                cardForceColor: "white",
                cardTitleColor: "white",
                cardSubtitleColor: "white",
                titleColor: "white",
                titleColorActive: "black",
              }}
              disableToolbar
              scrollable={{ scrollbar: false }}
              highlightCardsOnHover
            >
              {activeTab === Tab.EXPERIENCE ? experienceContent : projectContent}
            </Chrono>
          </div>
      </main>
      <Footer />
    </div>
  );
}

export default function WorkPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkPageContent />
    </Suspense>
  );
}
import { Linkedin, Mail, Github } from "lucide-react"

export default function Footer() {
  return (
    <div className="w-full bg-[#0f0f0f] flex flex-row justify-center align-middle py-12 text-white">
      <a className="mx-8" href="https://github.com/CanadianDesk">
        <Github/>
      </a>
      <a className="mx-8" href="https://www.linkedin.com/in/avinav-bhandari-35a4541ba/">
        <Linkedin/>
      </a>
      <a className="mx-8" href="mailto:avinav.bhandari@mail.utoront.ca">
        <Mail/>
      </a>
    </div>
  )
}
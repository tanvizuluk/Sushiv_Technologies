import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
// import Services from "@/components/main/Services"
import Clients from "@/components/main/Clients";
import Image from "next/image";
import Message from "@/components/main/Message";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        {/* <Services /> */}
        <Encryption />
        <Projects />
        <Clients />
        
      </div>
    </main>
  );
}
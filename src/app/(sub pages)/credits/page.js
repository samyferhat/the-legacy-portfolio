import Image from "next/image";
import bg from "../../../../public/background/credits-background.jpg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";
import Credits from "@/components/credits";

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
    <Image  src={bg}
            alt="Next.js Portfolio website's credits page background imag"
            priority
            sizes="100vw"
            className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        />
        
     <Credits />
    </>
  );
}

import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import { Nav } from "@/components/navigation";

import Link from "next/link";
import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-70"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
         {/* Footer fixe en bas */}
      <footer className="absolute bottom-0 w-full text-center p-3 bg-black bg-opacity-20 text-white text-sm">
        <p>&copy; 2024 Samy - All right reserved</p>
        <p>
          <Link href="/credits" target="_self" className="underline">3D Models Credits</Link>
        </p>
      </footer>
      </div>
      
        
    </main>
  );
}
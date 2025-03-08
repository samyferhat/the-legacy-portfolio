"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import ItemLayout from "./ItemLayout";

const Credits = ({ children, className }) => {
  return (
//     <section className="py-20 w-full">

// <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
//       <ItemLayout className={"col-span-full"}>
//         <div className="flex items-center space-x-4">
//           <div className="flex-shrink-0">
//             <img
//               className="w-32 h-32 object-cover"
//               src="https://skillicons.dev/icons?i=babel,bootstrap,css,d3,docker,figma,firebase,git,github,html,js,jquery,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,tailwind,threejs,vercel,vite,vscode,yarn"
//               alt="samy"
//               loading="lazy"
//             />
//           </div>
//           <div>
//             <p className="font-light text-xs sm:text-sm md:text-base">
//             "son goku" (https://skfb.ly/o8QX9) by ejohnson967 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
//              </p>
//           </div>
//         </div>  
//       </ItemLayout>
//       <ItemLayout className={"col-span-full"}>
//         <div className="flex items-center space-x-4">
//           <div className="flex-shrink-0">
//             <img
//               className="w-32 h-32 object-cover"
//               src="https://skillicons.dev/icons?i=babel,bootstrap,css,d3,docker,figma,firebase,git,github,html,js,jquery,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,tailwind,threejs,vercel,vite,vscode,yarn"
//               alt="samy"
//               loading="lazy"
//             />
//           </div>
//           <div>
//             <p className="font-light text-xs sm:text-sm md:text-base">
//             "Bastard Sword" (https://skfb.ly/on6sz) by dudecon is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
//           </div>
//         </div>  
//       </ItemLayout>
//       <ItemLayout className={"col-span-full"}>
//         <div className="flex items-center space-x-4">
//           <div className="flex-shrink-0">
//             <img
//               className="w-32 h-32 object-cover"
//               src="https://skillicons.dev/icons?i=babel,bootstrap,css,d3,docker,figma,firebase,git,github,html,js,jquery,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,tailwind,threejs,vercel,vite,vscode,yarn"
//               alt="samy"
//               loading="lazy"
//             />
//           </div>
//           <div>
//             <p className="font-light text-xs sm:text-sm md:text-base">
//             "Nave Trunks" (https://skfb.ly/6RxDJ) by Jesús Lissen is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). </p>
//           </div>
//         </div>  
//       </ItemLayout>
//       </div>
//     </section>

<section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className={"col-span-full"}>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-32 h-32 object-cover"
                src="images/SonGoku.png"
                 alt="samy"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-light text-xs sm:text-sm md:text-base">
                "son goku" (https://skfb.ly/o8QX9) by ejohnson967 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
              </p>
            </div>
          </div>
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-32 h-32 object-cover"
                src="images/BastardSword.png"
                  alt="samy"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-light text-xs sm:text-sm md:text-base">
                "Bastard Sword" (https://skfb.ly/on6sz) by dudecon is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
              </p>
            </div>
          </div>
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-32 h-32 object-cover"
                src="images/NaveTrunks.png"  alt="samy"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-light text-xs sm:text-sm md:text-base">
                "Nave Trunks" (https://skfb.ly/6RxDJ) by Jesús Lissen is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
              </p>
            </div>
          </div>
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            

            <div>
              <p className="font-light text-xs sm:text-sm md:text-base">
              COPYRIGHT DISCLAIMER: (PLEASE READ) I DO NOT OWN DRAGONBALL. DragonBall is Owned by TOEI ANIMATION, Ltd. and Licensed by FUNimation Productions, Ltd.. All Rights Reserved. DragonBall, DragonBall Z, DragonBall GT and all logos, character names and distinctive likenesses are trademarks of TOEI ANIMATION, Ltd. Copyright Disclaimer under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair us. </p>
            </div>
          </div>
        </ItemLayout>
      </div>
    </section>
    
  );
};

export default Credits;
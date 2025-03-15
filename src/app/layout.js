import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Samy Portfolio",
    default:
      "Samy Portfolio",
  },
  description:
    "A unique creative portfolio with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand. Checkout CodeBucks on youtube.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
          {/* Footer global */}
          {/* Footer toujours en bas du contenu */}
        {/* <footer className="w-full text-center p-3 bg-black bg-opacity-50 text-white text-sm">
          <p>&copy; 2024 Mon Nom - Tous droits réservés</p>
          <p>
            Modèle 3D par <a href="URL_AUTEUR" target="_blank" className="underline">Nom de l'Auteur</a>
          </p>
        </footer> */}
      </body>
    </html>
  );
}
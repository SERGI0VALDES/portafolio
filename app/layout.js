import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Importaciones agregadas apartir de la creación del proyecto
import Navbar from "@/components/NavBar";

// Generado por Next.js >
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Metadata
export const metadata = {
  title:"Sergio Valdes - Portafolio",
  description:"Ingeniero en Sistemas, desarrollador full-stack",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/*Agregamos nuestro Navbar*/}
        <Navbar/>
          {children}
      </body>
    </html>
  );
}

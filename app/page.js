import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Sergio Valdes - Portafolio",
  description: "Ingeniero en Sistemas, desarrollador full-stack",
}

export default function Home() {
  return (
    <PageSection>
      <h1 className="text-3xl md:text-4xl font-bold">Hola, bienvenido a mi portafolio :)</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">Aquí encontrarás información sobre mi y mis proyectos.</p>
      <p className="mt-4  text-gray-600 ">¡Siéntase mejor que en su casa y explore con confianza!</p>
    </PageSection>
  );
}

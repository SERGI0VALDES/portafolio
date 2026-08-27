import PageSection from "@/components/PageSection";

export const metadata = {
    title: "Proyectos | Sergio Valdes",
    description: "Estos son algunos de mis proyectos. Aqui encontrarás informacion sobre mis proyectos y los enlaces a los repositorios de cada uno de ellos.",
}

export default function Proyectos() {
    return (
        <PageSection>
            <h1 className="text-3xl md:text-4xl font-bold">Estos son algunos de mis proyectos.</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">Aqui encontrarás informacion sobre mis proyectos y los enlaces a los repositorios de cada uno de ellos.</p>
        </PageSection>
    )
}
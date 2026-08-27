import PageSection from "@/components/PageSection";

export const metadata ={
    title: "Sobre Mi - Sergio Valdes",
    description: "Encuentra información acerca de mi, mi experiencia y habilidades",
}

export default function SobreMi() {
    return (
        <PageSection>
            <h1 className="text-3xl md:text-4xl font-bold">Soy Ingeniero en Sistemas con una especialidad en Desarrollo Full Stack</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">Mi nombre es Sergio Valdes, actualmente tengo 23 años y si, acabo de egresar de esta fantastica
                carrera, pero eso no me detiene, ya que me apasiona lo que hago y siempre estoy en busca de nuevos retos y oportunidades para seguir creciendo
                como profesional y como persona. Me considero una persona proactiva, responsable y con muchas ganas de aportar al equipo donde me encuentre!.
            </p>
        </PageSection>
    )
}
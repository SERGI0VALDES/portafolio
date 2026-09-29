import PageSection from "@/components/PageSection";

export const metadata = {
    title: "Sobre Mi - Sergio Valdes",
    description: "Encuentra información acerca de mi, mi experiencia y habilidades",
}

export default function SobreMi() {
    return (
        <PageSection>
            <h1 className="text-3xl font-bold text-gray-900">Soy Ingeniero en Sistemas con una especialidad en Desarrollo Full Stack</h1>
            <div className="m-4 p-6 border-rounded-lg shadow-md bg-white dark:bg-gray-800">
                <p className="mt-10 text-lg text-gray-600">
                    Mi nombre es Sergio Valdes, actualmente tengo 23 años ya que me apasiona lo que hago y siempre estoy en busca de nuevos retos y oportunidades para seguir creciendo
                    como profesional y como persona. Me considero una persona proactiva, responsable y con muchas ganas de aportar al equipo donde me encuentre!.
                </p>
            </div>
        </PageSection>
    )
}
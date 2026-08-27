import PageSection from "@/components/PageSection";

export const metadata = {
    title: "Contacto - Sergio Valdes",
    description: "Página de contacto del portafolio del Ing. Sergio Valdes",
}

export default function Contacto() {
    return (
        <PageSection>
            <h1 className="text-3xl md:text-4xl font-bold">Contactame a través de los siguientes medios.</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">Correo electronico: iscvaldessergio.0@gmail.com</p>
        </PageSection>  
    )
}
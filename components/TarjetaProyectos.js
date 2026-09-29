/*
La tarea de este componente es crear una "tarjeta" para mostrar los 
proyectos que he realizado, con su respectivo título, descripción 
y enlace al proyecto.
*/

// Importaciones necesarias
import Link from "next/link"; // Utilizamos link para redirigir al proyecto.
import Image from "next/image"; // Utilizamos image para mostrar la imagen del proyecto.

// Creacion del componente.
export default function TarjetaProyectos({ titulo, descripcion, enlace, imagen }) {
    return (
        <div className="m-4 p-6 border-rounded-lg shadow-md bg-white dark:bg-gray-800">
            <h3 className="text-xl font-bold">{titulo}</h3>
            {/*Pasarela de fotografias del proyecto*/}
            <Image width={150} height={150} src={imagen} alt={titulo}/> 
            <p>{descripcion}</p>
            
            <Link className="text-blue-500 font-bold" href={enlace} target="_blank" rel="noopener noreferrer">
                Ver proyecto
            </Link>
        </div>
    )
}

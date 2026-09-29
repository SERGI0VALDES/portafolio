// Importamos la estructura de una tarjeta, para usarla dentro de la lista de proyectos
import TarjetaProyectos from "../TarjetaProyectos";

const proyectos = [
    {
        id:1, 
        titulo: "Punto de Venta e Inventarios Creaciones Madriz",
        descripcion: "Una aplicacion de escritorio para gestionar inventarios y ventas de una empresa.", 
        enlace: "https://github.com/tuusuario/proyecto1", 
        imagen: "/img/Project1/CMProjectImg.png"
    },
    {
        id:2,
        titulo: "Patronfy",
        descripcion: "Una aplicacion movil para gestionar y crear patrones de costura con una interfaz amigable y facil de usar.",
        enlace: "https://github.com/tuusuario/proyecto2",
        imagen: "/img/Project2/Patronfy.png"
    },
    {
        id: 3,
        titulo: "Inedi Access",
        descripcion: "Una aplicación movil para gestionar los alumnos de un maestro; clases, asistencia, boletas, etc. De igual manera, el uso se expande a los alumnos para gestionar su clases con esos maestros",
        enlace: "https://github.com/tuusuario/proyecto3",
        imagen: "/img/Project3/InediAccess.png"
    }
]

export default function ListaProyectos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {proyectos.map((proyecto) => (
        <TarjetaProyectos key={proyecto.id} {...proyecto} />
      ))}
    </div>
  );
}
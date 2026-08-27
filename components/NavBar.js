import Link from "next/link";

export default function Navbar() {
    return (
        <nav class="w-full max-w-6xl mx-auto py-4 px-6 sm:px-8">

            <div class="w-full bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-6 py-3 flex items-center justify-between">

                <Link href="/" class="text-lg font-bold text-gray-900">Inicio.</Link>

                <div class="hidden sm:flex items-center space-x-6 text-sm font-medium text-gray-600">
                    <Link href="sobre-mi/" class="hover:text-gray-900 transition-colors">Sobre mi</Link>
                    <Link href="proyectos/" class="hover:text-gray-900 transition-colors">Proyectos</Link>
                    <Link href="contacto/" class="hover:text-gray-900 transition-colors">Contacto</Link>
                </div>

            </div>
        </nav>
    );
}
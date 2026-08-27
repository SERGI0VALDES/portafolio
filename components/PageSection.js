export default function PageSection({children}){
    return(
        <section className="flex flex-col items-center justify-center min-h-screen py-2">
            {children}
        </section>
    )
}
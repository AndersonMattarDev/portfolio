import { FaQuoteLeft } from "react-icons/fa"

export function Testimonials(){
    return(
    <section className="container mx-auto max-w-4xl p-4 py-8">
        <div className="relative mb-4 p-4 text-center">
            <h2 className="relative z-50 mb-2 font-bold">
                <span className="mr-2 font-headline text-3xl text-gray-800">Depoimentos de </span>
                <span className="font-handwriting text-4xl text-blue-800">Clientes</span>
            </h2>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
        </div>
        <figure>
            <FaQuoteLeft className="h-8 w-8 text-gray-600" />
            <blockquote className="mb-6">
                <p className="2xl text-gray-900">
                    Anderson criou em sua web page uma vitrine virtual e administra meu Instagram 
                    comercial, estou gostando muito do trabalho, a página em seu site ficou maravilhosa e as 
                    postagens no instagram estão um show. Recomendo a todos que desejam um trabalho profissional e 
                    sério.
                </p>
            </blockquote>
            <figcaption className="flex items-center justfy-center gap-2">
                <img 
                className="h-6 w-6 rounded-full" 
                src="images/mockup1.png" 
                alt="Cida Moreno" 
                />
                <div className="flex items-center divide-x-2 divide-gray-200">
                    <div className="pr-3 font-medium xt-gray-900">Cida Moreno</div>
                    <div className="pl-3 text-sm font-light text-gray-500">
                    <a href="https://www.instagram.com/deliciasdacidasalgados/">@deliciasdacidasalgados</a>  
                    </div>
                </div>
            </figcaption>
        </figure>
        <br /><br />
        <figure>
            <FaQuoteLeft className="h-8 w-8 text-gray-600" />
            <blockquote className="mb-6">
                <p className="2xl text-gray-900">
                    A página criada por Anderson para minha agência ficou maravilhosa, nossos aventureiros adoraram,
                    e seu suporte é muito bom, o instagram está ficando com nossa cara. Super recomendo os serviços 
                    deste profissional incrível!!!
                </p>
            </blockquote>
            <figcaption className="flex items-center justfy-center gap-2">
                <img 
                className="h-6 w-6 rounded-full" 
                src="images/mockup3.png" 
                alt="Fish Caiaques - Bertioga" 
                />
                <div className="flex items-center divide-x-2 divide-gray-200">
                    <div className="pr-3 font-medium xt-gray-900">Fish Caiaques</div>
                    <div className="pl-3 text-sm font-light text-gray-500">
                    <a href="https://www.instagram.com/fishcaiaques1/">@fichcaiaques1</a>  
                    </div>
                </div>
            </figcaption>
        </figure>
    </section>
    )
}
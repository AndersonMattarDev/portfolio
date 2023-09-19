import { HiDownload } from 'react-icons/hi'

export function Hero(){
    return(
        <section className="rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]">
            <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
                
                    <div className="basis-1/2">
                    <h1 className="mb-6 text-center mb:text-left">
                    <span className="font-handwriting block text-4xl text-center md:text-left">Olá, me chamo</span>
                    <span className="font-headline text-5xl font-semibold">Anderson</span>
                    <span className="font-headline text-5xl font-light text-blue-400">Moreno Mattar</span>
                </h1>
                <h2 className="font-semibold text-white flex items-center gap-2 text-center mb:text-left">
                   <div className="h-1 w-12 rounded-full bg-blue-800"/>
                    Desenvolvedor React.js Front-end
                    </h2>

                    <p className="text-gray-400 my-6 text-center mb:text-left">
                        Desenvolvedor front-end com um foco apaixonado na criação de 
                        experiências web excepcionais através do poderoso ecossistema React.
                        Construindo Experiências Web Inesquecíveis com React: Transformando Visões Digitais em Realidade!
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <a href="mailto:andmat7745@gmail.com"  className="underline font-bold text-white">Fale Comigo</a>
                        <span className="italic text-gray-500">ou</span>
                        <a href="./docs/curriculoAnderson.pdf" className="button text-gray-500 hover:text-gray-900 flex items-center gap-2">
                            <HiDownload />
                            Baixe meu CV
                        </a>
                    </div>
                    </div>
                    <div className="basis-1/2 text-white"></div>
            </div>
       </section>
    )
}
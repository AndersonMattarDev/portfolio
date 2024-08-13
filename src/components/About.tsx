
export function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center">
        <h2 className="text-blue-900 font-bold z-10">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Tenho atualmente um projeto próprio on-line e este portfólio como
          segundo projeto, sou focado e determinado em criar aplicações
          responsivas e uteis. Espero que a sua seja a próxima!
        </p>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40"></div>
      </div>

      <div className="relative mx-auto mt-20 max-w-lg">
        <div className="relative w-full rounded-lg  bg-blue-200 p-4 ps-20 md:h-64 md:ps-48 h-[17rem]">
          <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-3xl font-bold ">Olá,</p>
            <p>
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Anderson Moreno Mattar
              </span>
            </p>
            <table className="mt-2 w-full text-sm">
                <tbody>
                    <tr>
                        <td className="font-headline font-bold uppercase text-blue-900">
                            Idade:
                        </td>
                        <td>47</td>
                    </tr>
                    <tr>
                        <td className="font-headline font-bold uppercase text-blue-900">
                            Celular:
                        </td>
                        <td>
                            <a href="tel:+5532984638048" className="underline hover:text-blue-800">
                            +55 32 98463-8048
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="font-headline font-bold uppercase text-blue-900">
                            Email:
                        </td>
                        <td>
                            <a 
                            href="mailto:andmat7745@gmail.com"
                            className="underline hover:text-blue-800">
                            andmat7745@gmail.com
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="font-headline font-bold uppercase text-blue-900">
                            Endereço:
                        </td>
                        <td>
                            <a 
                            href="https://www.google.com.br/maps/place/S%C3%A3o+Jo%C3%A3o+del+Rei,+MG/@-21.1159603,-44.2817967,13z/data=!3m1!4b1!4m6!3m5!1s0xa1ce6415ba0a79:0xd777eca370ba8a76!8m2!3d-21.1362111!4d-44.2576421!16s%2Fg%2F11bc5cpf0_?entry=ttu"
                            className="underline hover:text-blue-800"
                            >
                              São joão Del Rei - MG
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="font-headline font-bold uppercase text-blue-900">
                            Disponível:
                        </td>
                        <td>
                            <span className="relative flex h-3 w-3">
                              <span className="absolute inline-flex h-full w-full 
                              animate-ping rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                            </span>
                        </td>
                    </tr>

                </tbody>

              </table>
          </div>
          <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url('./assets/Eu.jpeg')] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"></div>
        </div>
      </div>
    </section>
  );
}
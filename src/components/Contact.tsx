import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { FaSpinner, FaWhatsapp } from "react-icons/fa";
import {
  HiCheckCircle,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";

export function Contact() {
   const form = useRef<HTMLFormElement>(null);
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(false);
   const [error, setError] = useState(false);
   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!form.current) return

    setLoading(true);

    emailjs
    .sendForm(
    "service_hyw1vxq",
    "template_ffzwchq",
    form.current,
    "P67QonVJk7Y6lEdUB"
    )
    .then(
    () => {
      setSuccess(true);
      setLoading(false);
      //Limpa os campos do formulário após o envio
      setFullName('');
      setEmail('');
      setMessage('');
      // Reverta o estado de sucesso após 5 segundos (5000 ms)
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
    },
    (error) => {
      setError(true)
      setLoading(false)
      console.error(error)
    }
    )
   }

  const contacts = [
    {
      name: "WhatsApp",
      description: "+55 32 98424-0038",
      link: "https://web.whatsapp.com/?text=Olá...",
      icon: <FaWhatsapp className="h-10 w-10" />,
    },
    {
      name: "Email",
      description: "andmat7745@gmail.com",
      link: "mailto:andmat7745@gmail.com?subject=Olá...",
      icon: <HiOutlineEnvelope className="h-10 w-10" />,
    },
    {
      name: "São João Del Rei",
      description: "Minas Gerais",
      link: "https://www.google.com.br/maps/place/S%C3%A3o+Jo%C3%A3o+del+Rei,+MG/@-21.1615364,-44.3792588,11z/data=!3m1!4b1!4m6!3m5!1s0xa1c6613400d4bf:0xb5d1a2098496fa8f!8m2!3d-21.1539436!4d-44.2289441!16s%2Fg%2F11rgdh3swk?entry=ttu",
      icon: <HiOutlineMapPin className="h-10 w-10" />,
    },
  ];
  return (
    <section id="contact" className="bg-blue-700 text-white">
      <div className="container mx-auto max-w-4xl p-4 py-8 ">
        <div className="mb-6">
          <h2 className="z-50 mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Fale
            </span>
            <span className="font-handwriting text-4xl">Comigo</span>
            <p className="text-sm">
              Entre em contato pelo formulário ou WhatsApp, com certeza poderei
              te ajudar.
            </p>
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="basis-2/3">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block ps-4 font-headline font-semibold"
                >
                  Mensagem:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-grow">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu nome:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="email"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu email:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    type="email"
                    name="email"
                    id="email"
                    required
                     value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
              <button
                  type="submit"
                  className="button flex items-center gap-2 text-blue-700"
                  disabled={loading}
                >
                  {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                  {success && <HiCheckCircle className="h-4 w-4" />}  
                  Enviar mensagem
                </button>
                
                {error && (
                  <p className="mt-2">
                    Ocorreu um erro ao enviar a mensagem, tente novamente mais
                    tarde.
                  </p>
                )}
              </div>
            </form>
          </div>
          <div className="basis-1/3">
            {contacts.map((contact, index) => (
              <div
                key={`contact-${index}`}
                className="mb-4 flex items-center gap-4 rounded-lg border 
                      border-dashed border-gray-400 p-4"
              >
                {contact.icon}
                <p className="font-headline font-semibold">{contact.name}</p>
                <a
                  href={contact.link}
                  target="_blank"
                  title={`Link para ${contact.link}`}
                  className="text-gray-300 underline underline-offset-2"
                >
                  {contact.description}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

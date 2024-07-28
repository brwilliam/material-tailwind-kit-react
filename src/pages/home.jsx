import React from "react";
import {
  Card, 
  CardHeader,
  Typography,
  Button,  

} from "@material-tailwind/react";
import { FingerPrintIcon } from "@heroicons/react/24/solid";;
import { FeatureCard } from "@/widgets/cards";
import { featuresData, contactData } from "@/data";
import WhatsAppButton from "@/widgets/WhatsAppButton";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-balance.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/80 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Defendendo seus direitos com excelência e compromisso
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Atendimento humanizado, pautado pela ética e transparência. Nossa missão é compreender suas necessidades e buscar soluções jurídicas eficazes, sempre com respeito e dedicação.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Quem é Talita Santos
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Advogada inscrita nos quadros da Ordem Dos Advogados sob nº 511.960.
                <br />
                <br />
                Graduada em Direito pela Universidade do Oeste Paulista e pós-graduanda em direito de Previdenciário pela Legale.
                <br />
                <br />
                Sua atuação se estende as áreas de Direito Penal e Direito Trabalhista, em parceria com time especializado.
                <br />
                <br />
                Seu compromisso com a excelência se reflete em uma abordagem personalizada, onde cada caso é tratado com a devida atenção e cuidado, proporcionando soluções jurídicas eficazes e seguras para nossos clientes.

              </Typography>
              <Button variant="filled">Fale conosco</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-80px mb-3 mt-2 font-bold">
                  <img
                    alt="Card Image"
                    src="/img/people.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative bg-gray-400 py-24 px-4">
        <div className="container mx-auto">
          
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-900">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          
        </div>
      </section>
      <WhatsAppButton />
      {/* <div className="bg-white">
        <Footer />
      </div> */}
    </>
  );
}

export default Home;

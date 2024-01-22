import Form from "@/components/Form";
import Pizzas from "@/images/pizzas.jpg";
import Image from "next/image";

function Forms() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
      <div className="w-full max-w-3xl mx-auto mb-8">
        <Image src={Pizzas} />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="text-red-600 text-5xl sm:text-7xl md:text-8xl mb-4 font-goToPizza font-bold">
          A Go2Pizza
        </div>
        <div className="mx-4 sm:mx-12 text-md sm:text-2xl max-w-3xl">
          <p className="text-black mb-4 text-center">
            É mais do que uma franquia, somos parceiros comprometidos com o seu sucesso. Estamos sempre à disposição para oferecer suporte e orientação garantindo que você alcance todo o potencial do seu empreendimento. <strong>Junte-se a nós</strong> nesta jornada para redefinir o padrão de delivery de pizzas. Aproveite agora a oportunidade e seja um franqueado inovador da Go2Pizza.
          </p>
          <p className="text-red-600 font-extrabold my-3 md:text-3xl text-center">
            O SEU SUCESSO COMEÇA AQUI.
          </p>
        </div>
        <Form/>
      </div>
    </div>
  );
}

export default Forms;

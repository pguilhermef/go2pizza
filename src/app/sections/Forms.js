import Form from "@/components/Form"

function Forms() {
  return(
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="flex-col items-center justify-center">
        <div className="flex-col justify-center items-center">
          <div className="flex justify-center items-center text-red-600 text-7xl sm:text-8xl mb-4">
            A Go2Pizza
          </div>
          <div className="text-center mx-4 sm:mx-12 sm:text-2xl sm:max-w-[80vh]">
            <p className="text-black mb-2">
              É mais do que uma franquia, somos parceiros comprometidos com o seu sucesso. Estamos sempre à disposição para oferecer suporte e orientação garantindo que você alcance todo o potencial do seu empreendimento. <strong>Junte-se a nós</strong> nesta jornada para redefinir o padrão de delivery de pizzas. Aproveite agora a oportunidade e seja um franqueado inovador da Go2Pizza.
            </p>
            <p className="text-red-600 font-extrabold my-3">
              O SEU SUCESSO COMEÇA AQUI.
            </p>
          </div>
        </div>
        <Form />
      </div>
    </div>
  )
}

export default Forms
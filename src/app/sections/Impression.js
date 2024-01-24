import Image from "next/image"
import pizzaImpression from '@/images/pizza_impression.jpg'
import pizzaTrabalhador from '@/images/pizza_trabalhador.jpg'

function Impression() {
  return(
    <div className="min-h-[90vh] flex-col justify-center items-center bg-white text-black">
      <div className="bg-white flex-col justify-center items-center min-h-1/6 max-w-3xl m-auto text-black px-8 py-10">
        <div className='flex justify-start'>
          <div className="flex mb-4">
            A Go2Pizza, inicialmente concebida para atender às demandas do mercado corporativo B2B, está agora pronta para conquistar o mercado B2C.
          </div>
        </div>
        <div className='flex'>
          Este é o momento perfeito para se tornar parte de uma nova era no setor de delivery de pizzas, e a nossa proposta é simplesmente irresistível.
        </div>
      </div>


      <div className='max-h-3/6 max-w-3xl m-auto'>
        <Image src={ pizzaImpression} className='m-auto' />
      </div>

      <div className='flex-col sm:flex-row flex justify-center items-center max-w-4xl h-auto px-8 py-10 m-auto'>
        <div className='sm:w-4/6 px-4 pb-8 flex-col'>
          <div className='mb-3'>
            Estamos construindo um novo modelo de negócio, eficiente e inovador, projetado para se destacar como o delivery mais rápido do mercado de pizzas
          </div>
          <div>
            Seja um dos primeiros a investir na expansão da Go2Pizza tornando-se parte integral do nosso sucesso.
          </div>
        </div>

        <div className='flex min-h-w-2/6'>
          <Image src={pizzaTrabalhador} className='rounded-3xl max-w-80'/>
        </div>
      </div>
    </div>
  )
}

export default Impression
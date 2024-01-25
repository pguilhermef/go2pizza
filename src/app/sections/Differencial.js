import Card from '@/components/Card';

import cogwheel from '@/images/cogwheel.png';
import delivery_costumer from '@/images/delivery.png';
import delivery_truck from '@/images/fast-delivery.png';
import pizza from '@/images/pizza_c.jpg';
import quality from '@/images/quality.png';
import money from '@/images/save-money.png';

import Image from 'next/image';


const cardsData = [
  {
    id: 1,
    image: money,
    text: 'Uma proposta financeira atraente e com baixo custo de investimento.',
  },
  {
    id: 2,
    image: delivery_truck,
    text: 'Delivery projetado para ser o mais rápido do mercado de pizzas',
  },
  {
    id: 3,
    image: cogwheel,
    text: 'Operação simples, eficiente e rápida, sem a necessidade de mão-de-obra especializada',
  },
  {
    id: 4,
    image: delivery_costumer,
    text: 'Operação com foco na qualidade e na excelência do atendimento ao consumidor',
  },
];

const yellowCardData = {
  image: quality,
  text: 'Uma proposta financeira atraente e com baixo custo de investimento.',
}


function Differencial() {
  return (
    <div className="min-h-screen flex-col justify-center items-center bg-slate-100">
      <div className="flex-col flex justify-center items-center text-center bg-go2pizza-yellow h-1/6 w-full text-red-600">
        <div className="h-1/6 text-3xl lg:text-3xl font-light">O QUE NOS</div>
        <div className="h-4/6 text-5xl lg:text-7xl font-bold">DIFERENCIA?</div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center items-center p-4 bg-slate-100 max-w-4xl m-auto">
        {cardsData.map((card) => (
          <Card key={card.id} image={card.image} text={card.text}/>
        ))}
      </div>

      <div className='mx-4 text-black'>
        <div className="flex flex-col sm:flex-row justify-start items-center rounded-3xl p-4 min-h-48 sm:min-h-32 bg-go2pizza-yellow max-w-3xl m-auto">
          <div className="flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 relative overflow-hidden mx-3">
            <Image
              src={yellowCardData.image}
              alt="Card Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <p className="font-medium px-4 pt-3 text-center sm:text-left">{yellowCardData.text}</p>
        </div>
      </div>

      <div className='flex w-full py-4 max-w-4xl m-auto'>
        <div className='h-auto hidden sm:flex'>
          <Image src={pizza} />
        </div>

        <div className='flex flex-col p-2 justify-between'>
          <div className='flex flex-col mt-1 sm:ml-4 mb-4 font-go2Pizza font-extrabold text-6xl md:text-8xl text-center sm:text-left'>
            <span className='text-red-600 text-stroke'>
              GO2PIZZA
            </span>
            <span className='text-red-600'>
              GO2PIZZA
            </span>
            <span className='text-red-600 text-stroke'>
              GO2PIZZA
            </span>
          </div>

          <span className='text-black font-medium mb-3 px-5'>
            Criada por entusiastas da tradicão da pizza italiana e profissionais atuantes no cenário gatronômico, a Go2Pizza tem como missão oferecer experiências singulares aos amantes das pizzas artesanais.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Differencial;

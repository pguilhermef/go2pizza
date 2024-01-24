import Card from '@/components/Card';

import delivery_costumer from '@/images/delivery.png';
import delivery_truck from '@/images/fast-delivery.png';
import quality from '@/images/quality.png';
import money from '@/images/save-money.png';


const cardsData = [
  {
    id: 1,
    image: money,
    text: 'Uma proposta financeira atraente e com baixo custo de investimento.',
  },
  {
    id: 2,
    image: delivery_truck,
    text: 'Deliveryprojetadopara seromaisrápidodo mercadodepizzas',
  },
  {
    id: 3,
    image: quality,
    text: 'Uma proposta financeira atraente e com baixo custo de investimento.',
  },
  {
    id: 4,
    image: delivery_costumer,
    text: 'Uma proposta financeira atraente e com baixo custo de investimento.',
  },
];


function Differencial() {
  return (
    <div className="min-h-screen flex-col justify-center items-center bg-red-600">
      <div className="flex-col flex justify-center items-center text-center bg-go2pizza-yellow h-1/6 w-full text-red-600">
        <div className="h-1/6 text-3xl font-light">O QUE NOS</div>
        <div className="h-4/6 text-7xl font-bold">DIFERENCIA?</div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center items-center p-4 bg-blue-600 w-full">
        {cardsData.map((card) => (
          <Card key={card.id} image={card.image} text={card.text} />
        ))}
      </div>
    </div>
  );
}

export default Differencial;

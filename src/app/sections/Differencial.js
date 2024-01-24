import Card from '@/components/Card';

const cardsData = [
  {
    id: 1,
    image: 'URL_DA_IMAGEM_1',
    text: 'Frase do Card 1',
  },
  {
    id: 2,
    image: 'URL_DA_IMAGEM_2',
    text: 'Frase do Card 2',
  },
  {
    id: 3,
    image: 'URL_DA_IMAGEM_3',
    text: 'Frase do Card 3',
  },
  {
    id: 4,
    image: 'URL_DA_IMAGEM_4',
    text: 'Frase do Card 4',
  },
];


function Differencial() {
  return(
    <div className="min-h-screen flex-col justify-center items-center bg-red-600">
      <div className="flex-col flex justify-center items-center text-center bg-go2pizza-yellow h-1/6 w-full text-red-600">
        <div className="h-2/6 text-3xl font-light">O QUE NOS</div>
        <div className="h-4/6 text-7xl font-bold">DIFERENCIA?</div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center bg-blue-600">
  {cardsData.map((card) => (
    <Card key={card.id} image={card.image} text={card.text} />
  ))}
</div>

    </div>
  )
}

export default Differencial
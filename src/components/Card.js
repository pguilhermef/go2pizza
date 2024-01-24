// components/Card.js
const Card = ({ image, text }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start items-center rounded-2xl p-4 bg-red-200">
      <img src={image} alt="Card Image" className="min-h-16 w-2/6" />
      <p className="px-4 text-center sm:text-left">{text}</p>
    </div>
  );
};

export default Card;


const Card = ({ image, text }) => {
  return (
    <div className="flex items-center border p-4 w-[40%] bg-red-200">
      <img src={image} alt="Card Image" className="w-16 h-16 rounded-full mr-4" />
      <p>{text}</p>
    </div>
  );
};

export default Card;

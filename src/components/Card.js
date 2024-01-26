// components/Card.js
import Image from "next/image";

const Card = ({ image, text }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center rounded-3xl  min-h-[21rem] sm:min-h-32 bg-red-600 text-white font-medium p-2">
      <div className="flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 relative overflow-hidden mx-3">
        <Image
          src={image}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="invert"
        />
      </div>
      <p className="px-4 m-3 text-center sm:text-left">{text}</p>
    </div>
  );
};

export default Card;

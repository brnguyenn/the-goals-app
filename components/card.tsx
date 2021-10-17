import React from "react";
import Link from "next/link";

interface ICard {
  title: string;
  imageUrl: string;
  linkTo: string;
}

const Card: React.FC<ICard> = ({ title, imageUrl, linkTo }) => {
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <Link href={linkTo} passHref>
          <a>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-center lg:w-full lg:h-full"
              />
            }
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;

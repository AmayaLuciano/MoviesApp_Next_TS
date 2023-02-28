import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

// export interface Props {
//   id: number;
// }

const Movie: FC = () => {
  const imagePath = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="flex flex-col justify-end text-center">
      <div>
        {/* <div className="mb-3">
          <h1>{title}</h1>
          <h3>{releaseDate}</h3>
        </div>
        <Image src={imagePath + image} width={600} height={600} alt={title} /> */}
      </div>
    </div>
  );
};

export default Movie;

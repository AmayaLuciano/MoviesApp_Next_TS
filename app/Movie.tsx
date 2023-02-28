import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

export interface Props {
  id: number;
}

const Movie: FC<Props> = () => {
  const imagePath = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="flex flex-col justify-end text-center">
      {/* <Link href={`/${id}`}>
        <div className="mb-3">
          <h1>{title}</h1>
          <h3>{releaseDate}</h3>
        </div>
        <Image src={imagePath + image} width={600} height={600} alt={title} />
      </Link> */}
    </div>
  );
};

export default Movie;

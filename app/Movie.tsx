import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Result } from './Types/types';

export interface Props {
  id: number;
  title: string;
  releaseDate: string;
  image: string;
}

const Movie: FC<Props> = ({ id, title, releaseDate, image }) => {
  const imagePath = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="flex flex-col justify-end text-center">
      <Link href={`/${id}`}>
        <div className="mb-3">
          <h1>{title}</h1>
          <h3>{releaseDate}</h3>
        </div>
        <Image src={imagePath + image} width={600} height={600} alt="as" />
      </Link>
    </div>
  );
};

export default Movie;

import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Result } from './Types/types';

export interface Props {
  movie: Result;
}

const Movie: FC<Props> = ({ movie }) => {
  const imagePath = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="flex flex-col justify-end text-center">
      <Link href={`/${movie.id}`}>
        <div className="mb-3 " key={movie.id}>
          <h1>{movie.title}</h1>
          <h3>{movie.release_date}</h3>
        </div>
        <Image
          src={imagePath + movie.poster_path}
          width={600}
          height={600}
          alt="as"
        />
      </Link>
    </div>
  );
};

export default Movie;

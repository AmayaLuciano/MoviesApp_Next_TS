import Image from 'next/image';
import React from 'react';
import { MovieDetail } from '../Types/types';

interface Props {
  params: { movie: string };
}

const MovieDetail = async ({ params }: Props) => {
  const { movie } = params;
  const imagePath = 'https://image.tmdb.org/t/p/original';

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );

  const res: MovieDetail = await data.json();

  return (
    <div>
      <h1>{res.title.toUpperCase()}</h1>
      <h2>{res.release_date}</h2>
      <h2>{res.runtime} minutes</h2>
      <Image
        className="my-12 w-full"
        src={imagePath + res.backdrop_path}
        width={1000}
        height={1000}
        alt={res.title}
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
};

export default MovieDetail;

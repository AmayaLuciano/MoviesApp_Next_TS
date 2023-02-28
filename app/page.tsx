import Image from 'next/image';
import Link from 'next/link';
import { getMovies } from './api/movies';
import { Movies } from './Types/types';

export default async function Home() {
  const data: Movies = await getMovies();
  const movies = data.results;

  const imagePath = 'https://image.tmdb.org/t/p/original';
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {movies.map((movie) => (
          <div key={movie.id} className="flex flex-col justify-end text-center">
            <Link href={`/${movie.id}`}>
              <div className="mb-3">
                <h1>{movie.title}</h1>
                <h3>{movie.release_date}</h3>
              </div>
              <Image
                src={imagePath + movie.poster_path}
                width={600}
                height={600}
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

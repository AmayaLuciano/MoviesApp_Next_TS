'use client';
import { getMovies } from './api/movies';
import Movie from './Movie';

export default async function Home() {
  const data = await getMovies();
  console.log(data);
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {data.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            image={movie.poster_path}
          />
        ))}
      </div>
    </main>
  );
}

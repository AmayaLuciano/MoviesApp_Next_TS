import { getMovies } from './api/movies';
import Movie from './Movie';
import { Movies } from './Types/types';

export default async function Home() {
  const data: Movies = await getMovies();
  const movies = data.results;
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {movies.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </main>
  );
}

import { getMovies } from './api/movies';
import Movie from './Movie';

export default async function Home() {
  const data = await getMovies();
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {data.results.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}

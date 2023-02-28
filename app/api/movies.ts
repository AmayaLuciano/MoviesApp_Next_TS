import { Movies } from "../Types/types";

export const getMovies = async () : Promise<Movies>  => {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
      );
    
      const res = await data.json();
        return res
}


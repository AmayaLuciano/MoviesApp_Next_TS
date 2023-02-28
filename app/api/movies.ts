import { Movies } from "../Types/types";

export const getMovies = async () : Promise<Movies>  => {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=0323e40e53318e3d94d399ea4461b83e`
      );
    
      const res = await data.json();
      return res
}


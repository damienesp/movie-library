import Card from "./Card";

const MovieList = ({ movies }) => {
  if (movies.results === undefined) {
    return null;
  }
  return (
    <main className="movie-list-wrapper">
      {movies.results.map((movie) => {
        return <Card key={movie.id} {...movie} />;
      })}
    </main>
  );
};

export default MovieList;

const Loading = () => {
  const movieNumber = [...Array(20).keys()];
  return (
    <main className="movie-list-wrapper">
      {movieNumber.map((movie) => {
        return <div className="card-loading"></div>;
      })}
    </main>
  );
};

export default Loading;

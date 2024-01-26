export default function DynamicPage({ params }) {
  console.log(params.movieId);
  return <div>Phim Có Id là : {params.movieId}</div>;
}

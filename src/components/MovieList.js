import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    return (
            <div className="px-12">
                <h1 className="text-3xl py-4 text-white"> {title} </h1>
                <div className="flex overflow-x-scroll">
                    <div className="flex">
                    {
                        movies?.map((movie) => {
                            return <MovieCard key = {movie.id} movie = {movie}/>
                        })
                    }
                
                    </div>
                </div>
                
            </div>
    )
}

export default MovieList;
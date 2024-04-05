import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CastDetails from './CastDetails'
import CrewDetails from './CrewDetails'
import Ratings_popularities from './Rating_popularities'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
function MovieContent() {
  const { id } = useParams()
  const [MovieDetails, setMovieDetails] = useState([])

  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=32c8b7e1e81a2e62369048e459666a50&language=en-US&append_to_response=credits,videos`
    ).then(function (res) {
      setMovieDetails(res.data)
    }
    )
  }, [id])

  const { title, genres, backdrop_path, videos, credits, popularity, vote_average, revenue } = MovieDetails;
  return (
    <>
      <h1 className='text-white flex items-center justify-center py-4 font-bold text-4xl hover:scale-110  cursor-pointer '>{title}</h1>
      <div className="flex justify-center mb-4">
        {revenue && <Ratings_popularities rating={vote_average.toFixed(1)} popularity={popularity.toFixed(2)} revenues={revenue / 1000000} />}
      </div>
      <div
        class="flex flex-row items-center justify-center mt-7 bg-black/10 bg-blend-multiply rounded-3xl h-[60rem]  overflow-hidden bg-cover bg-center pl-5 pt-4 pb-6 text-white "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        }}
      ></div>
      <div class="bg-gradient-to-r from-black/30 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-2">
        <div class="text-lg text-gray-200 mt-2  pl-5 pr-2"> Genres : 
          {genres &&
            genres.map((genre) => <Link className="mr-3"> {genre.name},</Link>)}
        </div>
        <div class=" text-white mt-4 flex space-x-3 items-center pl-5 gap-5"> Watch Trailer
          {videos && (
            <Link
              to={`https://www.youtube.com/watch?v=${videos.results[0].key}`}
              class="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs inline-block"
            >
              Watch
            </Link>
          )}
        </div>
      </div>

      <div className="text-2xl font-bold text-center m-5">
        <h2>Cast</h2>
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {credits && credits.cast.slice(0, 8).map((cast) => <CastDetails imageURL={cast.profile_path} name={cast.name} Charecter={cast.character} />)}
        </div>
      </div>



      <div className="text-2xl font-bold text-center m-5">
        <h2>Crew</h2>
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {credits && credits.crew.slice(0, 8).map((crew) => <CrewDetails imageURL={crew.profile_path} name={crew.name} department={crew.known_for_department} />)}
        </div>
      </div>
    </>
  )
}

export default MovieContent
import { useContext, useEffect, useState } from "react"
import genreids from "../utility/genre"
import { MovieContext } from "./MovieContext"

function Watchlist() {
  const {watchlist,setWatchlist,handleDeleteWatchlist} = useContext(MovieContext)

  const [search, setSearch] = useState("")
  const [genreList, setgenreList] = useState(['All Genres'])
  const [currGenre, setCurrGenre] = useState('All Genres')

  const handlesearch = (e) => {
    setSearch(e.target.value)
    console.log(search)

  }
  const handleFilter = (genre) => {
    setCurrGenre(genre)
  }

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setgenreList(["All Genres", ...temp])
  }, [watchlist])
  //rating change
  const handleAscendingRating = () => {
    let sortedAscending = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average;
    });
    setWatchlist([...sortedAscending]);

  }
  const handleDecendingRating = () => {
    let sortedDecending = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average;;
    });
    setWatchlist([...sortedDecending])
  }
  
  //popularity change
  const handleAscendingPopularity = () => {
    let sortedAscending = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjA.popularity - movieObjB.popularity;
    });
    setWatchlist([...sortedAscending]);

  }
  const handleDecendingPopularity = () => {
    let sortedDecending = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjB.popularity - movieObjA.popularity;
    });
    setWatchlist([...sortedDecending])
  }
  return (
    <div className="space-y-7">
      {/* Genre list filtering */}
      <div className="flex justify-center m-4 text-white">
        {genreList.map((genre) => {
          return <div onClick={() => handleFilter(genre)} className={currGenre === genre ? "  mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[7rem] boder rounded-xl "
            : "  mx-4 flex justify-center items-center bg-gray-400/50 h-[3rem] w-[7rem] boder rounded-xlv"}>{genre}</div>
        })}

      </div>


      {/* SearchField */}
      <div className="flex justify-end my-3 mx-4">
        <input placeholder="Search Movies"
          type="text"
          className="bg-gray-300 box-border w-1/5 px-4 border-hidden"
          onChange={handlesearch}
          value={search}
        />
      </div>
      {/* Watchlist-table */}
      <div>
        <table className="text-white w-full text-center">
          <thead className="border border-slate-200 rounded-lg">
            <tr>
              <th >Name</th>
              <th>
                <i
                  onClick={handleAscendingRating}
                  class="fa-solid fa-arrow-up">
                </i>
                {" "}Rating{" "}
                <i
                  onClick={handleDecendingRating}
                  class="fa-solid fa-arrow-down">
                </i>
              </th>
              <th>
                <i
                  onClick={handleAscendingPopularity}
                  class="fa-solid fa-arrow-up">
                </i>
                {" "}Popularity{" "}
                <i
                  onClick={handleDecendingPopularity}
                  class="fa-solid fa-arrow-down">
                </i>
              </th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj) => {
              if (currGenre === 'All Genres') {
                return true
              }
              else {
                return genreids[movieObj.genre_ids[0]] === currGenre
              }
            }).filter((movieObj) => (
              movieObj.title.toLowerCase().includes(search.toLowerCase())
            )).map((movieObj) => (
              <tr className="border-b-2">
                <td className="flex items-center px-5 py-5 space-x-10" >
                  <img className=" h-[10rem] w-[20rem]  " src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} />
                  <span>{movieObj.title}</span>
                </td>
                <td >{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genreids[movieObj.genre_ids[0]]}</td>
                <td onClick={()=>handleDeleteWatchlist(movieObj)} className=" text-red-700 cursor-pointer" >Delete</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Watchlist
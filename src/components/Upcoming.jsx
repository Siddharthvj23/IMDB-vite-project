import { useEffect, useState } from "react"
import MovieCard from "./MovieCard";
import axios from 'axios'
import Pagination from "./Pagination";

function Upcoming() {
    const [upcoming, setupcoming] = useState([])
    const [pageNo,setPageno] = useState(1)
    
    const handleNext=()=>{
        setPageno(pageNo+1)
    }
    const handlePrevious=()=>{
        if(pageNo===1){
            setPageno(pageNo)
        }
        setPageno(pageNo-1)
    }

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=32c8b7e1e81a2e62369048e459666a50&language=en-US&page=${pageNo}`
            )
            .then(function (res) {
                setupcoming(res.data.results)
            });

    }, [pageNo]);
    return (
        <div>
            

            <div className="flex justify-evenly flex-wrap gap-8">
                {upcoming.map((movieObj)=>{
                    return <MovieCard key={movieObj.id} name={movieObj.title} posterPath={movieObj.poster_path} moviesObject={movieObj} />
                })}
            </div>
            <Pagination nextPageFn={handleNext} previosuPageFn={handlePrevious} pageNumber={pageNo}/>
        </div>
    )
}


export default Upcoming
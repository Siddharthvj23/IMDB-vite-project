import { useEffect, useState } from "react"
import axios from 'axios'
function Banner() {
    const [popularBackdrops,setPopularBackdrops]=useState([])
    
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=32c8b7e1e81a2e62369048e459666a50&language=en-US&page=1').then((res)=>{
           const  Backdrops = res.data.results.map((moiveObj)=>{ return moiveObj.backdrop_path
            
           })
           setPopularBackdrops(Backdrops)
        })

    },[])
    const [index,setindex] = useState(0)
    function next(){
        setindex(index+1)
    }
    return (
        <div  className=" lg:h-[80vh] bg-cover bg-center m-5"
        style={{
            backgroundImage:
              `url(https://image.tmdb.org/t/p/original/${popularBackdrops[index]})`,
          }}>
            <button onClick={next}>Next11</button>
        </div>
    )
}

export default Banner

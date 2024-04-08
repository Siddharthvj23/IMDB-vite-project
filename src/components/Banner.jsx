import { useCallback, useEffect, useState } from "react"
import axios from 'axios'
function Banner() {
    const [popularBackdrops, setPopularBackdrops] = useState([])


    const [index, setindex] = useState(0)

    const next = useCallback(() => {
        setindex((prevIndex) => {
            const onlastitem = prevIndex === popularBackdrops.length - 1
            if (onlastitem) {
                return 0
            } else {
                return prevIndex + 1
            }
        })
    }, [popularBackdrops.length])


    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=32c8b7e1e81a2e62369048e459666a50&language=en-US&page=1').then((res) => {
            const Backdrops = res.data.results.map((moiveObj) => {
                return moiveObj.backdrop_path

            })

            setPopularBackdrops(Backdrops)
        })

    }, [])

    useEffect(() => {
        const intervalid = setInterval(() => {
            next()
        }, 5000);

        return () => {
            clearInterval(intervalid)
        }
    }, [next])

    return (
        <div className=" h-[20vh]  lg:h-[100vh]  bg-cover bg-center  my-5"
            style={{
                backgroundImage:
                    `url(https://image.tmdb.org/t/p/original/${popularBackdrops[index]})`,
            }}>

        </div>
    )
}

export default Banner

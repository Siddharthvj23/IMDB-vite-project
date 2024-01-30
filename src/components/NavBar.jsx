
import MoiveLogo from '../assets/images/MovieLogo.png'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>

            <div className='flex space-x-8'>
                
                <div className='bg-gray-600'>
                    <img className='w-[60px]' src={MoiveLogo} /></div>

                <div className='text-white text-lg flex  space-x-8 justify-end  items-center'>
                    <Link to='/'>Movies</Link>
                    <Link to='/Top-Rated'>Top-Rated</Link>
                    <Link to='/Upcoming-Movies'>Upcoming-Movies</Link>
                    <Link to='/Watchlist' >WatchList</Link>

                </div>
                <div className=" flex justify-items-end my-3 ">
                    <input placeholder="Search Movies"
                        type="text"
                        className="bg-gray-300 box-border px-4 border-hidden"
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar

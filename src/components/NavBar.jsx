
import MoiveLogo from '../assets/images/MovieLogo.png'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <div className='flex space-x-8'>
            <div className='bg-gray-600'>
            <img className='w-[60px]' src={MoiveLogo}/></div>
            <Link  to='/'className='text-white text-lg'>Movies</Link>
            <Link  to='/Top-Rated'className='text-white text-lg'>Top-Rated</Link>
            <Link  to='/Upcoming-Movies'className='text-white text-lg'>Upcoming-Movies</Link>
            <Link to='/Watchlist'className='text-white text-lg' >WatchList</Link>
        </div>
    )
}

export default NavBar

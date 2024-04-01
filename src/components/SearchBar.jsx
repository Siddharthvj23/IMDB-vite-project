import React, { useState } from 'react'

function SearchBar() {
    const [SearchBar,setSearchBar] = useState('')

    const handleSearch = (e)=>{
        setSearchBar(e.target.value)
    }
    return (
        <div className=" flex justify-items-end my-3 ">
            <input placeholder="Search Movies"
                type="text"
                className="bg-gray-300 box-border px-4 border-hidden"
                onChange={handleSearch}
                value={SearchBar}
            />
        </div>
    )
}

export default SearchBar
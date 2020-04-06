import React from 'react'
import '../css/SearchInput.scss'
import {FaSearch} from 'react-icons/fa'
function SearchInput() {
    return (
        <div className="search-bar">
            <input type="text"/>
            <div className="search-action">
                <FaSearch className="search-icon"/>
            </div>
            
        </div>
    )
}
export default SearchInput
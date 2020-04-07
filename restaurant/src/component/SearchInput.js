import React from 'react'
import '../css/SearchInput.scss'
import {FaSearch} from 'react-icons/fa'
function SearchInput(props) {

    function searchBox(e){
        let word=e.target.value
        props.onChange(word)
    }

    return (
        <div className="search-bar">
            <input type="text" onChange={e=>searchBox(e)}/>
            <div className="search-action">
                <FaSearch className="search-icon"/>
            </div>
            
        </div>
    )
}
export default SearchInput
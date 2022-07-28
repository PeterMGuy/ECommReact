import React from 'react';
import JSONDATA from '../components/Data.json'
import {useState} from 'react'

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
    <div classname='SearchBar'>
        <input type = 'text' placeholder = 'Searching...' onChange={event => {setSearchTerm(event.target.value)}}/>
        {JSONDATA.filter((val) => {
            if (searchTerm == '') {
                return val
            }
            else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        }).map((val,key) =>{
            return (
                <div classname='user' key={key}>
                    <p>{val.title}</p>
                </div>
            )
        })}
    </div>
    )
}
export default SearchBar
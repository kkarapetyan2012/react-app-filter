import React, { useContext } from 'react';
import {storeContext} from '../../store';
import './Search.css';

const Search = () => {
    const [data,MySearch] = useContext(storeContext);

   

    return (
        <div>
            <input onChange={MySearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </div>
    )
}

export default Search;
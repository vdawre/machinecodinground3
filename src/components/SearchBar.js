import React, { useState } from 'react';
import SearchOutput from './SearchOutput';
import { useGlobalContext } from '../context';


const SearchBar = ({ data }) => {
    const [query, setQuery] = useState('');
    const {value, setValue} = useGlobalContext();

    const filteredUsers = (data) => {
        return data.filter(
            ({id, product_name, ingredients}) => 
            product_name.toLowerCase().includes(query) ||
            ingredients.map((item) => {
                return item.toLowerCase()
            }).includes(query)
        )
    }

    return (
        <div className='search-bar'>
            <input type='text' className='search-bar' placeholder='Search product or ingredient' onChange={(e) => setQuery(e.target.value)} />
            {<SearchOutput data={ query.length === 0 ? value : filteredUsers(value)} />}
        </div>
    )
}

export default SearchBar;
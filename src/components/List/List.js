import React from 'react';
import './List.css';

const List = ({data}) => {
    return (
        <div>
            <h1>{data.title}</h1>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
        </div>
    )
}

export default List;
import React, { useState, createContext } from 'react';

export const storeContext = createContext();

const url = 'https://it-blog-posts.herokuapp.com/api/posts?filter=';

const Obj = {
    
    where:
            {
                title: 
                        {
                            like:"web"
                        }
            }
    
}

const Context = (props) => {
    const [store, setData] = useState();
    const MySearch = (e) => {
        Obj.where.title.like = e.target.value;
        fetch(`${url}`+JSON.stringify(Obj))
            .then(response => response.json())
            .then(data => setData(data))
    }
    return (
        <storeContext.Provider value={[store, MySearch]}>
            {props.children}
        </storeContext.Provider>

    )
}

export default Context;
import React, { useEffect, useState } from 'react';
import SearchStateObject from '../../model/searchState';
import axios from 'axios';

let timeout = 0;

export default function ImageSearchService(searchStateProp) {
    
    const [searchState, setSearchState] = useState(SearchStateObject);

    // useEffect(()=>{
    //     setSearchState(searchState);
    // },[searchStateProp]);

    useEffect(() => {

        //new state after user typed rom the last frame
        //console.log("query", query);

        //call api call after user finishes typing
        if(timeout){
            clearTimeout(timeout);
            console.log("Time out cleared");
        }

        timeout = setTimeout(() => {
            //search

            // console.log("search...", searchState.searchText);

    
            axios.get(`${SearchStateObject.apiURL}/?key=${SearchStateObject.apiKey}&q=${searchState.searchText}&image_type=photo&page=${searchState.page}&safesearch=true`)
            .then((res)=>{
                console.log("searching:", searchState.searchText);

                console.log("axios:", res);

                // setSearchState((previousState)=> {
                //     return {...previousState,
                //     images: res.data.hits}
                // });
                setSearchState({
                    ...searchState,
                    images: searchState.images.concat(res.data.hits)
                });
            }).catch((err)=> console.log(err))

        }, 300);


    }, [searchState]);
    
    return searchState;
}

import { useEffect, useState } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SearchResults from '../search-results/SearchResults';

import ImageSearchService from '../service/ImageSearchService';
import SearchStateObject from '../../model/searchState';

import axios from 'axios';


let timeout = 0;

const SearchBar = () => {
    
    const [searchState, setSearchState] = useState(SearchStateObject);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    // const [searchText, setsearchText] = useState(SearchStateObject.searchText);
    // const [searchPage, setsearchPage] = useState(SearchStateObject.page);
    let searchText = searchState.searchText;
    let searchPage = searchState.page;


    // const onAmountChange = (e, index, value) => {
    //     setSearchState({
    //         ...searchState,
    //         amount: value
    //     });
    // }

    //let returnedSearchState = ImageSearchService(searchState);
    //calling api
    // useEffect(()=>{
    //     setSearchState({...searchState, images:[] })
    // }, searchState)
    useEffect(() => {
        setSearchState({
            ...searchState,
            images: []
        });
    },[searchText])

    useEffect(() => {

        //new state after user typed rom the last frame

        //call api call after user finishes typing
        if(timeout){
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            //search

            //SetLoading
            setLoading(true);

            // console.log("search...", searchState.searchText);
            if(searchState.searchText){
                axios.get(`${SearchStateObject.apiURL}/?key=${SearchStateObject.apiKey}&q=${searchState.searchText}&image_type=photo&page=${searchState.page}&safesearch=true`)
                .then((res)=>{
                    console.log("searching:", searchState.searchText);
    
                    console.log("axios:", res);
    
                    // setSearchState((previousState)=> {
                    //     return {...previousState,
                    //     images: res.data.hits}
                    // });
                    // setSearchState({
                    //     ...searchState,
                    //     images: [...searchState.images, ...res.data.hits]
                    // });
    
                    setSearchState({
                        ...searchState,
                        images: [...searchState.images, ...res.data.hits]
                    });

                    //Finished loading
                    setLoading(false);
    
                    //setsearchText(searchState.searchText);
 

                }).catch((err)=> console.log(err))

            }

        }, 300);


    }, [searchText, searchPage]);


    const handleSearchTerm = (e) => {

        setSearchState({
            ...searchState,
            [e.target.name]: e.target.value
        });

    }


    return (
        <div>
            {/* {console.log(searchState.images)} */}
            <TextField 
                name="searchText"
                value={searchState.searchText}
                onChange= {handleSearchTerm}
                floatingLabelText="Search Your Images"
                fullWidth={true}
            />

            <br/>

            {/* <SelectField name="amount" floatingLabelText="Amount" value={searchState.amount} onChange={onAmountChange}>
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={15} primaryText="30" />
                <MenuItem value={50} primaryText="50" />
            </SelectField> */}

            <br/>

            { searchState.images.length > 0 ? <SearchResults setSearchState={setSearchState} searchState={searchState} loading={loading}/> : null }

        </div>
    )
}

export default SearchBar;

import { useEffect, useState } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SearchResults from '../search-results/SearchResults';
import SearchStateObject from '../../model/searchState';
import axios from 'axios';


// let timeout = 0;

const SearchBar = () => {
    
    //Variable Declarations
    const [searchState, setSearchState] = useState(SearchStateObject);
    const [loading, setLoading] = useState(false);

    let searchText = searchState.searchText;
    let searchPage = searchState.page;
    let searchOrder = searchState.order;
    let searchColor = searchState.color;

    useEffect(() => {
        setSearchState({
            ...searchState,
            images: []
        });
    },[searchText])

    useEffect(() => {
        //new state after user typed rom the last frame

        //call api call after user finishes typing
        // console.log("timeout",timeout);
        // if(timeout){
        //     clearTimeout(timeout);
        // }

        // timeout = setTimeout(() => {
        //     //search
        //     console.log("searchText Changed to",searchState.searchText);

        //     //SetLoading


        // }, 200);

        let cancel;
        setLoading(true);

        // alternatively, you can use cancel token to mimic the infinite scroll
        
        axios({
            method: 'GET',
            url:`
            ${SearchStateObject.apiURL}/?key=${SearchStateObject.apiKey}&q=${searchState.searchText}&image_type=photo&page=${searchState.page}&order=${searchState.order}&colors=${searchState.color}&safesearch=true`,
            cancelToken: new axios.CancelToken(c => cancel = c),
        })
        .then((res)=>{

            setSearchState({
                ...searchState,
                images: [...searchState.images, ...res.data.hits]
            });

            //Finished loading
            setLoading(false); 

        }).catch((err)=> console.log(err))

        //}

        return ()=>{
            return cancel();
        }

    }, [searchText, searchPage, searchOrder, searchColor]);


    const onSearchTerm = (e) => {
        console.log(e.target.value);
        setSearchState({
            ...searchState,
           searchText : e.target.value
        });
    }

    const onColorChange = (e, index, value) => {
        //Check if search Color is changed, if it is, then reset the current color to "" 
        setSearchState({
            ...searchState,
            images:[],
            color: value == "default"? "": value
        });
    }

    const onOrderChange = (e, index, value) => {
        //Check if searchOrder is changed, if it is replace the current images
        setSearchState({
            ...searchState,
            images:[],
            order: value
        });
    }


    return (
        <div id="Search-bar-container">
            <TextField 
                name="searchText"
                value={searchState.searchText}
                onChange= {onSearchTerm}
                floatingLabelText="Search Your Images"
                fullWidth={true}
            />

            <br/>

            <SelectField name="color" floatingLabelText="Color" value={searchState.color} onChange={onColorChange}>
                <MenuItem value={"default"} primaryText="Default" />
                <MenuItem value={"red"} primaryText="Red" />
                <MenuItem value={"orange"} primaryText="Orange" />
                <MenuItem value={"yellow"} primaryText="Yellow" />
                <MenuItem value={"green"} primaryText="Green" />
                <MenuItem value={"blue"} primaryText="Blue" />
            </SelectField>

            <SelectField name="order" floatingLabelText="Order" value={searchState.order} onChange={onOrderChange}>
                <MenuItem value={"popular"} primaryText="Popular" />
                <MenuItem value={"latest"} primaryText="Latest" />
            </SelectField>

            <br/>


            { searchState.images.length > 0 ? <SearchResults setSearchState={setSearchState} searchState={searchState} loading={loading}/> : null }

        </div>
    )
}

export default SearchBar;

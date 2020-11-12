import React, { useRef, useCallback } from 'react';
import PropType from 'prop-types';
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import ThumbsUp from 'material-ui/svg-icons/action/thumb-up';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const SearchResults = ({setSearchState, searchState, loading }) => {

    let imageListContent;
    let pageNumber = searchState.page;

    const observer = useRef();
    const lastImageElementRef = useCallback((node)=>{
        console.log("last element",node);
        console.log(loading);

        //check loading and stop
        if(loading) return;

        if(observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver( entries => {
            console.log("Observing");
            if(entries[0].isIntersecting){
                console.log(" Visible!!!!!");
                setSearchState(previousSearchState => {return {...previousSearchState, page: previousSearchState.page+1} });
            }

        }) ;
        
        if(node)
            observer.current.observe(node);
    },[ loading]);


    const handleLike = ()=>{
        alert("Thank you for upvoting the image!");
        //You can do more thing like updating states and calling api call to update the number of likes
        //...
    }

    if(searchState.images){
        imageListContent = (
            <GridList col={3}>
                {
                    searchState.images.map( (img, index) => {

                        if ( searchState.images.length === index+1){
                            return (
                                <GridTile title={img.tags} key={img.id} subtitle={<span ref={lastImageElementRef} > by {img.user} - {img.views} views - {img.likes} likes</span>} actionIcon={<IconButton onClick={handleLike}><ThumbsUp color="white"/></IconButton>} >
                                    <img src={img.largeImageURL} alt=""/>
                                </GridTile>
                            )
                        }else{
                            return (<GridTile title={img.tags} key={img.id} subtitle={<span> by {img.user} - {img.views} views - {img.likes} likes</span>} actionIcon={<IconButton onClick={handleLike}><ThumbsUp color="white"/></IconButton>} >

                                <img src={img.largeImageURL} alt=""/>
    
                            </GridTile>)
                        }    


                     } )}
            </GridList>    
        )
    }else{
        imageListContent = null
    }

    return (
        <div>
            Images Results
            {imageListContent}
        </div>
    )
}

// SearchResults.propTypes = {
//     images: PropType.array.isRequired
// }

export default SearchResults;



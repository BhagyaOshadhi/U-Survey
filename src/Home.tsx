import React from 'react';
import {IAction, IEpisode, IEpisodeProps} from "./interfaces";
import {Store} from "./Store";

const EpisodeList = React.lazy<any>(()=>import('./EpisodesList'))
export default function Home(){
    const {state,dispatch} = React.useContext(Store)
    React.useEffect(()=>{
        state.episodes.length === 0 && fetchDataAction()
    })
    const fetchDataAction = async () => {
        const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
        const data = await fetch(URL)
        if(data.status === 200 ){
            const dataJSON = await data.json();
            return dispatch ({
                type:'FETCH_DATA',
                payload:dataJSON._embedded.episodes
            })
        }else{
            console.log(data.status)
        }

    }
    const toggleFavAction = (episode:IEpisode):IAction =>{
        const episodeInFav = state.favourites.includes(episode)
        let dispatchObj={
            type:'ADD_FAV',
            payload:episode
        }
        if(episodeInFav){
            const favWithoutEpisodes = state.favourites.filter((fav:IEpisode) =>fav.id != episode.id)
            dispatchObj = {
                type:'REMOVE_FAV',
                payload:favWithoutEpisodes
            }
        }

        return dispatch(dispatchObj)
    }

    const props:IEpisodeProps = {
        episodes:state.episodes,
        toggleFavAction:toggleFavAction,
        favourites:state.favourites
    }
    return(
        <React.Fragment>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <section className="episode-layout">
                        <EpisodeList {...props}/>
                    </section>
                </React.Suspense>
        </React.Fragment>
    )
}
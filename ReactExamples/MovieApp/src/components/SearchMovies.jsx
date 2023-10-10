import { useState } from "react";
import MovieCard from "./MovieCard";
import ActionAreaCard from "./MaterialCard";
import { Grid } from "@mui/material";

export default function SearchMovie(){

    const [movieName,setMovieName] = useState("");
    const [movies,setMovies] = useState([]);

    function fetchMovies(event){
        event.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?&api_key=24d1042ae5621a567de03462da33bd83&query=${movieName}&include_adult=false&language=en-US&page=1`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setMovies(data.results));
    }

    function handleInput(event){
        // console.log(event.target.value);
        setMovieName(event.target.value);
    }

    return(
        <>
        <form className="form" onSubmit={fetchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" 
                    placeholder="Enter movie name" value={movieName} onChange={(handleInput)}/>
            <button className="button" type="submit">Search</button>
        </form>
        <Grid container columnGap={4}>
            {movies.map(movie => 
                <ActionAreaCard data = {movie} />
                )}
        </Grid>
        </>
    )
}
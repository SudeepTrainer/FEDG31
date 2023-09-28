import { useEffect, useState } from "react"

export default function APITest(){
    let [starWarsData,setStarWarsData] = useState();
    let [count,setCount] = useState(0);

    function fetchData(){
        fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => {
            console.log("fetchdata called");
            return setStarWarsData(data) 
        })
    }

    useEffect(fetchData,[count]);
    console.log("Component rendered");

    function changeCount(){
        setCount(count=>count + 1)
    }

    return(
        <>
            <pre>{JSON.stringify(starWarsData,null,2)}</pre>    
            <button onClick={changeCount}>{count}</button>
        </>
    )
}


import "./style.css"
export default function MovieCard(props){
    const movie = props.data;
    return(
        <div className="card" key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}/>
        </div>
    )
}
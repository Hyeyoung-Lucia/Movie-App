import { useEffect , useState} from "react";
import { useParams } from "react-router-dom" 

export default function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    // const [movies, setMovies]= useState([])
    const getMovie = async()=>{
      const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)).json()
      console.log(json);
      setLoading(false)
    }
    useEffect(()=>{getMovie()},[])  // eslint-disable-line react-hooks/exhaustive-deps

    return (
    <div>
        {loading ? <h1>Loading...</h1> : <h1>Detail</h1>}
    </div>
    )
}

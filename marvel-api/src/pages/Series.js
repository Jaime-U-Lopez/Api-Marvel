import BestCharacters from "../components/BestCharacters";
import useFetch from "../components/Api_Hook/UseFetch";
import ListSeries from "../components/ListSeries/ListSeries";


export default function Series (props){

    
    const LastSeriesFetch=useFetch(    
        `${process.env.REACT_APP_API_URL_BASE2}/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=title&limit=5`,
       //'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b4dd4282e1b25f7c72aa3cba77ab4ce4&hash=4232dd5bcab38413ba6d13fd93d1ec65&orderBy=title&limit=5'  
     )
    

return(<div>

            <BestCharacters/>
           <ListSeries  LastSeriesFetch={LastSeriesFetch}/>
        <p>estamos desde series</p>
    </div>)
};

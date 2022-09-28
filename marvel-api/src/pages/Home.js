
import BestCharacters from "../components/BestCharacters";
import ListLastEvents from "../components/ListLastEvents";
import ListSeries from "../components/ListSeries/ListSeries";
import { useEffect } from "react";
import useFetch from "../components/Api_Hook/UseFetch";

export default function Home(props) {
    

    return(
        
        <div>
            <BestCharacters/>
            <ListLastEvents/>
          
        </div>
    )
};

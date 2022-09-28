import { Card, Header } from "semantic-ui-react";
import Containers from "../Containers";
import useFetch from "../Api_Hook/UseFetch";
import "./ListLastSeries.scss";

import ListSeries from "../ListSeries/ListSeries";

export default function ListLastSeries(params) {
  const LastSeriesFetch = useFetch(
    `${process.env.REACT_APP_API_URL_BASE2}/series?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=title&limit=50`
    //'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b4dd4282e1b25f7c72aa3cba77ab4ce4&hash=4232dd5bcab38413ba6d13fd93d1ec65&orderBy=title&limit=5'
  );

  return (
    <div className="container-list-last-events">
      <Header size="large" className="Header_Style">
        Series de Marvel
      </Header>
      <Containers bg="light">
        <Card.Group itemsPerRow={4}>
          <ListSeries LastSeriesFetch={LastSeriesFetch} />
        </Card.Group>
      </Containers>
    </div>
  );
}

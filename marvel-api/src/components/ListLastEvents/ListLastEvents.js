import { useState } from "react";
import { Card, Header } from "semantic-ui-react";
import Containers from "../Containers";
import useFetch from "../Api_Hook/UseFetch";
import "./ListLastEvents.scss";
import LastEvents from "../LastEvent/LastEvents";
import ListSeries from "../ListSeries/ListSeries";

export default function ListLastEvents(params) {
  //realizar el llamado a la informacion de la api de marvel
  const LastEventsFetch = useFetch(
   // `${process.env.REACT_APP_API_URL_BASE2}/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=title&limit=5`
    //'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b4dd4282e1b25f7c72aa3cba77ab4ce4&hash=4232dd5bcab38413ba6d13fd93d1ec65&orderBy=title&limit=5'
    'http://gateway.marvel.com/v1/public/events?ts=1&apikey=b4dd4282e1b25f7c72aa3cba77ab4ce4&hash=4232dd5bcab38413ba6d13fd93d1ec65&limit=10'


    );

  

  console.log(LastEventsFetch);

  const LastSeriesFetch = useFetch(
    `${process.env.REACT_APP_API_URL_BASE2}/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=title&limit=5`
    //'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b4dd4282e1b25f7c72aa3cba77ab4ce4&hash=4232dd5bcab38413ba6d13fd93d1ec65&orderBy=title&limit=5'
  );

  return (
    <div className="container-list-last-events">
      <Header className="Header_Style" size="large">últimos eventos</Header>
      <Containers bg="light">
        <Card.Group itemsPerRow={5}>
          <LastEvents LastEventsFetch={LastEventsFetch} />
        </Card.Group>
      </Containers>
    </div>
  );
}

import { useState } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import useFetch from "../components/Api_Hook/UseFetch";
import Containers from "../components/Containers";
import ListComic from "../components/ListComic";

import slideComic from "../img/slide-comics.jpeg";

export default function Comics(props) {
  const [renderComics, setRenderComics] = useState(10);


  const listComics = useFetch(
    `${process.env.REACT_APP_API_URL_BASE2}/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=title&limit=${renderComics}`
    //'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b4dd4282e1b25f7c72aa3cba77ab4ce4&hash=4232dd5bcab38413ba6d13fd93d1ec65&orderBy=title&limit=5'
  );


    console.log(listComics)

  return (
    <div className="comics-page">
      <div id="slide-comics-image" />
      <Image size="big" src={slideComic} alt="image" />
      <Grid>
        <Grid.Column>
          <Containers>
            <Header as="h2">los mejores Cómics</Header>
            <ListComic   listComics={listComics}/>
          </Containers>
        </Grid.Column>
      </Grid>
    </div>
  );
}

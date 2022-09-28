

import "./ListComic.scss";
import {Card,Image,Button,Icon,Dimmer,Loader} from 'semantic-ui-react'

export default function ListComic({listComics}) {

    const { loading, result } = listComics;

    if (loading || !result) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading...</Loader>
        </Dimmer>
      );
    }
  
    const { results } = result.data;
return results.map((rest, index) => (
 
    <Card key={index} className="list-Comics">
      <Image
        src={`${rest.thumbnail.path}.${rest.thumbnail.extension}`}
        wrapped
        ui={false}
        alt={rest.title}
      />
      <Card.Content>
      <Card.Header className="title">{rest.title} </Card.Header>
   

       

        <Card.Description> {rest.description}</Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Button
          animated
          fluid
          as="a"
          href={rest.urls[0].url}
          target="_blank"
          color="black"
        >
          <Button.Content visible> Mas informacion</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>

));


};
